import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, GraduationCap } from 'lucide-react';

const Experience = () => {
    const timeline = [
        {
            id: 1,
            title: 'Student Intern',
            organization: 'Current',
            date: 'Present',
            icon: Briefcase,
            type: 'work'
        },
        {
            id: 2,
            title: 'Hackathon Winner',
            organization: 'IIT Hyderabad',
            description: 'Plant Disease Detection Project',
            date: '2024',
            icon: Award,
            type: 'achievement'
        },
        {
            id: 3,
            title: 'GFG Certified Python Developer',
            organization: 'GeeksforGeeks',
            date: '2023',
            icon: Award,
            type: 'certification'
        },
        {
            id: 4,
            title: 'B.Tech CSE',
            organization: 'Upcoming',
            date: '2025',
            icon: GraduationCap,
            type: 'education'
        }
    ];

    return (
        <section id="experience" className="py-20 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Experience</h2>

                    <div className="max-w-3xl mx-auto relative">
                        {/* Vertical Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 md:left-1/2" />

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                        }`}
                                >
                                    {/* Icon */}
                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-black border-4 border-gray-100 dark:border-gray-900 z-10">
                                        <item.icon size={16} className="text-accent-blue" />
                                    </div>

                                    {/* Content */}
                                    <div className="ml-20 md:ml-0 md:w-1/2 p-6 bg-gray-50 dark:bg-background-darkGray rounded-xl border border-gray-200 dark:border-gray-800 hover:border-accent-blue/30 transition-colors">
                                        <span className="text-sm text-accent-blue font-medium mb-1 block">
                                            {item.date}
                                        </span>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 font-medium">
                                            {item.organization}
                                        </p>
                                        {item.description && (
                                            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
