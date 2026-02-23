import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon: Icon }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-md border-b-4 border-slate-200 hover:border-accent transition-all duration-300 group"
        >
            <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors stroke-[1.5px]" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
            <p className="text-secondary leading-relaxed mb-6">
                {description}
            </p>
            <a href="/contact" className="text-accent font-semibold flex items-center hover:translate-x-1 transition-transform">
                Learn More <span className="ml-2">→</span>
            </a>
        </motion.div>
    );
};

export default ServiceCard;
