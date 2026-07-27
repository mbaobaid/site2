import { useLanguage } from '@/contexts/LanguageContext';
import { Handshake } from 'lucide-react';

export default function ClientsSection() {
  const { t } = useLanguage();

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-4"><div className="h-1 w-16 bg-accent" /></div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t('clients.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">{t('clients.description')}</p>
          <div className="max-w-xl mx-auto rounded-xl border border-border bg-white p-10 shadow-sm">
            <Handshake className="mx-auto mb-4 text-accent" size={46} />
            <p className="text-lg text-muted-foreground">سيتم إضافة شعارات العملاء والشركاء بعد اعتمادها.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
