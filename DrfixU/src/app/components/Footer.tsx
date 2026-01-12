import { Phone, MapPin, Mail, Heart, Stethoscope } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1F4FD8]">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">DrFixU</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner in physiotherapy and rehabilitation. Expert care, anywhere, anytime.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1F4FD8] flex items-center justify-center hover:bg-[#1F4FD8]/80 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1F4FD8] flex items-center justify-center hover:bg-[#1F4FD8]/80 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1F4FD8] flex items-center justify-center hover:bg-[#1F4FD8]/80 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1F4FD8] flex items-center justify-center hover:bg-[#1F4FD8]/80 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#videos" className="text-gray-400 hover:text-white transition-colors">
                  Video Library
                </a>
              </li>
              <li>
                <a href="#consult" className="text-gray-400 hover:text-white transition-colors">
                  Book Consultation
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Back Pain Treatment</li>
              <li>Knee Rehabilitation</li>
              <li>Neck Pain Relief</li>
              <li>Shoulder Therapy</li>
              <li>Sports Injury Recovery</li>
              <li>Post-Surgery Care</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#F36A21] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-gray-400">+91 98765 43210</div>
                  <div className="text-gray-400 text-sm">Mon-Sat, 9AM-8PM</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#F36A21] mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:support@drfixu.com" className="text-gray-400 hover:text-white transition-colors">
                    support@drfixu.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#F36A21] mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  123 Healthcare Avenue,<br />
                  Mumbai, Maharashtra 400001
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} DrFixU. All rights reserved. Made with{' '}
              <Heart className="inline h-4 w-4 text-red-500 fill-red-500" /> for better health.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
