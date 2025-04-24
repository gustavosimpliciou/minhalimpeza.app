import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface ErrorMessageProps {
  message: string;
  onClose?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 relative"
      role="alert"
    >
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-500 hover:text-red-700"
          aria-label="Fechar mensagem de erro"
        >
          <X className="w-5 h-5" />
        </button>
      )}
      <p className="text-red-700">{message}</p>
    </motion.div>
  );
};