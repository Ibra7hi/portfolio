"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageProvider';
import SpotlightCard from './SpotlightCard';
import { Sparkles, LayoutPanelTop, Server, Code, Bot, Settings, Smartphone, Globe, Code2, Database, Workflow, Zap, Send, Cpu } from 'lucide-react';

export default function ServicesBento() {
    const { t } = useLanguage();
    const toolBadge = (name: string, icon: React.ReactNode, delay: number = 0) => (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.4 }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border"
            style={{
                background: 'var(--surface)',
                borderColor: 'var(--border)',
                color: 'var(--text-secondary)'
            }}
        >
            {icon}
            {name}
        </motion.div>
    );

    return (
        <section className="w-full max-w-6xl mx-auto px-4 pt-24 pb-16 relative">
            {/* Header Content */}
            <div className="flex flex-col items-center text-center mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                        style={{ 
                            background: 'rgba(59, 130, 246, 0.1)', 
                            border: '1px solid rgba(59, 130, 246, 0.2)' 
                        }}
                    >
                        <Settings size={14} className="text-blue-400" />
                        <span className="text-xs font-medium text-blue-400">
                            {t('services.badge') || "Expertise & Tools"}
                        </span>
                    </div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl font-black tracking-tight mb-6"
                    style={{ color: 'var(--text-primary)' }}
                >
                    {t('services.headline') || "Our Services"}
                </motion.h2>
                
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl max-w-2xl leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    {t('services.description') || "End-to-end development solutions blending Apple-like glass aesthetics with Google-level architectural precision."}
                </motion.p>
            </div>

            {/* Apple Glass x Google Architecture BENTO GRID */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">

                {/* --- RAG Systems (Wide) --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="md:col-span-12 lg:col-span-8"
                >
                    <SpotlightCard
                        className="p-8 md:p-10 h-full flex flex-col justify-between relative overflow-hidden group rounded-[2rem]"
                        spotlightColor="rgba(168, 85, 247, 0.15)"
                        style={{
                            background: 'var(--surface)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid var(--border)',
                            boxShadow: 'var(--shadow-md)',
                        }}
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] bg-purple-500/10 pointer-events-none" />
                        
                        <div>
                            <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 w-max mb-6">
                                <Code2 size={24} className="text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                                {t('services.rag.title') || "RAG & AI Systems"}
                            </h3>
                            <p className="text-body mb-8 max-w-md" style={{ color: 'var(--text-secondary)' }}>
                                {t('services.rag.desc') || "Intelligent data retrieval and autonomous agents."}
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xs uppercase tracking-wider mb-3 font-semibold" style={{ color: 'var(--text-muted)' }}>Architecture & Tools</h4>
                            <div className="flex flex-wrap gap-2">
                                {toolBadge("LangChain", <Code size={12}/>, 0.2)}
                                {toolBadge("Pinecone / ChromaDB", <Database size={12}/>, 0.3)}
                                {toolBadge("OpenAI", <Sparkles size={12}/>, 0.4)}
                                {toolBadge("HuggingFace", <Settings size={12}/>, 0.5)}
                            </div>
                        </div>
                    </SpotlightCard>
                </motion.div>

                {/* --- Telegram Bots (Small) --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="md:col-span-12 lg:col-span-4"
                >
                    <SpotlightCard
                        className="p-8 md:p-10 h-full flex flex-col relative overflow-hidden group rounded-[2rem]"
                        spotlightColor="rgba(59, 130, 246, 0.15)"
                        style={{
                            background: 'var(--surface)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid var(--border)',
                            boxShadow: 'var(--shadow-md)',
                        }}
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] bg-blue-500/10 pointer-events-none" />
                        
                        <div>
                            <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 w-max mb-6">
                                <Bot size={24} className="text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                                {t('services.bots.title') || "Telegram Bots"}
                            </h3>
                            <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
                                {t('services.bots.desc') || "Automated conversational flows and integrations."}
                            </p>
                        </div>
                        
                        <div className="mt-auto">
                            <h4 className="text-xs uppercase tracking-wider mb-3 font-semibold" style={{ color: 'var(--text-muted)' }}>Tech</h4>
                            <div className="flex flex-wrap gap-2">
                                {toolBadge("Python", <Code size={12}/>, 0.3)}
                                {toolBadge("Webhooks", <Globe size={12}/>, 0.4)}
                                {toolBadge("PTB", <Settings size={12}/>, 0.5)}
                            </div>
                        </div>
                    </SpotlightCard>
                </motion.div>

                {/* --- Front-End (Web & Mobile) --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="md:col-span-12 lg:col-span-6"
                >
                    <SpotlightCard
                        className="p-8 md:p-10 h-full flex flex-col relative overflow-hidden group rounded-[2rem]"
                        spotlightColor="rgba(236, 72, 153, 0.15)"
                        style={{
                            background: 'var(--surface)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid var(--border)',
                            boxShadow: 'var(--shadow-md)',
                        }}
                    >
                        <div className="absolute -bottom-10 right-0 w-64 h-64 rounded-full blur-[100px] bg-pink-500/10 pointer-events-none" />
                        
                        <div>
                            <div className="flex gap-3 mb-6">
                                <div className="p-3 rounded-2xl bg-pink-500/10 border border-pink-500/20 w-max">
                                    <LayoutPanelTop size={24} className="text-pink-400" />
                                </div>
                                <div className="p-3 rounded-2xl bg-pink-500/10 border border-pink-500/20 w-max">
                                    <Smartphone size={24} className="text-pink-400" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                                {t('services.frontend.title') || "Front-End (Web & Mobile)"}
                            </h3>
                            <p className="text-body mb-8" style={{ color: 'var(--text-secondary)' }}>
                                {t('services.frontend.desc') || "Vibrant, responsive UI/UX across all screens."}
                            </p>
                        </div>

                        <div className="mt-auto">
                            <h4 className="text-xs uppercase tracking-wider mb-3 font-semibold" style={{ color: 'var(--text-muted)' }}>Web & Mobile Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {toolBadge("React / Next.js", <Globe size={12}/>, 0.3)}
                                {toolBadge("React Native", <Smartphone size={12}/>, 0.4)}
                                {toolBadge("Tailwind / Framer", <LayoutPanelTop size={12}/>, 0.5)}
                            </div>
                        </div>
                    </SpotlightCard>
                </motion.div>

                {/* --- Back-End (Web & Mobile) --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="md:col-span-12 lg:col-span-6"
                >
                    <SpotlightCard
                        className="p-8 md:p-10 h-full flex flex-col relative overflow-hidden group rounded-[2rem]"
                        spotlightColor="rgba(16, 185, 129, 0.15)"
                        style={{
                            background: 'var(--surface)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid var(--border)',
                            boxShadow: 'var(--shadow-md)',
                        }}
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] bg-emerald-500/10 pointer-events-none" />
                        
                        <div>
                            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 w-max mb-6">
                                <Server size={24} className="text-emerald-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                                {t('services.backend.title') || "Back-End & APIs"}
                            </h3>
                            <p className="text-body mb-8" style={{ color: 'var(--text-secondary)' }}>
                                {t('services.backend.desc') || "Scalable, secure, and lightning-fast server architectures."}
                            </p>
                        </div>

                        <div className="mt-auto">
                            <h4 className="text-xs uppercase tracking-wider mb-3 font-semibold" style={{ color: 'var(--text-muted)' }}>Infrastructure & APIs</h4>
                            <div className="flex flex-wrap gap-2">
                                {toolBadge("Node.js / Express", <Server size={12}/>, 0.3)}
                                {toolBadge("FastAPI / Python", <Code2 size={12}/>, 0.4)}
                                {toolBadge("PostgreSQL / Redis", <Database size={12}/>, 0.5)}
                                {toolBadge("Prisma ORM", <Database size={12}/>, 0.6)}
                            </div>
                        </div>
                    </SpotlightCard>
                </motion.div>

                {/* --- AI Workflow Automation (n8n) (Simple & Static) --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="md:col-span-12"
                >
                    <SpotlightCard
                        className="p-8 md:p-10 h-full flex flex-col justify-between relative overflow-hidden group rounded-[2rem]"
                        spotlightColor="rgba(16, 185, 129, 0.15)"
                        style={{
                            background: 'var(--surface)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid var(--border)',
                            boxShadow: 'var(--shadow-md)',
                        }}
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] bg-emerald-500/10 pointer-events-none z-0" />
                        
                        <div className="flex flex-col lg:flex-row gap-10 relative z-10 w-full h-full justify-between items-start lg:items-center">
                            <div className="lg:max-w-md">
                                <div className="flex gap-3 mb-6">
                                    <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 w-max">
                                        <Workflow size={24} className="text-emerald-400" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                                    {t?.('ai.automation.title') || "AI Workflow Automation"}
                                </h3>
                                <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
                                    {t?.('ai.automation.desc') || "Deep, precise data flow & seamless system integrations via n8n and advanced AI pipelines."}
                                </p>
                            </div>
                            
                            <div className="flex-1 w-full overflow-x-auto pb-2 lg:pb-0">
                                <div className="min-w-[480px] w-full mt-4 lg:mt-0">
                                    <h4 className="text-xs uppercase tracking-wider mb-4 font-semibold" style={{ color: 'var(--text-muted)' }}>Workflow Architecture</h4>
                                    <div className="flex gap-3 w-full">
                                        {[
                                            { icon: Zap, label: 'Trigger Event', bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
                                            { icon: Code2, label: 'Process Data', bg: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
                                            { icon: Cpu, label: 'DeepSeek LLM', bg: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
                                            { icon: Send, label: 'Action Deploy', bg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
                                        ].map((node, i, arr) => (
                                            <div key={node.label} className="flex-1 relative flex flex-col items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                                                <div className={`p-2.5 rounded-xl ${node.bg} border shrink-0 z-10 relative bg-black/40 backdrop-blur-sm`}>
                                                    <node.icon size={20} />
                                                </div>
                                                <span className="text-xs font-semibold tracking-wide" style={{ color: 'var(--text-primary)' }}>{node.label}</span>
                                                
                                                {/* Connecting line between squares */}
                                                {i < arr.length - 1 && (
                                                    <div className="absolute top-[34px] -right-[18px] w-8 h-px bg-white/10 z-0"></div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>
                </motion.div>

                {/* --- Full-Stack Solutions (Bottom Full Width) --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="md:col-span-12 text-center mt-6"
                >
                    <SpotlightCard
                        className="p-8 relative overflow-hidden group rounded-full max-w-2xl mx-auto"
                        spotlightColor="rgba(59, 130, 246, 0.15)"
                        style={{
                            background: 'var(--surface)',
                            backdropFilter: 'blur(30px)',
                            border: '1px solid var(--border)',
                            boxShadow: 'var(--shadow-md)',
                        }}
                    >
                        <h3 className="text-xl font-bold mb-2 flex justify-center items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                            <Settings size={20} style={{ color: 'var(--text-muted)' }} />
                            {t('services.fullstack.title') || "Full-Stack Solutions"}
                        </h3>
                        <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                            {t('services.fullstack.desc') || "Complete lifecycle development from database to user interface."}
                        </p>
                    </SpotlightCard>
                </motion.div>

            </div>
        </section>
    );
}
