import { motion } from 'framer-motion';

const Privacy = () => {
    return (
        <div className="pt-24 pb-16 bg-emerald-950 min-h-screen">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-white/10 pb-6">Privacy Policy</h1>

                    <div className="space-y-6 text-white/80 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-lime-400 mb-3">1. Information We Collect</h2>
                            <p>We collect information necessary to process your booking, including your name, contact details, payment information, and travel preferences.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-lime-400 mb-3">2. How We Use Your Information</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>To manage your bookings and provide travel services.</li>
                                <li>To communicate with you regarding your trip.</li>
                                <li>To send you promotional offers (only if you subscribe).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-lime-400 mb-3">3. Data Protection</h2>
                            <p>We implement security measures to ensure your personal data is protected. We do not sell or share your information with third parties for marketing purposes.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-lime-400 mb-3">4. Cookies</h2>
                            <p>Our website uses cookies to enhance user experience and analyze website traffic. You can choose to disable cookies through your browser settings.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-lime-400 mb-3">5. Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy, please contact us at info@tourbyte.com.</p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Privacy;
