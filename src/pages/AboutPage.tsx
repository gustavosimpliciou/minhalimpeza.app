import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Target, Zap, Users, BarChart, Award } from 'lucide-react';
import { Logo } from '../components/Logo';

const features = [
  {
    icon: TrendingUp,
    title: 'Tendências em Tempo Real',
    description: 'Acesse dados atualizados constantemente sobre o que está bombando nas principais redes sociais.',
  },
  {
    icon: Target,
    title: 'Conteúdo Direcionado',
    description: 'Crie conteúdo que realmente conecta com seu público-alvo usando insights precisos.',
  },
  {
    icon: Zap,
    title: 'Crescimento Acelerado',
    description: 'Alcance mais pessoas e cresça mais rápido aproveitando as tendências do momento.',
  },
  {
    icon: Users,
    title: 'Engajamento Real',
    description: 'Aumente suas interações com conteúdo relevante e timing perfeito.',
  },
  {
    icon: BarChart,
    title: 'Análise Detalhada',
    description: 'Métricas e insights profundos para tomar decisões baseadas em dados.',
  },
  {
    icon: Award,
    title: 'Resultados Comprovados',
    description: 'Milhares de influenciadores já aumentaram seu alcance com nossa plataforma.',
  },
];

const stats = [
  { value: '50K+', label: 'Influenciadores' },
  { value: '1M+', label: 'Tendências Analisadas' },
  { value: '200%', label: 'Média de Crescimento' },
  { value: '5⭐', label: 'Avaliação Média' },
];

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <Logo />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-montserrat leading-tight">
            Potencialize sua Presença Digital com o{' '}
            <span className="gradient-text">TrendyBR</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Somos a plataforma líder em análise de tendências para influenciadores digitais no Brasil.
            Nossa missão é ajudar criadores de conteúdo a alcançarem seu máximo potencial nas redes sociais.
          </p>
          <Link to="/register" className="btn-primary inline-flex items-center gap-2">
            Comece Agora
            <TrendingUp className="w-5 h-5" />
          </Link>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <p className="text-3xl font-bold gradient-text mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher o TrendyBR?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
            <p className="text-lg text-gray-600 mb-8">
              Acreditamos que todo criador de conteúdo merece as melhores ferramentas para crescer.
              O TrendyBR nasceu da necessidade de democratizar o acesso a insights valiosos sobre
              tendências nas redes sociais, permitindo que influenciadores de todos os tamanhos
              possam tomar decisões estratégicas e criar conteúdo que realmente engaja.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/planos" className="btn-primary">
                Conheça Nossos Planos
              </Link>
              <Link
                to="/contato"
                className="px-6 py-3 rounded-lg font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6">
            Pronto para transformar sua presença digital?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Junte-se a milhares de influenciadores que já estão aproveitando o poder das tendências
            em tempo real para crescer nas redes sociais.
          </p>
          <Link
            to="/register"
            className="btn-primary inline-flex items-center gap-2"
          >
            Comece Gratuitamente
            <TrendingUp className="w-5 h-5" />
          </Link>
        </motion.section>
      </main>
    </div>
  );
};