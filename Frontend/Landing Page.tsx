import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Shield, TrendingUp, Users } from 'lucide-react';
import { translations } from '../lib/translations';

interface LandingPageProps {
  language: string;
}

const LandingPage: React.FC<LandingPageProps> = ({ language }) => {
  const t = translations[language as keyof typeof translations];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">{t.hero.title}</span>
              <span className="block text-blue-500">{t.hero.subtitle}</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {t.hero.description}
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <Link
                to="/dashboard"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                {t.hero.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              {t.features.title}
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {t.features.subtitle}
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <Feature
                icon={<Brain className="h-6 w-6" />}
                title={t.features.aiPowered}
                description={t.features.aiDescription}
              />
              <Feature
                icon={<TrendingUp className="h-6 w-6" />}
                title={t.features.realTime}
                description={t.features.realTimeDescription}
              />
              <Feature
                icon={<Shield className="h-6 w-6" />}
                title={t.features.privacy}
                description={t.features.privacyDescription}
              />
              <Feature
                icon={<Users className="h-6 w-6" />}
                title={t.features.userFriendly}
                description={t.features.userFriendlyDescription}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              {t.hero.title}
            </h2>
            <p className="mt-4 text-lg leading-6 text-blue-100">
              {t.hero.description}
            </p>
            <Link
              to="/dashboard"
              className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
            >
              {t.hero.cta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const Feature = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
        {icon}
      </div>
      <h3 className="mt-6 text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
  );
};

export default LandingPage;
