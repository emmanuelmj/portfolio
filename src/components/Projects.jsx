import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Plant Disease Detection',
            description: 'CNN-based model for detecting plant diseases. Winner at IIT-H Hackathon.',
            tags: ['Python', 'TensorFlow', 'CNN'],
            links: { github: '#', demo: '#' }
        },
        {
            title: 'Auth Library - GCETOSF',
            description: 'Custom authentication library featuring secure OTP verification.',
            tags: ['Node.js', 'Security', 'Auth'],
            links: { github: '#', demo: '#' }
        },
        {
            title: 'Sentiment Analysis Models',
            description: 'NLP models for analyzing text sentiment and feedback classification.',
            tags: ['Python', 'NLP', 'Scikit-learn'],
            links: { github: '#', demo: '#' }
        },
        {
            title: 'Python Automation Tools',
            description: 'Collection of CLI utilities for automating daily developer tasks.',
            tags: ['Python', 'CLI', 'Automation'],
            links: { github: '#', demo: '#' }
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-background-darkGray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Featured Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-accent-blue/50 transition-all hover:shadow-lg dark:hover:shadow-accent-blue/10"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-accent-blue transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-3">
                                        <a href={project.links.github} className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.links.demo} className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 mb-6 h-12">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
