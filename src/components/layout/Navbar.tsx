
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Heart, BookOpen, Calendar, Users, Home } from "lucide-react";
import CartIcon from "@/components/cart/CartIcon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                <Heart size={20} className="text-white" />
              </div>
              <span className="mr-3 text-xl font-bold text-primary">موسسة التقى للتنمية</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            <Link to="/" className="px-3 py-2 rounded-md text-primary hover:bg-primary-light transition-colors duration-200">
              <span className="flex items-center">
                <Home size={18} className="ml-2" />
                الرئيسية
              </span>
            </Link>
            <Link to="/donate" className="px-3 py-2 rounded-md text-primary hover:bg-primary-light transition-colors duration-200">
              <span className="flex items-center">
                <Heart size={18} className="ml-2" />
                تبرع الآن
              </span>
            </Link>
            <Link to="/education" className="px-3 py-2 rounded-md text-primary hover:bg-primary-light transition-colors duration-200">
              <span className="flex items-center">
                <BookOpen size={18} className="ml-2" />
                التعليم
              </span>
            </Link>
            <Link to="/events" className="px-3 py-2 rounded-md text-primary hover:bg-primary-light transition-colors duration-200">
              <span className="flex items-center">
                <Calendar size={18} className="ml-2" />
                الفعاليات
              </span>
            </Link>
            <Link to="/volunteer" className="px-3 py-2 rounded-md text-primary hover:bg-primary-light transition-colors duration-200">
              <span className="flex items-center">
                <Users size={18} className="ml-2" />
                تطوع معنا
              </span>
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center gap-2">
            <CartIcon />
            <Link to="/donate" className="donate-button">
              تبرع الآن
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <CartIcon />
            <button
              onClick={toggleMenu}
              className="text-primary focus:outline-none"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="px-3 py-2 rounded-md bg-primary-light text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center">
                  <Home size={18} className="ml-2" />
                  الرئيسية
                </span>
              </Link>
              <Link 
                to="/donate" 
                className="px-3 py-2 rounded-md hover:bg-primary-light text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center">
                  <Heart size={18} className="ml-2" />
                  تبرع الآن
                </span>
              </Link>
              <Link 
                to="/education" 
                className="px-3 py-2 rounded-md hover:bg-primary-light text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center">
                  <BookOpen size={18} className="ml-2" />
                  التعليم
                </span>
              </Link>
              <Link 
                to="/events" 
                className="px-3 py-2 rounded-md hover:bg-primary-light text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center">
                  <Calendar size={18} className="ml-2" />
                  الفعاليات
                </span>
              </Link>
              <Link 
                to="/volunteer" 
                className="px-3 py-2 rounded-md hover:bg-primary-light text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center">
                  <Users size={18} className="ml-2" />
                  تطوع معنا
                </span>
              </Link>
              <Link 
                to="/donate" 
                className="donate-button text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                تبرع الآن
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
