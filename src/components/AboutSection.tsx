"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Heart, Terminal, Cpu } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import SpotlightCard from './SpotlightCard';

export default function AboutSection() {
    const { t, isRTL } = useLanguage();

    const stats = [
        { label: t('about.stat1.label'), value: t('about.stat1.value'), icon: <Code size={20} className="text-blue-500" /> },
        { label: t('about.stat2.label'), value: t('about.stat2.value'), icon: <Heart size={20} className="text-purple-500" /> },
    ];

    return (
        <div className="w-full max-w-6xl px-4 flex flex-col items-center">
            
            {/* ═══════════════════════════════════════════ */}
            {/*  ABOUT BENTO GRID                           */}
            {/* ═══════════════════════════════════════════ */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">

                {/* ────────────────────────────────────────── */}
                {/*  CARD 1: Main About Text (Wide)           */}
                {/* ────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="md:col-span-12 lg:col-span-8"
                >
                    <SpotlightCard className="glass-card p-10 h-full flex flex-col relative overflow-hidden">
                        {/* Background subtle grid/lines */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                             style={{
                                 backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                                 backgroundSize: '40px 40px'
                             }}
                        />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                                    style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)' }}
                                >
                                    <Zap size={14} className="text-blue-400" />
                                    <span className="text-xs font-medium text-blue-400">{t('about.badge')}</span>
                                </span>
                                
                                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                                    {t('about.headline')}
                                </h2>
                                
                                <p className="text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
                                    {t('about.description')}
                                </p>
                            </div>

                            {/* Decorative element at bottom */}
                            <div className="mt-8 flex items-center gap-4 border-t pt-6" style={{ borderColor: 'var(--border)' }}>
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[#09090b] flex items-center justify-center bg-zinc-800/50">
                                            <Code size={12} className="text-zinc-400" />
                                        </div>
                                    ))}
                                </div>
                                <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                                    Architecting modern solutions.
                                </span>
                            </div>
                        </div>
                    </SpotlightCard>
                </motion.div>

                {/* ────────────────────────────────────────── */}
                {/*  CARD 2: Photo Visual (Square)            */}
                {/* ────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="md:col-span-6 lg:col-span-4"
                >
                    <SpotlightCard 
                        className="glass-card p-1 h-full min-h-[300px] overflow-hidden group relative"
                        spotlightColor="rgba(255, 255, 255, 0.1)"
                    >
                        {/* Photo Container */}
                        <div className="w-full h-full relative rounded-[22px] overflow-hidden bg-zinc-900 border border-white/5">
                            <img 
                                src="/photo.jpg" 
                                alt="Profile" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                onError={(e) => {
                                    // Fallback if photo not uploaded yet
                                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Ibrahim&background=3b82f6&color=fff&size=512";
                                }}
                            />
                            {/* Inner glow/shadow for depth */}
                            <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none" />
                        </div>
                    </SpotlightCard>
                </motion.div>

                {/* ────────────────────────────────────────── */}
                {/*  CARDS 3 & 4: Stats (Small Squares)       */}
                {/* ────────────────────────────────────────── */}
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="md:col-span-6 lg:col-span-6"
                    >
                        <SpotlightCard className="glass-card p-8 flex items-center justify-between group">
                            <div>
                                <h4 className="text-3xl font-black mb-1" style={{ color: 'var(--text-primary)' }}>
                                    {stat.value}
                                </h4>
                                <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                                    {stat.label}
                                </span>
                            </div>
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {stat.icon}
                            </div>
                        </SpotlightCard>
                    </motion.div>
                ))}

            </div>
        </div>
    );
}