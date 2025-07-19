import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faYoutube,
  faFacebook,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FiMail, FiMapPin, FiPhone, FiClock, FiArrowRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-white text-[#38404f] pt-12 px-4 md:px-8 lg:px-16 border-t border-[#e0e0e0]">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section - Updated with #2c2d67 background */}
        <div className="bg-[#2c2d67] text-white rounded-xl p-8 md:p-10 mb-12 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Join Our Artisan Community
              </h2>
              <p className="text-white/90 mb-4 md:mb-0">
                Get exclusive access to new collections, artisan stories, and special offers. 
                Sign up for our newsletter today.
              </p>
            </div>

            <div className="w-full md:w-auto min-w-[300px]">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6612] text-[#38404f]"
                />
                <button className="bg-[#ff6612] hover:bg-[#e55b0f] text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                  Subscribe <FiArrowRight />
                </button>
              </div>
              <p className="text-xs text-white/70 mt-2 text-center sm:text-left">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-[#e0e0e0]">
          {/* Contact Info */}
          <div>
            <h5 className="font-bold text-lg mb-4 text-[#2c2d67] border-l-4 border-[#ff6612] pl-3">
              Contact Us
            </h5>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-[#ff6612] mt-1" />
                <span>123 Artisan Street, Craft District, India</span>
              </li>
              <li className="flex items-start gap-3">
                <FiMail className="text-[#ff6612] mt-1" />
                <span>support@handmadeheritage.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FiPhone className="text-[#ff6612] mt-1" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <FiClock className="text-[#ff6612] mt-1" />
                <span>Mon-Sat: 10AM - 7PM</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold text-lg mb-4 text-[#2c2d67] border-l-4 border-[#ff6612] pl-3">
              Quick Links
            </h5>
            <ul className="space-y-3">
              {['About Us', 'Our Artisans', 'Shipping Policy', 'Returns', 'FAQs'].map((item) => (
                <li key={item}>
                  <a href="#!" className="hover:text-[#ff6612] transition-colors flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#ff6612] rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h5 className="font-bold text-lg mb-4 text-[#2c2d67] border-l-4 border-[#ff6612] pl-3">
              Follow Us
            </h5>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: faFacebook, name: 'Facebook' },
                { icon: faInstagram, name: 'Instagram' },
                { icon: faTwitter, name: 'Twitter' },
                { icon: faPinterest, name: 'Pinterest' },
                { icon: faYoutube, name: 'YouTube' },
                { icon: faLinkedin, name: 'LinkedIn' },
              ].map((social) => (
                <a 
                  key={social.name}
                  href="#!" 
                  className="w-10 h-10 bg-[#f5f5f5] rounded-full flex items-center justify-center text-[#2c2d67] hover:bg-[#ff6612] hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="font-bold text-lg mb-4 text-[#2c2d67] border-l-4 border-[#ff6612] pl-3">
              Stay Updated
            </h5>
            <p className="mb-4">
              Get the latest updates on new products and upcoming sales
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6612]"
              />
              <button className="bg-[#ff6612] hover:bg-[#e55b0f] text-white px-4 py-2 rounded-lg transition-colors">
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-[#38404f]/80">
            © {new Date().getFullYear()} Handmade Heritage. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {['Privacy Policy', 'Terms of Service', 'Shipping Policy'].map((item) => (
              <a key={item} href="#!" className="hover:text-[#ff6612] transition-colors">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span>Payment Methods:</span>
            <div className="flex gap-2">
              {['💳', '📱', '💰'].map((emoji, i) => (
                <span key={i}>{emoji}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;