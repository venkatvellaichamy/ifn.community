import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { Container } from './Container';
import { HeroVisual } from './HeroVisual';

interface HeroProps {
    onJoinClick: () => void;
}

export function Hero({ onJoinClick }: HeroProps) {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-light/20 via-slate-50 to-slate-50 -z-10" />

            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full font-medium text-sm mb-6 border border-accent/20">
                            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                            Grand Opening: Inaugurating Today!
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
                            Where Global Founders <span className="text-primary">Connect</span>, <span className="text-accent">Grow</span>, and <span className="text-primary">Succeed</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Access mentorship, investors, events, and a community that understands your journey. Join founders from 85+ countries building the future.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <Button size="lg" className="group" onClick={onJoinClick}>
                                Join the Network
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button variant="outline" size="lg">
                                Explore Community
                            </Button>
                        </div>

                        {/* <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-slate-500 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <Globe className="w-5 h-5 text-primary" />
                                <span>85+ Countries</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-primary" />
                                <span>5k+ Founders</span>
                            </div>
                        </div> */}
                    </motion.div>

                    {/* Visual / Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative w-full h-full"
                    >
                        <HeroVisual />

                        {/* Decorative Blobs */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                        <div className="absolute top-12 left-12 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-lg max-w-[200px]">
                            {/* Content for the new div goes here if any */}
                        </div>
                        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>
                    </motion.div>

                </div >
            </Container >
        </section >
    );
}
