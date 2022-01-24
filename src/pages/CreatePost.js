import React, { useState, useEffect } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import TagInput from './TagInput';

function CreatePost({ isAuth }) {
    const [title, setTitle] = useState('');
    const [postText, setPostText] = useState('');
    const [tags, setTags] = useState([]);

    const postsCollectionRef = collection(db, 'posts');
    let navigate = useNavigate();

    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title,
            postText,
            tags,
            author: {
                name: auth.currentUser.displayName,
                id: auth.currentUser.uid,
            },
            timestamp: serverTimestamp(),
        });
        navigate('/');
    };

    useEffect(() => {
        if (!isAuth) {
            navigate('/login');
        }
    });

    return (
        <div className="container flex justify-center mx-auto my-20">
            <div className="bg-slate-100 rounded-lg p-4 shadow-2xl font-mono mx-auto">
                <h1 className="font-bold text-2xl  text-slate-600 text-center p-1">
                    Create A Post
                </h1>
                <input
                    className="w-full rounded-md p-1 mt-2 mb-2 shadow-md focus:outline-none"
                    placeholder="Title..."
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />
                <textarea
                    className="w-full rounded-md p-1 mt-2 mb-2 shadow-md focus:outline-none"
                    placeholder="Post..."
                    rows="5"
                    maxLength={240}
                    onChange={(event) => {
                        setPostText(event.target.value);
                    }}
                />
                <TagInput setTags={setTags} />
                <button
                    className="text-white shadow-sm  bg-emerald-400 hover:shadow-md p-2 w-full rounded-3xl"
                    onClick={createPost}
                >
                    Submit Post
                </button>
            </div>
        </div>
    );
}

export default CreatePost;
