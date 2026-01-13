
import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <div className="space-y-8 mt-12">
      <h2 className="text-2xl font-bold text-slate-800 flex items-center">
        <span className="bg-blue-600 text-white p-1.5 rounded-lg mr-3 shadow-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        導入費用・サポートプラン
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Initial Implementation Card */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col hover:border-blue-200 transition-colors">
          <div className="mb-4">
            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wider">初期費用</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">基本導入パッケージ</h3>
          <div className="text-3xl font-black text-blue-600 mb-4">
            ¥300,000<span className="text-sm text-slate-400 font-normal ml-1">〜 (税別)</span>
          </div>
          <ul className="text-sm text-slate-600 space-y-3 mb-6 flex-grow">
            <li className="flex items-center">
              <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              業務ヒアリング・要件定義
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              AIモデル選定・初期構築
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              既存ツール連携テスト
            </li>
          </ul>
        </div>

        {/* Monthly Support Card */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-3xl shadow-xl flex flex-col relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
            <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="mb-4 relative z-10">
            <span className="px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full uppercase tracking-wider">月額制</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2 relative z-10">安心サポートプラン</h3>
          <div className="text-3xl font-black text-white mb-4 relative z-10">
            ¥30,000<span className="text-sm text-blue-100 font-normal ml-1">/月 (税別)</span>
          </div>
          <ul className="text-sm text-blue-50 space-y-3 mb-6 flex-grow relative z-10">
            <li className="flex items-center">
              <svg className="w-4 h-4 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              最新AIモデルへのアップデート対応
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              専任担当者によるSlackチャット相談
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              月次稼働レポート・改善提案
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              システム不具合・エラー時優先対応
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex items-start gap-4">
        <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <div>
          <h4 className="font-bold text-slate-800 mb-1">変化し続けるAIへの追従</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            AI技術は日々進化しています。当社のサポートプランでは、モデルのバージョンアップ（Gemini, Claude, GPT等）に伴うプロンプトの微調整や新機能の取り込み、セキュリティパッチの適用を継続的に実施。お客様の業務フローが常に最新・最良の状態であることを保証します。
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
