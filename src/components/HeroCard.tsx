"use client";

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, ArrowDown, Brain, Code, Smartphone } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export default function HeroCard() {
    const { t } = useLanguage();

    const skills = [
        { label: t('hero.skill1'), icon: <Brain size={14} /> },
        { label: t('hero.skill2'), icon: <Code size={14} /> },
        { label: t('hero.skill3'), icon: <Smartphone size={14} /> },
    ];

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-[90%] md:w-full max-w-3xl glass-card p-8 md:p-12 cursor-default"
        >
            {/* Content */}
            <div style={{ transform: "translateZ(40px)" }} className="relative z-10">
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="badge mb-8"
                >
                    <Sparkles size={14} className="mr-2" />
                    <span>{t('hero.badge')}</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-display mb-6"
                    style={{ color: 'var(--text-primary)' }}
                >
                    {t('hero.headline1')}
                    <br />
                    <span className="gradient-text">{t('hero.headline2')}</span>
                </motion.h1>

                {/* Skills Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-3 mb-8"
                >
                    {skills.map((skill) => (
                        <span
                            key={skill.label}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                            style={{
                                backgroundColor: 'var(--surface)',
                                border: '1px solid var(--border)',
                                color: 'var(--text-secondary)'
                            }}
                        >
                            {skill.icon}
                            {skill.label}
                        </span>
                    ))}
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-body max-w-lg mb-10"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    {t('hero.description')}
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-wrap gap-4"
                >
                    <a href="#projects" className="btn-primary">
                        {t('hero.cta1')}
                        <ArrowDown size={18} />
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 font-medium transition-colors"
                        style={{ color: 'var(--text-muted)' }}
                    >
                        {t('hero.cta2')}
                    </a>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <div className="absolute bottom-6 left-6 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                v2.0 — AG System
            </div>
        </motion.div>
    );
}