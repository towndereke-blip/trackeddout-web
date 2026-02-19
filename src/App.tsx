import React from 'react';
import './index.css';
import { Layout } from './components/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/project/:id' element={<Project />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;