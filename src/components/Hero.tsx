
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-kashmir.png';

interface HeroProps {
    onOpenModal: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
    const { scrollY } = useScroll();
    const yBox = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center">
            {/* Parallax Background */}
            <motion.div
                style={{ y: yBox }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-emerald-950/30 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/40 to-transparent z-10" />
                <img
                    src={heroBg}
                    alt="Kashmir Valley with beautiful mountains and greenery"
                    className="w-full h-full object-cover object-center scale-105"
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 pt-20">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8 mt-4"
                    >
                        <Globe size={16} className="text-lime-400" />
                        <span className="text-lime-400 text-sm font-bold tracking-wide uppercase">
                            Travel The World Byte By Byte
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
                    >
                        Experience <br />
                        Paradise on Earth
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-2xl md:text-3xl font-bold text-lime-400 mb-8"
                    >
                        Unveiling the Crown Jewel
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg text-white/90 max-w-xl mb-10 leading-relaxed font-medium"
                    >
                        Curated journeys to the heart of the Himalayas. Discover the unseen beauty of Kashmir with local experts.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <button
                            onClick={onOpenModal}
                            className="px-8 py-4 bg-lime-400 text-emerald-950 rounded-xl font-bold text-lg hover:bg-lime-300 transition-all shadow-lg shadow-lime-400/20 top-button"
                        >
                            Plan Your Trip
                        </button>
                        <Link to="/packages" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-2 group">
                            Explore Packages
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-6 sm:gap-12"
                    >
                        <div>
                            <p className="text-2xl sm:text-3xl font-bold text-white mb-1">500+</p>
                            <p className="text-xs sm:text-sm text-lime-400 font-medium uppercase tracking-wider">Happy Travelers</p>
                        </div>
                        <div>
                            <p className="text-2xl sm:text-3xl font-bold text-white mb-1">50+</p>
                            <p className="text-xs sm:text-sm text-lime-400 font-medium uppercase tracking-wider">Curated Tours</p>
                        </div>
                        <div>
                            <p className="text-2xl sm:text-3xl font-bold text-white mb-1">4.9</p>
                            <p className="text-xs sm:text-sm text-lime-400 font-medium uppercase tracking-wider">Average Rating</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
