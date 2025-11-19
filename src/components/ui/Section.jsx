import React from 'react';

const Section = ({ children, id, className = "" }) => {
    return (
        <section id={id} className={`py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
            {children}
        </section>
    );
};

export default Section;
