import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, Star, CheckCircle, Users, Mountain, ShieldCheck, MapPin } from 'lucide-react';
import { packages } from '../data/packages';
import BookingModal, { type BookingMode } from './BookingModal';

const PackageDetails = () => {
    const { id } = useParams<{ id: string }>();
    const pkg = packages.find(p => p.id === Number(id));

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalConfig, setModalConfig] = useState<{ mode: BookingMode, title?: string }>({ mode: 'general' });

    const handleBookNow = () => {
        setModalConfig({ mode: 'booking', title: pkg?.title });
        setIsModalOpen(true);
    };

    const handleCustomize = () => {
        setModalConfig({ mode: 'customization', title: pkg?.title });
        setIsModalOpen(true);
    };

    if (!pkg) {
        return (
            <div className="min-h-screen bg-emerald-950 flex flex-col items-center justify-center text-white">
                <h2 className="text-3xl font-bold mb-4">Package Not Found</h2>
                <Link to="/packages" className="text-lime-400 hover:underline flex items-center gap-2">
                    <ArrowLeft size={20} /> Back to Packages
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-[#0b1c15] min-h-screen pb-20">
            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c15] via-[#0b1c15]/50 to-transparent"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-12">
                    <Link to="/packages" className="absolute top-24 left-4 p-3 bg-white/5 backdrop-blur-md rounded-full text-white hover:bg-white/10 transition-colors border border-white/10">
                        <ArrowLeft size={24} />
                    </Link>

                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-4xl md:text-6xl font-display font-bold text-white mb-4 leading-tight"
                        >
                            {pkg.title}
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-lime-400 font-medium tracking-widest uppercase text-sm mb-12"
                        >
                            The Perfect {pkg.category} Getaway in Paradise
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="container mx-auto px-4 -mt-8 relative z-20 mb-16">
                <div className="bg-[#0f241d] border border-white/5 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 max-w-5xl mx-auto">
                    <div className="flex items-center gap-4 px-8 md:border-r border-white/10 w-full md:w-auto">
                        <Clock className="text-lime-400" size={24} />
                        <div>
                            <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Duration</p>
                            <p className="text-white font-bold">{pkg.duration}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 px-8 md:border-r border-white/10 w-full md:w-auto">
                        <Users className="text-lime-400" size={24} />
                        <div>
                            <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Group Size</p>
                            <p className="text-white font-bold">{pkg.groupSize}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 px-8 md:border-r border-white/10 w-full md:w-auto">
                        <Mountain className="text-lime-400" size={24} />
                        <div>
                            <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Difficulty</p>
                            <p className="text-white font-bold">{pkg.difficulty}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 px-8 w-full md:w-auto">
                        <Star className="text-yellow-400 fill-yellow-400" size={24} />
                        <div>
                            <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Rating</p>
                            <p className="text-white font-bold">{pkg.rating} (156 reviews)</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Main Content */}
                    <div className="lg:w-2/3 space-y-16">
                        {/* Overview */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-1 bg-lime-400"></div>
                                <h2 className="text-2xl font-display font-bold text-white">Tour Overview</h2>
                            </div>
                            <p className="text-white/70 leading-relaxed text-lg mb-8">
                                {pkg.description} With curated experiences designed to immerse you in the local culture and breathtaking nature, this trip is crafted for memories that last a lifetime.
                            </p>

                            {/* Highlights Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {pkg.highlights.map((h, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-[#0f241d] border border-white/5 rounded-xl">
                                        <CheckCircle className="text-lime-400 shrink-0" size={20} />
                                        <span className="text-white/90 text-sm font-medium">{h}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Route Map */}
                        <section>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-8 h-1 bg-lime-400"></div>
                                <h2 className="text-2xl font-display font-bold text-white">Tour Route</h2>
                            </div>
                            <div className="flex flex-wrap items-center gap-4 bg-[#0f241d] p-6 rounded-2xl border border-white/5">
                                {pkg.route.map((stop, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-950 rounded-full border border-lime-400/30 text-lime-400 font-bold text-sm">
                                            <MapPin size={14} />
                                            {stop}
                                        </div>
                                        {i < pkg.route.length - 1 && (
                                            <ArrowRight className="text-white/20" size={20} />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Itinerary */}
                        <section>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-8 h-1 bg-lime-400"></div>
                                <h2 className="text-2xl font-display font-bold text-white">Day-by-Day Itinerary</h2>
                            </div>

                            <div className="space-y-8 pl-4">
                                {pkg.itinerary.map((item, index) => (
                                    <motion.div
                                        key={item.day}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative pl-12 border-l-2 border-white/10 pb-8 last:pb-0 last:border-0"
                                    >
                                        {/* Timeline Dot */}
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-lime-400 shadow-lg shadow-lime-400/50"></div>

                                        <div className="bg-[#0f241d] border border-white/5 rounded-2xl p-6 hover:border-lime-400/30 transition-colors">
                                            <span className="inline-block px-3 py-1 bg-emerald-950 rounded text-xs font-bold text-lime-400 mb-3 border border-lime-400/10">
                                                Day {item.day}
                                            </span>
                                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                            <p className="text-white/60 leading-relaxed">{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-1/3 space-y-8">
                        <div className="bg-[#0f241d] p-6 md:p-8 rounded-3xl border border-white/5 sticky top-24">
                            <div className="mb-8 p-4 bg-emerald-950/50 rounded-xl border border-white/5">
                                <p className="text-white/50 text-sm mb-1">Starting from</p>
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="text-4xl font-display font-bold text-white">₹{pkg.price.toLocaleString()}</span>
                                    <span className="text-white/40 line-through decoration-1">₹{pkg.originalPrice.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-lime-400 text-sm">per person</span>
                                    <span className="px-2 py-0.5 bg-lime-400/10 text-lime-400 text-[10px] font-bold rounded uppercase border border-lime-400/20">
                                        Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()}
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-sm text-white/70 mb-8 border-b border-white/5 pb-8">
                                <div>
                                    <p className="text-white/30 text-[10px] uppercase font-bold mb-1">Duration</p>
                                    <p className="text-white font-medium">{pkg.duration}</p>
                                </div>
                                <div>
                                    <p className="text-white/30 text-[10px] uppercase font-bold mb-1">Tour Type</p>
                                    <p className="text-white font-medium">{pkg.category}</p>
                                </div>
                                <div>
                                    <p className="text-white/30 text-[10px] uppercase font-bold mb-1">Group Size</p>
                                    <p className="text-white font-medium">{pkg.groupSize}</p>
                                </div>
                                <div>
                                    <p className="text-white/30 text-[10px] uppercase font-bold mb-1">Difficulty</p>
                                    <p className="text-white font-medium">{pkg.difficulty}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <button
                                    onClick={handleBookNow}
                                    className="w-full py-4 bg-lime-400 text-emerald-950 font-bold rounded-xl hover:bg-lime-300 transition-colors shadow-lg shadow-lime-400/20 uppercase tracking-wide text-sm"
                                >
                                    Book This Tour
                                </button>
                                <button
                                    onClick={handleCustomize}
                                    className="w-full py-4 bg-emerald-950 border border-white/10 text-white font-bold rounded-xl hover:bg-emerald-900 transition-colors uppercase tracking-wide text-sm"
                                >
                                    Customize This Trip
                                </button>
                            </div>

                            <p className="mt-6 text-center text-white/40 text-xs text-balance">
                                No payment required to enquire. Customizations available.
                            </p>

                            <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-center gap-2 text-lime-400 text-xs font-bold uppercase tracking-wider">
                                <ShieldCheck size={16} /> 100% Secure Booking
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                packageTitle={modalConfig.title}
                mode={modalConfig.mode}
            />
        </div>
    );
};

export default PackageDetails;
