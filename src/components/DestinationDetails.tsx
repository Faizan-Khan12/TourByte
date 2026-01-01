import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Mountain, Thermometer, ArrowLeft, Camera, Compass } from 'lucide-react';
import { useEffect } from 'react';
import destLadakh from '../assets/images/dest_ladakh_gen.png';
import destGurez from '../assets/images/dest_gurez_gen.png';
import destSonamarg from '../assets/images/dest_sonamarg_gen.png';
import destPahalgam from '../assets/images/dest_pahalgam_gen.png';
import destGulmarg from '../assets/images/dest_gulmarg_gen.png';
import destYusmarg from '../assets/images/dest_yusmarg_gen.png';

// This data will eventually be moved to a separate data file
const destinationsData = {
    1: {
        name: "Srinagar City",
        subtitle: "Heart of Kashmir",
        description: "The summer capital of Jammu and Kashmir, Srinagar is the heart of the Kashmir Valley. Famous for its historic gardens, waterfronts, and houseboats, it is also known for traditional Kashmiri handicrafts and dried fruits. The Jhelum River flows through the city, flanked by traditional wooden houses and ancient mosques.",
        image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=2670&auto=format&fit=crop",
        altitude: "1.58 km",
        bestTime: "April - October",
        distance: "0 km from Airport",
        weather: "Check Forecast",
        attractions: [
            { title: "Dal Lake", desc: "Experience the floating vegetable market and shikara rides.", icon: <Compass size={20} /> },
            { title: "Mughal Gardens", desc: "Visit Nishat, Shalimar, and Chashme Shahi gardens.", icon: <Camera size={20} /> },
            { title: "Old City", desc: "Explore historic wooden mosques and busy bazaars.", icon: <MapPin size={20} /> }
        ]
    },
    2: {
        name: "Mystic Ladakh",
        subtitle: "Land of High Passes",
        description: "A land of high passes, barren mountains, and ancient monasteries, Ladakh offers a starkly beautiful landscape that is unlike anywhere else in India. From the azure waters of Pangong Lake to the sand dunes of Nubra Valley, every corner of Ladakh is a photographer's paradise.",
        image: destLadakh,
        altitude: "3.50 km",
        bestTime: "June - September",
        distance: "434 km from Srinagar",
        weather: "Sunny / Cold",
        attractions: [
            { title: "Pangong Lake", desc: "The world's highest saltwater lake.", icon: <Compass size={20} /> },
            { title: "Monasteries", desc: "Thiksey, Hemis, and Diskit monasteries.", icon: <Mountain size={20} /> },
            { title: "Nubra Valley", desc: "Ride distinct double-humped camels.", icon: <Camera size={20} /> }
        ]
    },
    3: {
        name: "Unexplored Gurez",
        subtitle: "The Hidden Gem",
        description: "Gurez Valley, located in the high Himalayas, is a landscape of breathtaking beauty. Known for its pristine Kishanganga River, pyramid-shaped Habba Khatoon peak, and warm tribal culture, it remains one of Kashmir's least explored wonders. The valley is cut off from the rest of the world during winter, preserving its unique traditions and untouched nature.",
        image: destGurez,
        altitude: "2.40 km",
        bestTime: "May - September",
        distance: "123 km from Srinagar",
        weather: "Cool Summers",
        attractions: [
            { title: "Habba Khatoon Peak", desc: "A majestic pyramid-shaped peak named after the poetess.", icon: <Mountain size={20} /> },
            { title: "Kishanganga River", desc: "Crystal clear waters perfect for trout fishing and camping.", icon: <Compass size={20} /> },
            { title: "Dawar Village", desc: "The central hub with traditional log houses and culture.", icon: <MapPin size={20} /> }
        ]
    },
    4: {
        name: "Sonamarg",
        subtitle: "Meadow of Gold",
        description: "Sonamarg is a gateway to the ancient Silk Road and the base for the Amarnath Yatra. Surrounded by imposing glaciers and serene lakes, it shines like gold when the sun hits its snowy peaks. It's a trekker's paradise, offering trails to Vishansar, Krishansar, and Gangabal lakes.",
        image: destSonamarg,
        altitude: "2.73 km",
        bestTime: "April - October",
        distance: "80 km from Srinagar",
        weather: "Snowy / Cool",
        attractions: [
            { title: "Thajiwas Glacier", desc: "Accessible by a short trek or pony ride, snow all year.", icon: <Mountain size={20} /> },
            { title: "Zojila Pass", desc: "The treacherous and thrilling pass to Ladakh.", icon: <Compass size={20} /> },
            { title: "Zero Point", desc: "A winter wonderland with snow activities even in summer.", icon: <Camera size={20} /> }
        ]
    },
    5: {
        name: "Pahalgam",
        subtitle: "Valley of Shepherds",
        description: "Pahalgam is a postcard-perfect valley known for its lush meadows, pine forests, and the Lidder River. It was once a humble shepherd's village and is now Kashmir's premier resort town. It also serves as the starting point for the annual Amarnath Yatra pilgrimage.",
        image: destPahalgam,
        altitude: "2.74 km",
        bestTime: "March - November",
        distance: "95 km from Srinagar",
        weather: "Pleasant",
        attractions: [
            { title: "Betaab Valley", desc: "Famous location from the Bollywood movie Betaab.", icon: <Compass size={20} /> },
            { title: "Aru Valley", desc: "A scenic meadow and base for treks to Kolahoi Glacier.", icon: <Mountain size={20} /> },
            { title: "Lidder River", desc: "Ideal for white water rafting and angling.", icon: <Camera size={20} /> }
        ]
    },
    6: {
        name: "Gulmarg",
        subtitle: "Meadow of Flowers",
        description: "Gulmarg is a world-renowned skiing destination and home to one of the world's highest gondolas. In summer, its meadows are carpeted with vibrant wildflowers. It offers a perfect blend of adventure and tranquility, with luxury resorts and endless slopes.",
        image: destGulmarg,
        altitude: "2.65 km",
        bestTime: "All Year Round",
        distance: "50 km from Srinagar",
        weather: "Snowy Winter",
        attractions: [
            { title: "Gulmarg Gondola", desc: "One of the highest cable cars in the world.", icon: <Mountain size={20} /> },
            { title: "Skiing Slopes", desc: "World-class powder snow for skiing enthusiasts.", icon: <Compass size={20} /> },
            { title: "Golf Course", desc: "The highest green golf course in the world.", icon: <Camera size={20} /> }
        ]
    },
    7: {
        name: "Yusmarg",
        subtitle: "Meadow of Jesus",
        description: "Yusmarg is an idyllic meadow surrounded by pine forests and snow-capped peaks. Legend has it that Jesus once visited this spot. It is quieter than other destinations, making it perfect for those seeking solitude, long walks, and horse riding in untamed nature.",
        image: destYusmarg,
        altitude: "2.40 km",
        bestTime: "May - September",
        distance: "47 km from Srinagar",
        weather: "Cool / Breezy",
        attractions: [
            { title: "Doodh Ganga", desc: "A frothing river stream flowing through the forest.", icon: <Compass size={20} /> },
            { title: "Nilnag Lake", desc: "A blue water lake nestled deep in the pine forest.", icon: <Camera size={20} /> },
            { title: "Sang-e-Safed", desc: "An oval-shaped meadow that remains snow-covered.", icon: <Mountain size={20} /> }
        ]
    },
    // Default fallback
    default: {
        name: "Destination Not Found",
        subtitle: "",
        description: "The destination you are looking for does not exist or has been removed.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2670&auto=format&fit=crop",
        altitude: "-",
        bestTime: "-",
        distance: "-",
        weather: "-",
        attractions: []
    }
};

import { useState } from 'react';
import BookingModal from './BookingModal';

const DestinationDetails = () => {
    const { id } = useParams();
    const destination = destinationsData[Number(id) as keyof typeof destinationsData] || destinationsData.default;
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#0b1c15] min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c15] via-transparent to-transparent z-10" />
                <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                />

                <div className="absolute bottom-0 left-0 w-full z-20 pb-12">
                    <div className="container mx-auto px-4">
                        <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-lime-400 transition-colors mb-6 group">
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Destinations
                        </Link>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-lime-400 font-bold tracking-widest uppercase mb-2 text-sm">{destination.subtitle}</p>
                            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">{destination.name}</h1>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-white mb-4 border-l-4 border-lime-400 pl-4">Overview</h3>
                            <p className="text-white/80 leading-relaxed text-lg">
                                {destination.description}
                            </p>
                        </div>

                        {destination.attractions.length > 0 && (
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-lime-400 pl-4">Key Attractions</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {destination.attractions.map((attr, idx) => (
                                        <div key={idx} className="bg-[#0f241d] p-5 rounded-xl border border-white/5 hover:border-lime-400/30 transition-all group">
                                            <div className="w-10 h-10 rounded-full bg-emerald-950 flex items-center justify-center text-lime-400 mb-4 group-hover:scale-110 transition-transform">
                                                {attr.icon}
                                            </div>
                                            <h4 className="text-lg font-bold text-white mb-2">{attr.title}</h4>
                                            <p className="text-white/60 text-sm">{attr.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-[#0f241d] rounded-2xl p-6 border border-white/5">
                            <h3 className="text-xl font-bold text-white mb-6">Quick Facts</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-emerald-950 rounded-lg text-lime-400">
                                        <Mountain size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-xs uppercase font-bold tracking-wider">Altitude</p>
                                        <p className="text-white font-medium">{destination.altitude}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-emerald-950 rounded-lg text-lime-400">
                                        <Calendar size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-xs uppercase font-bold tracking-wider">Best Time to Visit</p>
                                        <p className="text-white font-medium">{destination.bestTime}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-emerald-950 rounded-lg text-lime-400">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-xs uppercase font-bold tracking-wider">Distance</p>
                                        <p className="text-white font-medium">{destination.distance}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-emerald-950 rounded-lg text-lime-400">
                                        <Thermometer size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-xs uppercase font-bold tracking-wider">Weather</p>
                                        <p className="text-white font-medium">{destination.weather}</p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full mt-8 py-4 bg-lime-400 text-emerald-950 font-bold rounded-xl hover:bg-lime-300 transition-colors shadow-lg shadow-lime-400/20"
                            >
                                Plan a Trip Here
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                packageTitle={destination.name}
                mode="lead-capture"
            />
        </div>
    );
};

export default DestinationDetails;
