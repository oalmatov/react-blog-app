import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase-config';

function Home() {
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
        <div className="grid place-items-center h-screen">
            {' '}
            {postLists.map((post) => {
                return (
                    <div className="bg-slate-100 rounded-lg p-4 shadow-md m-2 w-2/3 font-mono h-3/4">
                        <div className="text-xl font-bold">{post.title}</div>
                        <div>{post.postText}</div>
                        <div className="text-right font-bold">
                            @{post.author.name}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Home;
