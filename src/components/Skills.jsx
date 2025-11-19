import React from 'react';
import Section from './ui/Section';

const skills = [
    { name: "React", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "TailwindCSS", level: "Advanced" },
    { name: "Next.js", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Figma", level: "Intermediate" },
    { name: "Git", level: "Advanced" },
    { name: "GraphQL", level: "Basic" },
];

const Skills = () => {
    return (
        <Section id="skills">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                <p className="text-muted-foreground">
                    A curated list of technologies and tools I use to build digital products.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                    >
                        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{skill.name}</h3>
                        <p className="text-sm text-muted-foreground">{skill.level}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
