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
      <div className="min-h-screen bg-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <Loader2 className="w-5 h-5 text-neutral-300 mx-auto animate-spin" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900 overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SectionDivider variant="light-to-muted" />
      <VisionSection />
      <SectionDivider variant="muted-to-light" />
      <TorahSection />
      <SectionDivider variant="light-to-muted" />
      <SparksSection sparks={sparks} />
      <SectionDivider variant="muted-to-light" />
      <EventsSection events={events} />
      <SectionDivider variant="light-to-muted" />
      <GallerySection items={gallery} />
      <SectionDivider variant="muted-to-light" />
      <SwagSection />
      <SectionDivider variant="light-to-dark" />
      <Footer />
    </div>
  );
}
