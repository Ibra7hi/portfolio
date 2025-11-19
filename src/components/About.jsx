import React from 'react';
import Section from './ui/Section';

const About = () => {
    return (
        <Section id="about" className="bg-secondary/30">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-muted relative z-10">
                        <img
                            src="/src/pngs/hima3.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-border rounded-2xl z-0 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                </div>

                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            I'm a passionate developer with a keen eye for design. I believe that the best digital products are those that look beautiful and work seamlessly.
                        </p>
                        <p>
                            With a background in design and engineering, I bridge the gap between aesthetics and functionality. I specialize in building scalable React applications that prioritize user experience.
                        </p>
                        <ul className="grid grid-cols-2 gap-2 pt-4 text-foreground font-medium">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                Clean Code
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                Modern Design
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                Performance
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                Accessibility
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
