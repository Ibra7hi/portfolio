import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';

const Hero = () => {
    return (
        <Section id="hero" className="min-h-screen flex flex-col justify-center items-start pt-32 relative">
            {/* Radial gradient background behind text (dark mode) */}
           

            <div className="max-w-3xl animate-fade-in-up relative z-10">
                <h2 className="text-sm md:text-base font-medium text-primary mb-4 tracking-wide uppercase">
                    Frontend Developer
                </h2>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
                    Building digital <br />
                    <span className="text-muted-foreground">experiences.</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
                    I craft accessible, pixel-perfect, and performant web experiences with a focus on clean design and user interaction.
                </p>

                <div className="flex flex-wrap gap-4">
                    <Button variant="primary">
                        View Projects
                    </Button>
                    <Button variant="outline">
                        Contact Me
                    </Button>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
