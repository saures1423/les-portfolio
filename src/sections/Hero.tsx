// import Check from '@/assets/svg/check.svg';

import Container from '@/components/Container';
import HeroImg from '@/assets/hero.svg';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="flex min-h-screen overflow-hidden">
            <Container className="flex flex-col items-center gap-2 md:flex-row">
                {/* Animated Article */}
                <motion.article
                    className="mt-20 flex h-full max-w-3xl flex-col items-center justify-center gap-y-4 text-center md:mt-0 md:items-start md:gap-y-6 md:text-start"
                    initial={{ opacity: 0, y: 20 }} // Initial state: transparent and moved down
                    animate={{ opacity: 1, y: 0 }} // Animate to fully visible and normal position
                    transition={{ duration: 0.8, ease: 'easeOut' }} // Smooth transition
                >
                    <p className="text-lg font-semibold text-slate-200 sm:text-2xl">
                        Hello, I'm Leslie Sabornido
                        <span className="text-[30px] font-bold text-cyan-500">{' !'}</span>
                    </p>

                    <h1 className="text-3xl font-bold text-slate-400 sm:text-6xl">
                        <span className="text-slate-400">
                            Fullstack Web <span className="text-cyan-500">Developer.</span>
                        </span>
                        &nbsp;
                    </h1>

                    <p className="max-w-xl font-raleway text-sm font-medium text-slate-400 sm:text-lg">
                        I create modern, responsive, and user-friendly web applications. I also
                        build mobile apps that provide a seamless user experience. My focus is on
                        delivering high-quality digital solutions across all platforms.
                    </p>
                </motion.article>

                <div className="mx-auto w-full max-w-[32rem]">
                    <img src={HeroImg} alt="hero image" className="h-full w-full" />
                </div>
            </Container>
        </section>
    );
};

export default Hero;
