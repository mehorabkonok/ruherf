// import { FaFacebookSquare } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa";
// import { IoLogoYoutube } from "react-icons/io";


// const Footer = () => {
//     return (
//         <footer className="footer bg-neutral text-neutral-content p-10">
//             <div className="border">
//                 {/* Quick Link section */}
//                 <section>
//                     <ul>
//                         <li><a href="/">Home</a></li>
//                         <li><a href="/about">About</a></li>
//                         <li><a href="/contact_us">Contact Us</a></li>

//                     </ul>
//                 </section>

//                 {/* Resource section */}
//                 <section>
//                     <ul>
//                         <li><a href="/research">Research</a></li>
//                         <li><a href="/publications">Publications</a></li>
//                         <li><a href="/events">Events</a></li>
//                     </ul>
//                 </section>

//                 {/* Legal Policy section */}
//                 <section>
//                     <ul>
//                         <li><a href="/privacy_policy">Privacy Policy</a></li>
//                         <li><a href="/terms_and_conditions">Terms & Conditions</a></li>
//                         <li><a href="/faq">FAQ</a></li>
//                     </ul>
//                 </section>
//             </div>

//             <div className="border">
//                 {/* Social Media section */}
//                 <section>
//                     <ul>
//                         <li><a href=""><FaFacebookSquare /></a></li>
//                         <li><a href=""><FaSquareXTwitter /></a></li>
//                         <li><a href=""><FaLinkedin /></a></li>
//                         <li><a href=""><IoLogoYoutube /></a></li>
//                     </ul>
//                 </section>
//             </div>
//         </footer>
//     );
// };

// export default Footer;



import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";


const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content py-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
                {/* Quick Link section */}
                <section>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:text-sky-500 transition-colors">Home</a></li>
                        <li><a href="/about" className="hover:text-sky-500 transition-colors">About</a></li>
                        <li><a href="/contact_us" className="hover:text-sky-500 transition-colors">Contact Us</a></li>
                    </ul>
                </section>

                {/* Resource section */}
                <section>
                    <h3 className="text-lg font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2">
                        <li><a href="/research" className="hover:text-sky-500 transition-colors">Research</a></li>
                        <li><a href="/publications" className="hover:text-sky-500 transition-colors">Publications</a></li>
                        <li><a href="/events" className="hover:text-sky-500 transition-colors">Events</a></li>
                    </ul>
                </section>

                {/* Legal Policy section */}
                <section>
                    <h3 className="text-lg font-semibold mb-4">Legal</h3>
                    <ul className="space-y-2">
                        <li><a href="/privacy_policy" className="hover:text-sky-500 transition-colors">Privacy Policy</a></li>
                        <li><a href="/terms_and_conditions" className="hover:text-sky-500 transition-colors">Terms & Conditions</a></li>
                        <li><a href="/faq" className="hover:text-sky-500 transition-colors">FAQ</a></li>
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
                &copy; {new Date().getFullYear()} Rajshahi University Higher Education and Research Forum. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;


