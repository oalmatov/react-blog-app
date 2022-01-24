import React, { useEffect, useState } from 'react';
import {
    getDocs,
    collection,
    query,
    orderBy,
    startAfter,
    limit,
    deleteDoc,
    doc,
} from 'firebase/firestore';
import { db, auth } from '../firebase-config';

const POSTS_PER_LOAD = 3;

function Blog({ isAuth }) {
    const [postLists, setPostList] = useState([]);
    const [lastVisisblePost, setLastVisisblePost] = useState();
    const postsCollectionRef = collection(db, 'posts');

    // load next 3 posts
    const loadPosts = async () => {
        let next;
        if (lastVisisblePost) {
            next = query(
                postsCollectionRef,
                orderBy('timestamp', 'desc'),
                startAfter(lastVisisblePost),
                limit(POSTS_PER_LOAD),
            );
        } else {
            next = query(
                postsCollectionRef,
                orderBy('timestamp', 'desc'),
                limit(POSTS_PER_LOAD),
            );
        }
        const data = await getDocs(next);
        setPostList(
            postLists.concat(
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
            ),
        );
        setLastVisisblePost(data.docs[data.docs.length - 1]);
    };

    const deletePost = async (id) => {
        const postDoc = doc(db, 'posts', id);
        const indexOfDoc = postLists.indexOf(postDoc);

        if (indexOfDoc !== -1) {
            postLists.splice(indexOfDoc, 1);
        }

        await deleteDoc(postDoc);
    };

    // load initial three posts
    useEffect(() => {
        if (postLists.length === 0) {
            loadPosts();
        }
    }, []);

    return (
        <div className="container justify-center mx-auto my-5 w-[600px]">
            {' '}
            {postLists.map((post) => {
                return (
                    <div className="bg-slate-100 rounded-lg p-4 shadow-2xl font-mono mx-auto my-5">
                        <div className="flex justify-between">
                            <div className="text-xl font-bold mb-3 p-3">
                                {post.title}
                            </div>
                            <div>
                                {isAuth &&
                                    post.author.id === auth.currentUser.uid && (
                                        <button
                                            onClick={() => {
                                                deletePost(post.id);
                                            }}
                                            className="bg-red-500 text-white shadow-md hover:bg-red-400 p-3 rounded-3xl"
                                        >
                                            Delete
                                        </button>
                                    )}
                            </div>
                        </div>
                        <div>{post.postText}</div>
                        <div className="text-right font-bold">
                            @{post.author.name}
                        </div>
                    </div>
                );
            })}
            <div className="flex justify-center items-center">
                {postLists.length !== 0 ? (
                    <button
                        onClick={loadPosts}
                        className="bg-lime-500 hover:bg-lime-400 p-3 shadow-md rounded-3xl text-white"
                    >
                        Load more...
                    </button>
                ) : (
                    <div>No posts yet</div>
                )}
            </div>
        </div>
    );
}

export default Blog;
