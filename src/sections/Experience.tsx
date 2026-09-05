import Container from '@/components/Container';
import { motion } from 'framer-motion';

const experience = [
    {
        period: 'Nov 2023 - Oct 2024',
        role: 'Full Stack Developer',
        company: 'PH Virtual Tech',
        location: 'Dubai-based remote team',
        focus: 'Built and improved responsive web products for real operating teams.',
        points: [
            'Improved user experience through responsive implementation and performance-focused front-end work.',
            'Developed tailored web applications and RESTful services for dynamic product data.',
            'Integrated third-party APIs and built dependable forms with validation and error handling.',
        ],
    },
    {
        period: 'Apr 2022 - Nov 2023',
        role: 'Freelance MERN Developer',
        company: 'Independent',
        location: 'Davao City, Philippines',
        focus: 'Partnered directly with clients to ship useful, well-tested custom web solutions.',
        points: [
            'Scoped and delivered client web solutions focused on engagement and customer satisfaction.',
            'Managed client and vendor conversations to keep project requirements practical and aligned.',
            'Tested browser compatibility and mobile responsiveness before launch.',
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="border-b border-[#1e3331] py-20 sm:py-24 lg:py-32">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="grid gap-6 border-b border-[#304441] pb-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-end">
                        <div className="min-w-0">
                            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#ff8f70]">
                                <span className="h-px w-10 bg-[#ff8f70]" />
                                Experience
                            </p>
                            <h2 className="break-anywhere mt-5 text-3xl font-extrabold text-[#f3f7f4] sm:text-4xl lg:text-5xl">
                                Work with a practical edge.
                            </h2>
                        </div>
                    </div>

                    <div className="mt-3">
                        {experience.map((item, index) => (
                            <motion.article
                                key={item.period}
                                className="grid gap-5 border-b border-[#304441] py-8 sm:py-10 md:grid-cols-[minmax(10rem,11rem)_minmax(0,1fr)] md:gap-x-8 md:gap-y-5 xl:grid-cols-[13rem_minmax(0,1fr)_minmax(18rem,0.95fr)] xl:gap-10"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.08,
                                    ease: 'easeOut',
                                }}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <p className="min-w-0 text-sm font-bold uppercase tracking-[0.1em] text-[#d1f463]">
                                    {item.period}
                                </p>
                                <div className="min-w-0">
                                    <h3 className="break-anywhere text-2xl font-extrabold text-[#f3f7f4]">
                                        {item.role}
                                    </h3>
                                    <p className="mt-2 text-sm font-bold text-[#83d7c4]">
                                        {item.company}{' '}
                                        <span className="text-[#66817b]">/ {item.location}</span>
                                    </p>
                                    <p className="mt-5 max-w-xl font-raleway text-base font-medium leading-relaxed text-[#aebeba]">
                                        {item.focus}
                                    </p>
                                </div>
                                <ul className="min-w-0 space-y-3 pt-1 md:col-start-2 xl:col-auto">
                                    {item.points.map((point) => (
                                        <li
                                            key={point}
                                            className="flex gap-3 font-raleway text-sm font-medium leading-relaxed text-[#aebeba]"
                                        >
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#ff8f70]" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default Experience;
