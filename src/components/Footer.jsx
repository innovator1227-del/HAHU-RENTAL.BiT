import { Globe2, Link2, Share2, Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-white">HAHU RENTALS</h2>
                    <p className="mt-4 text-sm text-gray-400">
                        Premium car rental platform providing reliable, affordable, and
                        comfortable rides anytime, anywhere.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-white">Home</a></li>
                        <li><a href="/cars" className="hover:text-white">Browse Cars</a></li>
                        <li><a href="/booking" className="hover:text-white">Book Now</a></li>
                        <li><a href="/about" className="hover:text-white">About Us</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/faq" className="hover:text-white">FAQ</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact</a></li>
                        <li><a href="/terms" className="hover:text-white">Terms</a></li>
                        <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Contact</h3>
                    <div className="space-y-3 text-sm">
                        <p className="flex items-center gap-2">
                            <Mail size={16} /> tebie435@email.com
                        </p>
                        <p className="flex items-center gap-2">
                            <Phone size={16} /> +251 978 797 484
                        </p>
                        <p className="flex items-center gap-2">
                            <MapPin size={16} /> Bahirdar, Ethiopia
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex flex-wrap gap-4 mt-4">
                        <a href="#" className="hover:text-white"><Globe2 /></a>
                        <a href="#" className="hover:text-white"><Share2 /></a>
                        <a href="#" className="hover:text-white"><Link2 /></a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 py-4 text-sm text-gray-400 text-center">
                © {new Date().getFullYear()} HAHU RENTALS. All rights reserved.
            </div>
        </footer>
    );
}
export default Footer;