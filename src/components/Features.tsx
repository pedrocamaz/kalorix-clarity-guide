import React from 'react';
import { Button } from '@/components/ui/button';
import { Camera, Scan, BarChart3, Lightbulb } from 'lucide-react';
import appFeaturesImage from '@/assets/app-features.jpg';
import { toast } from 'sonner';

const features = [
  {
    icon: Camera,
    title: 'Tire uma foto',
    description: 'Aponte, clique e descubra instantaneamente.'
  },
  {
    icon: Scan,
    title: 'Escaneie código de barras',
    description: 'Produtos industrializados na palma da mão.'
  },
  {
    icon: BarChart3,
    title: 'Relatórios inteligentes',
    description: 'Acompanhe sua evolução com gráficos claros.'
  },
  {
    icon: Lightbulb,
    title: 'Insights personalizados',
    description: 'Sugestões baseadas nos seus objetivos.'
  }
];

export const Features = () => {
  const handleClick = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'cta_click',
          source: 'features',
          url: typeof window !== 'undefined' ? window.location.href : undefined,
          ts: Date.now(),
        }),
      });
      if (res.ok) {
        const data = await res.json().catch(() => null);
        if (data && data.url) {
          window.location.href = data.url;
          return;
        }
        toast.success('Obrigado! Vamos te contatar em breve.');
      } else {
        toast.error('Não foi possível enviar agora. Tente novamente.');
      }
    } catch (err) {
      toast.error('Não foi possível enviar agora. Tente novamente.');
    }
  };
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mockup */}
          <div className="animate-fade-up">
            <img
              src={appFeaturesImage}
              alt="Funcionalidades do Kalorix"
              className="w-full h-auto max-w-md mx-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Tecnologia que simplifica sua vida
              </h2>
              <p className="text-lg text-muted-foreground">
                Todas as ferramentas que você precisa para uma alimentação consciente e equilibrada.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex gap-4"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button onClick={handleClick} variant="cta" size="lg">
              Quero começar agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};