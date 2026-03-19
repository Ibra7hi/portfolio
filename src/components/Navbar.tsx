"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  IoHomeOutline,
  IoHome,
  IoPersonOutline,
  IoPerson,
  IoLayersOutline,
  IoLayers,
  IoMailOutline,
  IoMail,
  IoLanguageOutline,
  IoMoonOutline,
  IoSunnyOutline
} from "react-icons/io5";
import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageProvider';

export default function BentoNavbar() {
  const { theme, toggleTheme } = useTheme();
  const { t, toggleLanguage, language } = useLanguage();
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', name: t('nav.home'), icon: IoHomeOutline, activeIcon: IoHome, href: '#hero' },
    { id: 'about', name: t('nav.about'), icon: IoPersonOutline, activeIcon: IoPerson, href: '#about' },
    { id: 'projects', name: t('nav.projects'), icon: IoLayersOutline, activeIcon: IoLayers, href: '#projects' },
    { id: 'contact', name: t('nav.contact'), icon: IoMailOutline, activeIcon: IoMail, href: '#contact' },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
        className="flex items-center gap-2 px-3 py-2.5 rounded-full"
        style={{
          backgroundColor: theme === 'dark' ? 'rgba(20, 20, 20, 0.65)' : 'rgba(255, 255, 255, 0.65)',
          border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          boxShadow: theme === 'dark'
            ? '0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            : '0 12px 40px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
        }}
      >
        {/* Nav Items */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = isActive ? item.activeIcon : item.icon;

            return (
              <motion.a
                key={item.id}
                href={item.href}
                onClick={() => setActiveTab(item.id)}
                className="relative flex items-center justify-center p-3 rounded-full transition-all group"
                style={{
                  color: isActive ? 'var(--foreground)' : 'var(--text-secondary)',
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                <Icon size={22} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />

                {/* Tooltip on Hover */}
                <span className="sr-only">{item.name}</span>
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                      animate={{ width: 'auto', opacity: 1, marginLeft: 8 }}
                      exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                      className="text-sm font-semibold overflow-hidden whitespace-nowrap z-10 pr-1"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.a>
            );
          })}
        </div>

        {/* Divider */}
        <div
          className="w-px h-6 mx-2"
          style={{ backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)' }}
        />

        {/* Utilities Group */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full relative group"
            style={{ color: 'var(--text-secondary)' }}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <IoSunnyOutline size={22} /> : <IoMoonOutline size={22} />}
          </motion.button>

          {/* Translation Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleLanguage}
            className="p-2 rounded-full relative group"
            style={{ color: 'var(--text-secondary)' }}
            title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
          >
            <IoLanguageOutline size={22} />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5 items-center justify-center">
              <span className="text-[8px] font-bold uppercase">{language}</span>
            </span>
          </motion.button>
        </div>
      </motion.div>
    </nav>
  );
}