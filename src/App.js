import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './pages/Blog';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';

function App() {
    const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            window.location.pathname = '/login';
        });
    };

    return (
        <Router>
            <nav className="container flex justify-between mx-auto py-6 text-lg bg-gray-100 font-mono text-sky-900 w-[600px]">
                <div className="flex items-center text-emphasis">
                    <Link
                        className="hover:bg-slate-200 p-3 rounded-2xl"
                        to={'/'}
                    >
                        Feed
                    </Link>
                </div>
                <div className="space-x-4">
                    {!isAuth ? (
                        <Link
                            className="bg-blue-500 text-white shadow-md hover:bg-blue-400 p-3 rounded-3xl"
                            to={'/login'}
                        >
                            Login
                        </Link>
                    ) : (
                        <>
                            <Link
                                className="bg-lime-500 hover:bg-lime-400 p-3 shadow-md rounded-3xl text-white"
                                to={'/createpost'}
                            >
                                Create Post
                            </Link>
                            <button
                                className="bg-red-500 text-white shadow-md hover:bg-red-400 p-3 rounded-3xl"
                                onClick={signUserOut}
                            >
                                Log Out
                            </button>
                        </>
                    )}
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Blog />} />
                <Route path="/blog" element={<Blog />} />
                <Route
                    path="/login"
                    element={<Login setIsAuth={setIsAuth} />}
                />
                <Route
                    path="/createpost"
                    element={<CreatePost isAuth={isAuth} />}
                />
            </Routes>
        </Router>
    );
}

export default App;
