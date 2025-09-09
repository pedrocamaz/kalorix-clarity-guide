import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Gift } from 'lucide-react';

export const CouponSection = () => {
  const [coupon, setCoupon] = useState('');

  const handleCouponSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon.trim()) {
      toast.success('Cupom aplicado com sucesso! 🎉');
      setCoupon('');
    }
  };

  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="animate-fade-up space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-foreground/10 mb-4">
              <Gift className="w-10 h-10 text-primary-foreground" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ganhe um incentivo para começar hoje
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Tem um cupom de desconto? Use agora e economize!
            </p>
          </div>

          <form 
            onSubmit={handleCouponSubmit} 
            className="animate-fade-up flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex-1">
              <Label htmlFor="coupon" className="sr-only">Código do cupom</Label>
              <Input
                id="coupon"
                type="text"
                placeholder="Digite seu cupom"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="h-12 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                required
              />
            </div>
            <Button 
              type="submit" 
              variant="cta-inverse" 
              size="lg"
              className="whitespace-nowrap"
            >
              Aplicar cupom
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};