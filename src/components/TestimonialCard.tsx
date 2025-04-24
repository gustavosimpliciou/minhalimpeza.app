import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  delay: number;
}

export const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, content, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className="testimonial-card"
    >
      <p className="text-gray-600 mb-4 text-sm sm:text-base">{content}</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-sm sm:text-base">
          {name[0]}
        </div>
        <div>
          <p className="font-semibold text-sm sm:text-base">{name}</p>
          <p className="text-xs sm:text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};