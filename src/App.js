import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import MyProjects from './components/myProjects';
import Nav from './components/navigation';

const App = () => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<MyProjects />} />
                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;
