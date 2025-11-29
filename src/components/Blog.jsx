import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            title: 'Future of AI Agents',
            excerpt: 'Exploring how autonomous agents are reshaping the software development landscape.',
            date: 'Mar 15, 2025',
            readTime: '5 min read'
        },
        {
            title: 'Understanding LangGraph',
            excerpt: 'A deep dive into building stateful, multi-actor applications with LLMs.',
            date: 'Mar 10, 2025',
            readTime: '8 min read'
        },
        {
            title: 'Journey into Go',
            excerpt: 'Why I started learning Go and how it improves backend performance.',
            date: 'Mar 05, 2025',
            readTime: '6 min read'
        }
    ];

    return (
        <section id="blog" className="py-20 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Latest Thoughts</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <motion.div
                                key={post.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-6 rounded-2xl bg-gray-50 dark:bg-background-darkGray border border-gray-200 dark:border-gray-800 hover:border-accent-blue/30 transition-all cursor-pointer"
                            >
                                <div className="flex justify-between items-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                                    <span>{post.date}</span>
                                    <span>{post.readTime}</span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-accent-blue transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center text-accent-blue font-medium text-sm group-hover:gap-2 transition-all">
                                    Read Article
                                    <ArrowRight size={16} className="ml-1" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;
