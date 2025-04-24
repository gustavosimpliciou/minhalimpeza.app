import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, Instagram } from 'lucide-react';
import { Logo } from '../components/Logo';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-gray-600 hover:text-primary">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <Logo />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h1 className="text-3xl font-bold mb-6 text-center">Entre em Contato</h1>
            <p className="text-gray-600 text-center mb-8">
              Descubra o poder das tendências em tempo real e impulsione seu conteúdo nas redes sociais.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <Phone className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-medium">Telefone</p>
                  <a 
                    href="tel:+5583991427149" 
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    (83) 99142-7149
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:contato@trendybr.com" 
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    contato@trendybr.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <Instagram className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-medium">Instagram</p>
                  <a 
                    href="https://instagram.com/trendsbr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    @trendsbr
                  </a>
                </div>
              </div>
            </div>

            <form className="mt-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Seu Nome
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Digite seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Seu Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={4}
                  placeholder="Digite sua mensagem"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary"
              >
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>
        </div>
      </main>
    </div>
  );
};