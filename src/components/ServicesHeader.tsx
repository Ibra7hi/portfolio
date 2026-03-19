"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { IoLanguageOutline, IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { useLanguage } from './LanguageProvider';
import { useTheme } from './ThemeProvider';

export default function ServicesHeader() {
    const { toggleLanguage, language } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    const glassStyle = {
        background: 'var(--surface)',
        backdropFilter: 'blur(20px)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-md)',
        color: 'var(--text-secondary)'
    };

    return (
        <React.Fragment>
            {/* Premium Fixed Back Button */}
            <div className="fixed top-6 left-6 rtl:left-auto rtl:right-6 z-50">
                <Link 
                    href="/"
                    className="group flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                    style={glassStyle}
                    aria-label="Back to Home"
                >
                    <ArrowLeft size={20} className="transition-colors duration-300 rtl:rotate-180" style={{ color: 'var(--text-primary)' }} />
                </Link>
            </div>

            {/* Utilities (Theme & Language) */}
            <div className="fixed top-6 right-6 rtl:right-auto rtl:left-6 z-50 flex items-center gap-3">
                <button
                    onClick={toggleTheme}
                    className="group flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                    style={glassStyle}
                    title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    aria-label="Toggle Theme"
                >
                    {theme === 'dark' ? (
                        <IoSunnyOutline size={22} className="transition-colors duration-300" style={{ color: 'var(--text-primary)' }} />
                    ) : (
                        <IoMoonOutline size={22} className="transition-colors duration-300" style={{ color: 'var(--text-primary)' }} />
                    )}
                </button>

                <button
                    onClick={toggleLanguage}
                    className="group flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 relative"
                    style={glassStyle}
                    title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
                    aria-label="Toggle Language"
                >
                    <IoLanguageOutline size={22} className="transition-colors duration-300" style={{ color: 'var(--text-primary)' }} />
                    <span className="absolute top-2 right-2 flex h-2.5 w-2.5 items-center justify-center">
                        <span className="text-[9px] font-bold uppercase" style={{ color: 'var(--text-primary)' }}>{language}</span>
                    </span>
                </button>
            </div>
        </React.Fragment>
    );
}
