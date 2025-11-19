import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';

const Contact = () => {
    return (
        <Section id="contact" className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    Have a project in mind or just want to say hello? I'd love to hear from you.
                </p>
            </div>

            <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                    <textarea
                        id="message"
                        rows="4"
                        className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                        placeholder="Tell me about your project..."
                    ></textarea>
                </div>

                <div className="text-center pt-4">
                    <Button variant="primary" className="min-w-[200px]">
                        Send Message
                    </Button>
                </div>
            </form>
        </Section>
    );
};

export default Contact;
