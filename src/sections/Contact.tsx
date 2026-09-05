import Container from '@/components/Container';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section
            id="contact"
            className="border-t border-[#1e3331] bg-[#d1f463] py-16 sm:py-20 lg:py-28"
        >
            <Container>
                <motion.div
                    className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="min-w-0">
                        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#1d4038]">
                            <span className="h-px w-10 bg-[#1d4038]" />
                            Get in touch
                        </p>
                        <h2 className="break-anywhere mt-5 max-w-3xl text-3xl font-extrabold leading-tight text-[#071316] sm:text-4xl lg:text-6xl">
                            Have a product taking shape? Let&apos;s make it real.
                        </h2>
                    </div>

                    <div className="min-w-0 lg:pb-1">
                        <p className="max-w-md font-raleway text-base font-semibold leading-relaxed text-[#1d4038]">
                            I&apos;m open to full-stack and front-end opportunities, freelance work,
                            and conversations with teams building something useful.
                        </p>
                        <a
                            href="mailto:lsabornido97@gmail.com"
                            className="mt-7 inline-flex max-w-full break-all bg-[#071316] px-5 py-3.5 text-sm font-extrabold text-[#f3f7f4] transition-colors hover:bg-[#1d4038]"
                        >
                            lsabornido97@gmail.com
                        </a>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default Contact;
