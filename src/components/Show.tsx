"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageProvider';
import SpotlightCard from './SpotlightCard';
import { Sparkles, ArrowDown, ShieldCheck, Zap, Code2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

/**
 * Show — Premium Hero Bento Grid
 * 
 * Replaces the whimsical circular photo and floating icons with a 
 * powerful, unified bento grid architecture to exude confidence and professionalism.
 */

export default function Show() {
    const { t, isRTL } = useLanguage();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // SSR fallback to prevent hydration mismatch
    if (!mounted) {
        return (
            <section
                className="w-full max-w-6xl mx-auto px-4 min-h-[70vh] flex items-center pt-24 pb-12"
                style={{ background: 'transparent' }}
            />
        );
    }

    return (
        <section className="w-full max-w-6xl mx-auto px-4 pt-24 pb-16 flex flex-col relative">
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div 
                    className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[100px] opacity-20"
                    style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
                />
                <div 
                    className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
                    style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }}
                />
            </div>

            {/* BENTO GRID HERO */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">

                {/* ────────────────────────────────────────── */}
                {/*  HERO MAIN CARD (Wide)                    */}
                {/* ────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    className="md:col-span-12 lg:col-span-8"
                >
                    <SpotlightCard
                        className="glass-card p-10 md:p-14 h-full flex flex-col justify-center relative overflow-hidden"
                        spotlightColor="rgba(255, 255, 255, 0.08)"
                    >
                        {/* Decorative Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 w-max"
                            style={{ 
                                background: 'rgba(59, 130, 246, 0.1)', 
                                border: '1px solid rgba(59, 130, 246, 0.2)' 
                            }}
                        >
                            <Sparkles size={14} className="text-blue-400" />
                            <span className="text-xs font-medium text-blue-400">
                                {t('hero.badge') || "AG System v2.0"}
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 
                            className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1]"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            {t('show.headline1')} <br />
                            <span 
                                style={{
                                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                {t('show.headline2')}
                            </span>
                        </h1>

                        {/* Description */}
                        <p 
                            className="text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            {t('show.description')}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4 mt-auto">
                            <a 
                                href="https://api.whatsapp.com/qr/4TYXLJLDXQ6ZB1?autoload=1&app_absent=0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                style={{ 
                                    color: 'white',
                                    background: '#25D366',
                                    boxShadow: '0 8px 25px rgba(37, 211, 102, 0.25)',
                                    border: '1px solid var(--border)'
                                }}
                            >
                                <FaWhatsapp size={20} />
                                WhatsApp
                            </a>
                            <a 
                                href="/services"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                style={{ 
                                    color: 'white',
                                    background: 'var(--surface)',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                    border: '1px solid var(--border)',
                                    boxShadow: 'var(--shadow-md)'
                                }}
                            >
                                <Sparkles size={18} className="text-blue-400" />
                                {t('nav.services') || "Services"}
                            </a>
                        </div>
                        
                        {/* Subtle background abstract lines */}
                        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-1/2 h-full"
                             style={{
                                 background: 'linear-gradient(45deg, transparent 40%, #3b82f6 40%, #3b82f6 45%, transparent 45%, transparent 50%, #8b5cf6 50%, #8b5cf6 55%, transparent 55%)',
                                 backgroundSize: '20px 20px'
                             }}
                        />
                    </SpotlightCard>
                </motion.div>

                {/* ────────────────────────────────────────── */}
                {/*  EXPERTISE CARD (Right Column)            */}
                {/* ────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="md:col-span-12 lg:col-span-4 flex flex-col gap-6"
                >
                    <SpotlightCard
                        className="glass-card p-8 h-full flex flex-col relative overflow-hidden group"
                        spotlightColor="rgba(16, 185, 129, 0.12)"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] bg-emerald-500/10 pointer-events-none" />
                        
                        <div className="flex items-start justify-between mb-8">
                            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                                <Code2 size={32} className="text-emerald-500" />
                            </div>
                            <ShieldCheck size={20} className="text-emerald-500/50" />
                        </div>

                        <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                            {t('show.developer')}
                        </h3>
                        <p className="text-body mb-8 flex-1" style={{ color: 'var(--text-secondary)' }}>
                            {t('show.ai_expert')} &mdash; {t('show.precision')}, {t('show.performance')}, {t('show.quality')}
                        </p>

                        {/* Animated Metrics Bar */}
                        <div className="w-full glass-card p-4 bg-black/20 border-white/5">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-xs font-semibold text-emerald-400">System Architecture</span>
                                <span className="text-xs text-emerald-500/70">100%</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div 
                                    className="h-full bg-linear-to-r from-emerald-500 to-teal-400 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                />
                            </div>
                        </div>
                    </SpotlightCard>
                </motion.div>

                {/* ────────────────────────────────────────── */}
                {/*  STATS ROW (Bottom)                       */}
                {/* ────────────────────────────────────────── */}
                {[
                    { value: t('show.stat1.value'), label: t('show.stat1.label'), delay: 0.2 },
                    { value: t('show.stat2.value'), label: t('show.stat2.label'), delay: 0.3 },
                    { value: t('show.stat3.value'), label: t('show.stat3.label'), delay: 0.4 },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: stat.delay, ease: "easeOut" }}
                        className="md:col-span-4 lg:col-span-4"
                    >
                        <SpotlightCard className="glass-card p-6 flex items-center justify-between group">
                            <div>
                                <h4 
                                    className="text-3xl md:text-4xl font-black mb-1"
                                    style={{
                                        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    {stat.value}
                                </h4>
                                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                                    {stat.label}
                                </span>
                            </div>
                            <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center bg-white/[0.02] group-hover:border-blue-500/30 transition-colors">
                                <Zap size={18} className="text-blue-500/50 group-hover:text-blue-400 transition-colors" />
                            </div>
                        </SpotlightCard>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}
