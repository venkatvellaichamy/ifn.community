import { motion } from 'framer-motion';
import { GlobeIcon } from './GlobeIcon';
import { Users } from 'lucide-react';

export function HeroVisual() {
    return (
        <div className="relative w-full aspect-square max-w-lg mx-auto lg:max-w-none">
            {/* Central Glowing Orb Background */}
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>

            <div className="relative w-full h-full bg-slate-900/50 backdrop-blur-2xl rounded-full border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center">

                {/* Animated Grid/Rings */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="w-[150%] h-[150%] border border-dashed border-white/30 rounded-full absolute will-change-transform"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="w-[100%] h-[100%] border border-white/20 rounded-full absolute will-change-transform"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="w-[50%] h-[50%] bg-accent/20 rounded-full absolute blur-2xl will-change-transform"
                    />
                </div>

                {/* Central Focus */}
                <div className="relative z-10 p-8 bg-black/20 backdrop-blur-md rounded-full border border-white/10 shadow-inner">
                    <GlobeIcon className="w-24 h-24 text-accent drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
                </div>

                {/* Orbiting Elements */}
                {/* Avatar 1 */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 will-change-transform"
                >
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-12 h-12 bg-white rounded-full p-0.5 shadow-lg border-2 border-primary overflow-hidden"
                        style={{ rotate: -360 }} // Counter-rotate to keep image upright if needed, or let it spin
                    >
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100" className="w-full h-full object-cover rounded-full" alt="" />
                    </motion.div>
                </motion.div>

                {/* Avatar 2 */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 will-change-transform"
                >
                    <motion.div
                        className="absolute bottom-1/3 right-1/4 w-10 h-10 bg-white rounded-full p-0.5 shadow-lg border-2 border-accent overflow-hidden"
                    >
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100" className="w-full h-full object-cover rounded-full" alt="" />
                    </motion.div>
                </motion.div>

            </div>

            {/* Floating Cards (Overlaying the circle) */}

            {/* Card 1: Success Metric */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute top-10 -left-10 z-20"
            >
                <div className="flex items-center gap-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20">
                    <div className="bg-blue-100 p-2 rounded-xl text-primary">
                        <Users size={24} />
                    </div>
                    <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Connections</div>
                        <div className="text-lg font-bold text-slate-900">2,500+ Made</div>
                        <div className="text-[10px] uppercase tracking-wide font-medium text-slate-400 mt-1">Featured at Capital Factory, Austin</div>
                    </div>
                </div>
            </motion.div>

            {/* Card 2: Live Activity */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-20 -right-4 z-20"
            >
                <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/10 text-white max-w-[200px]">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                        </span>
                        <span className="font-semibold text-sm">Live Now</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                        Austin Founder Meetup taking place now!
                    </p>

                </div>
            </motion.div>

        </div>
    );
}
