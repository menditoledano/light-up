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
      initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25, y: 15 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ x: event.is_special ? 0 : -4, boxShadow: '0 12px 35px rgba(0,0,0,0.05)' }}
      className={`group flex gap-5 items-center p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
        event.is_special
          ? 'bg-[#D4AF37]/[0.02] border-[#D4AF37]/15 hover:border-[#D4AF37]/25'
          : 'bg-white border-neutral-100 hover:border-neutral-200'
      }`}
    >
      <motion.div
        className={`p-3 rounded-xl text-center min-w-[72px] ${
          event.is_special
            ? 'bg-[#D4AF37]/8'
            : 'bg-neutral-50 group-hover:bg-neutral-100/80'
        } transition-colors`}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.2 }}
      >
        <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#B59129] mb-0.5">
          {event.event_month}
        </span>
        <span className="block text-2xl font-extrabold text-neutral-700 leading-none">
          {event.event_day}
        </span>
      </motion.div>

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

      <motion.button
        className="hidden sm:flex items-center gap-1 px-4 py-2 bg-[#B59129] text-white font-semibold rounded-lg text-[13px] hover:bg-[#9A7B1A] transition-colors"
        whileHover={{ scale: 1.05, boxShadow: '0 6px 20px rgba(181, 145, 41, 0.25)' }}
        whileTap={{ scale: 0.95 }}
      >
        RSVP <ChevronLeft size={12} />
      </motion.button>
    </motion.div>
  );
}

export default function EventsSection({ events }: EventsSectionProps) {
  return (
    <section id="events" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/8 text-[#9A7B1A] text-[12px] font-semibold tracking-wide uppercase mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, type: 'spring', stiffness: 150 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Calendar size={14} />
            </motion.div>
            לוח אירועים
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-neutral-700 mb-3"
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            מאירים ביחד
          </motion.h2>
          <motion.p
            className="text-neutral-500 max-w-lg mx-auto text-[15px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            המפגשים הפיזיים והווירטואליים שיוצרים את הקהילה שלנו.
          </motion.p>
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
