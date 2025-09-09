import React from 'react';
import { Sparkles, Target, Brain } from 'lucide-react';
import { Card } from '@/components/ui/card';

const benefits = [
  {
    icon: Sparkles,
    title: 'Clareza imediata',
    description: 'Descubra exatamente o que você está consumindo com apenas uma foto.'
  },
  {
    icon: Target,
    title: 'Lifestyle sem restrições',
    description: 'Mantenha o equilíbrio sem abrir mão do que você ama comer.'
  },
  {
    icon: Brain,
    title: 'Ciência prática',
    description: 'Insights baseados em dados para decisões alimentares inteligentes.'
  }
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher o Kalorix?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforme sua relação com a comida através de tecnologia e simplicidade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-lg transition-all duration-300 animate-fade-up border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};