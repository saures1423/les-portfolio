import React from 'react';
import { twMerge } from 'tailwind-merge';

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div
            className={twMerge(
                'mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10',
                className
            )}
        >
            {children}
        </div>
    );
};

export default Container;
