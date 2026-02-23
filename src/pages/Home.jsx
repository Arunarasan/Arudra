import React from 'react';
import { motion } from 'framer-motion';
import { Settings, ShieldCheck, Zap, Activity, Clock, Award } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
    const services = [
        {
            title: 'Expert Installation',
            description: 'Professional setup of new conveyor systems with precision alignment and heavy-duty testing.',
            icon: Settings
        },
        {
            title: 'Preventive Maintenance',
            description: 'Full inspection and lubrication programs to minimize downtime and extend component life.',
            icon: ShieldCheck
        },
        {
            title: 'Belt Replacement',
            description: 'Rapid hot or cold vulcanized splicing and mechanical fastener installation.',
            icon: Zap
        },
        {
            title: '24/7 Emergency Repairs',
            description: 'Critical failure response teams ready to get your production line running immediately.',
            icon: Clock
        }
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
                {/* Abstract Background Decoration */}
                <div className="absolute inset-0 bg-primary">
                    <div className="absolute right-0 top-0 w-1/2 h-full bg-accent/10 skew-x-[-20deg] translate-x-1/4"></div>
                    <div className="absolute left-0 bottom-0 w-1/3 h-1/2 border-t border-r border-accent/20 rounded-tr-[100px]"></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <span className="text-accent font-bold uppercase tracking-widest mb-4 block">Industrial Precision</span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight italic">
                            Reliable <span className="text-accent uppercase">Conveyor Belt</span> Solutions
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light leading-relaxed">
                            We keep your business moving. Specialized installation, maintenance, and ultra-fast emergency services for all industrial sectors.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="/contact" className="btn-primary flex items-center justify-center">
                                Contact Experts Now
                            </a>
                            <a href="/projects" className="border-2 border-white/30 hover:border-white text-white font-bold py-2 px-8 rounded transition duration-300 flex items-center justify-center">
                                View Our Portfolio
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Image Mock (Decorative) */}
                <div className="hidden lg:block absolute right-0 bottom-0 w-2/5 h-4/5 pointer-events-none">
                    <div className="relative w-full h-full">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        >
                            <Settings className="w-96 h-96 text-accent/5 stroke-[0.5px]" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-industrial-grey py-12 border-y border-slate-700">
                <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: 'Years Experience', val: '25+' },
                        { label: 'Projects Completed', val: '1.2k' },
                        { label: 'Qualified Staff', val: '80+' },
                        { label: 'Uptime Delivery', val: '99.9%' }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.val}</div>
                            <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mb-16">
                        <h2 className="section-title">Core Services</h2>
                        <p className="text-lg text-secondary">
                            We provide end-to-end solutions for material handling systems, ensuring maximum efficiency and minimal downtime for your facility.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, idx) => (
                            <ServiceCard key={idx} {...service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="section-title">Why Choose ConveyorPro?</h2>
                            <p className="text-secondary mb-12 leading-relaxed">
                                With over two decades in the mechanical services industry, we've refined our approach to deliver results that literally move the world forward.
                            </p>

                            <div className="space-y-8">
                                {[
                                    { title: 'Quality Assurance', desc: 'All splices and repairs meet ISO industrial standards.', icon: Award },
                                    { title: 'Advanced Diagnostics', desc: 'Using ultrasound and thermal imaging to predict failures.', icon: Activity },
                                    { title: 'Full Turnkey Solutions', desc: 'From design to final commissioning, we handle everything.', icon: Settings }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="mt-1">
                                            <div className="bg-accent/10 p-2 rounded-full">
                                                <item.icon className="text-accent w-6 h-6" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                                            <p className="text-secondary text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            {/* Placeholder for real industrial photo */}
                            <div className="bg-slate-200 aspect-video rounded-2xl overflow-hidden relative group">
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
                                    alt="Industrial"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-accent p-8 rounded-2xl hidden md:block">
                                    <Zap className="text-white w-12 h-12" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-primary relative">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-8">Ready to Optimize Your Material Handling?</h2>
                    <p className="text-slate-300 mb-10 max-w-2xl mx-auto">
                        Contact our engineering team today for a free facility audit and efficiency assessment.
                    </p>
                    <a href="/contact" className="btn-primary inline-flex items-center">
                        Schedule A Consultation
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
