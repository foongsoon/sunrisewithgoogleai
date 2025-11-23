import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import { CONTENT } from './constants';
import { Language } from './types';
import { ArrowRight, BookOpen, GraduationCap, Star, Heart, CheckCircle2 } from 'lucide-react';

// --- Page Components defined internally for simplicity of the single XML constraint ---
// In a real project, these would be in the /pages directory.

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage: React.FC<{ lang: Language }> = ({ lang }) => {
  const c = CONTENT[lang];
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Students Learning" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/90"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-6 animate-in fade-in zoom-in duration-700">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-700 text-sm font-bold tracking-wide uppercase mb-2">
            {lang === 'en' ? 'Welcome to Sunrise' : '欢迎来到 Sunrise'}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            {c.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto font-light">
            {c.hero.subtitle}
          </p>
          <div className="pt-4">
            <a href="#/syllabus" className="inline-flex items-center gap-2 bg-sunrise-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-sunrise-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              {c.hero.cta}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 rounded-2xl bg-orange-50 border border-orange-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{c.syllabus.primaryTitle}</h3>
              <p className="text-slate-600 leading-relaxed">{c.syllabus.primaryDesc}</p>
            </div>
            <div className="p-8 rounded-2xl bg-sky-50 border border-sky-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6 text-sky-600">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{c.syllabus.secondaryTitle}</h3>
              <p className="text-slate-600 leading-relaxed">{c.syllabus.secondaryDesc}</p>
            </div>
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {lang === 'en' ? "Holistic Growth" : "全面发展"}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'en' 
                  ? "Beyond grades, we focus on character, values, and emotional intelligence." 
                  : "除了成绩，我们更注重品格、价值观和情商的培养。"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutPage: React.FC<{ lang: Language }> = ({ lang }) => {
  const c = CONTENT[lang];
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">{c.about.title}</h2>
          <div className="w-20 h-1 bg-sunrise-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">{c.about.philosophyTitle}</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {c.about.desc}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              {c.about.philosophyDesc}
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://picsum.photos/800/600?random=1" 
              alt="School Environment" 
              className="rounded-2xl shadow-xl w-full object-cover transform rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SyllabusPage: React.FC<{ lang: Language }> = ({ lang }) => {
  const c = CONTENT[lang];
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">{c.syllabus.title}</h2>
          <p className="mt-4 text-xl text-slate-600">{c.syllabus.subtitle}</p>
        </div>

        <div className="space-y-12">
          {/* Primary */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 shrink-0">
               <img src="https://picsum.photos/600/400?random=2" className="w-full h-64 object-cover rounded-2xl" alt="Primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Star className="text-yellow-400 w-6 h-6 fill-current" />
                <h3 className="text-2xl font-bold text-slate-800">{c.syllabus.primaryTitle}</h3>
              </div>
              <p className="text-slate-600 text-lg mb-6">{c.syllabus.primaryDesc}</p>
              <div className="bg-orange-50 p-6 rounded-xl">
                 <h4 className="font-semibold text-orange-800 mb-2">
                    {lang === 'en' ? "Focus Areas" : "重点领域"}
                 </h4>
                 <ul className="space-y-2">
                    {[
                        lang === 'en' ? "English Literacy" : "英语读写",
                        lang === 'en' ? "Mathematics Foundation" : "数学基础",
                        lang === 'en' ? "Scientific Inquiry" : "科学探究",
                        lang === 'en' ? "Arts & Creativity" : "艺术与创造力"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-orange-500" /> {item}
                        </li>
                    ))}
                 </ul>
              </div>
            </div>
          </div>

          {/* Secondary */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 shrink-0 md:order-2">
               <img src="https://picsum.photos/600/400?random=3" className="w-full h-64 object-cover rounded-2xl" alt="Secondary" />
            </div>
            <div className="flex-1 md:order-1">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="text-sky-600 w-6 h-6" />
                <h3 className="text-2xl font-bold text-slate-800">{c.syllabus.secondaryTitle}</h3>
              </div>
              <p className="text-slate-600 text-lg mb-6">{c.syllabus.secondaryDesc}</p>
              <p className="text-slate-500 italic mb-6">{c.syllabus.subjects}</p>
               <div className="bg-sky-50 p-6 rounded-xl">
                 <h4 className="font-semibold text-sky-800 mb-2">
                    {lang === 'en' ? "Key Outcomes" : "关键成果"}
                 </h4>
                 <ul className="space-y-2">
                    {[
                        lang === 'en' ? "IGCSE Certification" : "IGCSE 证书",
                        lang === 'en' ? "Critical Thinking" : "批判性思维",
                        lang === 'en' ? "Global Perspective" : "全球视野",
                        lang === 'en' ? "University Readiness" : "大学预备"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-sky-500" /> {item}
                        </li>
                    ))}
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage: React.FC<{ lang: Language }> = ({ lang }) => {
  const c = CONTENT[lang];
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">{c.contact.title}</h2>
          <p className="mt-4 text-slate-600">{c.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info Card */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
             <div className="space-y-8">
                <div>
                    <span className="text-sm font-bold text-sunrise-600 uppercase tracking-wider">{c.contact.addressLabel}</span>
                    <p className="mt-2 text-slate-800 text-lg font-medium">No. 25-2nd Floor, Jalan Mahogani 5/Ks7,<br/>41200 Klang, Selangor, Malaysia</p>
                </div>
                <div>
                    <span className="text-sm font-bold text-sunrise-600 uppercase tracking-wider">{c.contact.phoneLabel}</span>
                    <p className="mt-2 text-slate-800 text-lg font-medium">+6 012-425 1556</p>
                </div>
                <div>
                    <span className="text-sm font-bold text-sunrise-600 uppercase tracking-wider">{c.contact.emailLabel}</span>
                    <p className="mt-2 text-slate-800 text-lg font-medium">LOVE@sun.edu.my</p>
                </div>
                
                <div className="mt-8 pt-8 border-t border-slate-200">
                   <iframe 
                    title="map"
                    width="100%" 
                    height="300" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    className="rounded-xl shadow-sm filter grayscale hover:grayscale-0 transition-all duration-500"
                    src="https://maps.google.com/maps?q=Jalan%20Mahogani%205%2FKs7%2C%2041200%20Klang%2C%20Selangor&t=&z=15&ie=UTF8&iwloc=&output=embed"
                   ></iframe>
                </div>
             </div>
          </div>

          {/* Form (Visual Only) */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{c.contact.formName}</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sunrise-500 focus:ring-2 focus:ring-sunrise-200 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{c.contact.formEmail}</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sunrise-500 focus:ring-2 focus:ring-sunrise-200 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{c.contact.formMessage}</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sunrise-500 focus:ring-2 focus:ring-sunrise-200 outline-none transition-all"></textarea>
              </div>
              <button className="w-full bg-sunrise-600 text-white font-bold py-4 rounded-xl hover:bg-sunrise-700 transition-colors shadow-lg shadow-sunrise-200">
                {c.contact.formSubmit}
              </button>
              <p className="text-center text-xs text-slate-400 mt-4">
                 Note: This is a demo form. Please contact via WhatsApp for immediate response.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar lang={lang} setLang={setLang} content={CONTENT[lang].nav} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage lang={lang} />} />
            <Route path="/about" element={<AboutPage lang={lang} />} />
            <Route path="/syllabus" element={<SyllabusPage lang={lang} />} />
            <Route path="/contact" element={<ContactPage lang={lang} />} />
          </Routes>
        </main>
        <ChatWidget lang={lang} />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
