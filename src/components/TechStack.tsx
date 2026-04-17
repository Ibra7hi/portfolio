"use client";

import React, { useEffect, useState } from 'react';
import { useLanguage } from './LanguageProvider';
import SpotlightCard from './SpotlightCard';
import { SiNextdotjs, SiFastapi, SiExpress, SiPostgresql, SiReact, SiDocker, SiPrisma, SiSqlalchemy } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import {
    Layers,
    Zap,
    Server,
    Shield,
    Cpu,
    Search,
    ArrowRight,
    Code2,
    Smartphone,
    Box
} from 'lucide-react';

/**
 * TechStack — Premium Bento Grid
 *
 * Inspired by AI Integration section's visual richness, but with a unique identity:
 * - Bento grid with varied card sizes (2-col spans, different heights)
 * - SpotlightCard with liquid-glass effect
 * - Rich inner visual content (architecture diagrams, live indicators, code snippets)
 * - Accent-colored icon containers with animated glows
 * - Google MD3 Expressive spring physics + Apple HIG Depth/Clarity
 */

export default function TechStack() {
    const { t, isRTL } = useLanguage();
    return (
        <div className="w-full max-w-6xl px-4 flex flex-col items-center">

            {/* ═══════════════════════════════════════════ */}
            {/*  BENTO GRID                                */}
            {/* ═══════════════════════════════════════════ */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

                {/* ────────────────────────────────────────── */}
                {/*  CARD 1: Next.js — Hero Card (spans 2)    */}
                {/* ────────────────────────────────────────── */}
                <div className="lg:col-span-2">
                    <SpotlightCard
                        className="glass-card p-8 h-full min-h-[300px] flex flex-col"
                        spotlightColor="rgba(255, 255, 255, 0.08)"
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                            <div
                                className="p-3 rounded-2xl"
                                style={{
                                    background: 'var(--surface)',
                                    border: '1px solid var(--border)',
                                }}
                            >
                                <SiNextdotjs size={28} style={{ color: 'var(--text-primary)' }} />
                            </div>
                            <Layers size={18} style={{ color: 'var(--text-muted)' }} />
                        </div>

                        <h3 className="text-title mb-2" style={{ color: 'var(--text-primary)' }}>
                            Next.js
                        </h3>
                        <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>
                            {t('tech.nextjs.role')}
                        </p>
                        <p className="text-body mb-6" style={{ color: 'var(--text-secondary)' }}>
                            {t('tech.nextjs.benefit')}
                        </p>

                        {/* Architecture Visualization */}
                        <div
                            className="mt-auto rounded-xl p-5 relative overflow-hidden"
                            style={{
                                background: 'var(--surface-hover)',
                                border: '1px solid var(--border)',
                            }}
                        >
                            <div className="flex items-center justify-between gap-3">
                                {['SSR', 'ISR', 'CSR', 'API'].map((mode, index) => (
                                    <React.Fragment key={mode}>
                                        <div className="flex flex-col items-center gap-2">
                                            <div
                                                className="w-11 h-11 rounded-xl flex items-center justify-center text-xs font-bold"
                                                style={{
                                                    background: 'var(--surface)',
                                                    border: '1px solid var(--border)',
                                                    color: 'var(--text-primary)',
                                                }}
                                            >
                                                {mode}
                                            </div>
                                            <span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>
                                                {mode === 'SSR' ? 'Server' : mode === 'ISR' ? 'Hybrid' : mode === 'CSR' ? 'Client' : 'Routes'}
                                            </span>
                                        </div>

                                        {index < 3 && (
                                            <div
                                                className="hidden sm:block flex-1 h-px"
                                                style={{
                                                    background: `linear-gradient(to ${isRTL ? 'left' : 'right'}, rgba(255,255,255,0.15), rgba(255,255,255,0.03))`,
                                                }}
                                            />
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </SpotlightCard>
                </div>

                {/* ────────────────────────────────────────── */}
                {/*  CARD 2: React Native                     */}
                {/* ────────────────────────────────────────── */}
                <div>
                    <SpotlightCard
                        className="glass-card p-8 h-full min-h-[300px] flex flex-col"
                        spotlightColor="rgba(6, 182, 212, 0.12)"
                    >
                        <div className="flex items-start justify-between mb-6">
                            <div
                                className="p-3 rounded-2xl"
                                style={{
                                    background: 'rgba(6, 182, 212, 0.12)',
                                    border: '1px solid rgba(6, 182, 212, 0.2)',
                                }}
                            >
                                <SiReact size={28} style={{ color: '#06b6d4' }} />
                            </div>
                            <Smartphone size={16} style={{ color: 'var(--text-muted)' }} />
                        </div>

                        <h3 className="text-title mb-2" style={{ color: 'var(--text-primary)' }}>
                            React Native
                        </h3>
                        <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>
                            {t('tech.reactnative.role')}
                        </p>
                        <p className="text-body mb-6" style={{ color: 'var(--text-secondary)' }}>
                            {t('tech.reactnative.benefit')}
                        </p>

                        {/* Platform Indicators */}
                        <div className="mt-auto space-y-2.5">
                            {[
                                { name: 'iOS', color: '#ffffff' },
                                { name: 'Android', color: '#3ddc84' },
                            ].map((platform, index) => (
                                <div
                                    key={platform.name}
                                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg"
                                    style={{
                                        background: 'var(--surface)',
                                        border: '1px solid var(--border)',
                                    }}
                                >
                                    <div
                                        className="w-2.5 h-2.5 rounded-full"
                                        style={{ background: platform.color }}
                                    />
                                    <span
                                        className="text-sm font-medium"
                                        style={{ color: 'var(--text-primary)' }}
                                    >
                                        {platform.name}
                                    </span>
                                    <div className="ml-auto">
                                        <div
                                            className="w-1.5 h-1.5 rounded-full"
                                            style={{ background: '#22c55e' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SpotlightCard>
                </div>

                {/* ────────────────────────────────────────── */}
                {/*  CARD 3: FastAPI — Accent Card            */}
                {/* ────────────────────────────────────────── */}
                <div>
                    <SpotlightCard
                        className="glass-card p-8 h-full min-h-[300px] flex flex-col relative overflow-hidden group"
                        spotlightColor="rgba(16, 185, 129, 0.12)"
                    >
                        {/* Ambient Glow */}
                        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
                            <div
                                className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[60px]"
                                style={{ background: 'radial-gradient(circle, #10b981 0%, transparent 70%)' }}
                            />
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex gap-3 mb-6">
                                    <div
                                        className="p-3 rounded-2xl"
                                        style={{
                                            background: 'rgba(16, 185, 129, 0.12)',
                                            border: '1px solid rgba(16, 185, 129, 0.2)',
                                        }}
                                    >
                                        <SiFastapi size={28} style={{ color: '#10b981' }} />
                                    </div>
                                    <div
                                        className="p-3 rounded-2xl"
                                        style={{
                                            background: 'rgba(239, 68, 68, 0.12)',
                                            border: '1px solid rgba(239, 68, 68, 0.2)',
                                        }}
                                    >
                                        <SiSqlalchemy size={28} style={{ color: '#ef4444' }} />
                                    </div>
                                </div>
                                <Zap size={16} style={{ color: '#10b981' }} />
                            </div>

                            <h3 className="text-title mb-2 flex items-center gap-2 flex-wrap" style={{ color: 'var(--text-primary)' }}>
                                <span>FastAPI</span> <span className="text-sm font-normal text-muted-foreground">+</span> <span>SQLAlchemy 2.0</span>
                            </h3>
                            <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>
                                {t('tech.fastapi.role')}
                            </p>
                            <p className="text-body mb-6" style={{ color: 'var(--text-secondary)' }}>
                                {t('tech.fastapi.benefit')}
                            </p>

                            {/* Async Performance Visual */}
                            <div
                                className="mt-auto rounded-xl p-4"
                                style={{
                                    background: 'var(--surface-hover)',
                                    border: '1px solid var(--border)',
                                }}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-2 h-2 rounded-full" style={{ background: '#10b981' }} />
                                    <span className="text-[11px] font-medium" style={{ color: 'var(--text-muted)' }}>
                                        async performance
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    {[85, 92, 78].map((width, i) => (
                                        <div
                                            key={i}
                                            className="h-1.5 rounded-full"
                                            style={{ background: 'var(--surface)' }}
                                        >
                                            <div
                                                className="h-full rounded-full"
                                                style={{
                                                    background: `linear-gradient(to ${isRTL ? 'left' : 'right'}, #10b981, #059669)`,
                                                    width: `${width}%`,
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>
                </div>

                {/* ────────────────────────────────────────── */}
                {/*  CARD 4: Express.js + PostgreSQL (wide)   */}
                {/* ────────────────────────────────────────── */}
                <div className="md:col-span-2 lg:col-span-2">
                    <SpotlightCard
                        className="glass-card p-8 flex flex-col lg:flex-row gap-8"
                        spotlightColor="rgba(59, 130, 246, 0.1)"
                    >
                        {/* Express.js Side */}
                        <div className="flex-1">
                            <div
                                className="inline-flex p-3 rounded-2xl mb-5"
                                style={{
                                    background: 'rgba(113, 113, 122, 0.12)',
                                    border: '1px solid rgba(113, 113, 122, 0.2)',
                                }}
                            >
                                <SiExpress size={28} style={{ color: '#a1a1aa' }} />
                            </div>

                            <h3 className="text-title mb-2" style={{ color: 'var(--text-primary)' }}>
                                Express.js
                            </h3>
                            <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>
                                {t('tech.express.role')}
                            </p>
                            <p className="text-body mb-5" style={{ color: 'var(--text-secondary)' }}>
                                {t('tech.express.benefit')}
                            </p>

                            {/* Route Stack Visual */}
                            <div className="space-y-2">
                                {[
                                    { method: 'GET', path: '/api/users', color: '#3b82f6' },
                                    { method: 'POST', path: '/api/auth', color: '#10b981' },
                                    { method: 'PUT', path: '/api/data', color: '#f59e0b' },
                                ].map((route, index) => (
                                    <div
                                        key={route.path}
                                        className="flex items-center gap-3 px-3 py-2 rounded-lg"
                                        style={{
                                            background: 'var(--surface-hover)',
                                            border: '1px solid var(--border)',
                                        }}
                                    >
                                        <span
                                            className="text-[10px] font-bold px-2 py-0.5 rounded"
                                            style={{
                                                background: `${route.color}20`,
                                                color: route.color,
                                            }}
                                        >
                                            {route.method}
                                        </span>
                                        <code
                                            className="text-xs font-mono"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            {route.path}
                                        </code>
                                        <div className="ml-auto">
                                            <div
                                                className="w-1.5 h-1.5 rounded-full"
                                                style={{ background: '#22c55e' }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div
                            className="hidden lg:block w-px self-stretch"
                            style={{ background: 'var(--surface)' }}
                        />
                        <div
                            className="lg:hidden h-px w-full"
                            style={{ background: 'var(--surface)' }}
                        />

                        {/* PostgreSQL + Prisma Side */}
                        <div className="flex-1">
                            <div className="flex gap-3 mb-5">
                                <div
                                    className="inline-flex p-3 rounded-2xl"
                                    style={{
                                        background: 'rgba(37, 99, 235, 0.12)',
                                        border: '1px solid rgba(37, 99, 235, 0.2)',
                                    }}
                                >
                                    <SiPostgresql size={28} style={{ color: '#3b82f6' }} />
                                </div>
                                <div
                                    className="inline-flex p-3 rounded-2xl"
                                    style={{
                                        background: 'rgba(90, 103, 216, 0.12)',
                                        border: '1px solid rgba(90, 103, 216, 0.2)',
                                    }}
                                >
                                    <SiPrisma size={28} style={{ color: '#5a67d8' }} />
                                </div>
                            </div>

                            <h3 className="text-title mb-2 flex items-center gap-2 flex-wrap" style={{ color: 'var(--text-primary)' }}>
                                <span>PostgreSQL</span> <span className="text-sm font-normal text-muted-foreground">+</span> <span>Prisma ORM</span>
                            </h3>
                            <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>
                                {t('tech.postgres.role')}
                            </p>
                            <p className="text-body mb-5" style={{ color: 'var(--text-secondary)' }}>
                                {t('tech.postgres.benefit')}
                            </p>

                            {/* Database Schema Visual */}
                            <div
                                className="rounded-xl p-4"
                                style={{
                                    background: 'var(--surface-hover)',
                                    border: '1px solid var(--border)',
                                }}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <Shield size={12} style={{ color: '#3b82f6' }} />
                                    <span className="text-[11px] font-medium" style={{ color: 'var(--text-muted)' }}>
                                        ACID transactions
                                    </span>
                                </div>
                                {/* Table Schema Mini */}
                                <div className="space-y-1.5">
                                    {[
                                        { field: 'users', type: 'TABLE', w: '100%' },
                                        { field: 'orders', type: 'TABLE', w: '85%' },
                                        { field: 'products', type: 'TABLE', w: '92%' },
                                    ].map((row, i) => (
                                        <div
                                            key={row.field}
                                            className="flex items-center gap-2"
                                        >
                                            <code
                                                className="text-[10px] font-mono flex-shrink-0"
                                                style={{ color: 'var(--text-secondary)', width: '56px' }}
                                            >
                                                {row.field}
                                            </code>
                                            <div className="flex-1 h-1 rounded-full" style={{ background: 'var(--surface)' }}>
                                                <div
                                                    className="h-full rounded-full"
                                                    style={{
                                                        background: 'linear-gradient(to right, rgba(59,130,246,0.4), rgba(59,130,246,0.15))',
                                                        width: row.w,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>
                </div>

                {/* ────────────────────────────────────────── */}
                {/*  CARD 5: ChromaDB — Vector Store          */}
                {/* ────────────────────────────────────────── */}
                <div className="md:col-span-2 lg:col-span-1">
                    <SpotlightCard
                        className="glass-card p-8 h-full min-h-[320px] flex flex-col relative overflow-hidden group"
                        spotlightColor="rgba(99, 102, 241, 0.12)"
                    >
                        {/* Ambient Glow */}
                        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                            <div
                                className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full blur-[60px]"
                                style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }}
                            />
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-start justify-between mb-6">
                                <div
                                    className="p-3 rounded-2xl relative"
                                    style={{
                                        background: 'rgba(99, 102, 241, 0.12)',
                                        border: '1px solid rgba(99, 102, 241, 0.2)',
                                    }}
                                >
                                    <FaDatabase size={28} style={{ color: '#6366f1' }} />
                                    {/* Pulse glow */}
                                    <div
                                        className="absolute inset-0 rounded-2xl blur-md opacity-20"
                                        style={{ background: 'linear-gradient(45deg, #6366f1, #4f46e5)' }}
                                    />
                                </div>
                                <Search size={16} style={{ color: 'var(--text-muted)' }} />
                            </div>

                            <h3 className="text-title mb-2" style={{ color: 'var(--text-primary)' }}>
                                ChromaDB
                            </h3>
                            <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>
                                {t('tech.chromadb.role')}
                            </p>
                            <p className="text-body mb-6" style={{ color: 'var(--text-secondary)' }}>
                                {t('tech.chromadb.benefit')}
                            </p>

                            {/* Vector Embedding Visualization */}
                            <div
                                className="mt-auto rounded-xl p-5 overflow-hidden relative"
                                style={{
                                    background: 'var(--surface-hover)',
                                    border: '1px solid var(--border)',
                                }}
                            >
                                {/* Embedding dots grid */}
                                <div className="grid grid-cols-8 gap-1.5 relative z-10">
                                    {Array.from({ length: 24 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-2 h-2 rounded-full"
                                            style={{
                                                background: i % 3 === 0
                                                    ? 'rgba(99, 102, 241, 0.6)'
                                                    : i % 5 === 0
                                                        ? 'rgba(129, 140, 248, 0.4)'
                                                        : 'rgba(255, 255, 255, 0.08)',
                                                opacity: i % 4 === 0 ? 1 : 0.55,
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Glossy overlay */}
                                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </SpotlightCard>
                </div>

                {/* ────────────────────────────────────────── */}
                {/*  CARD 6: Docker + Prisma (wide)           */}
                {/* ────────────────────────────────────────── */}
                <div className="md:col-span-2 lg:col-span-2">
                    <SpotlightCard
                        className="glass-card p-8 flex flex-col lg:flex-row gap-8"
                        spotlightColor="rgba(36, 150, 237, 0.1)"
                    >
                        {/* Docker Side */}
                        <div className="flex-1">
                            <div
                                className="inline-flex p-3 rounded-2xl mb-5"
                                style={{
                                    background: 'rgba(36, 150, 237, 0.12)',
                                    border: '1px solid rgba(36, 150, 237, 0.2)',
                                }}
                            >
                                <SiDocker size={28} style={{ color: '#2496ED' }} />
                            </div>

                            <h3 className="text-title mb-2" style={{ color: 'var(--text-primary)' }}>
                                Docker
                            </h3>
                            <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>
                                {t('tech.docker.role')}
                            </p>
                            <p className="text-body mb-5" style={{ color: 'var(--text-secondary)' }}>
                                {t('tech.docker.benefit')}
                            </p>

                            {/* Containers Visual */}
                            <div className="space-y-2">
                                {[
                                    { name: 'app_backend', port: '8080' },
                                    { name: 'db_postgres', port: '5432' },
                                    { name: 'cache_redis', port: '6379' },
                                ].map((container, index) => (
                                    <div
                                        key={container.name}
                                        className="flex items-center gap-3 px-3 py-2 rounded-lg"
                                        style={{
                                            background: 'var(--surface-hover)',
                                            border: '1px solid var(--border)',
                                        }}
                                    >
                                        <Box size={14} style={{ color: '#2496ED' }} />
                                        <code
                                            className="text-xs font-mono"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            {container.name}
                                        </code>
                                        <div className="ml-auto flex items-center gap-2">
                                            <span className="text-[10px] text-zinc-500">:{container.port}</span>
                                            <div
                                                className="w-1.5 h-1.5 rounded-full"
                                                style={{ background: '#22c55e' }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div
                            className="hidden lg:block w-px self-stretch"
                            style={{ background: 'var(--surface)' }}
                        />
                        <div
                            className="lg:hidden h-px w-full"
                            style={{ background: 'var(--surface)' }}
                        />

                        {/* Node.js Side */}
                        <div className="flex-1">
                            <div
                                className="inline-flex p-3 rounded-2xl mb-5"
                                style={{
                                    background: 'rgba(104, 160, 99, 0.12)',
                                    border: '1px solid rgba(104, 160, 99, 0.2)',
                                }}
                            >
                                <Code2 size={28} style={{ color: '#68a063' }} />
                            </div>

                            <h3 className="text-title mb-2" style={{ color: 'var(--text-primary)' }}>
                                Scalable Microservices
                            </h3>
                            <p className="text-body mb-5" style={{ color: 'var(--text-secondary)' }}>
                                Decoupled event-driven scaling for high-availability systems.
                            </p>

                            {/* Node visual */}
                            <div
                                className="rounded-xl p-4"
                                style={{
                                    background: 'var(--surface-hover)',
                                    border: '1px solid var(--border)',
                                }}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <Server size={12} style={{ color: '#68a063' }} />
                                    <span className="text-[11px] font-medium" style={{ color: 'var(--text-muted)' }}>
                                        Event mesh network
                                    </span>
                                </div>
                                <div className="flex justify-between items-center px-4">
                                    <div className="w-8 h-8 rounded-full border-2 border-green-500/30 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-green-500"></div></div>
                                    <div className="h-0.5 flex-1 bg-green-500/20 mx-2"></div>
                                    <div className="w-8 h-8 rounded-full border-2 border-emerald-500/30 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-emerald-500"></div></div>
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>
                </div>
            </div>
        </div>
    );
}