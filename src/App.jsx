import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
                <Navbar />
                <main>
                    <Hero />
                    <About />
                    <Experience />
                    <Projects />
                    <Blog />
                    <Contact />
                </main>

                <footer className="py-8 bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-800 text-center">
                    <p className="text-gray-600 dark:text-gray-400">
                        © {new Date().getFullYear()} Emmanuel MJ. All rights reserved.
                    </p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
