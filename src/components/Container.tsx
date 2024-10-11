import React from 'react';
import { twMerge } from 'tailwind-merge';

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={twMerge('container mx-auto px-10', className)}>{children}</div>;
};

export default Container;
