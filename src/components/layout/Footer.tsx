import React from "react";
import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                <Heart size={20} className="text-primary" />
              </div>
              <span className="mr-3 text-xl font-bold">موسسة التقى للتنمية</span>
            </div>
            <p className="text-sm mb-4">
              مؤسسة خيرية تسعى لتقديم المساعدات ونشر العلم والمعرفة لخدمة المجتمع المصري والمجتمعات العربية والإسلامية.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4 border-r-4 border-accent pr-3">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link to="/donate" className="hover:text-accent transition-colors">تبرع الآن</Link></li>
              <li><Link to="/education" className="hover:text-accent transition-colors">منصة التعليم</Link></li>
              <li><Link to="/events" className="hover:text-accent transition-colors">الفعاليات</Link></li>
              <li><Link to="/volunteer" className="hover:text-accent transition-colors">تطوع معنا</Link></li>
              <li><Link to="/zakat" className="hover:text-accent transition-colors">حاسبة الزكاة</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4 border-r-4 border-accent pr-3">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="ml-2" />
                <span>+20 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="ml-2" />
                <span>info@khaier-elummati.org</span>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="ml-2" />
                <span>القاهرة، مصر</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4 border-r-4 border-accent pr-3">النشرة البريدية</h3>
            <p className="text-sm mb-4">اشترك في نشرتنا البريدية للحصول على آخر الأخبار والفعاليات</p>
            <div className="flex">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="px-4 py-2 w-full rounded-r-md focus:outline-none text-primary"
              />
              <button className="bg-accent text-white px-4 py-2 rounded-l-md hover:bg-opacity-90 transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 mt-8 pt-6 text-sm text-center">
          <p>© {new Date().getFullYear()} موسسة التقى للتنمية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
