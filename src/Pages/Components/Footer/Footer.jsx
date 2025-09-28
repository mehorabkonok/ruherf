import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content py-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
                {/* Quick Link section */}
                <section>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-sky-500 transition-colors">Home</Link></li>
                        <li><Link to="/about" className="hover:text-sky-500 transition-colors">About</Link></li>
                        <li><Link to="/contact_us" className="hover:text-sky-500 transition-colors">Contact Us</Link></li>
                    </ul>
                </section>

                {/* Resource section */}
                <section>
                    <h3 className="text-lg font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2">
                        <li><Link to="/research" className="hover:text-sky-500 transition-colors">Research</Link></li>
                        <li><Link to="/publications" className="hover:text-sky-500 transition-colors">Publications</Link></li>
                        <li><Link to="/events" className="hover:text-sky-500 transition-colors">Events</Link></li>
                    </ul>
                </section>

                {/* Legal Policy section */}
                <section>
                    <h3 className="text-lg font-semibold mb-4">Legal</h3>
                    <ul className="space-y-2">
                        <li><Link to="/privacy_policy" className="hover:text-sky-500 transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/terms_and_conditions" className="hover:text-sky-500 transition-colors">Terms & Conditions</Link></li>
                        <li><Link to="/faq" className="hover:text-sky-500 transition-colors">FAQ</Link></li>
                    </ul>
                </section>

                {/* Social Media section */}
                <section>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <ul className="flex space-x-4 text-2xl">
                        <li>
                            <a href="https://web.facebook.com/groups/831036235763556" target="blank" className="hover:text-blue-600 transition-colors"><FaFacebookSquare /></a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-400 transition-colors"><FaSquareXTwitter /></a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-700 transition-colors"><FaLinkedin /></a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-red-600 transition-colors"><IoLogoYoutube /></a>
                        </li>
                    </ul>
                </section>
            </div>

            {/* Footer bottom */}
            <div className="mt-6 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Rajshahi University Higher Education and Research Forum <Link to='/admin_login'>{"[RUHERF]"}</Link>. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;


