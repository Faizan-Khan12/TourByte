import { ShieldCheck, UserCheck, Headset, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <UserCheck size={28} className="text-lime-400" />,
        title: "Local Experts",
        description: "Our team consists of locals who know every hidden alley, viewpoint, and story of the valley."
    },
    {
        icon: <Headset size={28} className="text-lime-400" />,
        title: "24/7 Support",
        description: "We are with you every step of the way. From arrival to departure, help is just a call away."
    },
    {
        icon: <ShieldCheck size={28} className="text-lime-400" />,
        title: "No Hidden Costs",
        description: "Transparent pricing is our core value. What you see is exactly what you pay."
    },
    {
        icon: <Star size={28} className="text-lime-400" />,
        title: "Customizable",
        description: "Every traveler is unique. We tailor our packages to match your interests, budget, and style."
    }
];

const testimonials = [
    {
        text: "Kashmir trip with my family was absolutely magical! The team arranged everything perfectly - from the houseboat stay to the Gulmarg excursion.",
        author: "Priya Sharma",
        location: "Delhi, India",
        rating: 5
    },
    {
        text: "As a solo female traveler, I was initially worried. But Kashmir Travels ensured I felt safe throughout. The local guides were respectful and knowledgeable.",
        author: "Anjali Desai",
        location: "Bangalore, India",
        rating: 5
    },
    {
        text: "The honeymoon package was worth every rupee. The candlelight dinner on the houseboat and the surprise flower decoration made our trip extra special.",
        author: "Rahul & Simran",
        location: "Mumbai, India",
        rating: 5
    }
];

const WhyUs = () => {
    return (
        <section className="py-20 bg-[#0b1c15]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Features Column */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <h2 className="text-4xl font-display font-bold text-white mb-6">
                                Why Travel With Us?
                            </h2>
                            <p className="text-white/60 text-lg leading-relaxed">
                                We don't just sell packages; we craft experiences. Here is why thousands of travelers trust us with their Kashmir journey.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-[#0f241d] p-6 rounded-2xl border border-white/5 hover:border-lime-400/30 transition-colors group"
                                >
                                    <div className="mb-4 p-3 bg-emerald-950 rounded-xl w-fit group-hover:bg-lime-400/10 transition-colors">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Testimonials Column */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12 text-center lg:text-right"
                        >
                            <p className="text-lime-400 text-sm font-bold tracking-widest uppercase mb-2">Testimonials</p>
                            <h2 className="text-4xl font-display font-bold text-white">
                                What Our Travelers Say
                            </h2>
                        </motion.div>

                        <div className="space-y-6">
                            {testimonials.map((t, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-[#1a2e25] p-6 rounded-2xl border border-white/5 relative"
                                >
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-white/80 italic mb-6">"{t.text}"</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-lime-400 text-emerald-950 flex items-center justify-center font-bold">
                                            {t.author[0]}
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-sm">{t.author}</p>
                                            <p className="text-white/40 text-xs">{t.location}</p>
                                        </div>
                                    </div>
                                    <div className="absolute top-6 right-6 text-white/5 text-6xl font-serif font-bold leading-none select-none">
                                        ”
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
