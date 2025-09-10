import React from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import mockupImage from '@/assets/kalorix-mockup-hero.jpg';
import logoImage from '@/assets/kalorix-logo.png';

export const Hero = () => {
  const handleClick = async () => {
    try {
      const res = await fetch('https://caloscan-n8n-webhook.msruy0.easypanel.host/webhook/landingpage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'cta_click',
          source: 'hero',
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
    <section className="relative min-h-screen bg-gradient-cream overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        {/* Logo at the top */}
        <div className="flex justify-center mb-12 animate-fade-up">
          <img src={logoImage} alt="Kalorix Logo" className="h-24 w-auto" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transforme o <span className="text-primary">invisível</span> da comida em <span className="text-primary">clareza</span> para a sua vida.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                O app que mostra o que há por trás do seu prato, de forma simples e elegante.
              </p>
            </div>

            {/* CTA sem formulário */}
            <div className="space-y-4 bg-card p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-foreground">Comece sua transformação agora</h3>
              <Button onClick={handleClick} variant="cta" size="lg" className="w-full">
                Quero experimentar agora
              </Button>
            </div>
          </div>

          {/* Right Column - Mockup */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative animate-float">
              <img
                src={mockupImage}
                alt="Kalorix App Mockup"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-glow rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};