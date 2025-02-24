import React from 'react';

const Section = ({ children }: { children: React.ReactNode }) => {
    return <section className="h-full min-h-screen w-full">{children}</section>;
};

export default Section;
