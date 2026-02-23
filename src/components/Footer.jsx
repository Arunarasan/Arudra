import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Settings } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Brief */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <Settings className="w-8 h-8 text-accent" />
                            <span className="text-xl font-bold tracking-tighter uppercase italic">
                                Conveyor<span className="text-accent">Pro</span>
                            </span>
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                            Providing world-class conveyor belt solutions, maintenance, and emergency repairs for industrial operations since 1995.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-b-2 border-accent w-fit pb-1">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><a href="/" className="text-slate-400 hover:text-accent transition-colors">Home</a></li>
                            <li><a href="/projects" className="text-slate-400 hover:text-accent transition-colors">Projects</a></li>
                            <li><a href="/about" className="text-slate-400 hover:text-accent transition-colors">About Us</a></li>
                            <li><a href="/contact" className="text-slate-400 hover:text-accent transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-b-2 border-accent w-fit pb-1">Our Services</h3>
                        <ul className="space-y-4">
                            <li className="text-slate-400">Belt Installation</li>
                            <li className="text-slate-400">Maintenance & Repair</li>
                            <li className="text-slate-400">System Optimization</li>
                            <li className="text-slate-400">Emergency Services</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-b-2 border-accent w-fit pb-1">Get In Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3 text-slate-400">
                                <MapPin size={20} className="text-accent" />
                                <span>123 Industrial Ave, Tech City, ST 45678</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-400">
                                <Phone size={20} className="text-accent" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-400">
                                <Mail size={20} className="text-accent" />
                                <span>arunarasan06@gmail.com</span>
                            </li>
                        </ul>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="p-2 bg-slate-800 rounded hover:bg-accent transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="p-2 bg-slate-800 rounded hover:bg-accent transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="p-2 bg-slate-800 rounded hover:bg-accent transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} ConveyorPro Service Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
