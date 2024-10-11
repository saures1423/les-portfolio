import Container from '@/components/Container';
import { PROJECTS } from '@/contants/projects';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <section id="projects" className="flex pt-24">
            <Container className="flex flex-col gap-y-10">
                <motion.div
                    className="flex flex-col items-center gap-y-5"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <p className="text-2xl font-bold text-slate-200 sm:text-4xl">Latest Projects</p>

                    <hr className="w-9 rounded-xl border-2 border-cyan-400" />
                </motion.div>

                <div className="mt-5 flex flex-col gap-5">
                    {PROJECTS.map((proj) => (
                        <motion.div
                            key={proj.title}
                            className="grid grid-cols-1 place-items-center gap-3 lg:grid-cols-2"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div className="w-full max-w-[35rem]">
                                <img
                                    src={proj.image_path}
                                    alt={proj.title}
                                    className="h-full w-full rounded-xl"
                                />
                            </div>

                            <div className="flex flex-col justify-start gap-6 p-2">
                                <h1 className="self-start text-xl font-bold text-slate-300 sm:text-2xl md:self-end">
                                    {proj.title}
                                </h1>

                                <div className="flex w-full flex-col gap-6 rounded-lg bg-light-navy px-6 py-8 shadow-lg">
                                    <p className="text-wrap font-raleway text-base font-normal leading-relaxed text-slate-200">
                                        {proj.desc}
                                    </p>

                                    {/* <div className="w-full max-w-[2rem] self-end">
                                        <img
                                            src="/svg/github.svg"
                                            alt="github"
                                            className="h-full w-full rounded-xl"
                                        />
                                    </div> */}

                                    <div className="group relative w-full max-w-[1.8rem] cursor-pointer self-end">
                                        <a
                                            href={proj.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block h-full w-full rounded-xl transition-transform duration-300 hover:scale-110"
                                        >
                                            <img
                                                src="/svg/externalLink.svg"
                                                alt="external link"
                                                className="h-full w-full transition-transform duration-300 hover:scale-110"
                                            />

                                            <span className="absolute bottom-full left-1/2 mb-1 -translate-x-1/2 scale-0 transform rounded bg-gray-700 px-2 py-1 text-xs font-medium text-white transition-transform duration-300 group-hover:scale-100">
                                                Visit
                                            </span>
                                        </a>
                                    </div>
                                </div>

                                <div className="flex flex-col items-start gap-2">
                                    <h4 className="text-base font-semibold text-slate-400">
                                        Technologies:
                                    </h4>
                                    <ul className="flex list-none flex-wrap gap-4 font-raleway text-xs font-semibold text-cyan-400 md:text-sm">
                                        {proj.techs.map((skill) => (
                                            <li key={skill}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Projects;
