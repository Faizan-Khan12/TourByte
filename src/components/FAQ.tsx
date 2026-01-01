import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
    {
        category: "Travel Essentials",
        questions: [
            {
                q: "What is the best time to visit Kashmir?",
                a: "April to October is ideal for comfortable weather. For snow activities, December to March is best."
            },
            {
                q: "Do I need any permits to visit Kashmir?",
                a: "Indian citizens do not need permits for Srinagar, Gulmarg, or Pahalgam. However, verified identification is required everywhere. Ladakh requires an Inner Line Permit for certain areas."
            }
        ]
    },
    {
        category: "Booking & Customization",
        questions: [
            {
                q: "Can I customize the tour packages?",
                a: "Yes! All our packages are fully customizable. You can add days, change hotels, or include specific experiences."
            },
            {
                q: "What is the booking process?",
                a: "You can book by paying a token advance of 30%. The remaining amount can be paid on arrival."
            }
        ]
    },
    {
        category: "Transportation",
        questions: [
            {
                q: "What kind of vehicle will be provided?",
                a: "We provide clean, well-maintained Innova, Etios, or Tempo Traveller based on your group size."
            },
            {
                q: "Is the driver experienced?",
                a: "Yes, our drivers are locals with 10+ years of experience in mountain driving and act as guides too."
            }
        ]
    },
    {
        category: "Accommodation & Stay",
        questions: [
            {
                q: "Are houseboats comfortable for families?",
                a: "Absolutely! Our luxury houseboats come with multiple bedrooms, attached bathrooms, and modern amenities."
            },
            {
                q: "Do hotels have heating?",
                a: "Yes, all our partner hotels and houseboats have electric blankets and central heating facilities during winter."
            }
        ]
    },
    {
        category: "Safety & Health",
        questions: [
            {
                q: "Is it safe for solo female travelers?",
                a: "Kashmir is very safe. We have many solo female travelers. Our drivers are verified and we provide 24/7 support."
            },
            {
                q: "Is there mobile connectivity?",
                a: "Postpaid connections (Jio, Airtel, BSNL) work well in Kashmir. Prepaid sim cards from outside J&K do not work."
            }
        ]
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggle = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <section className="py-20 bg-emerald-900 border-t border-white/5">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                        <HelpCircle className="text-lime-400" />
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-8">
                    {faqs.map((cat, catIdx) => (
                        <div key={catIdx}>
                            <h3 className="text-lime-400 font-bold mb-4 uppercase tracking-wider text-sm pl-2 border-l-2 border-lime-400">
                                {cat.category}
                            </h3>
                            <div className="space-y-4">
                                {cat.questions.map((item, qIdx) => {
                                    const id = `${catIdx}-${qIdx}`;
                                    const isOpen = openIndex === id;

                                    return (
                                        <div key={qIdx} className="bg-emerald-950/50 border border-white/10 rounded-2xl overflow-hidden">
                                            <button
                                                onClick={() => toggle(id)}
                                                className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
                                            >
                                                <span className="font-medium text-white/90">{item.q}</span>
                                                <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-lime-400' : 'text-white/50'}`} />
                                            </button>
                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <div className="p-6 pt-0 text-white/60 text-sm leading-relaxed border-t border-white/5 mt-2">
                                                            {item.a}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
