import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Menu, LogOut } from 'lucide-react';
import { Logo } from './components/Logo';
import { TestimonialCard } from './components/TestimonialCard';
import { TrendsPage } from './pages/TrendsPage';
import { PlansPage } from './pages/PlansPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { AuthGuard } from './components/AuthGuard';
import { useAuthStore } from './store/authStore';

function HomePage() {
  const { isAuthenticated, user, logout } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/sobre"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Sobre
            </Link>
            <Link
              to="/contato"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Contato
            </Link>
            <Link
              to="/planos"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Planos
            </Link>
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <span className="text-gray-600">Olá, {user?.name}</span>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  Sair
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Entrar
                </Link>
                <Link
                  to="/register"
                  className="btn-primary py-2"
                >
                  Cadastrar
                </Link>
              </div>
            )}
          </nav>
        </div>

        {/* Mobile Menu */}
        <motion.nav
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          className="lg:hidden overflow-hidden bg-white border-t"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              to="/sobre"
              className="text-gray-600 hover:text-primary transition-colors py-2 block"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              to="/contato"
              className="text-gray-600 hover:text-primary transition-colors py-2 block"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <Link
              to="/planos"
              className="text-gray-600 hover:text-primary transition-colors py-2 block"
              onClick={() => setIsMenuOpen(false)}
            >
              Planos
            </Link>
            {isAuthenticated ? (
              <>
                <span className="text-gray-600">Olá, {user?.name}</span>
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  Sair
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-primary transition-colors py-2 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Entrar
                </Link>
                <Link
                  to="/register"
                  className="btn-primary mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cadastrar
                </Link>
              </>
            )}
          </div>
        </motion.nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4">
        <section className="py-12 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-montserrat leading-tight">
              Descubra o que está{' '}
              <span className="gradient-text">bombando no Brasil</span> agora!
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
              Tendências em tempo real para influenciadores arrasarem nas redes sociais
            </p>
            <Link
              to={isAuthenticated ? '/trends' : '/register'}
              className="btn-primary mx-auto inline-block"
            >
              <span className="flex items-center gap-2 justify-center">
                {isAuthenticated ? 'Ver tendências agora' : 'Começar agora'}
                <ChevronRight className="w-5 h-5" />
              </span>
            </Link>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Tendências em Tempo Real',
                description: 'Acompanhe o que está bombando nas redes sociais em tempo real'
              },
              {
                title: 'Análise de Engajamento',
                description: 'Métricas detalhadas para otimizar seu conteúdo'
              },
              {
                title: 'Ideias Personalizadas',
                description: 'Sugestões de conteúdo baseadas nas tendências atuais'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            O que dizem nossos usuários
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <TestimonialCard
              name="Ana Silva"
              role="Influencer de Moda"
              content="Aumentei meu engajamento em 50% com o TrendyBR! As tendências são sempre relevantes e me ajudam a criar conteúdo que realmente conecta com meu público."
              delay={0.2}
            />
            <TestimonialCard
              name="Pedro Santos"
              role="Creator de Lifestyle"
              content="O TrendyBR revolucionou minha forma de criar conteúdo. Agora sempre sei o que está em alta e consigo surfar nas tendências no momento certo!"
              delay={0.4}
            />
            <TestimonialCard
              name="Julia Costa"
              role="Digital Influencer"
              content="Ferramenta indispensável! Desde que comecei a usar o TrendyBR, meus posts têm muito mais alcance e engagement. Recomendo muito!"
              delay={0.6}
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-8 border-t">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
          <Link
            to="/sobre"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Sobre
          </Link>
          <Link
            to="/contato"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Contato
          </Link>
          <Link
            to="/planos"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Planos
          </Link>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const { isAuthenticated } = useAuthStore();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={
          isAuthenticated ? <Navigate to="/trends" replace /> : <LoginPage />
        } />
        <Route path="/register" element={
          isAuthenticated ? <Navigate to="/trends" replace /> : <RegisterPage />
        } />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route
          path="/trends"
          element={
            <AuthGuard>
              <TrendsPage />
            </AuthGuard>
          }
        />
        <Route path="/planos" element={<PlansPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;