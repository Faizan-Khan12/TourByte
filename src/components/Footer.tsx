
import { Mountain, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-emerald-950 border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <Mountain className="text-lime-400 w-8 h-8" />
                            <span className="text-2xl font-display font-bold text-white">Tour <span className="text-lime-400">Byte</span></span>
                        </div>
                        <p className="text-white/60 mb-6 leading-relaxed">
                            Your trusted partner for exploring the unseen beauty of Kashmir and Ladakh.
                            Registered with J&K Tourism.
                        </p>
                        <div className="flex gap-4 text-white/70">
                            <a href="#" className="hover:text-lime-400 transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-lime-400 transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-lime-400 transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-lime-400 transition-colors"><Youtube size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-white/60">
                            <li><Link to="/about" className="hover:text-lime-400 transition-colors">About Us</Link></li>
                            <li><Link to="/destinations" className="hover:text-lime-400 transition-colors">Destinations</Link></li>
                            <li><Link to="/packages" className="hover:text-lime-400 transition-colors">Packages</Link></li>
                            <li><Link to="/contact" className="hover:text-lime-400 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Support</h4>
                        <ul className="space-y-3 text-white/60">
                            <li><Link to="/terms" className="hover:text-lime-400 transition-colors">Terms & Conditions</Link></li>
                            <li><Link to="/privacy" className="hover:text-lime-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/faq" className="hover:text-lime-400 transition-colors">FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
                        <p className="text-white/60 mb-4">Subscribe to get the latest offers and travel tips.</p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-lime-400 transition-colors"
                            />
                            <button className="w-full py-3 bg-lime-400 text-emerald-950 font-bold rounded-lg hover:bg-lime-300 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
                    <p>© 2025 Tour Byte. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Designed by <a href="https://xcendlabs.com" target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:text-lime-300 transition-colors">XcendLabs</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
