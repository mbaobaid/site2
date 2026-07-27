import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.projects': 'مشاريعنا',
    'nav.contact': 'تواصل معنا',
    
    'hero.title': 'مؤسسة أطراف نجد للمقاولات وأعمال الطرق',
    'hero.subtitle': 'متخصصون في أعمال الطرق والبنية التحتية بأعلى معايير الجودة',
    'hero.cta': 'تواصل معنا',
    
    'about.title': 'من نحن',
    'about.description': 'مؤسسة أطراف نجد للمقاولات وأعمال الطرق متخصصة في تنفيذ مشاريع البنية التحتية والطرق بأعلى معايير الجودة والأمان. نملك فريق محترف من المهندسين والعمال ذوي الخبرة العالية.',
    'about.vision': 'رؤيتنا',
    'about.vision.text': 'أن نكون الشركة الرائدة في مجال المقاولات والبنية التحتية بالمملكة العربية السعودية.',
    'about.mission': 'مهمتنا',
    'about.mission.text': 'تقديم خدمات مقاولات عالية الجودة تلبي احتياجات العملاء وتتجاوز توقعاتهم.',
    
    'services.title': 'خدماتنا',
    'services.roads': 'أعمال الطرق',
    'services.roads.desc': 'تصميم وتنفيذ الطرق الحديثة بأعلى معايير الجودة',
    'services.infrastructure': 'البنية التحتية',
    'services.infrastructure.desc': 'تنفيذ مشاريع البنية التحتية المتكاملة',
    'services.maintenance': 'الصيانة والإصلاح',
    'services.maintenance.desc': 'خدمات الصيانة الدورية والإصلاح السريع',
    'services.consulting': 'الاستشارات الهندسية',
    'services.consulting.desc': 'تقديم استشارات هندسية متخصصة للمشاريع',
    
    'projects.title': 'مشاريعنا',
    'projects.completed': 'مشاريع منجزة',
    'projects.view': 'عرض المزيد',
    
    'clients.title': 'عملاؤنا',
    'clients.description': 'نفخر بتعاوننا مع أكبر الشركات والجهات الحكومية',
    
    'contact.title': 'تواصل معنا',
    'contact.description': 'نحن هنا لخدمتك. تواصل معنا عبر أي من القنوات التالية',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.location': 'الموقع',
    'contact.whatsapp': 'واتس آب',
    'contact.form.name': 'الاسم',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.message': 'الرسالة',
    'contact.form.send': 'إرسال',
    
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.year': '2026',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact Us',
    
    'hero.title': 'Atraf Najd Construction & Road Works',
    'hero.subtitle': 'Specialists in road construction and infrastructure with highest quality standards',
    'hero.cta': 'Contact Us',
    
    'about.title': 'About Us',
    'about.description': 'Atraf Najd Construction & Road Works specializes in executing infrastructure and road projects with the highest quality and safety standards. We have a professional team of experienced engineers and workers.',
    'about.vision': 'Our Vision',
    'about.vision.text': 'To be the leading construction and infrastructure company in Saudi Arabia.',
    'about.mission': 'Our Mission',
    'about.mission.text': 'To provide high-quality construction services that meet and exceed our clients\' expectations.',
    
    'services.title': 'Our Services',
    'services.roads': 'Road Construction',
    'services.roads.desc': 'Design and implementation of modern roads with highest quality standards',
    'services.infrastructure': 'Infrastructure',
    'services.infrastructure.desc': 'Implementation of integrated infrastructure projects',
    'services.maintenance': 'Maintenance & Repair',
    'services.maintenance.desc': 'Periodic maintenance and quick repair services',
    'services.consulting': 'Engineering Consulting',
    'services.consulting.desc': 'Specialized engineering consulting for projects',
    
    'projects.title': 'Our Projects',
    'projects.completed': 'Completed Projects',
    'projects.view': 'View More',
    
    'clients.title': 'Our Clients',
    'clients.description': 'We are proud to work with major companies and government entities',
    
    'contact.title': 'Contact Us',
    'contact.description': 'We are here to serve you. Contact us through any of the following channels',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.whatsapp': 'WhatsApp',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send',
    
    'footer.rights': 'All rights reserved',
    'footer.year': '2026',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
    document.documentElement.lang = language === 'ar' ? 'en' : 'ar';
    document.documentElement.dir = language === 'ar' ? 'ltr' : 'rtl';
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
