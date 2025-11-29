import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const skills = [
        'Python', 'Go', 'Backend Dev', 'ML', 'TensorFlow', 'LangGraph'
    ];

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-background-darkGray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">About Me</h2>

                    <div className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            I am a young Tech-Enthusiast & Hackathon Winner at IIT-H, currently exploring the frontiers of AI/ML, Cybersecurity, Web Dev, and DevOps.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            As a GFG Certified Python Developer and Student Intern, I am passionate about building powerful AI systems and understanding the financial world. My goal is to join Big Tech, transition to leadership, and eventually start my own venture.
                        </p>

                        <div className="mt-8">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-800"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
