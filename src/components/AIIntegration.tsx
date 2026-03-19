"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageProvider';
import SpotlightCard from './SpotlightCard';
import {
    MessageSquare,
    Cpu,
    Workflow,
    Globe,
    Smartphone,
    Sparkles,
    Zap,
    ArrowRight,
    Terminal,
    Layout
} from 'lucide-react';

// Platform data
const platforms = [
    { id: 'web', icon: Globe, label: 'Web Apps' },
    { id: 'ios', icon: Smartphone, label: 'iOS' },
    { id: 'android', icon: Smartphone, label: 'Android' },
];

// API Providers
const apiProviders = [
    { name: 'OpenAI', color: '#10A37F' },
    { name: 'Gemini', color: '#4285F4' },
    { name: 'HuggingFace', color: '#FFD21E' },
];

export default function AIIntegration() {
    const { t, isRTL } = useLanguage();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // SSR placeholder
    if (!mounted) {
        return (
            <section
                className="relative w-full min-h-[80vh] flex items-center justify-center"
                style={{ background: 'var(--background)' }}
            />
        );
    }

    return (
        <div className="w-full max-w-6xl px-4 py-16">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                    style={{
                        background: 'rgba(139, 92, 246, 0.1)',
                        border: '1px solid rgba(139, 92, 246, 0.2)',
                    }}
                >
                    <Sparkles size={16} style={{ color: '#8b5cf6' }} />
                    <span className="text-sm font-medium" style={{ color: '#8b5cf6' }}>
                        {t('ai.badge')}
                    </span>
                </motion.div>

                {/* Headline */}
                <h2 className="text-headline mb-4" style={{ color: 'var(--text-primary)' }}>
                    {t('ai.headline')}{' '}
                    <span
                        style={{
                            background: 'linear-gradient(135deg, #8b5cf6, #06b6d4, #3b82f6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {t('ai.subheadline')}
                    </span>
                </h2>
                <p
                    className="text-body max-w-2xl mx-auto"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    {t('ai.description')}
                </p>
            </motion.div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Card 1: Conversational AI (Large - spans 2 cols on lg) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="lg:col-span-2"
                >
                    <SpotlightCard
                        className="liquid-glass p-8 h-full min-h-[320px] flex flex-col"
                        spotlightColor="rgba(139, 92, 246, 0.15)"
                    >
                        {/* Card Header */}
                        <div className="flex items-start justify-between mb-6">
                            <div
                                className="p-3 rounded-2xl"
                                style={{
                                    background: 'rgba(139, 92, 246, 0.15)',
                                    border: '1px solid rgba(139, 92, 246, 0.25)',
                                }}
                            >
                                <MessageSquare size={28} style={{ color: '#8b5cf6' }} />
                            </div>
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <Zap size={20} style={{ color: 'var(--text-muted)' }} />
                            </motion.div>
                        </div>

                        <h3 className="text-title mb-3" style={{ color: 'var(--text-primary)' }}>
                            {t('ai.chat.title')}
                        </h3>
                        <p className="text-body mb-6" style={{ color: 'var(--text-secondary)' }}>
                            {t('ai.chat.desc')}
                        </p>

                        {/* Animated Chat Demo */}
                        <div
                            className="mt-auto rounded-xl p-4 relative overflow-hidden"
                            style={{
                                background: 'var(--surface-hover)',
                                border: '1px solid var(--border)',
                            }}
                        >
                            {/* Chat Messages Simulation */}
                            <div className="space-y-3">
                                {/* User Message */}
                                <motion.div
                                    initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className={`flex ${isRTL ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div
                                        className="px-4 py-2 rounded-2xl rounded-br-sm max-w-[70%]"
                                        style={{
                                            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                        }}
                                    >
                                        <span className="text-sm text-white">How can AI help my app?</span>
                                    </div>
                                </motion.div>

                                {/* AI Response with typing animation */}
                                <motion.div
                                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 }}
                                    className={`flex ${isRTL ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className="px-4 py-2 rounded-2xl rounded-bl-sm max-w-[80%]"
                                        style={{
                                            background: 'var(--surface)',
                                            border: '1px solid var(--border)',
                                        }}
                                    >
                                        <div className="flex items-center gap-2">
                                            <motion.div
                                                className="flex gap-1"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.8 }}
                                            >
                                                {[0, 1, 2].map((i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="w-2 h-2 rounded-full"
                                                        style={{ background: '#8b5cf6' }}
                                                        animate={{ opacity: [0.3, 1, 0.3] }}
                                                        transition={{
                                                            duration: 1,
                                                            repeat: Infinity,
                                                            delay: i * 0.2,
                                                        }}
                                                    />
                                                ))}
                                            </motion.div>
                                            <span
                                                className="text-sm"
                                                style={{ color: 'var(--text-secondary)' }}
                                            >
                                                AI is typing...
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Input Bar */}
                            <div
                                className="mt-4 flex items-center gap-2 px-4 py-2 rounded-xl"
                                style={{
                                    background: 'var(--surface)',
                                    border: '1px solid var(--border)',
                                }}
                            >
                                <div
                                    className="flex-1 h-4 rounded"
                                    style={{ background: 'var(--surface)' }}
                                />
                                <ArrowRight size={16} style={{ color: '#8b5cf6' }} />
                            </div>
                        </div>
                    </SpotlightCard>
                </motion.div>

                {/* Card 2: API Integration */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <SpotlightCard
                        className="liquid-glass p-8 h-full min-h-[320px] flex flex-col"
                        spotlightColor="rgba(6, 182, 212, 0.15)"
                    >
                        <div className="flex items-start justify-between mb-6">
                            <div
                                className="p-3 rounded-2xl"
                                style={{
                                    background: 'rgba(6, 182, 212, 0.15)',
                                    border: '1px solid rgba(6, 182, 212, 0.25)',
                                }}
                            >
                                <Cpu size={28} style={{ color: '#06b6d4' }} />
                            </div>
                        </div>

                        <h3 className="text-title mb-3" style={{ color: 'var(--text-primary)' }}>
                            {t('ai.api.title')}
                        </h3>
                        <p className="text-body mb-6" style={{ color: 'var(--text-secondary)' }}>
                            {t('ai.api.desc')}
                        </p>

                        {/* API Providers */}
                        <div className="mt-auto space-y-3">
                            {apiProviders.map((provider, index) => (
                                <motion.div
                                    key={provider.name}
                                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="flex items-center gap-3 px-4 py-2 rounded-lg"
                                    style={{
                                        background: 'var(--surface)',
                                        border: '1px solid var(--border)',
                                    }}
                                >
                                    <div
                                        className="w-3 h-3 rounded-full"
                                        style={{ background: provider.color }}
                                    />
                                    <span
                                        className="text-sm font-medium"
                                        style={{ color: 'var(--text-primary)' }}
                                    >
                                        {provider.name}
                                    </span>
                                    <motion.div
                                        className="ml-auto"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                                    >
                                        <div
                                            className="w-2 h-2 rounded-full"
                                            style={{ background: '#22c55e' }}
                                        />
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </SpotlightCard>
                </motion.div>

                {/* Card 3: End-to-End Solutions (Full width on mobile, 2 cols, 1 col on lg) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="md:col-span-2 lg:col-span-2"
                >
                    <SpotlightCard
                        className="liquid-glass p-8 flex flex-col lg:flex-row items-center gap-8"
                        spotlightColor="rgba(59, 130, 246, 0.15)"
                    >
                        {/* Left Content */}
                        <div className="flex-1">
                            <div
                                className="inline-flex p-3 rounded-2xl mb-6"
                                style={{
                                    background: 'rgba(59, 130, 246, 0.15)',
                                    border: '1px solid rgba(59, 130, 246, 0.25)',
                                }}
                            >
                                <Workflow size={28} style={{ color: '#3b82f6' }} />
                            </div>

                            <h3 className="text-title mb-3" style={{ color: 'var(--text-primary)' }}>
                                {t('ai.solution.title')}
                            </h3>
                            <p className="text-body mb-6" style={{ color: 'var(--text-secondary)' }}>
                                {t('ai.solution.desc')}
                            </p>

                            {/* Platform Icons */}
                            <div className="flex items-center gap-4">
                                {platforms.map((platform, index) => {
                                    const Icon = platform.icon;
                                    return (
                                        <motion.div
                                            key={platform.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 + index * 0.1 }}
                                            className="flex flex-col items-center gap-2"
                                        >
                                            <div
                                                className="p-3 rounded-xl"
                                                style={{
                                                    background: 'var(--surface)',
                                                    border: '1px solid var(--border)',
                                                }}
                                            >
                                                <Icon size={24} style={{ color: 'var(--text-primary)' }} />
                                            </div>
                                            <span
                                                className="text-xs"
                                                style={{ color: 'var(--text-muted)' }}
                                            >
                                                {t(`ai.platform.${platform.id}`)}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right: Pipeline Visualization */}
                        <div className="flex-1 w-full lg:w-auto">
                            <div
                                className="relative p-6 rounded-2xl"
                                style={{
                                    background: 'var(--surface-hover)',
                                    border: '1px solid var(--border)',
                                }}
                            >
                                {/* Pipeline Steps */}
                                <div className="flex items-center justify-between gap-2">
                                    {['Data', 'Process', 'Model', 'Deploy'].map((step, index) => (
                                        <React.Fragment key={step}>
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.5 + index * 0.15 }}
                                                className="flex flex-col items-center gap-2"
                                            >
                                                <motion.div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                                                    style={{
                                                        background: `linear-gradient(135deg, ${index === 0 ? '#3b82f6' :
                                                            index === 1 ? '#8b5cf6' :
                                                                index === 2 ? '#06b6d4' :
                                                                    '#10b981'
                                                            }20, transparent)`,
                                                        border: `1px solid ${index === 0 ? '#3b82f6' :
                                                            index === 1 ? '#8b5cf6' :
                                                                index === 2 ? '#06b6d4' :
                                                                    '#10b981'
                                                            }40`,
                                                    }}
                                                    animate={{
                                                        boxShadow: [
                                                            `0 0 0 0 ${index === 0 ? 'rgba(59, 130, 246, 0.4)' :
                                                                index === 1 ? 'rgba(139, 92, 246, 0.4)' :
                                                                    index === 2 ? 'rgba(6, 182, 212, 0.4)' :
                                                                        'rgba(16, 185, 129, 0.4)'
                                                            }`,
                                                            `0 0 20px 4px ${index === 0 ? 'rgba(59, 130, 246, 0.2)' :
                                                                index === 1 ? 'rgba(139, 92, 246, 0.2)' :
                                                                    index === 2 ? 'rgba(6, 182, 212, 0.2)' :
                                                                        'rgba(16, 185, 129, 0.2)'
                                                            }`,
                                                            `0 0 0 0 ${index === 0 ? 'rgba(59, 130, 246, 0.4)' :
                                                                index === 1 ? 'rgba(139, 92, 246, 0.4)' :
                                                                    index === 2 ? 'rgba(6, 182, 212, 0.4)' :
                                                                        'rgba(16, 185, 129, 0.4)'
                                                            }`,
                                                        ],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        delay: index * 0.5,
                                                    }}
                                                >
                                                    <span
                                                        className="text-lg font-bold"
                                                        style={{
                                                            color: index === 0 ? '#3b82f6' :
                                                                index === 1 ? '#8b5cf6' :
                                                                    index === 2 ? '#06b6d4' :
                                                                        '#10b981'
                                                        }}
                                                    >
                                                        {index + 1}
                                                    </span>
                                                </motion.div>
                                                <span
                                                    className="text-xs font-medium"
                                                    style={{ color: 'var(--text-muted)' }}
                                                >
                                                    {step}
                                                </span>
                                            </motion.div>

                                            {/* Connector Arrow */}
                                            {index < 3 && (
                                                <motion.div
                                                    initial={{ opacity: 0, scaleX: 0 }}
                                                    whileInView={{ opacity: 1, scaleX: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.6 + index * 0.15 }}
                                                    className="hidden sm:block flex-1 h-px"
                                                    style={{
                                                        background: `linear-gradient(to ${isRTL ? 'left' : 'right'}, rgba(255,255,255,0.2), rgba(255,255,255,0.05))`,
                                                    }}
                                                />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>
                </motion.div>

                {/* Card 4: Rapid Development (Google/Gemini Style) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="md:col-span-2 lg:col-span-1"
                >
                    <SpotlightCard
                        className="liquid-glass p-8 h-full min-h-[360px] flex flex-col relative overflow-hidden group"
                        spotlightColor="rgba(66, 133, 244, 0.15)"
                    >
                        {/* Google/Gemini Background Energy */}
                        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                            <motion.div
                                className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[80px]"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    x: [0, 20, 0],
                                    background: [
                                        'radial-gradient(circle, #4285F4 0%, transparent 70%)',
                                        'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
                                        'radial-gradient(circle, #4285F4 0%, transparent 70%)',
                                    ]
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-[80px]"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    x: [0, -20, 0],
                                    background: [
                                        'radial-gradient(circle, #34A853 0%, transparent 70%)',
                                        'radial-gradient(circle, #FBBC05 0%, transparent 70%)',
                                        'radial-gradient(circle, #34A853 0%, transparent 70%)',
                                    ]
                                }}
                                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-start justify-between mb-6">
                                <motion.div
                                    className="p-3 rounded-2xl relative"
                                    whileHover={{ scale: 1.05 }}
                                    style={{
                                        background: 'var(--surface)',
                                        border: '1px solid var(--border)',
                                    }}
                                >
                                    <Sparkles size={28} style={{ color: '#4285F4' }} />
                                    {/* Intelligence Glow */}
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl blur-md"
                                        animate={{ opacity: [0, 0.5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        style={{ background: 'linear-gradient(45deg, #4285F4, #8b5cf6, #34A853)' }}
                                    />
                                </motion.div>
                            </div>

                            <h3 className="text-title mb-3" style={{ color: 'var(--text-primary)' }}>
                                {t('ai.prompt.title')}
                            </h3>
                            <p className="text-body mb-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
                                {t('ai.prompt.desc')}
                            </p>

                            {/* Google-Inspired Interaction Playground */}
                            <div
                                className="mt-auto rounded-2xl p-5 overflow-hidden relative flex flex-col gap-4"
                                style={{
                                    background: 'var(--surface-hover)',
                                    border: '1px solid var(--border)',
                                    boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5)'
                                }}
                            >
                                {/* The Magic Beam / Scanning Line */}
                                <motion.div
                                    className="absolute inset-x-0 h-[2px] z-20"
                                    animate={{
                                        top: ['-10%', '110%'],
                                        opacity: [0, 1, 1, 0],
                                        background: 'linear-gradient(90deg, transparent, #4285F4, #8b5cf6, #34A853, transparent)'
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                                />

                                {/* Modern Prompt View */}
                                <div className="space-y-3 relative z-10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white">AI</div>
                                        <motion.div
                                            className="px-4 py-2 rounded-2xl rounded-tl-none bg-surface border border-border max-w-[85%]"
                                            initial={{ opacity: 0, scale: 0.9, x: -10 }}
                                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            <p className="text-xs font-medium" style={{ color: 'var(--text-primary)' }}>
                                                {t('ai.prompt.input')}
                                            </p>
                                        </motion.div>
                                    </div>

                                    {/* Progressive Reveal UI */}
                                    <div className="grid grid-cols-2 gap-2 pl-11">
                                        {[
                                            { h: 'h-12', w: 'w-full', delay: 1.5, color: '#4285F420' },
                                            { h: 'h-12', w: 'w-full', delay: 1.7, color: '#8b5cf620' },
                                            { h: 'h-24', w: 'w-full', delay: 1.9, color: 'rgba(255,255,255,0.05)', span: true }
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                className={`${item.h} ${item.w} rounded-xl border border-white/5 ${item.span ? 'col-span-2' : ''} p-2 overflow-hidden`}
                                                style={{ background: item.color }}
                                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    delay: item.delay,
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 25
                                                }}
                                            >
                                                {/* Internal Skeletal Content */}
                                                <motion.div
                                                    className="w-1/2 h-1.5 rounded-full bg-white/10 mb-1.5"
                                                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                                />
                                                <div className="w-3/4 h-1 rounded-full bg-white/5" />

                                                {i === 2 && (
                                                    <div className="mt-4 grid grid-cols-3 gap-1">
                                                        {[1, 2, 3].map(j => (
                                                            <div key={j} className="h-8 rounded bg-white/5" />
                                                        ))}
                                                    </div>
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Interactive Glossy Overlay */}
                                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </SpotlightCard>
                </motion.div>
            </div>
        </div>
    );
}
