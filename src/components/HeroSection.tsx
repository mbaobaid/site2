import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const { t } = useLanguage();

  const whatsappLink = `https://wa.me/966563212224?text=${encodeURIComponent('السلام عليكم، أود التواصل معكم')}`;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/ukj8xE1ChKanNf2Z36cEa6/sandbox/fREPPXRupoAHgiU5v8jaGZ-img-1_1771033238000_na1fn_aGVyby1jb25zdHJ1Y3Rpb24tc2l0ZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdWtqOHhFMUNoS2FuTmYyWjM2Y0VhNi9zYW5kYm94L2ZSRVBQWFJ1cG9BSGdpVTV2OGphR1otaW1nLTFfMTc3MTAzMzIzODAwMF9uYTFmbl9hR1Z5YnkxamIyNXpkSEoxWTNScGIyNHRjMmwwWlEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=mMsosRDKPhN~ttLJ-JludnqASrBVk3umXd3sPmWX-nbco8TDlToYIF4gY2RNnCshrqKSGYhk9bVkcqUCE5Wqmk0Wb27kxfNjQ6ursRamM3sRXGqr4uKBrGAwfejI2GBbX8cYQauPoot4vFnI5RYKrPlhqclrS2~Iu3nEPAtp-mJQlcgVP7tKR~jMAc0reCZibfLUG8gMBHtvjbbuDhSaDjCrgGe7zfJtMVJk8pDQxtXYMLJmJIgQ2aZr0i9TzPlpxKcaGiGDtm3ne1Q2dLx11vUv6GG66onzzVik7FQKTTGNrKC5rZ1o3qfUJVNDMuNtv0IG7ihuWVb5TI90V5NRLA__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl mb-8 text-gray-100 leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-all duration-300 font-bold text-lg"
            >
              <MessageCircle size={24} />
              {t('contact.whatsapp')}
            </a>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg hover:opacity-90 transition-all duration-300 font-bold text-lg border-2 border-white"
            >
              {t('nav.contact')}
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center animate-bounce">
            <ArrowDown size={32} className="text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
