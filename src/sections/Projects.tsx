import Container from '@/components/Container';
import { PROJECTS } from '@/contants/projects';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <section id="projects" className="py-20 sm:py-24 lg:py-32">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.15 }}
                >
                    <div className="grid gap-6 border-b border-[#304441] pb-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-end">
                        <div className="min-w-0">
                            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#d1f463]">
                                <span className="h-px w-10 bg-[#d1f463]" />
                                Selected work
                            </p>
                            <h2 className="break-anywhere mt-5 text-3xl font-extrabold text-[#f3f7f4] sm:text-4xl lg:text-5xl">
                                Useful products for real workflows.
                            </h2>
                        </div>
                        <p className="min-w-0 max-w-xl font-raleway text-base font-medium leading-relaxed text-[#aebeba]">
                            A mix of platforms, dashboards, and mobile products shaped around the
                            people using them every day. Each project balances a clear interface
                            with the systems required to keep it running.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 md:grid-cols-2">
                        {PROJECTS.map((project, index) => {
                            const isLeadProject = index === 0;

                            return (
                                <motion.article
                                    key={project.title}
                                    className={`group overflow-hidden border border-[#304441] bg-[#0b1a1d] transition-colors hover:border-[#83d7c4] ${
                                        isLeadProject
                                            ? 'md:col-span-2 lg:grid lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]'
                                            : ''
                                    }`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.45,
                                        delay: (index % 3) * 0.06,
                                        ease: 'easeOut',
                                    }}
                                    viewport={{ once: true, amount: 0.12 }}
                                >
                                    <div
                                        className={`overflow-hidden ${
                                            isLeadProject
                                                ? 'aspect-[16/8] lg:aspect-auto'
                                                : 'aspect-[16/10]'
                                        }`}
                                    >
                                        <img
                                            src={project.image_path}
                                            alt={`Screenshot of ${project.title}`}
                                            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                                        />
                                    </div>

                                    <div className="flex min-w-0 flex-col p-5 sm:p-7">
                                        <p className="text-[0.7rem] font-bold uppercase tracking-[0.13em] text-[#83d7c4]">
                                            {index === 0 ? 'Featured product' : 'Product build'}
                                        </p>
                                        <h3 className="break-anywhere mt-3 text-2xl font-extrabold text-[#f3f7f4]">
                                            {project.title}
                                        </h3>
                                        <p className="mt-4 flex-1 font-raleway text-sm font-medium leading-relaxed text-[#aebeba]">
                                            {project.desc}
                                        </p>

                                        <ul className="mt-6 flex min-w-0 flex-wrap gap-2">
                                            {project.techs.slice(0, 6).map((tech) => (
                                                <li
                                                    key={tech}
                                                    className="border border-[#38504b] px-2.5 py-1 text-xs font-bold text-[#c7d7d1]"
                                                >
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>

                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-extrabold text-[#d1f463] transition-colors hover:text-[#f3f7f4]"
                                        >
                                            Visit product
                                            <img
                                                src="/svg/externalLink.svg"
                                                alt=""
                                                aria-hidden="true"
                                                className="h-4 w-4"
                                            />
                                        </a>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default Projects;
