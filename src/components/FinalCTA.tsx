import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from './Button';
import { Container } from './Container';

import { GlobeIcon } from './GlobeIcon';

interface FinalCTAProps {
    onJoinClick: () => void;
}

export function FinalCTA({ onJoinClick }: FinalCTAProps) {
    return (
        <section className="py-24 bg-primary relative overflow-hidden text-white">
            {/* Background patterns */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.05),transparent_25%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(249,115,22,0.1),transparent_25%)]"></div>

            <Container size="lg" className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                            Ready to Connect with Founders Who Get It?
                        </h2>
                        <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0">
                            Join thousands of founders who are building, learning, and winning together. Stop building alone.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="lg" variant="primary" className="bg-accent hover:bg-accent-hover text-white ring-offset-primary" onClick={onJoinClick}>
                                Join International Founders Network
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>

                        <p className="mt-6 text-sm text-slate-400 flex items-center justify-center lg:justify-start gap-6">
                            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Free to join</span>
                            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> No credit card required</span>
                        </p>
                        <p className="mt-4 text-xs font-medium text-accent/90 text-center lg:text-left animate-pulse">
                            Applications reviewed weekly. Next cohort opens Monday.
                        </p>
                    </div>

                    <div className="relative hidden lg:block w-80 h-80">
                        {/* Abstract visual */}
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 flex items-center justify-center animate-spin-slow">
                            <div className="w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
                        </div>

                        {/* Central Hub Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white p-4 rounded-2xl shadow-2xl">
                                <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-xl text-white">
                                    <GlobeIcon className="w-8 h-8" />
                                </div>
                            </div>
                        </div>

                        {/* Floating Avatars */}
                        {[0, 72, 144, 216, 288].map((deg, i) => (
                            <motion.div
                                key={i}
                                className="absolute top-1/2 left-1/2 w-10 h-10 -ml-5 -mt-5 bg-white rounded-full border-2 border-primary overflow-hidden"
                                style={{ transform: `rotate(${deg}deg) translate(140px) rotate(-${deg}deg)` }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <img src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=50&h=50`} alt="" className="w-full h-full object-cover bg-slate-200" />
                            </motion.div>
                        ))}
                    </div>

                </div>
            </Container>
        </section>
    );
}
