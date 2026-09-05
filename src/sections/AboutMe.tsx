import Container from '@/components/Container';
import { ICONS, TECH_STACK } from '@/contants/globals';
import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <section id="about" className="border-b border-[#1e3331] py-24 sm:py-32">
            <Container>
                <motion.div
                    className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="min-w-0">
                        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#83d7c4]">
                            <span className="h-px w-10 bg-[#83d7c4]" />
                            About me
                        </p>
                        <h2 className="break-anywhere mt-5 text-3xl font-extrabold leading-tight text-[#f3f7f4] sm:text-4xl lg:text-5xl">
                            Product-minded development, end to end.
                        </h2>
                        <div className="mt-8 space-y-5 font-raleway text-base font-medium leading-relaxed text-[#aebeba]">
                            <p>
                                I&apos;m a full-stack web developer with over two years of
                                experience creating reliable, responsive applications. I care about
                                the handoff between design, code, and the people who use the result.
                            </p>
                            <p>
                                My sweet spot is translating a real-world workflow into an interface
                                that makes the next step obvious, backed by systems that keep pace
                                as the product grows.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-6 border-y border-[#304441] py-6 sm:grid-cols-2 sm:gap-8">
                            <div className="min-w-0">
                                <p className="text-xl font-extrabold text-[#d1f463]">
                                    Web + mobile
                                </p>
                                <p className="mt-2 text-sm font-medium text-[#8fa39f]">
                                    Responsive, accessible experiences for every screen
                                </p>
                            </div>
                            <div className="min-w-0">
                                <p className="text-xl font-extrabold text-[#ff8f70]">Backend</p>
                                <p className="mt-2 text-sm font-medium text-[#8fa39f]">
                                    Scalable APIs, data models, and third-party integrations
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="min-w-0 pt-1">
                        <p className="text-sm font-bold uppercase tracking-[0.13em] text-[#f3f7f4]">
                            Tools I reach for
                        </p>
                        <div className="mt-5 border-t border-[#304441]">
                            {TECH_STACK.map((stack) => (
                                <div
                                    key={stack.title}
                                    className="grid gap-4 border-b border-[#304441] py-6 sm:grid-cols-[8rem_1fr] sm:gap-8"
                                >
                                    <h3 className="text-sm font-extrabold text-[#d1f463]">
                                        {stack.title.replace(':', '')}
                                    </h3>
                                    <ul className="flex flex-wrap gap-x-4 gap-y-2">
                                        {stack.skills.map((skill) => (
                                            <li
                                                key={skill}
                                                className="font-raleway text-sm font-semibold text-[#aebeba]"
                                            >
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div
                            className="mt-10 flex flex-wrap items-center gap-3"
                            aria-label="Technology icons"
                        >
                            {ICONS.map((icon) => (
                                <div
                                    key={icon.name}
                                    className="grid h-11 w-11 place-items-center border border-[#304441] bg-[#0b1a1d] p-2"
                                    title={icon.name}
                                >
                                    <img
                                        src={icon.url}
                                        alt={icon.name}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default AboutMe;
