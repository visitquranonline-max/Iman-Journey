import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Sparkles, Send, Bot, User, X, MessageSquare, ExternalLink, Globe, Phone } from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}

interface AskIslamAIModalProps {
  language: Language;
  onClose: () => void;
  onOpenAcademy: () => void;
}

export const AskIslamAIModal: React.FC<AskIslamAIModalProps> = ({
  language,
  onClose,
  onOpenAcademy,
}) => {
  const t = translations[language];
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: language === 'ur'
        ? 'السلام علیکم! میں "اسلامی سوال پوچھیں AI" ہوں۔ آپ مجھ سے اسلامی تاریخ، انبیاء کرام، صحابہ کرام اور وزٹ قرآن آن لائن اکیڈمی کے بارے میں کچھ بھی پوچھ سکتے ہیں۔'
        : language === 'ar'
        ? 'السلام عليكم! أنا "اسأل الذكاء الاصطناعي الإسلامي". يمكنك سؤالي عن التاريخ الإسلامي والأنبياء والصحابة وأكاديمية زيارة القرآن.'
        : 'Assalamu Alaikum! I am "Ask Islam AI" by Visit Quran Online Academy. Ask me anything about Islamic history, Stories of Prophets, Sahabah, or our Academy classes!',
    },
  ]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    {
      en: 'Tell me about Prophet Yunus (AS) and the whale',
      ur: 'حضرت یونس علیہ السلام اور مچھلی کا واقعہ بتائیں',
      ar: 'حدثني عن يونس عليه السلام والحوت',
    },
    {
      en: 'Who was Hazrat Bilal (RA)?',
      ur: 'حضرت بلال حبشی رضی اللہ عنہ کون تھے؟',
      ar: 'من هو بلال بن رباح رضي الله عنه؟',
    },
    {
      en: 'What is Visit Quran Online Academy?',
      ur: 'وزٹ قرآن آن لائن اکیڈمی کیا ہے؟',
      ar: 'ما هي أكاديمية زيارة القرآن عبر الإنترنت؟',
    },
    {
      en: 'What happened during the Islamic Golden Age?',
      ur: 'اسلامی سنہری دور میں کیا حیرت انگیز کام ہوئے؟',
      ar: 'ماذا حدث في العصر الذهبي للإسلام؟',
    },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || inputPrompt;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: textToSend.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputPrompt('');
    setIsLoading(true);

    try {
      const history = messages
        .filter((m) => m.id !== 'welcome')
        .map((m) => ({ role: m.role, text: m.text }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMsg.text,
          history,
        }),
      });

      const data = await res.json();
      if (res.ok && data.text) {
        setMessages((prev) => [
          ...prev,
          { id: (Date.now() + 1).toString(), role: 'model', text: data.text },
        ]);
      } else if (data.fallbackAnswer) {
        setMessages((prev) => [
          ...prev,
          { id: (Date.now() + 1).toString(), role: 'model', text: data.fallbackAnswer },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: 'model',
            text: 'SubhanAllah, I could not complete your request. Please check your internet or retry!',
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'model',
          text: 'Visit Quran Online Academy: We provide live 1-on-1 online Quran and Islamic classes. Visit www.visitquran.com or WhatsApp +15098839575!',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-md animate-fade-in">
      <div className="bg-white w-full max-w-2xl h-[85vh] rounded-3xl shadow-2xl border border-amber-200 flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/20 backdrop-blur-xs">
              <Bot className="w-5 h-5 text-yellow-200" />
            </div>
            <div>
              <h3 className="font-extrabold text-base font-serif flex items-center gap-1.5">
                <span>{t.askIslamAI}</span>
                <Sparkles className="w-4 h-4 text-yellow-200" />
              </h3>
              <p className="text-[11px] text-amber-100">{t.brandName}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-amber-100 hover:text-white rounded-full hover:bg-white/10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-amber-50/30">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {/* Avatar */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                  msg.role === 'user'
                    ? 'bg-amber-500 text-white'
                    : 'bg-amber-100 text-amber-800 border border-amber-300'
                }`}
              >
                {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              {/* Speech Bubble */}
              <div
                className={`max-w-[80%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'bg-amber-500 text-white rounded-tr-none shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-xs'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing Loading Indicator */}
          {isLoading && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-800">
                <Bot className="w-4 h-4" />
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-2xl rounded-tl-none text-xs text-slate-500 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500 animate-spin" />
                <span>{t.aiThinking}</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Chips */}
        {messages.length < 3 && (
          <div className="px-4 py-2 bg-white border-t border-slate-100 flex flex-wrap gap-1.5">
            {suggestedQuestions.map((sq, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(sq[language])}
                className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 cursor-pointer"
              >
                {sq[language]}
              </button>
            ))}
          </div>
        )}

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
          <input
            type="text"
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder={t.askAiPlaceholder}
            className="flex-1 px-4 py-2.5 rounded-2xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-amber-500"
          />

          <button
            onClick={() => handleSendMessage()}
            disabled={!inputPrompt.trim() || isLoading}
            className={`p-3 rounded-2xl bg-amber-500 text-white font-bold transition-all cursor-pointer ${
              !inputPrompt.trim() || isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-amber-600 shadow-md'
            }`}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
