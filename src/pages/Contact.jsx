import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    CheckCircle,
    AlertCircle,
    Loader2,
} from "lucide-react";

const SERVICE_ID = "service_c4xq7xu";
const TEMPLATE_ID = "template_snrjfbf";
const PUBLIC_KEY = "jkRb2zUgP3rzl3zGM";

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error'

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(() => {
                setLoading(false);
                setStatus("success");
                form.current.reset();
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                setLoading(false);
                setStatus("error");
            });
    };

    return (
        <div className="pt-24 pb-20 min-h-screen bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 italic uppercase">
                        Contact Our <span className="text-accent underline">Engineers</span>
                    </h1>
                    <p className="text-secondary max-w-2xl mx-auto">
                        Need an urgent repair or a facility audit? Fill out the form below
                        and our technical team will reach out shortly.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {/* Info Side */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-primary text-white p-8 rounded-2xl shadow-xl space-y-8 relative overflow-hidden">
                            <div className="absolute bottom-0 right-0 opacity-10">
                                <Send size={150} />
                            </div>

                            <h3 className="text-2xl font-bold border-b border-white/20 pb-4">
                                General Inquiries
                            </h3>

                            <div className="space-y-6 relative z-10">
                                <div className="flex items-start gap-4">
                                    <div className="bg-accent/20 p-3 rounded-lg">
                                        <Phone className="text-accent" />
                                    </div>
                                    <div>
                                        <p className="font-bold italic">Call Us</p>
                                        <p className="text-slate-300">+91 XXXXX XXXXX</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-accent/20 p-3 rounded-lg">
                                        <Mail className="text-accent" />
                                    </div>
                                    <div>
                                        <p className="font-bold italic">Email Support</p>
                                        <p className="text-slate-300">
                                            arunarasan06@gmail.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-accent/20 p-3 rounded-lg">
                                        <MapPin className="text-accent" />
                                    </div>
                                    <div>
                                        <p className="font-bold italic">Location</p>
                                        <p className="text-slate-300">
                                            Madurai, Tamil Nadu
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-accent p-6 rounded-2xl text-white font-bold flex items-center gap-4">
                            <AlertCircle />
                            <span>Emergency Service Available</span>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-200">
                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 uppercase mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 uppercase mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 uppercase mb-2">
                                    Phone Number
                                </label>
                                <input
                                    name="phone"
                                    type="tel"
                                    placeholder="+91 XXXXX XXXXX"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 uppercase mb-2">
                                    Service Required
                                </label>
                                <select
                                    name="service_type"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                                >
                                    <option>New Installation</option>
                                    <option>Routine Maintenance</option>
                                    <option>Emergency Repair</option>
                                    <option>Consultation</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 uppercase mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    placeholder="Describe your requirement..."
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full py-4 rounded-lg text-white font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${loading
                                    ? "bg-slate-400"
                                    : "bg-accent hover:bg-orange-600 shadow-lg"
                                    }`}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Notifications */}
                        {status === "success" && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="mt-6 p-4 bg-green-100 border border-green-200 text-green-700 rounded-lg flex items-center gap-3"
                            >
                                <CheckCircle />
                                <p>Message sent successfully. We’ll contact you soon.</p>
                            </motion.div>
                        )}

                        {status === "error" && (
                            <div className="mt-6 p-4 bg-red-100 border border-red-200 text-red-700 rounded-lg flex items-center gap-3">
                                <AlertCircle />
                                <p>Failed to send message. Please try again.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;