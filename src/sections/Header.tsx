import useOffSetTop from '@/hooks/useOffSetTop';
import { cn } from '@/utils/cn';
import { useEffect, useState } from 'react';

const Header = () => {
    const LINKS = [
        { title: 'About', link: '#about' },
        { title: 'Experience', link: '#exp' },
        { title: 'Projects', link: '#projects' },
        { title: 'Contact', link: '#contact' },
    ];

    const isoffset = useOffSetTop();

    const [activeHash, setActiveHash] = useState('');

    useEffect(() => {
        const handleHashChange = () => {
            setActiveHash(window.location.hash);
        };

        window.addEventListener('hashchange', handleHashChange);

        handleHashChange();

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <header
            className={cn('fixed top-0 z-50 w-full p-4 backdrop-blur-3xl md:p-4 lg:px-10', {
                'shadow-lg': isoffset,
            })}
        >
            <div className="flex flex-1 flex-wrap items-center justify-between gap-4">
                <div className="flex flex-row items-center gap-10 lg:gap-16">
                    <a className="block flex-shrink-0">
                        <img
                            src="/logo.svg"
                            alt="logo"
                            className="w-[8rem] max-w-[6rem] sm:w-[8rem]"
                        />
                    </a>
                </div>

                <div className="ml-auto items-center gap-4 font-normal sm:flex md:gap-12">
                    <nav className="hidden md:flex">
                        <ul className="flex gap-x-12 text-[0.84rem]">
                            {LINKS.map((link) => (
                                <li key={link.title}>
                                    <a
                                        href={link.link}
                                        className={cn(
                                            'cursor-pointer text-md font-medium text-slate-200 decoration-transparent transition-all duration-300 ease-in-out hover:text-cyan-500',
                                            {
                                                'text-cyan-500': activeHash === link.link,
                                            }
                                        )}
                                    >
                                        <span className="text-sm font-bold text-cyan-500">
                                            {'< '}
                                        </span>
                                        {link.title}
                                        <span className="text-sm font-bold text-cyan-500">
                                            {' />'}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex items-center text-[#5BC3EB]">
                        <a
                            href="/resume_lsabornido.pdf"
                            download="resume_lsabornido.pdf"
                            className="rounded-md border border-[#5BC3EB] px-5 py-3 text-md font-medium transition-transform duration-300 hover:scale-110"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
