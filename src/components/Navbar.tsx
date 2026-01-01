import { useState, useEffect } from 'react';
import { Menu, X, Mountain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
    onOpenModal: () => void;
}

const Navbar = ({ onOpenModal }: NavbarProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Scroll to top on route change
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Destinations', href: '/destinations' },
        { name: 'Packages', href: '/packages' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Contact', href: '/contact' },
    ];

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('/#')) {
            if (location.pathname === '/') {
                e.preventDefault();
                const id = href.substring(2);
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-emerald-950/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 group cursor-pointer">
                    <div className="p-2 bg-gradient-to-br from-lime-400 to-lime-500 rounded-lg group-hover:scale-105 transition-transform">
                        <Mountain className="text-emerald-950 w-6 h-6" />
                    </div>
                    <span className="text-2xl font-display font-bold text-white tracking-tight">
                        Tour <span className="text-lime-400">Byte</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10 ml-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            className={`text-white/90 hover:text-lime-400 font-medium transition-colors ${location.pathname === link.href ? 'text-lime-400' : ''
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button onClick={onOpenModal} className="px-6 py-2.5 bg-transparent border border-lime-400 text-lime-400 rounded-full font-medium hover:bg-lime-400 hover:text-emerald-950 transition-all duration-300">
                        Plan Trip
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 right-0 bg-emerald-950/95 backdrop-blur-xl border-t border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-lg text-white font-medium py-2 border-b border-white/5"
                                    onClick={(e) => {
                                        setMobileMenuOpen(false);
                                        handleClick(e, link.href);
                                    }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button onClick={() => { setMobileMenuOpen(false); onOpenModal(); }} className="w-full py-3 bg-lime-400 text-emerald-950 font-bold rounded-lg mt-2">
                                Plan Your Trip
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
