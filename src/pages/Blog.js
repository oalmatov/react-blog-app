import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase-config';

function Blog() {
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, 'posts');

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostList(
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
            );
        };

        getPosts();
    });

    return (
        /*<div className="container flex justify-end mx-auto my-5 w-[600px]">
            {' '}
            {postLists.map((post) => {
                return (
                    <div className="bg-slate-100 rounded-lg p-4 shadow-2xl font-mono mx-auto">
                        <div className="text-xl font-bold mb-3">{post.title}</div>
                        <div mb-3>{post.postText}</div>
                        <div className="text-right font-bold">
                            @{post.author.name}
                        </div>
                    </div>
                );
            })}
        </div>*/
        <>
            <div className="container flex justify-center mx-auto my-5 w-[600px]">
                <div className="bg-slate-100 rounded-lg p-4 shadow-2xl font-mono mx-auto">
                    <div className="text-xl font-bold mb-3">Sample Title</div>
                    <div className="mb-3">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </div>
                    <div className="text-right font-bold">@Omar Almatov</div>
                </div>
            </div>
            <div className="container flex justify-center mx-auto my-5 w-[600px]">
                <div className="bg-slate-100 rounded-lg p-4 shadow-2xl font-mono mx-auto">
                    <div className="text-xl font-bold mb-3">Sample Title</div>
                    <div className="mb-3">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </div>
                    <div className="text-right font-bold">@Omar Almatov</div>
                </div>
            </div>
            <div className="container flex justify-center mx-auto my-5 w-[600px]">
                <div className="bg-slate-100 rounded-lg p-4 shadow-2xl font-mono mx-auto">
                    <div className="text-xl font-bold mb-3">Sample Title</div>
                    <div className="mb-3">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </div>
                    <div className="text-right font-bold">@Omar Almatov</div>
                </div>
            </div>
        </>
    );
}

export default Blog;
