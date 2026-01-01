import whatsappLogo from '../assets/images/whatsapp-logo.png';

const FloatingWhatsApp = () => {
    return (
        <a
            href="https://wa.me/916006105037"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 group"
        >
            <div className="relative transition-transform duration-300 group-hover:scale-110">
                {/* Ping animation behind the logo */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping scale-75"></span>

                {/* Custom WhatsApp Logo */}
                <img
                    src={whatsappLogo}
                    alt="Chat on WhatsApp"
                    className="relative w-16 h-16 md:w-20 md:h-20 drop-shadow-xl"
                />
            </div>
        </a>
    );
};

export default FloatingWhatsApp;
