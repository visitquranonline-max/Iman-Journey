import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { Smartphone, Download, CheckCircle, Copy, ExternalLink, ShieldCheck, Sparkles, X, Layers, Globe } from 'lucide-react';

interface InstallAndroidModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const InstallAndroidModal: React.FC<InstallAndroidModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  if (!isOpen) return null;

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          setIsInstalled(true);
        }
        setDeferredPrompt(null);
      } catch (err) {
        console.error('Error prompting install:', err);
      }
    } else {
      // Show clear visual instruction or guide on how to add to home screen/install
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      if (isIOS) {
        alert(
          language === 'ur'
            ? 'آئی فون / آئی پیڈ پر انسٹال کرنے کے لیے: شیئر (Share) بٹن پر ٹیپ کریں اور "Add to Home Screen" منتخب کریں۔'
            : language === 'ar'
            ? 'للتثبيت على iPhone / iPad: اضغط على زر المشاركة (Share) ثم اختر "إضافة إلى الشاشة الرئيسية Add to Home Screen".'
            : 'To install on iPhone / iPad: Tap the Share button in Safari and select "Add to Home Screen".'
        );
      } else {
        alert(
          language === 'ur'
            ? 'اینڈرائڈ پر فوری انسٹال کرنے کے لیے:\n1. کروم مینو (3 ڈاٹس ⋮) پر ٹیپ کریں۔\n2. "انسٹال ایپ" (Install App) یا "ہوم اسکرین پر شامل کریں" پر کلک کریں۔'
            : language === 'ar'
            ? 'للتثبيت المباشر على أندرويد:\n1. انقر على قائمة المتصفح (3 نقاط ⋮)\n2. اختر "تثبيت التطبيق" أو "إضافة إلى الشاشة الرئيسية".'
            : 'To install directly on Android:\n1. Tap the browser menu (3 dots ⋮) at the top right.\n2. Tap "Install app" or "Add to Home screen".'
        );
      }
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const texts = {
    en: {
      title: 'Install Android App',
      subtitle: 'Fast 1-Click Installation for Android Devices',
      directInstallHeading: '1. One-Click Direct Android Installation',
      directInstallDesc: 'Install "Islamic History Adventure" directly onto your Android phone or tablet like a native app with offline capabilities.',
      installButton: '📱 Install App On Android Device',
      installedBadge: 'App Already Installed on Device',
      shareHeading: '2. Single Link Download & Distribution',
      shareDesc: 'Share this exact link with anyone in any country. Tapping this link on any Android phone allows instant 1-tap app installation without requiring Google Play Store!',
      copyButton: 'Copy App Download Link',
      copied: 'Link Copied to Clipboard!',
      apkHeading: '3. Production APK & Play Store Packaging',
      apkDesc: 'The app is fully configured with Android Capacitor (@capacitor/android) and Digital Asset Links for Google Play Store packaging.',
      capacitorCmdsTitle: 'Commands to build native APK/AAB:',
      globalAccessTitle: 'Global Compatibility:',
      globalAccessDesc: 'No region locks. Works smoothly in Pakistan, Middle East, USA, UK, India, and worldwide.',
      close: 'Close',
    },
    ur: {
      title: 'اینڈرائڈ ایپ انسٹال کریں',
      subtitle: 'اینڈرائڈ ڈیوائسز کے لیے تیز ترین 1-کلک انسٹالیشن',
      directInstallHeading: '1۔ ڈائریکٹ اینڈرائڈ انسٹالیشن',
      directInstallDesc: 'اسلامک ہسٹری ایڈونچر کو اپنے اینڈرائڈ فون میں نیٹیو ایپ کی طرح براہِ راست انسٹال کریں۔',
      installButton: '📱 اینڈرائڈ پر ایپ انسٹال کریں',
      installedBadge: 'ایپ ڈیوائس پر انسٹال ہو چکی ہے',
      shareHeading: '2۔ سنگل ڈاؤن لوڈ لنک',
      shareDesc: 'یہ لنک کسی بھی ملک میں شئیر کریں۔ اینڈرائڈ فون پر لنک کھول کر فوری 1-ٹیپ انسٹالیشن کریں۔',
      copyButton: 'ڈاؤن لوڈ لنک کاپی کریں',
      copied: 'لنک کاپی ہو گیا!',
      apkHeading: '3۔ پروڈکشن APK اور پلے اسٹور ریڈی',
      apkDesc: 'ایپ اینڈرائڈ کیپیسیٹر اور ڈیجیٹل ایسٹ لنکس سے مکمل لیس ہے۔',
      capacitorCmdsTitle: 'نیٹیو APK بنانے کا طریقہ:',
      globalAccessTitle: 'عالمی دستیابی:',
      globalAccessDesc: 'بغیر کسی علاقائی پابندی کے دنیا بھر میں فعال۔',
      close: 'بند کریں',
    },
    ar: {
      title: 'تثبيت تطبيق أندرويد',
      subtitle: 'تثبيت بنقرة واحدة لأجهزة الأندرويد',
      directInstallHeading: '1. التثبيت المباشر على الأندرويد',
      directInstallDesc: 'قم بتثبيت "مغامرة التاريخ الإسلامي" مباشرة على هاتفك أو لوحك كأنه تطبيق أصلي.',
      installButton: '📱 تثبيت التطبيق على جهاز أندرويد',
      installedBadge: 'التطبيق مثبت بالفعل على الجهاز',
      shareHeading: '2. رابط التنزيل والمشاركة الموحد',
      shareDesc: 'شارك هذا الرابط مع أي شخص في أي دولة. فتح الرابط على الأندرويد يتيح التثبيت الفوري بنقرة واحدة.',
      copyButton: 'نسخ رابط تنزيل التطبيق',
      copied: 'تم نسخ الرابط بنجاح!',
      apkHeading: '3. جاهز لحزمة APK ومتجر جوجل بلاي',
      apkDesc: 'التطبيق مجهز بالكامل بـ Capacitor وربط الأصول الرقمية للنشر.',
      capacitorCmdsTitle: 'أوامر بناء ملف APK الأصلي:',
      globalAccessTitle: 'توافق عالمي:',
      globalAccessDesc: 'يعمل بسلاسة في جميع أنحاء العالم دون قيود جغرافية.',
      close: 'إغلاق',
    },
  }[language];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-slate-900 border border-emerald-500/30 rounded-3xl shadow-2xl overflow-hidden text-slate-100 max-h-[90vh] flex flex-col">
        {/* Top Header */}
        <div className="p-6 bg-gradient-to-r from-emerald-900/80 via-emerald-800/60 to-slate-900 border-b border-emerald-500/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-500/20">
              <Smartphone className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="text-xl font-black text-amber-300">{texts.title}</h3>
              <p className="text-xs text-emerald-200/80 font-medium">{texts.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Section 1: One-Click Installation */}
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-emerald-500/30 space-y-3">
            <div className="flex items-center gap-2 font-bold text-emerald-400">
              <Download className="w-4 h-4" />
              <span>{texts.directInstallHeading}</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">{texts.directInstallDesc}</p>

            {isInstalled ? (
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-900/50 border border-emerald-500/40 text-emerald-300 font-bold text-xs">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>{texts.installedBadge}</span>
              </div>
            ) : (
              <button
                onClick={handleInstallClick}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/25 transition-all transform hover:scale-[1.02] cursor-pointer"
              >
                <Smartphone className="w-5 h-5" />
                <span>{texts.installButton}</span>
              </button>
            )}
          </div>

          {/* Section 2: Single Download Link */}
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-amber-500/30 space-y-3">
            <div className="flex items-center gap-2 font-bold text-amber-400">
              <Globe className="w-4 h-4" />
              <span>{texts.shareHeading}</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">{texts.shareDesc}</p>

            <button
              onClick={handleCopyLink}
              className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                copiedLink
                  ? 'bg-emerald-600 text-white'
                  : 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40'
              }`}
            >
              {copiedLink ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedLink ? texts.copied : texts.copyButton}</span>
            </button>
          </div>

          {/* Section 3: Native APK & Capacitor Info */}
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3 text-xs">
            <div className="flex items-center gap-2 font-bold text-teal-400">
              <ShieldCheck className="w-4 h-4" />
              <span>{texts.apkHeading}</span>
            </div>
            <p className="text-slate-300 leading-relaxed">{texts.apkDesc}</p>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-emerald-400 space-y-1">
              <p className="text-slate-500 font-sans font-semibold mb-1">{texts.capacitorCmdsTitle}</p>
              <p>1. npm run build</p>
              <p>2. npx cap add android</p>
              <p>3. npx cap open android (Build APK in 1 min)</p>
            </div>

            <div className="flex items-center gap-2 text-slate-400 text-[11px]">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span><strong>{texts.globalAccessTitle}</strong> {texts.globalAccessDesc}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-colors cursor-pointer"
          >
            {texts.close}
          </button>
        </div>
      </div>
    </div>
  );
};
