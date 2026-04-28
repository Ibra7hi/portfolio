"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Search, Smartphone, ArrowUpRight, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from './LanguageProvider';
import SpotlightCard from './SpotlightCard';

const accentColors = {
    blue: {
        bg: 'rgba(59, 130, 246, 0.1)',
        border: 'rgba(59, 130, 246, 0.2)',
        text: '#3b82f6',
        glow: 'rgba(59, 130, 246, 0.15)'
    },
    purple: {
        bg: 'rgba(139, 92, 246, 0.1)',
        border: 'rgba(139, 92, 246, 0.2)',
        text: '#8b5cf6',
        glow: 'rgba(139, 92, 246, 0.15)'
    },
    cyan: {
        bg: 'rgba(6, 182, 212, 0.1)',
        border: 'rgba(6, 182, 212, 0.2)',
        text: '#06b6d4',
        glow: 'rgba(6, 182, 212, 0.15)'
    }
};

export default function ProjectsGallery() {
    const { t } = useLanguage();

    const projects = [
        {
            id: 'p1',
            title: t('projects.rag.title'),
            desc: t('projects.rag.desc'),
            tech: ['FastAPI', 'ChromaDB', 'LangChain'],
            size: 'lg:col-span-2',
            icon: <Search size={22} />,
            accent: 'blue',
            link: 'https://github.com/Ibra7hi/RAG-system'
        },
        {
            id: 'p2',
            title: t('projects.agent.title'),
            desc: t('projects.agent.desc'),
            tech: ['LangChain', 'Next.js'],
            size: 'lg:col-span-1',
            icon: <Bot size={22} />,
            accent: 'purple'
        },
        {
            id: 'p3',
            title: t('projects.mobile.title'),
            desc: t('projects.mobile.desc'),
            tech: ['React Native', 'Expo'],
            size: 'lg:col-span-1',
            icon: <Smartphone size={22} />,
            accent: 'cyan'
        },
        {
            id: 'p4',
            title: t('projects.nessim.title'),
            desc: t('projects.nessim.desc'),
            tech: ['HTML', 'CSS', 'JavaScript'],
            size: 'lg:col-span-2',
            icon: <ArrowUpRight size={22} />,
            accent: 'purple',
            link: 'https://github.com/Ibra7hi/nessimlandingpage'
        },
    ];

    return (
        <div className="w-full max-w-6xl px-4 flex flex-col items-center">
            {/* Section Header */}
            <div className="mb-10 w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold mb-3"
                    style={{ color: 'var(--text-primary)' }}
                >
                    {t('projects.headline')}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{ color: 'var(--text-secondary)' }}
                    className="text-lg max-w-2xl"
                >
                    {t('projects.description')}
                </motion.p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {projects.map((project, index) => {
                    const colors = accentColors[project.accent as keyof typeof accentColors];

                    return (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className={cn(
                                "group cursor-pointer",
                                project.size
                            )}
                        >
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block h-full w-full"
                                onClick={(e) => !project.link && e.preventDefault()}
                            >
                                <SpotlightCard 
                                    className="glass-card p-8 h-full flex flex-col items-start relative overflow-hidden"
                                    spotlightColor={colors.glow}
                                >
                                    {/* Subtle Ambient Glow on Hover */}
                                    <div 
                                        className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                        style={{ background: colors.glow }}
                                    />

                                    {/* Visual Header */}
                                    <div className="flex justify-between items-start mb-8 w-full relative z-10">
                                        {project.id === 'p1' ? (
                                            <div className="w-full h-32 relative rounded-xl overflow-hidden mb-2" style={{ background: 'var(--surface-hover)', border: `1px solid ${colors.border}` }}>
                                                {/* Abstract RAG Search UI */}
                                                <div className="absolute inset-4 flex flex-col gap-2">
                                                    {/* Query */}
                                                    <div className="w-2/3 h-2.5 rounded-full bg-blue-500/20" />
                                                    {/* Vector Search Results */}
                                                    <div className="w-full h-2 rounded-full bg-blue-500/10 mt-2" />
                                                    <div className="w-4/5 h-2 rounded-full bg-blue-500/10" />
                                                    <div className="w-5/6 h-2 rounded-full bg-blue-500/10" />
                                                    
                                                    {/* Highlighted extraction */}
                                                    <motion.div 
                                                        className="w-1/2 h-2.5 rounded-full mt-2"
                                                        style={{ background: 'linear-gradient(90deg, #3b82f6, #60a5fa)' }}
                                                        initial={{ opacity: 0.5 }}
                                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <div
                                                className="p-3.5 rounded-2xl transition-transform duration-300 group-hover:scale-105"
                                                style={{
                                                    backgroundColor: colors.bg,
                                                    border: `1px solid ${colors.border}`
                                                }}
                                            >
                                                <span style={{ color: colors.text }}>{project.icon}</span>
                                            </div>
                                        )}

                                        {(project.id !== 'p1' || project.link) && (
                                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/[0.03] border border-white/5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                                <ArrowUpRight
                                                    size={16}
                                                    style={{ color: 'var(--text-primary)' }}
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 mt-auto w-full">
                                        <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-blue-400" style={{ color: 'var(--text-primary)' }}>
                                            {project.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                                            {project.desc}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map(t => (
                                                <span
                                                    key={t}
                                                    className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide"
                                                    style={{
                                                        backgroundColor: 'var(--surface)',
                                                        border: '1px solid var(--border)',
                                                        color: 'var(--text-muted)'
                                                    }}
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </a>
                        </motion.article>
                    );
                })}
            </div>
        </div>
    );
}