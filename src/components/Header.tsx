import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const whatsappLink = `https://wa.me/966563212224?text=${encodeURIComponent('السلام عليكم، أود التواصل معكم')}`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">أ.ن</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold text-primary">أطراف نجد</h1>
              <p className="text-xs text-muted-foreground">مقاولات وأعمال طرق</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-primary hover:text-accent font-semibold transition-colors"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-primary hover:text-accent font-semibold transition-colors"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-primary hover:text-accent font-semibold transition-colors"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-primary hover:text-accent font-semibold transition-colors"
            >
              {t('nav.projects')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-primary hover:text-accent font-semibold transition-colors"
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            {/* WhatsApp Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-all duration-300 font-semibold"
            >
              <MessageCircle size={20} />
              <span className="hidden md:inline">{t('contact.whatsapp')}</span>
            </a>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-all duration-300 font-semibold"
            >
              {language === 'ar' ? 'EN' : 'عربي'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-right py-2 text-primary hover:text-accent font-semibold transition-colors"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-right py-2 text-primary hover:text-accent font-semibold transition-colors"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-right py-2 text-primary hover:text-accent font-semibold transition-colors"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-right py-2 text-primary hover:text-accent font-semibold transition-colors"
            >
              {t('nav.projects')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-right py-2 text-primary hover:text-accent font-semibold transition-colors"
            >
              {t('nav.contact')}
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-full mt-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-all duration-300 font-semibold justify-center"
            >
              <MessageCircle size={20} />
              {t('contact.whatsapp')}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
