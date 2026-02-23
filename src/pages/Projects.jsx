import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: 'Coal Terminal System Upgrade',
            category: 'Mining & Energy',
            image: 'https://images.unsplash.com/photo-1578330114008-8384260f85ee?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'Packaging Line Automation',
            category: 'Food & Beverage',
            image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'Distribution Center Sorters',
            category: 'Logistics',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'Heavy-Duty Quarry Conveyor',
            category: 'Construction',
            image: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'Airport Baggage System Repair',
            category: 'Aviation',
            image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'Recycling Plant Belt Network',
            category: 'Waste Management',
            image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800'
        }
    ];

    return (
        <div className="pt-24 pb-20 min-h-screen bg-slate-50">
            <section className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 italic uppercase">Our Project <span className="text-accent underline decoration-4 underline-offset-8">Portfolio</span></h1>
                        <p className="text-xl text-secondary">
                            A showcase of our high-impact engineering solutions across diverse industrial environments.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} {...project} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;
