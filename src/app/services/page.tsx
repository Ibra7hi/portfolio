import React from 'react';
import ServicesBento from '../../components/ServicesBento';
import ServicesHeader from '../../components/ServicesHeader';

export const metadata = {
    title: 'Services | AI & Full Stack Developer',
    description: 'Premium AI, Mobile, Web, and Backend services.',
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen relative selection:bg-blue-500/30">
            {/* Ambient Background elements to supplement the global background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div 
                    className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-[0.15] dark:opacity-20"
                    style={{ background: 'radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)' }}
                />
            </div>
            
            <ServicesHeader />

            <div className="relative z-10">
                <div className="pt-8 md:pt-4">
                    <ServicesBento />
                </div>
            </div>
        </main>
    );
}
