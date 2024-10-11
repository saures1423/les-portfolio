import Container from '@/components/Container';
import { ICONS, TECH_STACK } from '@/contants/globals';
import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <section id="about" className="flex overflow-hidden pt-24">
            <Container className="flex flex-col gap-y-10">
                <motion.div
                    className="flex flex-col items-center gap-y-5"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <p className="text-2xl font-bold text-slate-200 sm:text-4xl">About Me</p>

                    <hr className="w-9 rounded-xl border-2 border-cyan-500" />
                </motion.div>

                <motion.div
                    className="flex flex-col items-center justify-between gap-x-10 gap-y-9 lg:flex-row xl:px-28"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <p className="text-center font-raleway text-sm font-medium text-slate-400 sm:text-start sm:text-lg lg:max-w-xl">
                        I'm a{' '}
                        <span className="font-bold text-cyan-500">Full-Stack Web Developer</span>{' '}
                        with <span className="font-bold text-cyan-500">over 2 years</span> of
                        experience building and managing both the frontend and backend of websites
                        and applications to ensure they are fast, scalable, and deliver exceptional
                        user experiences. Check out some of my work in the Projects section.
                        <br /> <br /> I enjoy exploring modern web technologies and best practices{' '}
                        <span className="font-bold text-cyan-500">
                            which I’ve gained through my experience in building various projects.
                        </span>{' '}
                        <br /> <br />
                        I'm open to job opportunities where I can contribute my skills, learn, and
                        continue to grow. If you have an exciting opportunity that matches my
                        expertise, don't hesitate to reach out!
                    </p>

                    <div className="w-full max-w-[23rem]">
                        <img
                            src="/images/me.jpg"
                            alt="Wavy Frame"
                            className="h-full w-full rounded-xl"
                        />
                    </div>
                </motion.div>

                <div className="flex flex-col gap-y-16 lg:px-28">
                    <motion.div
                        className="flex flex-row items-center gap-4 gap-y-5"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <p className="text-2xl font-bold text-slate-200 sm:text-2xl">
                            My Tech <span className="font-bold text-cyan-500">Stack</span>
                        </p>

                        <hr className="border-1 w-1/2 border-slate-600" />
                    </motion.div>

                    <motion.div
                        className="flex flex-col items-start gap-9 md:ml-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {TECH_STACK.map((stack) => (
                            <div
                                key={stack.title}
                                className="flex w-full flex-row items-center justify-between gap-9"
                            >
                                <p className="w-1/6 rounded-sm border-l-2 border-l-cyan-500 pl-2 text-sm font-medium text-slate-200 sm:text-base">
                                    {stack.title}
                                </p>

                                {/* Stack Skills */}
                                <ul className="flex w-5/6 list-none flex-wrap gap-5 font-raleway text-xs font-semibold text-slate-400 md:text-sm">
                                    {stack.skills.map((skill) => (
                                        <li key={skill}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </motion.div>

                    <div className="flex grow flex-wrap items-center justify-center gap-9">
                        {ICONS.map((icon, index) => (
                            <div key={index} className="w-[3rem]">
                                <img src={icon.url} alt={icon.name} className="h-full w-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AboutMe;
