import React from 'react';
import { motion } from 'framer-motion';
import { History, Target, Users, CheckCircle2 } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Header Section */}
            <section className="py-20 bg-slate-100 border-b border-slate-200 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-10 opacity-5">
                    <History size={300} className="text-primary" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-6xl font-bold text-primary italic uppercase mb-6"
                    >
                        Since 1995: <span className="text-accent">Moving</span> Industry Forward
                    </motion.h1>
                    <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
                        We are more than a service team; we are your strategic partners in industrial uptime and efficiency.
                    </p>
                </div>
            </section>

            {/* Mission/Vision */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="bg-primary text-white p-4 rounded-xl shrink-0 h-fit">
                                    <Target size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-primary mb-3 uppercase italic tracking-wider">Our Mission</h3>
                                    <p className="text-secondary leading-relaxed text-lg">
                                        To deliver unparalleled mechanical excellence and innovative conveyor solutions that maximize industrial productivity while setting the benchmark for safety and reliability.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="bg-accent text-white p-4 rounded-xl shrink-0 h-fit">
                                    <Users size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-primary mb-3 uppercase italic tracking-wider">Our Vision</h3>
                                    <p className="text-secondary leading-relaxed text-lg">
                                        To be the global leader in material handling services, recognized for our engineering precision, rapid response times, and commitment to sustainable industrial practices.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-12 rounded-3xl border border-slate-200 relative">
                            <div className="absolute top-4 left-4 text-accent/20 font-black text-8xl italic uppercase pointer-events-none">Values</div>
                            <h3 className="text-3xl font-bold text-primary mb-8 underline decoration-accent decoration-4">The ConveyorPro Standard</h3>
                            <ul className="space-y-4">
                                {[
                                    'Safety First in Every Splice',
                                    'Uptime-Obsessed Maintenance',
                                    'Engineering Integrity',
                                    'Transparent Communication',
                                    'Technological Innovation'
                                ].map((value, i) => (
                                    <li key={i} className="flex items-center gap-3 text-lg font-medium text-slate-700">
                                        <CheckCircle2 className="text-accent" />
                                        {value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team/Highlights */}
            <section className="py-24 bg-primary text-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 italic uppercase tracking-tighter">Certified Professional Staff</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: 'Certified Engineers', count: '15+', desc: 'Specialized in mechanical and structural design.' },
                            { title: 'Splicing Technicians', count: '45+', desc: 'Master artisans in hot and cold vulcanization.' },
                            { title: 'Project Managers', count: '10+', desc: 'Dedicated leads for complex facility overhauls.' }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/5 p-10 rounded-2xl backdrop-blur-sm border border-white/10">
                                <div className="text-5xl font-black text-accent mb-4">{stat.count}</div>
                                <h4 className="text-xl font-bold mb-3">{stat.title}</h4>
                                <p className="text-slate-400">{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
