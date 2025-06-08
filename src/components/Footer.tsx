import React from 'react';
import { Facebook, Mail, Phone, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = {
    [t('footer.quickLinks')]: [
      { name: t('nav.about'), href: '#about' },
      { name: t('nav.programs'), href: '#programs' },
      { name: t('nav.news'), href: '#news' },
      { name: t('nav.contact'), href: '#contact' }
    ],
    [t('nav.programs')]: [
      { name: t('programs.academic'), href: '#programs' },
      { name: t('programs.leadership'), href: '#programs' },
      { name: t('programs.innovation'), href: '#programs' },
      { name: t('programs.institutional'), href: '#programs' }
    ],
    [t('footer.resources')]: [
      { name: 'Зерттеу жұмыстары', href: '#' },
      { name: 'Үздік тәжірибелер', href: '#' },
      { name: 'Саясат нұсқаулары', href: '#' },
      { name: 'Кейс стадилер', href: '#' }
    ]
  };

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-2">
                <img 
                  src="/image (52) (1) (1).png" 
                  alt="NCHED Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">ЖБДҰО</h3>
                <p className="text-blue-200">Жоғары білім дамыту орталығы</p>
              </div>
            </div>
            
            <p className="text-blue-200 leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400" />
                <span className="text-blue-200">info@nched.edu</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <span className="text-blue-200">+7 (7172) 123-456</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/nched"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-blue-800 hover:bg-orange-500 p-2 rounded-lg transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://egov.kz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="eGov.kz"
                className="bg-blue-800 hover:bg-orange-500 p-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
              >
                <ExternalLink className="h-5 w-5" />
                <span className="text-sm font-medium">eGov.kz</span>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-lg font-semibold">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-blue-200 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                {t('footer.terms')}
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                {t('footer.accessibility')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;