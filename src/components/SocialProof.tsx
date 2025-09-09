import React from 'react';
import lifestyleImage from '@/assets/lifestyle-eating.jpg';

export const SocialProof = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Testimonial */}
            <div className="space-y-6 animate-fade-up">
              <div className="text-6xl text-primary/20 font-serif">"</div>
              <blockquote className="text-2xl md:text-3xl italic text-foreground/90 font-light leading-relaxed">
                Nunca imaginei que controlar calorias poderia ser tão simples.
              </blockquote>
              <div className="space-y-1">
                <p className="font-semibold text-foreground">Marina Silva</p>
                <p className="text-muted-foreground">Empresária, São Paulo</p>
              </div>
            </div>

            {/* Image */}
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <img
                src={lifestyleImage}
                alt="Lifestyle saudável"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};