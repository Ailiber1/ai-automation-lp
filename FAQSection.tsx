
import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="max-w-4xl mx-auto px-6 py-20 border-t border-slate-200">
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">よくある質問</h3>
        <p className="text-slate-600">AI導入に関する疑問や、サービスについて多く寄せられる質問にお答えします。</p>
      </div>

      <div className="space-y-4">
        {FAQ_ITEMS.map((item, index) => (
          <div 
            key={index} 
            className="bg-white border border-slate-200 rounded-3xl overflow-hidden transition-all duration-300 shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-8 py-6 flex items-center justify-between group focus:outline-none"
            >
              <span className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors pr-4">
                Q. {item.question}
              </span>
              <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-blue-50 text-blue-600' : 'text-slate-400'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            
            <div 
              className={`px-8 transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 py-6 border-t border-slate-100 opacity-100' : 'max-h-0 py-0 opacity-0 pointer-events-none'
              }`}
            >
              <div className="flex items-start text-slate-600 leading-relaxed">
                <span className="text-blue-600 font-bold mr-2 mt-0.5">A.</span>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 bg-blue-50 rounded-[2rem] border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-xl font-bold text-slate-900 mb-2">他にもご不明な点がありますか？</h4>
          <p className="text-slate-600 text-sm">個別のご相談や詳しい資料請求はこちらからお問い合わせください。</p>
        </div>
        <a 
          href="#" 
          className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 whitespace-nowrap"
        >
          専門スタッフに相談する
        </a>
      </div>
    </section>
  );
};

export default FAQSection;
