import React from 'react';
import { Hero } from '@/components/Hero';
import { Benefits } from '@/components/Benefits';
import { SocialProof } from '@/components/SocialProof';
import { CouponSection } from '@/components/CouponSection';
import { Features } from '@/components/Features';
import { FinalCTA } from '@/components/FinalCTA';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <SocialProof />
      <CouponSection />
      <Features />
      <FinalCTA />
    </main>
  );
};

export default Index;
