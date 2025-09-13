import React from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import mockupImage from '@/assets/kalorix-mockup-hero.jpg';
import logoImage from '@/assets/kalorix-logo.png';

export const Hero = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp link for the free version
    const whatsappUrl = "https://wa.me/5521982482829?text=Olá! Quero experimentar a versão gratuita do Kalorix";
    window.open(whatsappUrl, '_blank');
  };

  const handleSubscriptionClick = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_WEBHOOK_URL, {
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
    <section className="relative bg-gradient-cream overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow"></div>
      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        {/* Logo at the top */}
        <div className="flex justify-center pt-6 pb-4 sm:pt-8 sm:pb-6 animate-fade-up">
          <img src={logoImage} alt="Kalorix Logo" className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto drop-shadow-lg" />
        </div>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Mockup for Mobile */}
            <div className="relative flex justify-center mb-6 animate-fade-up">
              <div className="relative animate-float w-2/3 max-w-[240px]">
                <img
                  src={mockupImage}
                  alt="Kalorix App Mockup"
                  className="w-full h-auto rounded-2xl shadow-2xl border-2 border-white/50"
                />
                <div className="absolute inset-0 bg-gradient-glow rounded-2xl pointer-events-none opacity-40"></div>
              </div>
            </div>
            
            {/* Content for Mobile */}
            <div className="text-center space-y-5 pb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-3">
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight px-2">
                  Transforme o <span className="text-primary">invisível</span> da comida em <span className="text-primary">clareza</span> para a sua vida.
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground px-4 leading-relaxed">
                  O app que mostra o que há por trás do seu prato, de forma simples e elegante.
                </p>
              </div>
              
              {/* CTA for Mobile */}
              <div className="mx-4">
                <div className="bg-white/95 p-4 rounded-2xl shadow-xl border border-white/60 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Comece sua transformação agora</h3>
                  
                  {/* Free version button */}
                  <div className="mb-3">
                    <Button onClick={handleWhatsAppClick} variant="outline" size="lg" className="w-full text-base py-4 font-medium rounded-xl border-2">
                      Quero experimentar agora
                    </Button>
                    <div className="flex justify-center mt-2">
                      <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">GRÁTIS</span>
                    </div>
                  </div>
                  
                  {/* Paid version button */}
                  <div>
                    <Button onClick={handleSubscriptionClick} variant="cta" size="lg" className="w-full text-base py-4 font-medium rounded-xl">
                      Assine agora
                    </Button>
                    <div className="flex justify-center mt-2">
                      <span className="text-sm font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">R$ 27,90</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block lg:order-1 space-y-6 animate-fade-up text-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transforme o <span className="text-primary">invisível</span> da comida em <span className="text-primary">clareza</span> para a sua vida.
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                O app que mostra o que há por trás do seu prato, de forma simples e elegante.
              </p>
            </div>
            
            {/* CTA for Desktop */}
            <div className="bg-card/90 p-6 rounded-2xl shadow-xl border border-border max-w-md">
              <h3 className="text-xl font-semibold text-foreground mb-4">Comece sua transformação agora</h3>
              
              {/* Free version button */}
              <div className="mb-4">
                <Button onClick={handleWhatsAppClick} variant="outline" size="lg" className="w-full text-lg py-6 font-medium border-2">
                  Quero experimentar agora de graça
                </Button>
                <div className="flex justify-center mt-3">
                  <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">GRÁTIS</span>
                </div>
              </div>
              
              {/* Paid version button */}
              <div>
                <Button onClick={handleSubscriptionClick} variant="cta" size="lg" className="w-full text-lg py-6 font-medium">
                  Assine agora
                </Button>
                <div className="flex justify-center mt-3">
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">R$ 27,90</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mockup for Desktop */}
          <div className="hidden lg:flex lg:order-2 lg:justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative animate-float max-w-[480px]">
              <img
                src={mockupImage}
                alt="Kalorix App Mockup"
                className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white/60"
              />
              <div className="absolute inset-0 bg-gradient-glow rounded-3xl pointer-events-none opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};