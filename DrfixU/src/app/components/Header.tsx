import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Stethoscope, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const moreMenuItems = [
    { path: '/vision', label: 'Our Vision' },
    { path: '/join-therapist', label: 'Join as a Therapist' },
    { path: '/contact', label: 'Contact' },
    { path: '/faq', label: 'FAQ' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1F4FD8]">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-[#1F4FD8]">DrFixU</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive('/') ? 'text-[#1F4FD8] font-semibold' : 'text-gray-700 hover:text-[#1F4FD8]'
              }`}
            >
              Home
            </Link>
            <Link
              to="/videos"
              className={`transition-colors ${
                isActive('/videos') ? 'text-[#1F4FD8] font-semibold' : 'text-gray-700 hover:text-[#1F4FD8]'
              }`}
            >
              Learning Resources
            </Link>
            <Link
              to="/consult"
              className={`transition-colors ${
                isActive('/consult') ? 'text-[#1F4FD8] font-semibold' : 'text-gray-700 hover:text-[#1F4FD8]'
              }`}
            >
              Consultation
            </Link>
            <Link
              to="/testimonials"
              className={`transition-colors ${
                isActive('/testimonials') ? 'text-[#1F4FD8] font-semibold' : 'text-gray-700 hover:text-[#1F4FD8]'
              }`}
            >
              Success Stories
            </Link>
            
            {/* More Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-[#1F4FD8] transition-colors outline-none">
                More
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/vision" className="cursor-pointer">
                    Our Vision
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/join-therapist" className="cursor-pointer">
                    Join as a Therapist
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/contact" className="cursor-pointer">
                    Contact
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/faq" className="cursor-pointer">
                    FAQ
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left transition-colors py-2 ${
                  isActive('/') ? 'text-[#1F4FD8] font-semibold' : 'text-gray-700 hover:text-[#1F4FD8]'
                }`}
              >
                Home
              </Link>
              <Link
                to="/videos"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left transition-colors py-2 ${
                  isActive('/videos') ? 'text-[#1F4FD8] font-semibold' : 'text-gray-700 hover:text-[#1F4FD8]'
                }`}
              >
                Learning Resources
              </Link>
              <Link
                to="/consult"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left transition-colors py-2 ${
                  isActive('/consult') ? 'text-[#1F4FD8] font-semibold' : 'text-gray-700 hover:text-[#1F4FD8]'
                }`}
              >
                Consultation
              </Link>
              <Link
                to="/testimonials"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left transition-colors py-2 ${
                  isActive('/testimonials') ? 'text-[#1F4FD8] font-semibold' : 'text-gray-700 hover:text-[#1F4FD8]'
                }`}
              >
                Success Stories
              </Link>
              
              {/* Mobile More Section */}
              <div className="border-t pt-2 mt-2">
                <button
                  onClick={() => setIsMobileMoreOpen(!isMobileMoreOpen)}
                  className="flex items-center justify-between w-full text-left transition-colors py-2 text-gray-700 hover:text-[#1F4FD8]"
                >
                  <span>More</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMobileMoreOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileMoreOpen && (
                  <div className="pl-4 flex flex-col gap-3 mt-2">
                    {moreMenuItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-left transition-colors py-2 ${
                          isActive(item.path) ? 'text-[#1F4FD8] font-semibold' : 'text-gray-600 hover:text-[#1F4FD8]'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
