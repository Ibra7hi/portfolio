import React from 'react';

const Button = ({ children, variant = 'primary', className = "", ...props }) => {
    const baseStyles = "px-8 py-3 rounded-full font-medium transition-all duration-300 ease-out transform hover:-translate-y-1 active:scale-95 cursor-pointer";

    const variants = {
        primary: "bg-foreground text-background hover:bg-foreground/90 shadow-lg hover:shadow-xl",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-border text-foreground hover:bg-secondary/50",
        ghost: "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
