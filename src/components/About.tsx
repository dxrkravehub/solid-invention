import React from 'react';
import { Target, Eye, Heart, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t('about.excellence'),
      description: t('about.excellenceDesc')
    },
    {
      icon: Eye,
      title: t('about.innovation'),
      description: t('about.innovationDesc')
    },
    {
      icon: Heart,
      title: t('about.collaboration'),
      description: t('about.collaborationDesc')
    },
    {
      icon: Award,
      title: t('about.quality'),
      description: t('about.qualityDesc')
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">{t('about.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-blue-900">{t('about.mission')}</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about.missionText1')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about.missionText2')}
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="University campus"
              className="rounded-2xl shadow-xl w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-900 p-3 rounded-lg w-fit mb-6">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-4">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;