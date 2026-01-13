
import React, { useState, useEffect } from 'react';
import { AIPackage, ViewState } from './types';
import { PACKAGES, TAGS } from './constants';
import Layout from './components/Layout';
import PricingSection from './components/PricingSection';
import AIConcierge from './components/AIConcierge';
import FAQSection from './components/FAQSection';

const PackageIcon: React.FC<{ type: AIPackage['iconType'] }> = ({ type }) => {
  const iconProps = { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" };
  
  switch (type) {
    case 'routine':
      return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>;
    case 'workflow':
      return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>;
    case 'data':
      return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>;
    case 'support':
      return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>;
    case 'manual':
      return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
    case 'report':
      return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
    case 'claude':
      return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
    case 'system':
      return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
    case 'video':
      return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;
    case 'ads':
      return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>;
    case 'web':
      return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>;
    case 'custom':
      return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.673.337a4 4 0 01-2.506.326l-1.74-.435a1 1 0 00-1.216.974v2.308a1 1 0 00.157.54l.455.682a1 1 0 00.832.445h1.5a1 1 0 00.994-.89l.1-1a1 1 0 01.995-.9h.2a1 1 0 01.995.9l.1 1a1 1 0 00.994.89h1.5a1 1 0 00.832-.445l.455-.682a1 1 0 00.157-.54v-2.308a1 1 0 00-1.216-.974l-1.74.435a4 4 0 01-2.506-.326l-.673-.337a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547" /></svg>;
    default:
      return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
  }
};

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [selectedPackage, setSelectedPackage] = useState<AIPackage | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, selectedPackage]);

  const handlePackageClick = (pkg: AIPackage) => {
    setSelectedPackage(pkg);
    setView('detail');
  };

  const handleHome = () => {
    setView('home');
    setSelectedPackage(null);
  };

  const filteredPackages = PACKAGES.filter(p => 
    p.name.includes(searchTerm) || p.shortDesc.includes(searchTerm)
  );

  return (
    <Layout onHomeClick={handleHome}>
      {view === 'home' && (
        <div className="pb-20 animate-in fade-in duration-500">
          {/* Hero & Search Section */}
          <section className="bg-white border-b border-slate-100 pt-16 pb-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                AIでどんな業務を<span className="text-blue-600 underline decoration-blue-200 underline-offset-8">自動化</span>したいですか？
              </h2>
              <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                御社の課題に合わせた最適なAIパッケージをお選びいただけます。<br className="hidden md:block"/>
                最新のGemini 2.5やClaude、n8nを活用したソリューションをご用意.
              </p>
              
              <div className="relative max-w-2xl mx-auto group">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                  <svg className="h-6 w-6 text-slate-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input 
                  type="text"
                  placeholder="例：レポート作成を自動化したい"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-16 pr-6 py-5 bg-slate-50 border border-slate-200 rounded-3xl text-lg text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:bg-white focus:border-blue-400 transition-all shadow-sm"
                />
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {TAGS.map(tag => (
                  <button 
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Packages List Section */}
          <section className="max-w-7xl mx-auto px-6 mt-16">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-slate-900">パッケージ一覧</h3>
                <p className="text-slate-500 text-sm">{filteredPackages.length} 件のパッケージ</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredPackages.map(pkg => (
                <div 
                  key={pkg.id} 
                  className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group h-full"
                >
                  <div className="mb-6 h-14 w-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <PackageIcon type={pkg.iconType} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4 line-clamp-1">{pkg.name}</h4>
                  <p className="text-slate-600 mb-8 flex-grow line-clamp-3 text-sm leading-relaxed">{pkg.shortDesc}</p>
                  <button 
                    onClick={() => handlePackageClick(pkg)}
                    className="w-full py-3.5 px-4 bg-slate-100 border border-slate-200 rounded-2xl font-bold text-slate-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:shadow-lg group-hover:shadow-blue-100 transition-all flex items-center justify-center"
                  >
                    詳細を見る
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {filteredPackages.length === 0 && (
              <div className="text-center py-20">
                <p className="text-slate-500 text-lg">条件に合うパッケージが見つかりませんでした。</p>
                <button onClick={() => setSearchTerm('')} className="mt-4 text-blue-600 font-bold hover:underline">検索条件をリセット</button>
              </div>
            )}
          </section>

          {/* FAQ Section */}
          <FAQSection />
        </div>
      )}

      {view === 'detail' && selectedPackage && (
        <div className="max-w-4xl mx-auto px-6 py-16 animate-in slide-in-from-right duration-500">
          <button 
            onClick={handleHome}
            className="mb-8 text-slate-500 font-medium flex items-center hover:text-blue-600 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            一覧に戻る
          </button>

          <div className="space-y-12">
            <div className="flex items-start gap-6">
               <div className="h-16 w-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-100">
                  <PackageIcon type={selectedPackage.iconType} />
               </div>
               <div>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">{selectedPackage.name}</h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  {selectedPackage.longDesc}
                </p>
               </div>
            </div>

            <PricingSection />

            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3 text-base">✓</span>
                対応可能な業務内容
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedPackage.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <span className="text-blue-500 mr-3 mt-1">●</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">業務効率化の流れ</h2>
              <div className="relative pl-8 border-l-2 border-blue-100 space-y-8">
                {selectedPackage.workflow.split('→').map((step, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[41px] top-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-sm flex items-center justify-center text-[10px] text-white font-bold">
                      {idx + 1}
                    </span>
                    <h3 className="font-bold text-slate-800 mb-1">{step.trim()}</h3>
                    <p className="text-slate-500 text-sm">ステップ {idx + 1} の詳細な説明がここに入ります（デモ用）。</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">チュートリアル・デモ動画</h2>
              <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center relative border border-slate-200">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedPackage.youtubeId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="pt-10 border-t border-slate-100 text-center">
              <button 
                onClick={() => setView('form')}
                className="inline-flex items-center px-12 py-5 bg-blue-600 text-white text-xl font-bold rounded-full hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-95"
              >
                入力フォームへ進む
                <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <p className="mt-4 text-slate-400 text-sm">※本ボタンから依頼主情報の入力画面へ進めます。</p>
            </div>
          </div>
        </div>
      )}

      {view === 'form' && (
        <div className="max-w-2xl mx-auto px-6 py-20 animate-in fade-in duration-500">
          <div className="bg-white p-10 md:p-14 rounded-[2.5rem] border border-slate-200 shadow-xl">
            <div className="text-center mb-10">
              <p className="text-blue-600 font-bold mb-2 text-sm">※この画面では契約・発注は行われません</p>
              <h1 className="text-3xl font-black text-slate-900 mb-4">ご依頼主情報の入力</h1>
              <p className="text-slate-500">
                選択パッケージ：<span className="font-bold text-blue-600">{selectedPackage?.name}</span>
              </p>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">企業名 / 個人名 <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  placeholder="株式会社AIソリューション"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:bg-white focus:border-blue-400 outline-none transition-all text-slate-900"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">依頼内容の詳細 <span className="text-red-500">*</span></label>
                <textarea 
                  rows={6}
                  placeholder="現在、〇〇という業務を手作業で行っており、月間△△時間のコストがかかっています。これを自動化したいです。"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:bg-white focus:border-blue-400 outline-none transition-all resize-none text-slate-900"
                  required
                ></textarea>
              </div>

              <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100 flex items-start">
                <svg className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-amber-700 leading-relaxed">
                  <strong>注記：</strong> 本画面はデモ用です。情報を入力しても実際の「発注・契約・相談」が確定することはありません。入力後の送信処理はデモ版のため、ここで終了となります。
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button 
                  type="button"
                  onClick={() => setView('detail')}
                  className="flex-1 py-5 px-8 bg-slate-100 text-slate-700 font-bold rounded-2xl hover:bg-slate-200 transition-all text-center"
                >
                  詳細へ戻る
                </button>
                <button 
                  type="button"
                  onClick={() => alert('デモ版のため、送信処理は行われません。導線確認ありがとうございます！')}
                  className="flex-[2] py-5 px-8 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 text-center"
                >
                  内容を送信する（デモ）
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <AIConcierge />
    </Layout>
  );
};

export default App;
