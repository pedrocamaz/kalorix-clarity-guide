import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Parabéns! Você está a um passo de transformar sua vida.');
    setFormData({ name: '', phone: '', email: '' });
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Kalorix não é só um app, é um estilo de vida.
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Comece hoje a transformar sua relação com a comida.
            </p>
          </div>

          <form 
            onSubmit={handleSubmit} 
            className="animate-fade-up bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-2xl space-y-4"
            style={{ animationDelay: '0.2s' }}
          >
            <h3 className="text-2xl font-semibold text-primary-foreground mb-6">
              Garanta seu acesso exclusivo
            </h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="final-name" className="text-primary-foreground/90">
                  Nome completo
                </Label>
                <Input
                  id="final-name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange('name')}
                  required
                  className="mt-1 bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                />
              </div>
              
              <div>
                <Label htmlFor="final-phone" className="text-primary-foreground/90">
                  WhatsApp
                </Label>
                <Input
                  id="final-phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={handleChange('phone')}
                  required
                  className="mt-1 bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                />
              </div>
              
              <div>
                <Label htmlFor="final-email" className="text-primary-foreground/90">
                  E-mail
                </Label>
                <Input
                  id="final-email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange('email')}
                  required
                  className="mt-1 bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              variant="cta-inverse" 
              size="xl" 
              className="w-full md:w-auto px-12"
            >
              Começar minha transformação
            </Button>
          </form>

          <p className="text-sm text-primary-foreground/70 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Seus dados estão seguros. Respeitamos sua privacidade.
          </p>
        </div>
      </div>
    </section>
  );
};