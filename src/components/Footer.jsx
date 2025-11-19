import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-border/50 bg-muted/10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://x.com/Ibra7ima3dm?t=SssRxV1yVrnRPB2rSThGcg&s=09" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
