import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import MyProjects from './components/myProjects';
import Nav from './components/navigation';
import WorkExperience from './components/workExperience';

const App = () => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<WorkExperience/>} />
                <Route path="/projects" element={<MyProjects />} />
            </Routes>
        </Router>
    );
};

export default App;
