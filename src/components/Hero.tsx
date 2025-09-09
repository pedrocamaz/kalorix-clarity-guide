import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import mockupImage from '/lovable-uploads/7bfa2357-8743-4823-907c-dae855ecfabe.png';

export const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Obrigado! Em breve entraremos em contato.');
    setFormData({ name: '', phone: '', email: '' });
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <section className="relative min-h-screen bg-gradient-cream overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
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

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-foreground">Comece sua transformação agora</h3>
              
              <div className="space-y-3">
                <div>
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange('name')}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">WhatsApp</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={handleChange('phone')}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange('email')}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <Button type="submit" variant="cta" size="lg" className="w-full">
                Quero experimentar agora
              </Button>
            </form>
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