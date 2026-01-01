import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    location: string;
    text: string;
    image: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Priya Sharma",
        location: "Delhi",
        text: "Kashmir trip with my family was absolutely magical! The team arranged everything perfectly - from the houseboat stay to the Gulmarg excursion. My kids still talk about the Shikara ride!",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop",
        rating: 5
    },
    {
        id: 2,
        name: "Anjali Desai",
        location: "Bangalore",
        text: "As a solo female traveler, I was initially worried. But Tour Byte ensured I felt safe throughout. The local guides were respectful and knowledgeable. Best trip of my life!",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop",
        rating: 5
    },
    {
        id: 3,
        name: "Rahul Verma",
        location: "Mumbai",
        text: "The Ladakh expedition was flawlessly executed. The bikes were in great condition and the backup vehicle support gave us peace of mind. Highly recommended!",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop",
        rating: 5
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-24 bg-emerald-950 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-20 left-20 text-lime-400/5 rotate-12 pointer-events-none">
                <Quote size={300} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our <span className="text-lime-400">Travelers Say</span></h2>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full -mx-12 hidden md:flex">
                        <button onClick={prev} className="p-3 rounded-full border border-white/10 hover:bg-lime-400 hover:text-emerald-950 transition-colors">
                            <ChevronLeft />
                        </button>
                        <button onClick={next} className="p-3 rounded-full border border-white/10 hover:bg-lime-400 hover:text-emerald-950 transition-colors">
                            <ChevronRight />
                        </button>
                    </div>

                    <div className="overflow-hidden min-h-[400px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"
                            >
                                <div className="flex justify-center gap-1 mb-6">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>

                                <p className="text-xl md:text-2xl text-white/90 italic mb-8 leading-relaxed font-light">
                                    "{testimonials[currentIndex].text}"
                                </p>

                                <div className="flex items-center justify-center gap-4">
                                    <img
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].name}
                                        className="w-16 h-16 rounded-full border-2 border-lime-400 object-cover"
                                    />
                                    <div className="text-left">
                                        <h4 className="font-bold text-lg text-white">{testimonials[currentIndex].name}</h4>
                                        <p className="text-lime-400 text-sm">{testimonials[currentIndex].location}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-3 h-3 rounded-full transition-colors ${idx === currentIndex ? 'bg-lime-400' : 'bg-white/20'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
