import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-sm py-4 border-b border-border/50' : 'bg-transparent py-6'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                    <a href="#" className="text-xl font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity">
                        Portfolio<span className="text-primary">.</span>
                    </a>

                    <div className="flex items-center gap-4">
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </nav>

                        <div className="hidden md:block">
                            <ThemeToggle />
                        </div>

                        <button
                            className="md:hidden text-foreground ml-4"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="sr-only">Menu</span>
                            {mobileMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="4" x2="20" y1="12" y2="12" />
                                    <line x1="4" x2="20" y1="6" y2="6" />
                                    <line x1="4" x2="20" y1="18" y2="18" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-background/98 backdrop-blur-sm"
                    onClick={() => setMobileMenuOpen(false)}
                />

                {/* Menu Content */}
                <nav className={`relative h-full flex flex-col items-center justify-center gap-8 transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
                    }`}>
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={handleLinkClick}
                            className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
                            style={{
                                transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms'
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="mt-4" style={{ transitionDelay: mobileMenuOpen ? '200ms' : '0ms' }}>
                        <ThemeToggle />
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
