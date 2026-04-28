"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FaWhatsapp, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { useLanguage } from './LanguageProvider';

export default function Footer() {
    const { t } = useLanguage();

    const socialLinks = [
        { name: 'WhatsApp', icon: <FaWhatsapp size={20} />, href: 'https://api.whatsapp.com/qr/4TYXLJLDXQ6ZB1?autoload=1&app_absent=0' },
        { name: 'LinkedIn', icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/ibrahim-adam-a50381363/?skipRedirect=true' },
        { name: 'Facebook', icon: <FaFacebook size={20} />, href: 'https://www.facebook.com/profile.php?id=100070238168606' }
    ];

    const services = [
        'AI Agents & Automation',
        'RAG Systems',
        'Full Stack Web',
        'Mobile Development',
    ];

    const quickLinks = [
        { name: 'nav.home', href: '#' },
        { name: 'nav.projects', href: '#projects' },
        { name: 'nav.contact', href: '#contact' },
    ];

    return (
        <footer className="w-full mt-32 relative overflow-hidden"
            style={{
                borderTop: '1px solid var(--border)',
                background: 'linear-gradient(to bottom, var(--background), var(--surface))'
            }}
        >
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Column 1: Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-4"
                    >
                        <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--text-secondary)' }}>
                            {t('footer.tagline')}
                        </p>
                    </motion.div>

                    {/* Column 2: Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-4"
                    >
                        <h4 className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>
                            {t('footer.services')}
                        </h4>
                        <ul className="flex flex-col gap-2">
                            {services.map((service, i) => (
                                <li key={i} className="text-sm" style={{ color: 'var(--text-muted)' }}>
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 3: Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-4"
                    >
                        <h4 className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>
                            {t('footer.links')}
                        </h4>
                        <ul className="flex flex-col gap-2">
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <a href={link.href} className="text-sm hover:underline flex items-center gap-1 group" style={{ color: 'var(--text-muted)' }}>
                                        {t(link.name)}
                                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 4: Connect */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-4"
                    >
                        <h4 className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>
                            {t('footer.connect')}
                        </h4>
                        <div className="flex gap-3 flex-wrap">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="p-3 rounded-xl transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                                    style={{
                                        backgroundColor: 'var(--surface)',
                                        border: '1px solid var(--border)',
                                        color: 'var(--text-secondary)'
                                    }}
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>

                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
                    style={{ borderTop: '1px solid var(--border)' }}
                >
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        {t('footer.copyright')}
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}