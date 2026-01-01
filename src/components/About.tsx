import { motion } from 'framer-motion';
import { Users, Award, Map, Calendar, User } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-24 pb-16 bg-emerald-950 min-h-screen">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Journey</h1>
                    <div className="w-24 h-1 bg-lime-400 mx-auto rounded-full mb-6"></div>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
                        Born from a shared passion for the Himalayas, Tour Byte is the realization of a dream by two brothers to share the untold stories of Kashmir with the world.
                    </p>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {[
                        { icon: Users, label: 'Happy Travelers', value: '500+' },
                        { icon: Map, label: 'Destinations', value: '50+' },
                        { icon: Calendar, label: 'Years Experience', value: '10+' },
                        { icon: Award, label: 'Awards Won', value: '5' }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm"
                        >
                            <stat.icon className="w-8 h-8 text-lime-400 mx-auto mb-4" />
                            <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                            <p className="text-white/60">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Our Story */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">Byte by Byte, A Journey of Excellence</h2>
                        <div className="space-y-4 text-white/80 leading-relaxed">
                            <p>
                                What started as weekend explorations of the hidden valleys of Kashmir turned into a mission to curate authentic travel experiences. We realized that standard tour packages often missed the soul of the place—the local stories, the hidden trails, and the warm hospitality of the remote villages.
                            </p>
                            <p>
                                Tour Byte was founded to bridge this gap. We don't just show you places; we help you experience them. From the houseboat owners in Dal Lake to the shepherds in Sonamarg, our network is built on personal relationships cultivated over years.
                            </p>
                            <p>
                                Every itinerary we craft is personal, ensuring that when you leave Kashmir, you take a piece of it with you in your heart.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] rounded-2xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=2070&auto=format&fit=crop"
                            alt="Kashmir Landscape"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>

                {/* Founders */}
                <h2 className="text-3xl font-bold text-white text-center mb-12">Meet The Founders</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {[
                        {
                            name: "Irfan Khan",
                            role: "Co-Founder & Operations Head",
                            desc: "An avid trekker with an eye for detail. Irfan ensures every logistical aspect of your trip runs smoother than a shikara on Dal Lake."
                        },
                        {
                            name: "Tahir Khan",
                            role: "Co-Founder & Experience Curator",
                            desc: "A storyteller at heart. Tahir crafts the itineraries that turn a simple vacation into a journey of discovery and wonder."
                        }
                    ].map((founder, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group"
                        >
                            <div className="w-20 h-20 bg-lime-400/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <User className="w-10 h-10 text-lime-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{founder.name}</h3>
                            <p className="text-lime-400 font-medium mb-4">{founder.role}</p>
                            <p className="text-white/70 leading-relaxed">
                                {founder.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
