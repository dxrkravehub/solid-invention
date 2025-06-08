import React from 'react';
import { ArrowRight, Users, BookOpen, Trophy } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, number: '50,000+', label: t('hero.studentsServed') },
    { icon: BookOpen, number: '200+', label: t('hero.academicPrograms') },
    { icon: Trophy, number: '95%', label: t('hero.successRate') },
  ];

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                {t('hero.title').split(' ').slice(0, -2).join(' ')}{' '}
                <span className="text-orange-400">{t('hero.title').split(' ').slice(-2).join(' ')}</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                {t('hero.subtitle')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-200">
                {t('hero.learnMore')}
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                {t('hero.programs')}
              </button>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Students in graduation ceremony"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <stat.icon className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;