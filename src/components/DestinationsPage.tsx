import { motion } from 'framer-motion';
import { ArrowRight, Mountain, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import destSrinagar from '../assets/images/dest_srinagar_clean_1767272401720.png';
import destLadakh from '../assets/images/dest_ladakh_gen.png';
import destGurez from '../assets/images/dest_gurez_gen.png';
import destSonamarg from '../assets/images/dest_sonamarg_gen.png';
import destPahalgam from '../assets/images/dest_pahalgam_gen.png';
import destGulmarg from '../assets/images/dest_gulmarg_gen.png';
import destYusmarg from '../assets/images/dest_yusmarg_gen.png';

const destinations = [
    {
        id: 1,
        name: "Srinagar City",
        subtitle: "Heart of Kashmir",
        description: "The summer capital of Jammu and Kashmir, Srinagar is the heart of the Kashmir Valley. Famous for its historic gardens, waterfronts, and houseboats.",
        image: destSrinagar,
        altitude: "1.58 km",
        bestTime: "April - October"
    },
    {
        id: 2,
        name: "Mystic Ladakh",
        subtitle: "Land of High Passes",
        description: "A land of high passes, barren mountains, and ancient monasteries, Ladakh offers a starkly beautiful landscape that is unlike anywhere else in India.",
        image: destLadakh,
        altitude: "3.50 km",
        bestTime: "June - September"
    },
    {
        id: 3,
        name: "Unexplored Gurez",
        subtitle: "The Hidden Gem",
        description: "Gurez Valley, located in the high Himalayas, is a landscape of breathtaking beauty. Known for its pristine Kishanganga River and pyramid-shaped Habba Khatoon peak.",
        image: destGurez,
        altitude: "2.40 km",
        bestTime: "May - September"
    },
    {
        id: 4,
        name: "Sonamarg",
        subtitle: "Meadow of Gold",
        description: "Sonamarg is a gateway to the ancient Silk Road and the base for the Amarnath Yatra. Surrounded by imposing glaciers and serene lakes.",
        image: destSonamarg,
        altitude: "2.73 km",
        bestTime: "April - October"
    },
    {
        id: 5,
        name: "Pahalgam",
        subtitle: "Valley of Shepherds",
        description: "Pahalgam is a postcard-perfect valley known for its lush meadows, pine forests, and the Lidder River. It was once a humble shepherd's village.",
        image: destPahalgam,
        altitude: "2.74 km",
        bestTime: "March - November"
    },
    {
        id: 6,
        name: "Gulmarg",
        subtitle: "Meadow of Flowers",
        description: "Gulmarg is a world-renowned skiing destination and home to one of the world's highest gondolas. In summer, its meadows are carpeted with vibrant wildflowers.",
        image: destGulmarg,
        altitude: "2.65 km",
        bestTime: "All Year Round"
    },
    {
        id: 7,
        name: "Yusmarg",
        subtitle: "Meadow of Jesus",
        description: "Yusmarg is an idyllic meadow surrounded by pine forests and snow-capped peaks. Legend has it that Jesus once visited this spot.",
        image: destYusmarg,
        altitude: "2.40 km",
        bestTime: "May - September"
    }
];

const DestinationCard = ({ dest }: { dest: typeof destinations[0] }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group bg-[#0f241d] rounded-2xl overflow-hidden border border-white/5 hover:border-lime-400/30 transition-all duration-300"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f241d] to-transparent opacity-60" />
            </div>

            <div className="p-6 pt-2">
                <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-lime-400 transition-colors">
                    {dest.name}
                </h3>
                <p className="text-lime-400 text-xs font-bold uppercase tracking-widest mb-4">
                    {dest.subtitle}
                </p>
                <p className="text-white/60 text-sm mb-6 line-clamp-2">
                    {dest.description}
                </p>

                <div className="flex gap-4 mb-6">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-950 rounded-lg text-white/70 text-xs font-medium border border-white/5">
                        <Mountain size={14} className="text-lime-400" /> {dest.altitude}
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-950 rounded-lg text-white/70 text-xs font-medium border border-white/5">
                        <Calendar size={14} className="text-lime-400" /> {dest.bestTime}
                    </div>
                </div>

                <Link
                    to={`/destinations/${dest.id}`}
                    className="flex justify-center items-center gap-2 w-full py-3 bg-lime-400 rounded-xl text-emerald-950 font-bold text-sm hover:bg-lime-300 transition-colors shadow-lg shadow-lime-400/10"
                >
                    Explore <ArrowRight size={16} />
                </Link>
            </div>
        </motion.div>
    );
};

const DestinationsPage = () => {
    return (
        <div className="bg-[#0b1c15] min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=2670&auto=format&fit=crop"
                        alt="Destinations Hero"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0b1c15]/80 via-[#0b1c15]/50 to-[#0b1c15]"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
                    >
                        Explore <span className="text-lime-400">Destinations</span>
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-base md:text-lg text-white/80 font-light max-w-xl mx-auto"
                    >
                        Discover the hidden gems of Kashmir and Ladakh. From serene lakes to majestic peaks, your journey begins here.
                    </motion.p>
                </div>
            </div>

            <section className="container mx-auto px-4 pb-20 -mt-20 relative z-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {destinations.map(dest => (
                        <DestinationCard key={dest.id} dest={dest} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default DestinationsPage;
