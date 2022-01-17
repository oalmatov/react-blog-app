import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import { useState } from 'react';

function App() {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <Router>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/login'}>Login</Link>
                <Link to={'/createpost'}>CreatePost</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/login"
                    element={<Login setIsAuth={setIsAuth} />}
                />
                <Route path="/createpost" element={<CreatePost />} />
            </Routes>
        </Router>
    );
}

export default App;
