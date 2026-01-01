
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        alert('Message sent successfully!');
    };

    return (
        <section id="contact" className="py-20 bg-emerald-950 relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 bg-emerald-900/30 rounded-3xl p-8 lg:p-12 border border-white/5">

                    {/* Info Side */}
                    <div className="lg:w-1/2 space-y-8">
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Get in <span className="text-lime-400">Touch</span></h2>
                            <p className="text-white/60 text-lg">
                                Ready to plan your dream vacation? Reach out to us for a customized itinerary.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-lime-400/50 transition-colors">
                                <Phone className="text-lime-400 shrink-0" />
                                <div>
                                    <p className="text-sm text-white/50 uppercase tracking-wider mb-1">Call / WhatsApp</p>
                                    <p className="text-white font-bold text-lg">+91 9906XX XXXX</p>
                                    <p className="text-white font-bold text-lg">+91 7006XX XXXX</p>
                                    <span className="inline-block mt-2 px-2 py-1 bg-green-900/50 text-green-400 text-xs rounded border border-green-500/30">
                                        Replies in ~15 mins
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-lime-400/50 transition-colors">
                                <Mail className="text-lime-400 shrink-0" />
                                <div>
                                    <p className="text-sm text-white/50 uppercase tracking-wider mb-1">Email Us</p>
                                    <p className="text-white font-medium">info@tourbyte.com</p>
                                    <p className="text-white font-medium">bookings@tourbyte.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-lime-400/50 transition-colors">
                                <MapPin className="text-lime-400 shrink-0" />
                                <div>
                                    <p className="text-sm text-white/50 uppercase tracking-wider mb-1">Visit Us</p>
                                    <p className="text-white/80 leading-relaxed">
                                        2nd Floor, Tourism Complex,<br />
                                        Boulevard Road, Dal Lake,<br />
                                        Srinagar, Kashmir - 190001
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:w-1/2">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-emerald-950/50 p-8 rounded-2xl border border-white/10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-white/70">First Name</label>
                                    <input
                                        {...register("firstName", { required: true })}
                                        className="w-full bg-emerald-900/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-lime-400 transition-colors"
                                        placeholder="John"
                                    />
                                    {errors.firstName && <span className="text-red-400 text-xs">Required</span>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-white/70">Last Name</label>
                                    <input
                                        {...register("lastName", { required: true })}
                                        className="w-full bg-emerald-900/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-lime-400 transition-colors"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-white/70">Email Address</label>
                                <input
                                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                    className="w-full bg-emerald-900/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-lime-400 transition-colors"
                                    placeholder="john@example.com"
                                />
                                {errors.email && <span className="text-red-400 text-xs">Invalid email</span>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-white/70">Message</label>
                                <textarea
                                    {...register("message", { required: true })}
                                    rows={4}
                                    className="w-full bg-emerald-900/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-lime-400 transition-colors"
                                    placeholder="Tell us about your travel plans..."
                                ></textarea>
                                {errors.message && <span className="text-red-400 text-xs">Required</span>}
                            </div>

                            <button type="submit" className="w-full py-4 bg-lime-400 text-emerald-950 font-bold rounded-lg hover:bg-lime-300 transition-colors flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
