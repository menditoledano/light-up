'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronLeft } from 'lucide-react';
import type { LightupEvent } from '@/lib/types';

interface EventsSectionProps {
  events: LightupEvent[];
}

function EventCard({ event, index }: { event: LightupEvent; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`group flex gap-5 items-center p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
        event.is_special
          ? 'bg-[#D4AF37]/[0.02] border-[#D4AF37]/15 hover:border-[#D4AF37]/25'
          : 'bg-white border-neutral-100 hover:border-neutral-200'
      } hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)]`}
    >
      <div
        className={`p-3 rounded-xl text-center min-w-[72px] ${
          event.is_special
            ? 'bg-[#D4AF37]/8'
            : 'bg-neutral-50 group-hover:bg-neutral-100/80'
        } transition-colors`}
      >
        <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#B59129] mb-0.5">
          {event.event_month}
        </span>
        <span className="block text-2xl font-extrabold text-neutral-700 leading-none">
          {event.event_day}
        </span>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-[15px] font-bold text-neutral-700 mb-1.5 group-hover:text-[#9A7B1A] transition-colors truncate">
          {event.title}
        </h3>
        <div className="flex flex-wrap items-center gap-3 text-[13px]">
          <span className="flex items-center gap-1 text-neutral-400">
            <MapPin size={12} />
            {event.location}
          </span>
          <span className="text-[#B59129] font-medium text-[11px] px-2 py-0.5 bg-[#D4AF37]/6 rounded">
            {event.event_type}
          </span>
        </div>
      </div>

      <button className="hidden sm:flex items-center gap-1 px-4 py-2 bg-[#B59129] text-white font-semibold rounded-lg text-[13px] hover:bg-[#9A7B1A] transition-colors">
        RSVP <ChevronLeft size={12} />
      </button>
    </motion.div>
  );
}

export default function EventsSection({ events }: EventsSectionProps) {
  return (
    <section id="events" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/8 text-[#9A7B1A] text-[12px] font-semibold tracking-wide uppercase mb-4">
            <Calendar size={14} />
            לוח אירועים
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-700 mb-3">
            מאירים ביחד
          </h2>
          <p className="text-neutral-500 max-w-lg mx-auto text-[15px]">
            המפגשים הפיזיים והווירטואליים שיוצרים את הקהילה שלנו.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
