import Container from '@/components/Container';
import { motion } from 'framer-motion';

const highlights = [
    { value: '2+ years', label: 'Professional experience' },
    { value: '7 projects', label: 'Featured case studies' },
    { value: 'MERN', label: 'Core stack' },
];

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative isolate overflow-x-hidden border-b border-[#1e3331] pt-20 sm:pt-24 xl:pt-32"
        >
            <div className="pointer-events-none absolute right-0 top-0 -z-10 hidden h-full w-[34%] border-l border-[#1e3331] xl:block" />
            <div className="pointer-events-none absolute left-[7%] top-24 -z-10 hidden h-20 w-20 border-l border-t border-[#ff8f70] xl:block" />

            <Container className="grid items-center gap-12 py-8 pb-12 sm:py-10 sm:pb-16 xl:min-h-[calc(100svh-7rem)] xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] xl:gap-20 xl:py-16">
                <motion.article
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <p className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.65rem] font-bold uppercase leading-relaxed tracking-[0.12em] text-[#d1f463] sm:text-xs sm:tracking-[0.16em]">
                        <span className="h-px w-10 bg-[#d1f463]" />
                        <span className="min-w-0">Full-stack developer</span>
                    </p>
                    <h1 className="break-anywhere max-w-3xl text-[2.6rem] font-extrabold leading-[0.95] text-[#f3f7f4] sm:text-6xl xl:text-7xl">
                        I build digital products that feel clear, useful, and alive.
                    </h1>
                    <p className="mt-7 max-w-xl font-raleway text-base font-medium leading-relaxed text-[#aebeba] sm:text-lg">
                        I&apos;m Leslie, a developer who turns complex requirements into polished
                        web and mobile experiences, from the first interface to the systems behind
                        it.
                    </p>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                        <a
                            href="#projects"
                            className="bg-[#d1f463] px-5 py-3 text-center text-sm font-extrabold text-[#071316] transition-colors hover:bg-[#f3f7f4]"
                        >
                            Explore selected work
                        </a>
                        <a
                            href="#contact"
                            className="border border-[#38504b] px-5 py-3 text-center text-sm font-bold text-[#f3f7f4] transition-colors hover:border-[#f3f7f4]"
                        >
                            Start a conversation
                        </a>
                    </div>

                    <dl className="mt-12 grid max-w-2xl grid-cols-1 border-t border-[#304441] sm:mt-14 sm:grid-cols-3">
                        {highlights.map((highlight) => (
                            <div
                                key={highlight.label}
                                className="sm:not(:last-child):border-r border-b border-[#304441] py-4 sm:border-b-0 sm:px-5 sm:first:pl-0"
                            >
                                <dt className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[#8fa39f]">
                                    {highlight.label}
                                </dt>
                                <dd className="mt-1 text-xl font-extrabold text-[#f3f7f4] sm:text-md">
                                    {highlight.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </motion.article>

                <motion.div
                    className="relative mx-auto hidden w-full min-w-0 max-w-md xl:block xl:max-w-none"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                >
                    <div className="absolute -right-3 -top-3 h-24 w-24 border-r border-t border-[#d1f463] sm:-right-5 sm:-top-5 sm:h-32 sm:w-32" />
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#d9e4dc]">
                        <img
                            src="/images/meback.jpg"
                            alt="Leslie Sabornido"
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="absolute -bottom-5 left-5 max-w-[13rem] bg-[#ff8f70] px-4 py-3 text-sm font-extrabold leading-snug text-[#161b19] sm:left-8 sm:px-5 sm:py-4">
                        Based in Davao City, Philippines
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default Hero;
