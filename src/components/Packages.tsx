import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Star, ArrowRight, MapPin, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { packages, type Package } from '../data/packages';

const PackageCard = ({ pkg }: { pkg: Package }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="group relative bg-[#0f241d] rounded-2xl overflow-hidden border border-white/5 hover:border-lime-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-lime-900/10 flex flex-col h-full"
        >
            {/* Image Section */}
            <div className="relative h-60 overflow-hidden">
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={pkg.image}
                    alt={pkg.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-lime-400 text-emerald-950 text-xs font-bold rounded-full uppercase tracking-wider">
                        {pkg.category}
                    </span>
                    <span className="px-3 py-1 bg-emerald-950/80 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/10">
                        {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% OFF
                    </span>
                </div>

                {/* Quick Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end">
                    <div className="flex items-center gap-4 text-white/90 text-sm font-medium">
                        <span className="flex items-center gap-1.5"><Clock size={14} className="text-lime-400" /> {pkg.duration}</span>
                        <span className="flex items-center gap-1.5"><Star size={14} className="text-yellow-400 fill-yellow-400" /> {pkg.rating}</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-lime-400 transition-colors">
                    {pkg.title}
                </h3>

                <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {pkg.description}
                </p>

                {/* Route visualization */}
                <div className="flex items-center gap-2 mb-4 text-xs text-lime-100/70 bg-emerald-900/30 p-3 rounded-lg border border-white/5">
                    <MapPin size={14} className="text-lime-400 shrink-0" />
                    <div className="flex flex-wrap gap-1 items-center">
                        {pkg.route.slice(0, 3).map((stop, i) => (
                            <React.Fragment key={i}>
                                <span>{stop}</span>
                                {i < Math.min(pkg.route.length, 3) - 1 && <span className="text-white/20">→</span>}
                            </React.Fragment>
                        ))}
                        {pkg.route.length > 3 && <span className="text-white/40">+{pkg.route.length - 3} more</span>}
                    </div>
                </div>

                {/* Highlight Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {pkg.highlights.slice(0, 2).map((h, i) => (
                        <span key={i} className="px-2.5 py-1 bg-white/5 rounded-md text-[11px] font-medium text-white/70 border border-white/5">
                            {h}
                        </span>
                    ))}
                    {pkg.highlights.length > 2 && (
                        <span className="px-2.5 py-1 text-[11px] font-medium text-lime-400 hover:underline cursor-pointer">
                            +{pkg.highlights.length - 2} more
                        </span>
                    )}
                </div>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-white/10 flex items-end justify-between">
                    <div>
                        <p className="text-white/40 text-xs mb-0.5">From</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-white">₹{pkg.price.toLocaleString()}</span>
                            <span className="text-sm text-white/40 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                        </div>
                        <p className="text-[10px] text-white/40">per person</p>
                    </div>

                    <Link
                        to={`/packages/${pkg.id}`}
                        className="flex items-center gap-1 text-sm font-bold text-lime-400 hover:text-lime-300 transition-colors group/btn"
                    >
                        View Details
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

const Packages = ({ onOpenModal }: { onOpenModal: () => void }) => {
    const [filter, setFilter] = useState("All");

    const filters = ["All", "Honeymoon", "Family", "Adventure", "Spiritual", "Winter Special"];

    const filteredPackages = filter === "All"
        ? packages
        : packages.filter(p => p.category === filter || p.highlights.some(h => h.includes(filter)));

    return (
        <div className="bg-emerald-950 min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=2670&auto=format&fit=crop"
                        alt="Kashmir Valley"
                        loading="lazy"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950/50 to-emerald-950"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl md:text-7xl font-display font-bold text-white mb-6"
                    >
                        Curated <span className="text-lime-400">Packages</span>
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto"
                    >
                        Crafted itineraries for every traveler. From romantic getaways to thrilling adventures, find your perfect Kashmir experience.
                    </motion.p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 pb-20 -mt-20 relative z-20">

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    <div className="flex items-center gap-2 text-white/50 mr-4">
                        <Filter size={18} />
                        <span className="text-sm uppercase tracking-widest">Filter:</span>
                    </div>
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${filter === f
                                ? 'bg-lime-400 text-emerald-950 border-lime-400 shadow-lg shadow-lime-400/20 scale-105'
                                : 'bg-emerald-900/40 text-white/70 border-white/10 hover:border-lime-400/50 hover:bg-emerald-900/60'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="text-center mb-8 text-white/40 text-sm">
                    Showing <span className="text-lime-400 font-bold">{filteredPackages.length}</span> packages
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    <AnimatePresence mode='popLayout'>
                        {filteredPackages.map((pkg) => (
                            <PackageCard key={pkg.id} pkg={pkg} />
                        ))}
                    </AnimatePresence>
                </div>

                {/* Custom Trip CTA */}
                <div className="relative rounded-3xl overflow-hidden bg-emerald-900 border border-white/10 p-8 md:p-12 text-center md:text-left">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-lime-400/10 to-transparent pointer-events-none"></div>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                                Can't Find What You're Looking For?
                            </h2>
                            <p className="text-white/70 text-lg">
                                Let us create a custom itinerary tailored to your preferences, budget, and travel dates.
                            </p>
                        </div>
                        <button
                            onClick={onOpenModal}
                            className="px-8 py-4 bg-lime-400 text-emerald-950 font-bold rounded-xl text-lg hover:bg-lime-300 transition-colors shadow-lg shadow-lime-400/20 whitespace-nowrap">
                            Plan Custom Trip
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Packages;
