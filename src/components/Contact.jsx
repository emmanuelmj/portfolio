import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        // Replace these with your actual EmailJS service/template/public keys
        // For now, we'll simulate a success after a delay if keys aren't present
        const serviceId = 'YOUR_SERVICE_ID';
        const templateId = 'YOUR_TEMPLATE_ID';
        const publicKey = 'YOUR_PUBLIC_KEY';

        if (serviceId === 'YOUR_SERVICE_ID') {
            // Simulation mode for demo purposes
            setTimeout(() => {
                setLoading(false);
                setStatus('success');
                formRef.current.reset();
            }, 1500);
            return;
        }

        emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
            .then((result) => {
                setLoading(false);
                setStatus('success');
                formRef.current.reset();
            }, (error) => {
                setLoading(false);
                setStatus('error');
                console.error(error.text);
            });
    };

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-background-darkGray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Get In Touch</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                                Let's Build Something Amazing
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>

                            <div className="space-y-4">
                                <a href="mailto:hello@vertex.dev" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-accent-blue transition-colors">
                                    <Mail size={20} />
                                    <span>hello@vertex.dev</span>
                                </a>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-accent-blue transition-colors">
                                    <Github size={20} />
                                    <span>github.com/vertex</span>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-accent-blue transition-colors">
                                    <Linkedin size={20} />
                                    <span>linkedin.com/in/vertex</span>
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="user_name"
                                    id="name"
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="user_email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none transition-all text-gray-900 dark:text-white resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent-blue text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={18} />
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm mt-2">
                                    <CheckCircle size={16} />
                                    <span>Message sent successfully!</span>
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm mt-2">
                                    <AlertCircle size={16} />
                                    <span>Failed to send message. Please try again.</span>
                                </div>
                            )}
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
