import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const whatsappLink = `https://wa.me/966563212224?text=${encodeURIComponent('السلام عليكم، أود التواصل معكم')}`;

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Footer Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* About */}
            <div>
              <h3 className="text-2xl font-bold mb-4">أطراف نجد</h3>
              <p className="text-gray-200 leading-relaxed">
                مؤسسة متخصصة في أعمال الطرق والبنية التحتية بأعلى معايير الجودة والاحترافية.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-200 hover:text-accent transition-colors">
                    الرئيسية
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-200 hover:text-accent transition-colors">
                    من نحن
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-200 hover:text-accent transition-colors">
                    خدماتنا
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-200 hover:text-accent transition-colors">
                    مشاريعنا
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-200 hover:text-accent transition-colors">
                    تواصل معنا
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-accent" />
                  <a href="tel:0563212224" className="text-gray-200 hover:text-accent transition-colors">
                    0563212224
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-accent" />
                  <a href="mailto:info@atrafnajd.com" className="text-gray-200 hover:text-accent transition-colors">
                    info@atrafnajd.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-accent" />
                  <span className="text-gray-200">الرياض، طريق الدمام</span>
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-200 hover:text-accent transition-colors mt-4"
                >
                  <MessageCircle size={20} className="text-accent" />
                  <span>واتس آب</span>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* Copyright */}
          <div className="text-center text-gray-300">
            <p>
              {t('footer.rights')} © {currentYear} مؤسسة أطراف نجد للمقاولات وأعمال الطرق
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
