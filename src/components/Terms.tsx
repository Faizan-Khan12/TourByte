import { motion } from 'framer-motion';

const Terms = () => {
    return (
        <div className="pt-24 pb-16 bg-emerald-950 min-h-screen">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-white/10 pb-6">Terms and Conditions</h1>

                    <div className="space-y-6 text-white/80 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-lime-400 mb-3">1. Introduction</h2>
                            <p>Welcome to Tour Byte. By booking a tour with us, you agree to these Terms and Conditions. Please read them carefully.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-lime-400 mb-3">2. Booking and Payments</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>A deposit of 30% is required to confirm your booking.</li>
                                <li>The remaining balance must be paid 15 days prior to the trip start date.</li>
                                <li>Prices are subject to change without prior notice until the booking is confirmed.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-lime-400 mb-3">3. Cancellations and Refunds</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Cancellations made 30 days or more before travel: 90% refund.</li>
                                <li>Cancellations made 15-29 days before travel: 50% refund.</li>
                                <li>Cancellations made less than 15 days before travel: No refund.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-lime-400 mb-3">4. Travel Documents</h2>
                            <p>It is the responsibility of the traveler to ensure they have valid identification documents (Aadhar Card/Passport/Voter ID) required for entry into Jammu & Kashmir and Ladakh.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-lime-400 mb-3">5. Force Majeure</h2>
                            <p>Tour Byte is not liable for delays or cancellations caused by natural disasters, strikes, political unrest, or other unforeseen events beyond our control.</p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Terms;
