import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="h-1 w-16 bg-accent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {t('about.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('about.description')}
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/ukj8xE1ChKanNf2Z36cEa6/sandbox/fREPPXRupoAHgiU5v8jaGZ-img-4_1771033229000_na1fn_bW9kZXJuLW9mZmljZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdWtqOHhFMUNoS2FuTmYyWjM2Y0VhNi9zYW5kYm94L2ZSRVBQWFJ1cG9BSGdpVTV2OGphR1otaW1nLTRfMTc3MTAzMzIyOTAwMF9uYTFmbl9iVzlrWlhKdUxXOW1abWxqWlEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=py7~UOZVKYH359LAJrtOMELrh~Ys9YC6iIL8bzFgDzHptsmPIg86xClce8iJmPwdJx8clRSI1i6tFW5z7ddOjS7gZBsMuW7rvO~8iZQfbYweh3EENq9~dLFlRAzeXfatt284u22SggYYDFezjaGqUbCSN0rYn6s46RNNaPtRKGIj~59gKZaGkZB8sE8jBqMv3NY7K24pzsrQU3S8MryLP1niWwgcAoaDzv9PCbpjfdNU4bMTlSowV-YNyHK2b440W8xAkKRHw0nFJXkvxqGxXQid0OFWkmBy4c~a3DU-ucKcbNOxgKPEHbGN-4nIpc7pV9Qr~AaeYEFK5DBOdd2-9w__"
                alt="مكتب أطراف نجد"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">
                {t('about.vision')}
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('about.vision.text')}
              </p>

              <h3 className="text-3xl font-bold text-primary mb-6">
                {t('about.mission')}
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('about.mission.text')}
              </p>

              {/* Key Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-primary mb-1">الخبرة والاحترافية</h4>
                    <p className="text-muted-foreground">فريق متخصص بخبرة عالية في مجال المقاولات</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-primary mb-1">الجودة والأمان</h4>
                    <p className="text-muted-foreground">التزام تام بمعايير الجودة والسلامة</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-primary mb-1">الالتزام بالمواعيد</h4>
                    <p className="text-muted-foreground">تسليم المشاريع في الوقت المحدد</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
