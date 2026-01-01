import { ArrowRight, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { packages } from "../data/packages";
import { motion } from "framer-motion";
import bgPackages from '../assets/images/bg-packages.png';

const HomePackages = () => {
    // Select top 3 packages for the homepage
    const featuredPackages = packages.slice(0, 3);

    return (
        <section
            className="py-20 bg-emerald-950 relative"
            style={{
                backgroundImage: `url(${bgPackages})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay'
            }}
        >
            <div className="absolute inset-0 bg-emerald-950/80"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <p className="text-lime-400 text-sm font-bold tracking-widest uppercase mb-2">Packages</p>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
                            Best Selling Tours
                        </h2>
                    </div>
                    <Link to="/packages" className="hidden md:flex items-center gap-2 text-lime-400 hover:text-white transition-colors font-bold text-sm uppercase tracking-wide">
                        View All Packages <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredPackages.map((pkg) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group bg-[#0b1c15] rounded-3xl overflow-hidden border border-white/5 hover:border-lime-400/30 transition-all duration-300 relative"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={pkg.image}
                                    alt={pkg.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 px-3 py-1 bg-lime-400 text-emerald-950 text-xs font-bold rounded-full uppercase">
                                    {pkg.category}
                                </div>
                                <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-black/60 backdrop-blur-md rounded-lg text-white text-xs font-bold border border-white/10">
                                    <Star size={12} className="text-yellow-400 fill-yellow-400" /> {pkg.rating}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors">{pkg.title}</h3>
                                    <div className="flex items-center gap-1 text-xs text-lime-400 font-bold px-2 py-1 bg-lime-400/10 rounded border border-lime-400/20">
                                        <Clock size={12} /> {pkg.duration}
                                    </div>
                                </div>

                                <p className="text-white/60 text-sm mb-6 line-clamp-2">
                                    {pkg.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {pkg.highlights.slice(0, 2).map((h, i) => (
                                        <span key={i} className="px-2 py-1 bg-white/5 text-white/50 text-[10px] uppercase font-bold tracking-wider rounded border border-white/5">
                                            {h}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-4 border-t border-white/10">
                                    <p className="text-xs text-white/40 mb-1">Starting from</p>
                                    <div className="flex justify-between items-end">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-2xl font-bold text-white">₹{pkg.price.toLocaleString()}</span>
                                            <span className="text-sm text-white/40 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                                        </div>
                                        <Link to={`/packages/${pkg.id}`} className="px-4 py-2 bg-lime-400/10 text-lime-400 font-bold text-sm rounded-lg hover:bg-lime-400 hover:text-emerald-950 transition-all flex items-center gap-1 group/btn">
                                            View Details
                                            <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                                        </Link>
                                    </div>
                                    <p className="text-[10px] text-white/30 mt-1">per person</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomePackages;
