import Container from '@/components/Container';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="flex pt-24">
            <Container className="mb-32 flex flex-col gap-y-10">
                <motion.div
                    className="flex flex-col items-center gap-y-5"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <p className="text-2xl font-bold text-slate-200 sm:text-4xl">Get In Touch</p>

                    <hr className="w-9 rounded-xl border-2 border-cyan-400" />
                </motion.div>

                <motion.div
                    className="flex h-full flex-col items-center justify-start gap-y-16 xl:px-28"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="flex flex-col gap-9">
                        <h4 className="max-w-sm text-center font-raleway text-sm font-medium leading-relaxed text-slate-300 md:text-base">
                            I’d love to hear from you! Whether you have a question, want to discuss
                            a project, or just want to connect, feel free to reach out.
                        </h4>
                    </div>

                    <div className="flex items-center text-cyan-500">
                        <a href="mailto:lsabornido97@gmail.com">
                            <button className="rounded-md border border-cyan-500 px-8 py-4 text-base font-semibold transition-transform duration-300 hover:scale-110">
                                Say Hello
                            </button>
                        </a>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default Contact;
