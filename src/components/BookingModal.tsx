import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';

export type BookingMode = 'general' | 'booking' | 'customization' | 'lead-capture';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    packageTitle?: string;
    mode?: BookingMode;
}

const BookingModal = ({ isOpen, onClose, packageTitle, mode = 'general' }: BookingModalProps) => {
    const { register, handleSubmit, reset } = useForm();

    // Reset form when modal opens/closes or mode changes
    // useEffect(() => {
    //     if (isOpen) reset();
    // }, [isOpen, reset, mode, packageTitle]);
    // Keeping it simple without useEffect for now to avoid overly aggressive resets if re-renders happen, 
    // but typically you might want to clear fields on close.

    const getTitle = () => {
        if (mode === 'booking' && packageTitle) return <span>Book <span className="text-lime-400">{packageTitle}</span></span>;
        if (mode === 'customization' && packageTitle) return <span>Customize <span className="text-lime-400">{packageTitle}</span></span>;
        return <span>Plan Your <span className="text-lime-400">Trip</span></span>;
    };

    const getSubtitle = () => {
        if (mode === 'booking') return "Fill in your details to secure your spot.";
        if (mode === 'customization') return "Tell us how you'd like to tweak this package.";
        return "Tell us your preferences and we'll craft the perfect itinerary.";
    };

    const onSubmit = (data: any) => {
        // Format message based on mode
        let header = "*New Trip Inquiry from Tour Byte* 🏔️";
        if (mode === 'booking') header = `*Booking Request: ${packageTitle}* 📅`;
        if (mode === 'customization') header = `*Customization Request: ${packageTitle}* ✏️`;
        if (mode === 'lead-capture') header = `*Plan A Trip: ${packageTitle || 'General'}* ✈️`;

        let message = "";

        // CONNECT YOUR WHATSAPP NUMBER HERE
        const phoneNumber = '916006105037';

        if (mode === 'lead-capture') {
            message = `${header}%0A%0A` +
                `Hi, I am interested in the ${data.packageInterest || 'tour'} package for ${data.destination || 'Ladakh'}.%0A%0A` +
                `*Here are my details:*%0A` +
                `- *Name:* ${data.name}%0A` +
                `- *Email:* ${data.email}%0A` +
                `- *Phone:* ${data.phone}%0A` +
                `- *Travel Dates:* ${data.travelDate}%0A` +
                `- *Duration:* ${data.days} days%0A` +
                `- *Travelers:* ${data.travelers} people%0A` +
                `- *Budget:* ${data.budget || 'Not specified'}%0A` +
                `- *Special Requirements:* ${data.message || 'None'}`;
        } else {
            // Existing logic for other modes
            message = `${header}%0A%0A` +
                `*Name:* ${data.name}%0A` +
                `*Phone:* ${data.phone}%0A` +
                `*Email:* ${data.email}%0A` +
                `*Destination:* ${data.destination || (packageTitle || 'General')}%0A` +
                `*Month:* ${data.month || 'Not specified'}%0A` +
                `*Travelers:* ${data.travelers}%0A` +
                `*Message:* ${data.message}`;
        }

        const url = `https://wa.me/${phoneNumber}?text=${message}`;

        // Open in new tab
        window.open(url, '_blank');
        onClose();
        reset();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 50 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-emerald-950 border border-white/10 w-full max-w-2xl rounded-3xl p-6 md:p-8 shadow-2xl pointer-events-auto max-h-[90vh] overflow-y-auto">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white max-w-[90%]">{getTitle()}</h3>
                                    <p className="text-white/60 text-sm">{getSubtitle()}</p>
                                </div>
                                <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors shrink-0">
                                    <X className="text-white" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-bold text-lime-400 uppercase tracking-wider mb-1 block">Full Name</label>
                                        <input {...register("name", { required: true })} className="w-full bg-emerald-900/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-lime-400" />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-lime-400 uppercase tracking-wider mb-1 block">Phone Number</label>
                                        <input {...register("phone", { required: true })} className="w-full bg-emerald-900/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-lime-400" placeholder="+91" />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-lime-400 uppercase tracking-wider mb-1 block">Email</label>
                                    <input {...register("email", { required: true })} className="w-full bg-emerald-900/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-lime-400" />
                                </div>

                                {mode === 'lead-capture' ? (
                                    <>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-xs font-bold text-lime-400 uppercase tracking-wider mb-1 block">Travel Dates</label>
                                                <input type="date" {...register("travelDate", { required: true })} className="w-full bg-emerald-900/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-lime-400" />
                                            </div>
                                            <div>
                                                <label className="text-xs font-bold text-lime-400 uppercase tracking-wider mb-1 block">No. of Days</label>
                                                <input type="number" {...register("days", { required: true, min: 1 })} className="w-full bg-emerald-900/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-lime-400" placeholder="e.g. 5" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-xs font-bold text-lime-400 uppercase tracking-wider mb-1 block">Travelers</label>
                                                <input type="number" {...register("travelers", { required: true, min: 1 })} className="w-full bg-emerald-900/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-lime-400" placeholder="e.g. 2" />
                                            </div>
                                            <div>
                                                <label className="text-xs font-bold text-lime-400 uppercase tracking-wider mb-1 block">Budget Range</label>
                                                <select {...register("budget")} className="w-full bg-emerald-900/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-lime-400">
                                                    <option className="bg-emerald-950" value="₹15,000-25,000">₹15,000 - ₹25,000</option>
                                                    <option className="bg-emerald-950" value="₹25,000-40,000">₹25,000 - ₹40,000</option>
                                                    <option className="bg-emerald-950" value="₹40,000+">₹40,000+</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-xs font-bold text-lime-400 uppercase tracking-wider mb-1 block">Package Interest</label>
                                            <select {...register("packageInterest")} className="w-full bg-emerald-900/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-lime-400">
                                                {/* Use prop options or defaults */}
                                                {(packageTitle === 'Mystic Ladakh' || packageTitle === 'Ladakh') && (
                                                    <>
                                                        <option className="bg-emerald-950" value="Complete Ladakh Tour">Complete Ladakh Tour</option>
                                                        <option className="bg-emerald-950" value="Pangong Lake Special">Pangong Lake Special</option>
                                                        <option className="bg-emerald-950" value="Monastery Circuit">Monastery Circuit</option>
                                                        <option className="bg-emerald-950" value="Nubra Valley Adventure">Nubra Valley Adventure</option>
                                                        <option className="bg-emerald-950" value="Custom Package">Custom Package</option>
                                                    </>
                                                )}
                                                {packageTitle !== 'Mystic Ladakh' && packageTitle !== 'Ladakh' && (
                                                    <>
                                                        <option className="bg-emerald-950" value="Standard Package">Standard Package</option>
                                                        <option className="bg-emerald-950" value="Premium Package">Premium Package</option>
                                                        <option className="bg-emerald-950" value="Custom Package">Custom Package</option>
                                                    </>
                                                )}
                                            </select>
                                        </div>
                                    </>
                                ) : (
                                    /* Original Fields for other modes */
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-xs font-bold text-lime-400 uppercase tracking-wider mb-1 block">Destination</label>
                                            <select {...register("destination")} defaultValue={packageTitle ? packageTitle : "Kashmir Valley"} className="w-full bg-emerald-900/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-lime-400">
                                                {packageTitle && <option className="bg-emerald-950" value={packageTitle}>{packageTitle}</option>}
                                                <option className="bg-emerald-950" value="Kashmir Valley">Kashmir Valley</option>
                                                <option className="bg-emerald-950" value="Ladakh">Ladakh</option>
                                                <option className="bg-emerald-950" value="Gulmarg Only">Gulmarg Only</option>
                                                <option className="bg-emerald-950" value="Combo (Kashmir + Ladakh)">Combo (Kashmir + Ladakh)</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold text-lime-400 uppercase tracking-wider mb-1 block">Travelers</label>
                                            <select {...register("travelers")} className="w-full bg-emerald-900/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-lime-400">
                                                <option className="bg-emerald-950">Couple (2)</option>
                                                <option className="bg-emerald-950">Family (3-4)</option>
                                                <option className="bg-emerald-950">Group (5+)</option>
                                                <option className="bg-emerald-950">Solo</option>
                                            </select>
                                        </div>
                                    </div>
                                )}

                                <div>
                                    <label className="text-xs font-bold text-lime-400 uppercase tracking-wider mb-1 block">{mode === 'customization' ? "Customization Details" : "Special Requests"}</label>
                                    <textarea
                                        {...register("message")}
                                        rows={3}
                                        className="w-full bg-emerald-900/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-lime-400"
                                        placeholder={mode === 'customization' ? "I want to add an extra day in Pahalgam..." : "Any specific dietary needs or preferences..."}
                                    ></textarea>
                                </div>

                                <button type="submit" className="w-full py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-900/20">
                                    Send via WhatsApp <Send size={18} />
                                </button>
                                <p className="text-center text-xs text-white/40">We typically reply within 1 hour on WhatsApp</p>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
