import Container from '@/components/Container';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
    return (
        <section id="exp" className="pt-24">
            <Container className="flex flex-col gap-y-10">
                <motion.div
                    className="flex flex-col items-center gap-y-5"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <p className="text-2xl font-bold text-slate-200 sm:text-4xl">Experience</p>

                    <hr className="w-9 rounded-xl border-2 border-cyan-400" />
                </motion.div>

                <VerticalTimeline>
                    <VerticalTimelineElement
                        contentStyle={{ background: '#134B70', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #134B70' }}
                        date="Nov. 2023 - Oct. 2024"
                        iconStyle={{ background: '#22d3ee', color: '#fff' }}
                        // icon={<WorkIcon />}
                    >
                        <h3 className="text-lg font-bold">Full Stack Developer</h3>
                        <h4 className="text-base font-medium">PH Virtual Tech (Dubai based) </h4>
                        <ul className="ml-4 mt-5 flex list-disc flex-col gap-5 gap-y-4 font-raleway text-xs font-medium text-slate-50 md:text-sm">
                            <li>
                                Enhanced user experience by implementing responsive web design and
                                optimizing website performance.
                            </li>
                            <li>
                                Developed custom web applications, resulting in tailored solutions
                                for client needs.
                            </li>
                            <li>
                                Integrated third-party APIs to extend application functionalities,
                                offering users more comprehensive experience.
                            </li>
                            <li>
                                Developed user-friendly web forms with validation and error
                                handling.
                            </li>
                            <li>
                                Planned and engineered RESTful web services to manipulate dynamic
                                datasets.
                            </li>
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{ background: '#134B70', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #134B70' }}
                        date="Apr. 2022 - Nov. 2023"
                        iconStyle={{ background: '#22d3ee', color: '#fff' }}
                        // icon={<WorkIcon />}
                    >
                        <h3 className="text-lg font-bold">Freelancer (MERN Fullstack Developer)</h3>
                        <h4 className="text-base font-medium">Davao City</h4>
                        <ul className="ml-4 mt-5 flex list-disc flex-col gap-5 gap-y-4 font-raleway text-xs font-medium text-slate-50 md:text-sm">
                            <li>
                                Negotiated contracts with both clients and vendors effectively,
                                ensuring mutually-beneficial terms were agreed upon.
                            </li>
                            <li>
                                Developed custom web solutions for clients, increasing user
                                engagement and customer satisfaction.
                            </li>
                            <li>
                                Conducted quality assurance testing across multiple websites to
                                verify compatibility across different browsers and ensure optimal
                                responsiveness on mobile devices.
                            </li>
                        </ul>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        // icon={<StarIcon />}
                    />
                </VerticalTimeline>
            </Container>
        </section>
    );
};

export default Experience;
