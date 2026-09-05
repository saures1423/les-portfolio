import Container from '@/components/Container';
import useOffSetTop from '@/hooks/useOffSetTop';
import { cn } from '@/utils/cn';
import { useEffect, useState } from 'react';

const links = [
    { title: 'About', link: '#about' },
    { title: 'Experience', link: '#experience' },
    { title: 'Projects', link: '#projects' },
    { title: 'Contact', link: '#contact' },
];

const Header = () => {
    const isOffset = useOffSetTop();
    const [activeHash, setActiveHash] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleHashChange = () => setActiveHash(window.location.hash);

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return (
        <header
            className={cn(
                'fixed inset-x-0 top-0 z-50 border-b border-transparent transition-colors duration-300',
                {
                    'border-[#243735] bg-[#071316]/95 shadow-[0_8px_28px_rgba(0,0,0,0.2)] backdrop-blur':
                        isOffset,
                }
            )}
        >
            <Container className="relative flex h-16 items-center justify-between gap-3 sm:h-[4.5rem] sm:gap-6">
                <a
                    href="#hero"
                    className="group flex min-w-0 items-center gap-3"
                    aria-label="Back to top"
                >
                    <span className="flex min-w-0 items-center gap-2.5 xl:hidden">
                        <img
                            src="/images/meback.jpg"
                            alt=""
                            className="h-10 w-10 shrink-0 rounded-full border border-[#38504b] object-cover object-top"
                        />
                        <span className="min-w-0">
                            <span className="block truncate text-sm font-extrabold text-[#f3f7f4]">
                                Leslie Sabornido
                            </span>
                            <span className="block truncate text-xs font-medium text-[#8fa39f]">
                                Full-stack developer
                            </span>
                        </span>
                    </span>
                    <span className="hidden h-10 w-10 shrink-0 xl:block" aria-hidden="true">
                        <img
                            src="/brand/leslie-sabornido-mark.svg"
                            alt=""
                            className="h-full w-full"
                        />
                    </span>
                </a>

                <div className="flex shrink-0 items-center gap-2 sm:gap-4 xl:gap-7">
                    <nav className="hidden xl:block" aria-label="Primary navigation">
                        <ul className="flex items-center gap-7">
                            {links.map((link) => (
                                <li key={link.title}>
                                    <a
                                        href={link.link}
                                        className={cn(
                                            'text-sm font-medium text-[#9bb0ac] transition-colors hover:text-[#d1f463]',
                                            {
                                                'text-[#d1f463]': activeHash === link.link,
                                            }
                                        )}
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <a
                        href="/resume_lsabornido.pdf"
                        download="resume_lsabornido.pdf"
                        className="hidden border border-[#d1f463] px-3 py-2 text-xs font-bold text-[#d1f463] transition-colors hover:bg-[#d1f463] hover:text-[#071316] sm:px-4 sm:text-sm xl:inline-flex"
                    >
                        Resume
                    </a>

                    <button
                        type="button"
                        className="grid h-9 w-9 place-items-center border border-[#38504b] text-[#f3f7f4] transition-colors hover:border-[#d1f463] hover:text-[#d1f463] xl:hidden"
                        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                    >
                        <span className="flex w-4 flex-col gap-1" aria-hidden="true">
                            <span className="h-px w-full bg-current" />
                            <span className="h-px w-full bg-current" />
                            <span className="h-px w-full bg-current" />
                        </span>
                    </button>
                </div>

                {isMenuOpen && (
                    <nav
                        id="mobile-navigation"
                        className="absolute right-4 top-[calc(100%+0.5rem)] w-[min(15rem,calc(100vw-2rem))] border border-[#304441] bg-[#0b1a1d] p-2 shadow-[0_12px_30px_rgba(0,0,0,0.28)] sm:right-6 md:right-8 xl:hidden"
                        aria-label="Mobile navigation"
                    >
                        <ul className="grid">
                            {links.map((link) => (
                                <li key={link.title}>
                                    <a
                                        href={link.link}
                                        className={cn(
                                            'block px-4 py-3 text-sm font-bold text-[#aebeba] transition-colors hover:bg-[#14282a] hover:text-[#d1f463]',
                                            {
                                                'text-[#d1f463]': activeHash === link.link,
                                            }
                                        )}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                            <li className="mt-2 border-t border-[#304441] pt-2">
                                <a
                                    href="/resume_lsabornido.pdf"
                                    download="resume_lsabornido.pdf"
                                    className="block px-4 py-3 text-sm font-bold text-[#d1f463] transition-colors hover:bg-[#14282a] hover:text-[#f3f7f4]"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Download resume
                                </a>
                            </li>
                        </ul>
                    </nav>
                )}
            </Container>
        </header>
    );
};

export default Header;
