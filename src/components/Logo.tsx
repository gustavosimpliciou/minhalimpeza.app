import React from 'react';
import { TrendingUp, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export const Logo: React.FC = () => {
  return (
    <motion.div 
      className="flex items-center gap-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute -top-1 -right-1"
        >
          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" fill="currentColor" />
        </motion.div>
      </div>
      <span className="text-xl sm:text-2xl font-bold font-montserrat gradient-text">TrendyBR</span>
    </motion.div>
  );
};