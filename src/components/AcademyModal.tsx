import React from 'react';
import { academyData } from '../data/academyData';
import { Language } from '../types';
import { translations } from '../data/translations';
import { BrandLogo } from './BrandLogo';
import { Phone, Globe, Mail, BookOpen, CheckCircle, ExternalLink, X, Sparkles } from 'lucide-react';

interface AcademyModalProps {
  language: Language;
  onClose: () => void;
}

export const AcademyModal: React.FC<AcademyModalProps> = ({ language, onClose }) => {
  const t = translations[language];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-fade-in">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-3xl shadow-2xl border border-amber-200 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white relative flex items-center justify-between">
          <div className="flex items-center gap-4">
            <BrandLogo size="lg" showSubtitle={true} lightMode={true} />
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white rounded-full bg-black/10 hover:bg-black/20 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Tagline */}
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-slate-900 font-serif">
              {academyData.tagline[language]}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xl mx-auto">
              {academyData.description[language]}
            </p>
          </div>

          {/* Quick Contact Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* WhatsApp Link */}
            <a
              href={`https://wa.me/${academyData.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-md transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>{t.whatsappUs}: {academyData.whatsapp}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Website Link */}
            <a
              href={`https://${academyData.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3.5 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-md transition-all cursor-pointer"
            >
              <Globe className="w-4 h-4" />
              <span>{t.website}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Courses Offered List */}
          <div className="space-y-3 bg-amber-50/60 p-5 rounded-2xl border border-amber-200">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>{academyData.name} Courses & Programs</span>
            </div>

            <div className="space-y-2">
              {academyData.courses.map((course, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800 font-medium bg-white p-3 rounded-xl border border-amber-100 shadow-xs">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{course[language]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {academyData.name}. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};
