'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Loader as Loader2 } from 'lucide-react';
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
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="relative mb-4">
            <Sun className="w-12 h-12 text-[#D4AF37] mx-auto" strokeWidth={1.5} />
            <Loader2 className="w-5 h-5 text-[#B59129]/60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin" />
          </div>
          <p className="text-sm text-slate-400">...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <VisionSection />
      <TorahSection />
      <SparksSection sparks={sparks} />
      <EventsSection events={events} />
      <GallerySection items={gallery} />
      <SwagSection />
      <Footer />
    </div>
  );
}
