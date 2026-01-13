
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  onHomeClick: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onHomeClick }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo Section */}
          <div 
            onClick={onHomeClick}
            className="flex items-center cursor-pointer group shrink-0"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-blue-100 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 tracking-tight">
              AI業務自動化パッケージ
            </h1>
          </div>

          {/* Navigation Section */}
          <nav className="hidden md:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              <button 
                onClick={onHomeClick} 
                className="text-slate-600 hover:text-blue-600 font-semibold transition-colors py-2 relative group"
              >
                ホーム
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </button>
              <a href="#" className="text-slate-600 hover:text-blue-600 font-semibold transition-colors py-2 relative group">
                導入事例
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600 font-semibold transition-colors py-2 relative group">
                よくある質問
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            </div>
            
            <a 
              href="#" 
              className="bg-blue-600 text-white px-7 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 hover:shadow-blue-200 active:scale-95 flex items-center shrink-0"
            >
              お問い合わせ
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-lg font-bold">AI業務自動化パッケージ</h2>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                最先端のAI技術を企業の皆様へ。業務の効率化と人的リソースの最適化をワンストップで支援します。
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">サービス</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">定型業務自動化</a></li>
                <li><a href="#" className="hover:text-white transition-colors">n8nフロー構築</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Claude支援</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI動画制作</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">運営会社</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">会社概要</a></li>
                <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-white transition-colors">デモ版利用規約</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            © 2024 AI Business Automation Package Demo.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
