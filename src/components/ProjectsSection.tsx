import { useLanguage } from '@/contexts/LanguageContext';
import { Construction } from 'lucide-react';

export default function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4"><div className="h-1 w-16 bg-accent" /></div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t('projects.title')}</h2>
          </div>
          <div className="max-w-2xl mx-auto rounded-xl border border-border bg-card p-10 text-center shadow-sm">
            <Construction className="mx-auto mb-4 text-accent" size={46} />
            <p className="text-lg text-muted-foreground">سيتم إضافة تفاصيل وصور المشاريع المنفذة قريباً.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
