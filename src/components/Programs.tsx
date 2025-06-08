import React from 'react';
import { BookOpen, Users, Lightbulb, Cog, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Programs = () => {
  const { t } = useLanguage();

  const programs = [
    {
      icon: BookOpen,
      title: t('programs.academic'),
      description: t('programs.academicDesc'),
      features: ['Оқу жоспарын жасау', 'Факультет дайындығы', 'Бағалау әдістері', 'Сапа кепілдігі'],
      color: 'bg-blue-600'
    },
    {
      icon: Users,
      title: t('programs.leadership'),
      description: t('programs.leadershipDesc'),
      features: ['Басшылық дайындығы', 'Стратегиялық жоспарлау', 'Өзгерістерді басқару', 'Команда құру'],
      color: 'bg-orange-500'
    },
    {
      icon: Lightbulb,
      title: t('programs.innovation'),
      description: t('programs.innovationDesc'),
      features: ['Цифрлық оқыту', 'EdTech интеграциясы', 'Зерттеу қолдауы', 'Инновация зертханалары'],
      color: 'bg-blue-500'
    },
    {
      icon: Cog,
      title: t('programs.institutional'),
      description: t('programs.institutionalDesc'),
      features: ['Стратегиялық кеңес беру', 'Процесстерді оңтайландыру', 'Саясат дамыту', 'Аккредитация қолдауы'],
      color: 'bg-gray-700'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">{t('programs.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('programs.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="p-8">
                <div className={`${program.color} p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                
                <div className="space-y-3 mb-8">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="text-blue-900 hover:text-orange-500 font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-all duration-300">
                  <span>{t('programs.learnMore')}</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;