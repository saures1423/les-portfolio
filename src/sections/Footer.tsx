import Container from '@/components/Container';

const Footer = () => {
    return (
        <footer className="border-t border-[#1e3331] bg-[#071316] py-8">
            <Container className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                    <p className="text-sm font-extrabold tracking-[0.08em] text-[#f3f7f4]">
                        LESLIE SABORNIDO
                    </p>
                    <p className="mt-2 text-sm font-medium text-[#8fa39f]">
                        Full-stack developer based in the Philippines.
                    </p>
                </div>

                <div className="flex min-w-0 flex-wrap items-center gap-x-5 gap-y-3">
                    <a
                        href="https://www.linkedin.com/in/lsabornido"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-[#aebeba] transition-colors hover:text-[#d1f463]"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/saures1423"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-[#aebeba] transition-colors hover:text-[#d1f463]"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.facebook.com/lsabornido1997"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-[#aebeba] transition-colors hover:text-[#d1f463]"
                    >
                        Facebook
                    </a>
                    <a
                        href="https://www.instagram.com/lsabornido/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-[#aebeba] transition-colors hover:text-[#d1f463]"
                    >
                        Instagram
                    </a>
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#66817b]">
                    &copy; {new Date().getFullYear()}
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
