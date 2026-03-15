'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader as Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import type { LightupSpark, LightupEvent, LightupGalleryItem } from '@/lib/types';
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
  const [gallery, setGallery] = useState<LightupGalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const [
      { data: sparksData },
      { data: eventsData },
      { data: galleryData },
    ] = await Promise.all([
      supabase.from('lightup_sparks').select('*').order('sort_order'),
      supabase.from('lightup_events').select('*').order('sort_order'),
      supabase.from('lightup_gallery').select('*').order('sort_order'),
    ]);

    if (sparksData) setSparks(sparksData);
    if (eventsData) setEvents(eventsData);
    if (galleryData) setGallery(galleryData);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0B0F1A] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <Loader2 className="w-5 h-5 text-teal-500/50 mx-auto animate-spin" />
        </motion.div>
      </div>
    );
  }

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
      <GallerySection items={gallery} />
      <SectionDivider variant="dark-b-to-a" />
      <SwagSection />
      <SectionDivider variant="dark-to-footer" />
      <Footer />
    </div>
  );
}
