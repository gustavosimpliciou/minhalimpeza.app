import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, X } from 'lucide-react';
import { Logo } from '../components/Logo';

const plans = [
  {
    name: 'Iniciante',
    price: '19,99',
    period: 'por mês',
    description: 'Perfeito para começar sua jornada de influenciador',
    features: [
      { text: 'Acesso a 10 tendências por rede social', included: true },
      { text: 'Atualização diária', included: true },
      { text: 'Tendências ilimitadas', included: false },
      { text: 'Notificações personalizadas', included: false },
      { text: 'Análise de nicho', included: false },
      { text: 'Suporte prioritário', included: false },
    ],
  },
  {
    name: 'Profissional',
    price: '25,99',
    period: 'por mês',
    description: 'Para influenciadores que querem crescer',
    popular: true,
    features: [
      { text: 'Acesso a 10 tendências por rede social', included: true },
      { text: 'Atualização diária', included: true },
      { text: 'Tendências ilimitadas', included: true },
      { text: 'Notificações personalizadas', included: true },
      { text: 'Análise de nicho', included: true },
      { text: 'Suporte prioritário', included: false },
    ],
  },
  {
    name: 'Expert',
    price: '39,99',
    period: 'a cada 2 meses',
    description: 'Máximo de recursos para influenciadores profissionais',
    features: [
      { text: 'Acesso a 10 tendências por rede social', included: true },
      { text: 'Atualização diária', included: true },
      { text: 'Tendências ilimitadas', included: true },
      { text: 'Notificações personalizadas', included: true },
      { text: 'Análise de nicho', included: true },
      { text: 'Suporte prioritário', included: true },
    ],
  },
];

const PlanCard = ({ plan }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`relative bg-white rounded-2xl shadow-lg p-8 flex flex-col ${
      plan.popular ? 'border-2 border-primary' : ''
    }`}
  >
    {plan.popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
          Mais Popular
        </span>
      </div>
    )}
    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
      <p className="text-gray-600 mb-4">{plan.description}</p>
      <div className="flex items-baseline justify-center gap-1">
        <span className="text-4xl font-bold">R$ {plan.price}</span>
        <span className="text-gray-500">{plan.period}</span>
      </div>
    </div>
    <ul className="space-y-4 mb-8 flex-grow">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3">
          {feature.included ? (
            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
          ) : (
            <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
          )}
          <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
            {feature.text}
          </span>
        </li>
      ))}
    </ul>
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
        plan.popular
          ? 'bg-gradient-to-r from-primary to-secondary text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      Começar agora
    </motion.button>
  </motion.div>
);

export const PlansPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-gray-600 hover:text-primary">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <Logo />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-4"
            >
              Escolha o plano ideal para você
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg"
            >
              Comece sua jornada de sucesso nas redes sociais
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600">
              Precisa de ajuda para escolher? Entre em{' '}
              <Link to="/contato" className="text-primary hover:underline">
                contato
              </Link>{' '}
              conosco
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};