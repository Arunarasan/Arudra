import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, category, image }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
        >
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-accent text-sm font-bold uppercase tracking-widest mb-2">{category}</span>
                <h3 className="text-white text-xl font-bold">{title}</h3>
                <p className="text-slate-300 text-sm mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Industrial automation and efficiency solutions.
                </p>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
