import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import bgDestinations from '../assets/images/bg-curated-v2.png';
import destSrinagarClean from '../assets/images/dest_srinagar_clean_1767272401720.png';
import destLadakh from '../assets/images/dest_ladakh_gen.png';
import destGurez from '../assets/images/dest_gurez_gen.png';
import destSonamarg from '../assets/images/dest_sonamarg_gen.png';
import destPahalgam from '../assets/images/dest_pahalgam_gen.png';
import destGulmarg from '../assets/images/dest_gulmarg_gen.png';
import destYusmarg from '../assets/images/dest_yusmarg_gen.png';

const destinations = [
    {
        id: 1,
        name: "Srinagar",
        subtitle: "The Jewel of the North",
        description: "Famous for its houseboats, lakes, and Mughal gardens.",
        image: destSrinagarClean,
        gridClass: "md:col-span-2 lg:col-span-8 lg:row-span-2",
        large: true
    },
    {
        id: 2,
        name: "Mystic Ladakh",
        subtitle: "Land of High Passes",
        image: destLadakh,
        gridClass: "md:col-span-1 lg:col-span-4 lg:row-span-1",
        large: false
    },
    {
        id: 3,
        name: "Unexplored Gurez",
        subtitle: "The Hidden Gem",
        image: destGurez,
        gridClass: "md:col-span-1 lg:col-span-4 lg:row-span-1",
        large: false
    },
    {
        id: 4,
        name: "Sonamarg",
        subtitle: "Meadow of Gold",
        image: destSonamarg,
        gridClass: "md:col-span-1 lg:col-span-4 lg:row-span-1",
        large: false
    },
    {
        id: 5,
        name: "Pahalgam",
        subtitle: "Valley of Shepherds",
        image: destPahalgam,
        gridClass: "md:col-span-1 lg:col-span-4 lg:row-span-1",
        large: false
    },
    {
        id: 6,
        name: "Gulmarg",
        subtitle: "Meadow of Flowers",
        image: destGulmarg,
        gridClass: "md:col-span-1 lg:col-span-4 lg:row-span-1",
        large: false
    },
    {
        id: 7,
        name: "Yusmarg",
        subtitle: "Meadow of Jesus",
        image: destYusmarg,
        gridClass: "md:col-span-2 lg:col-span-12 lg:row-span-1",
        large: false
    }
];

const DestinationCard = ({ dest }: { dest: typeof destinations[0] }) => {
    return (
        <Link
            to={`/destinations/${dest.id}`}
            className={`${dest.gridClass} block`}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`group relative overflow-hidden rounded-3xl w-full h-full min-h-[300px] cursor-pointer border border-white/10`}
            >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                <img
                    src={dest.image}
                    alt={dest.name}
                    loading="lazy"
                    className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                />

                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 md:p-8 flex flex-col justify-end z-20`}>
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className={`${dest.large ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'} font-bold text-white mb-2`}>
                            {dest.name}
                        </h3>
                        <p className="text-lime-400 font-bold text-sm tracking-wide uppercase mb-3">
                            {dest.subtitle}
                        </p>

                        {dest.large && (
                            <p className="text-white/80 text-lg mb-6 max-w-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 hidden md:block">
                                {dest.description}
                            </p>
                        )}
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

const Destinations = () => {
    return (
        <section
            className="py-20 bg-emerald-950 relative"
            id="destinations"
            style={{
                backgroundImage: `url(${bgDestinations})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay'
            }}
        >
            <div className="absolute inset-0 bg-emerald-950/90"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <p className="text-lime-400 text-sm font-bold tracking-widest uppercase mb-2">Explore</p>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
                            Featured Destinations
                        </h2>
                    </div>
                    <Link to="/destinations" className="hidden md:flex items-center gap-2 text-lime-400 hover:text-white transition-colors font-bold text-sm uppercase tracking-wide">
                        View All Destinations <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[300px]">
                    {destinations.map(dest => (
                        <DestinationCard key={dest.id} dest={dest} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Destinations;
