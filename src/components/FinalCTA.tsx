import React from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import logoImage from '@/assets/kalorix-logo.png';

export const FinalCTA = () => {
  const handleClick = async () => {
    try {
      const res = await fetch('https://caloscan-n8n-webhook.msruy0.easypanel.host/webhook/landingpage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'cta_click',
          source: 'final_cta',
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
        toast.success('Parabéns! Vamos te contatar em breve.');
      } else {
        toast.error('Não foi possível enviar agora. Tente novamente.');
      }
    } catch (err) {
      toast.error('Não foi possível enviar agora. Tente novamente.');
    }
  };

  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Logo */}
          <img src={logoImage} alt="Kalorix" className="h-20 w-auto mx-auto opacity-90 animate-fade-up" />
          
          <div className="space-y-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Kalorix não é só um app, é um estilo de vida.
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Comece hoje a transformar sua relação com a comida.
            </p>
          </div>

          <div 
            className="animate-fade-up bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-2xl space-y-6"
            style={{ animationDelay: '0.2s' }}
          >
            <h3 className="text-2xl font-semibold text-primary-foreground">
              Garanta seu acesso exclusivo
            </h3>
            <Button 
              onClick={handleClick}
              variant="cta-inverse" 
              size="xl" 
              className="w-full md:w-auto px-12"
            >
              Começar minha transformação
            </Button>
          </div>

          {/* Texto removido pois não coletamos dados agora */}
        </div>
      </div>
    </section>
  );
};