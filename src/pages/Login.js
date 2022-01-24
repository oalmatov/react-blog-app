import React from 'react';
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuth }) {
    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem('isAuth', true);
            setIsAuth(true);
            navigate('/');
        });
    };

    return (
        <div className="container flex justify-center mx-auto my-20 w-[300px]">
            <div className="text-center hover:bg-slate-300 bg-slate-200 rounded-lg p-4 shadow-2xl font-mono mx-auto w-full">
                <button onClick={signInWithGoogle}>Sign in with Google</button>
            </div>
        </div>
    );
}

export default Login;
