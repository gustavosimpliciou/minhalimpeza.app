import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, ArrowLeft, Twitter, Instagram, Youtube, Music2, Search, X, ChevronRight, LogOut } from 'lucide-react';
import { Logo } from '../components/Logo';
import { useAuthStore } from '../store/authStore';

const mockData = {
  twitter: [
    { hashtag: '#BBB24', mentions: 150000, growth: 23 },
    { hashtag: '#CarnavalSP', mentions: 89000, growth: 15 },
    { hashtag: '#Futebol', mentions: 45000, growth: 8 },
  ],
  instagram: [
    { hashtag: '#MakeupBR', mentions: 78000, growth: 18 },
    { hashtag: '#ModaBrasil', mentions: 65000, growth: 12 },
    { hashtag: '#FitnessBR', mentions: 43000, growth: 9 },
  ],
  tiktok: [
    { hashtag: '#DancaBR', mentions: 230000, growth: 45 },
    { hashtag: '#DesafioViral', mentions: 180000, growth: 35 },
    { hashtag: '#HumorBR', mentions: 120000, growth: 25 },
  ],
  youtube: [
    { hashtag: 'Gameplay Brasil', mentions: 95000, growth: 28 },
    { hashtag: 'Receitas Fáceis', mentions: 82000, growth: 20 },
    { hashtag: 'React Tutorial', mentions: 67000, growth: 15 },
  ],
  google: [
    { hashtag: 'Copa do Brasil', mentions: 200000, growth: 40 },
    { hashtag: 'Enem 2024', mentions: 180000, growth: 35 },
    { hashtag: 'Previsão do Tempo', mentions: 150000, growth: 25 },
  ],
};

const generateExtendedData = (platform) => {
  const topics = {
    twitter: ['#BBB24', '#Futebol', '#Música', '#Política', '#Tecnologia'],
    instagram: ['#Moda', '#Fitness', '#Comida', '#Viagem', '#Beauty'],
    tiktok: ['#Dance', '#Challenge', '#Humor', '#Tutorial', '#Viral'],
    youtube: ['Games', 'Culinária', 'Educação', 'Tecnologia', 'Entretenimento'],
    google: ['Notícias', 'Esportes', 'Celebridades', 'Tecnologia', 'Educação'],
  };

  return Array.from({ length: 100 }, (_, i) => ({
    hashtag: `${topics[platform][i % 5]} ${Math.floor(i / 5) + 1}`,
    mentions: Math.floor(Math.random() * 200000) + 10000,
    growth: Math.floor(Math.random() * 50) + 1,
  }));
};

const chartData = [
  { name: '00:00', twitter: 4000, instagram: 2400, tiktok: 2400, youtube: 3200, google: 5000 },
  { name: '03:00', twitter: 3000, instagram: 1398, tiktok: 2210, youtube: 2800, google: 4500 },
  { name: '06:00', twitter: 2000, instagram: 9800, tiktok: 2290, youtube: 3400, google: 4800 },
  { name: '09:00', twitter: 2780, instagram: 3908, tiktok: 2000, youtube: 3600, google: 5200 },
  { name: '12:00', twitter: 1890, instagram: 4800, tiktok: 2181, youtube: 3900, google: 5500 },
  { name: '15:00', twitter: 2390, instagram: 3800, tiktok: 2500, youtube: 4100, google: 5800 },
  { name: '18:00', twitter: 3490, instagram: 4300, tiktok: 2100, youtube: 4300, google: 6000 },
];

const TrendCard = ({ platform, icon: Icon, color, data, onViewMore }) => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const handleViewMore = () => {
    if (!user?.plan) {
      navigate('/planos', { state: { from: '/trends' } });
    } else {
      onViewMore();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-md p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Icon className={`w-6 h-6 ${color}`} />
          <h3 className="text-xl font-semibold">{platform}</h3>
        </div>
        <button
          onClick={handleViewMore}
          className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1"
        >
          Ver mais
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <p className="font-medium">{item.hashtag}</p>
              <p className="text-sm text-gray-500">{item.mentions.toLocaleString()} menções</p>
            </div>
            <div className={`flex items-center gap-1 text-sm ${item.growth > 20 ? 'text-green-500' : 'text-blue-500'}`}>
              <TrendingUp className="w-4 h-4" />
              <span>+{item.growth}%</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const DetailedTrendsModal = ({ platform, onClose }) => {
  const extendedData = generateExtendedData(platform);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl shadow-xl p-6 w-full max-w-4xl max-h-[80vh] overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Tendências {platform}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="overflow-y-auto flex-1">
          <div className="space-y-4">
            {extendedData.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{item.hashtag}</p>
                  <p className="text-sm text-gray-500">{item.mentions.toLocaleString()} menções</p>
                </div>
                <div className={`flex items-center gap-1 text-sm ${item.growth > 20 ? 'text-green-500' : 'text-blue-500'}`}>
                  <TrendingUp className="w-4 h-4" />
                  <span>+{item.growth}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const TrendsPage: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

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
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Olá, {user?.name}</span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-8"
        >
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-6">Visão Geral das Tendências</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorTwitter" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1DA1F2" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#1DA1F2" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorInstagram" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#E4405F" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#E4405F" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorTiktok" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00F2EA" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#00F2EA" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorYoutube" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF0000" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#FF0000" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorGoogle" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4285F4" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#4285F4" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="twitter" stroke="#1DA1F2" fillOpacity={1} fill="url(#colorTwitter)" />
                  <Area type="monotone" dataKey="instagram" stroke="#E4405F" fillOpacity={1} fill="url(#colorInstagram)" />
                  <Area type="monotone" dataKey="tiktok" stroke="#00F2EA" fillOpacity={1} fill="url(#colorTiktok)" />
                  <Area type="monotone" dataKey="youtube" stroke="#FF0000" fillOpacity={1} fill="url(#colorYoutube)" />
                  <Area type="monotone" dataKey="google" stroke="#4285F4" fillOpacity={1} fill="url(#colorGoogle)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TrendCard
              platform="Twitter"
              icon={Twitter}
              color="text-[#1DA1F2]"
              data={mockData.twitter}
              onViewMore={() => setSelectedPlatform('twitter')}
            />
            <TrendCard
              platform="Instagram"
              icon={Instagram}
              color="text-[#E4405F]"
              data={mockData.instagram}
              onViewMore={() => setSelectedPlatform('instagram')}
            />
            <TrendCard
              platform="TikTok"
              icon={Music2}
              color="text-[#00F2EA]"
              data={mockData.tiktok}
              onViewMore={() => setSelectedPlatform('tiktok')}
            />
            <TrendCard
              platform="YouTube"
              icon={Youtube}
              color="text-[#FF0000]"
              data={mockData.youtube}
              onViewMore={() => setSelectedPlatform('youtube')}
            />
            <TrendCard
              platform="Google"
              icon={Search}
              color="text-[#4285F4]"
              data={mockData.google}
              onViewMore={() => setSelectedPlatform('google')}
            />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-6">Taxa de Engajamento por Plataforma</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="twitter" stroke="#1DA1F2" strokeWidth={2} />
                  <Line type="monotone" dataKey="instagram" stroke="#E4405F" strokeWidth={2} />
                  <Line type="monotone" dataKey="tiktok" stroke="#00F2EA" strokeWidth={2} />
                  <Line type="monotone" dataKey="youtube" stroke="#FF0000" strokeWidth={2} />
                  <Line type="monotone" dataKey="google" stroke="#4285F4" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </main>

      <AnimatePresence>
        {selectedPlatform && (
          <DetailedTrendsModal
            platform={selectedPlatform}
            onClose={() => setSelectedPlatform(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};