import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const News = () => {
  const { t } = useLanguage();

  const newsItems = [
    {
      title: 'Жетекші университеттермен жаңа серіктестік',
      excerpt: 'ЖБДҰО бағдарлама жеткізуді жақсарту және білім беру мүмкіндіктерін кеңейту үшін жоғары деңгейдегі университеттермен стратегиялық серіктестік туралы хабарлайды.',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Серіктестік'
    },
    {
      title: 'Цифрлық оқыту бастамасын іске қосу',
      excerpt: 'Мекемелерге олардың цифрлық трансформация жолында қолдау көрсету үшін кешенді цифрлық оқыту бағдарламаларын іске қосу.',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Инновация'
    },
    {
      title: '2024 жылғы жоғары білім саммиті',
      excerpt: 'Ұлт бойынша білім беру көшбасшылары, саясаткерлер және инноваторларды біріктіретін жылдық саммитке қосылыңыз.',
      date: '2024-01-05',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Іс-шара'
    }
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">{t('news.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('news.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(item.date).toLocaleDateString('kk-KZ', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                
                <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.excerpt}</p>
                
                <button className="text-blue-900 hover:text-orange-500 font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-all duration-300">
                  <span>{t('news.readMore')}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
            {t('news.viewAll')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;