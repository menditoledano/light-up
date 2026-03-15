'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import type { LightupSpark, LightupEvent } from '@/lib/types';
import Navbar from '@/components/landing/navbar';
import HeroSection from '@/components/landing/hero-section';
import VisionSection from '@/components/landing/vision-section';
import TorahSection from '@/components/landing/torah-section';
import SparksSection from '@/components/landing/sparks-section';
import EventsSection from '@/components/landing/events-section';
import GallerySection from '@/components/landing/gallery-section';
import SwagSection from '@/components/landing/swag-section';
import Footer from '@/components/landing/footer';
import SectionDivider from '@/components/landing/section-divider';

export default function Home() {
  const [sparks, setSparks] = useState<LightupSpark[]>([]);
  const [events, setEvents] = useState<LightupEvent[]>([]);

  useEffect(() => {
    Promise.all([
      supabase.from('lightup_sparks').select('*').order('sort_order'),
      supabase.from('lightup_events').select('*').order('sort_order'),
    ]).then(([{ data: sparksData }, { data: eventsData }]) => {
      if (sparksData) setSparks(sparksData);
      if (eventsData) setEvents(eventsData);
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-slate-100 overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SectionDivider variant="dark-a-to-b" />
      <VisionSection />
      <SectionDivider variant="dark-b-to-a" />
      <TorahSection />
      <SectionDivider variant="dark-a-to-b" />
      <SparksSection sparks={sparks} />
      <SectionDivider variant="dark-b-to-a" />
      <EventsSection events={events} />
      <SectionDivider variant="dark-a-to-b" />
      <GallerySection />
      <SectionDivider variant="dark-b-to-a" />
      <SwagSection />
      <SectionDivider variant="dark-to-footer" />
      <Footer />
    </div>
  );
}
