'use client';

import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { MousePointerClick, DollarSign } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function LiveFeed() {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    // In production, use the actual backend URL from env
    const socket: Socket = io('http://localhost:3000'); 

    socket.on('liveFeed', (event) => {
      setEvents((prev) => [event, ...prev].slice(0, 6)); // Keep last 6 events
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="bg-slate-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl p-6 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-6">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </div>
        <h2 className="font-semibold text-lg text-white tracking-tight">Live Activity Stream</h2>
      </div>

      <div className="space-y-3 flex-1 overflow-hidden relative">
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-slate-900 to-transparent z-10 pointer-events-none"></div>
        <AnimatePresence initial={false}>
          {events.length === 0 && (
            <p className="text-slate-500 text-sm">Listening for real-time events...</p>
          )}
          {events.map((ev, i) => (
            <motion.div
              key={ev.timestamp + i + Math.random()}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 25 }}
              className="flex items-center gap-4 p-3 rounded-lg bg-slate-800/40 border border-white/5 backdrop-blur-sm"
            >
              <div className={`p-2 rounded-full shadow-lg ${ev.type === 'conversion' ? 'bg-emerald-500/20 text-emerald-400 shadow-emerald-500/20' : 'bg-indigo-500/20 text-indigo-400 shadow-indigo-500/20'}`}>
                {ev.type === 'conversion' ? <DollarSign size={16} /> : <MousePointerClick size={16} />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-200 truncate">
                  {ev.type === 'conversion' ? 'New Conversion' : 'Click Registered'}
                </p>
                <p className="text-xs text-slate-500 truncate">{ev.campaign_id}</p>
              </div>
              {ev.type === 'conversion' && (
                <div className="text-sm font-bold text-emerald-400 tabular-nums">
                  +${ev.revenue}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
