import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, Building2, Wrench, Lightbulb } from 'lucide-react';

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Zap,
      titleKey: 'services.roads',
      descKey: 'services.roads.desc',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Building2,
      titleKey: 'services.infrastructure',
      descKey: 'services.infrastructure.desc',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Wrench,
      titleKey: 'services.maintenance',
      descKey: 'services.maintenance.desc',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: Lightbulb,
      titleKey: 'services.consulting',
      descKey: 'services.consulting.desc',
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="h-1 w-16 bg-accent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {t('services.title')}
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8 text-center group"
                >
                  {/* Icon */}
                  <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {t(service.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {t(service.descKey)}
                  </p>

                  {/* Gold line accent */}
                  <div className="h-1 w-8 bg-accent mx-auto mt-6 group-hover:w-12 transition-all duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
