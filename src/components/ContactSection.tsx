import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const text = [
      'السلام عليكم، أود التواصل مع شركة أطراف نجد.',
      `الاسم: ${formData.name}`,
      `البريد الإلكتروني: ${formData.email}`,
      formData.phone ? `الهاتف: ${formData.phone}` : '',
      `الرسالة: ${formData.message}`,
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/966563212224?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setIsSubmitting(false);
    toast.success('تم تجهيز رسالتك عبر واتساب');
  };

  const whatsappLink = `https://wa.me/966563212224?text=${encodeURIComponent('السلام عليكم، أود التواصل معكم')}`;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="h-1 w-16 bg-accent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-4 rounded-lg">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{t('contact.phone')}</h3>
                  <p className="text-muted-foreground">0563212224</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-4 rounded-lg">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{t('contact.email')}</h3>
                  <p className="text-muted-foreground">info@atrafnajd.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-4 rounded-lg">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{t('contact.location')}</h3>
                  <p className="text-muted-foreground">الرياض، طريق الدمام، المملكة العربية السعودية</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-4 rounded-lg">
                  <MessageCircle className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{t('contact.whatsapp')}</h3>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-primary transition-colors font-semibold"
                  >
                    تواصل معنا عبر واتس آب
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="اسمك الكامل"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="بريدك الإلكتروني"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  الهاتف (اختياري)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="رقم هاتفك"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="رسالتك..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 font-bold text-lg disabled:opacity-50"
              >
                {isSubmitting ? 'جاري الإرسال...' : t('contact.form.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
