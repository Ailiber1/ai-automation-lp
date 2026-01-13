
import React, { useState } from 'react';
import { editImageWithGemini } from '../services/geminiService';

const ImageEditor: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    if (!image || !prompt) return;
    setLoading(true);
    setError(null);
    try {
      const mimeType = image.split(';')[0].split(':')[1];
      const editedImageUrl = await editImageWithGemini(image, mimeType, prompt);
      setResult(editedImageUrl);
    } catch (err) {
      setError('画像編集中にエラーが発生しました。時間を置いて再度お試しください。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm max-w-4xl mx-auto my-12">
      <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
        <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </span>
        Gemini AI 画像編集デモ
      </h3>
      
      <p className="text-slate-600 mb-8">
        AI活用カスタム業務の一環として、画像編集AIのデモをご体験いただけます。画像をアップロードし、「レトロ風にして」「背景の人物を消して」などの指示を入力してください。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <label className="block">
            <span className="text-slate-700 font-medium">元画像をアップロード</span>
            <input 
              type="file" 
              accept="image/*"
              onChange={handleFileChange}
              className="mt-2 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </label>
          
          {image && (
            <div className="relative group">
              <img src={image} alt="Original" className="rounded-xl border border-slate-200 max-h-64 mx-auto object-contain" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-xl pointer-events-none"></div>
            </div>
          )}
        </div>

        <div className="space-y-4 flex flex-col">
          <div className="flex-1">
            <label className="block">
              <span className="text-slate-700 font-medium">編集指示（プロンプト）</span>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="例：レトロなフィルターをかけて、少し温かみのある雰囲気にしてください。"
                className="mt-2 w-full h-32 p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none text-slate-700"
              />
            </label>
          </div>

          <button
            onClick={handleEdit}
            disabled={loading || !image || !prompt}
            className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-md active:scale-[0.98] ${
              loading || !image || !prompt 
                ? 'bg-slate-300 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200'
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                AIが画像を編集しています...
              </span>
            ) : 'AIで画像を編集する'}
          </button>
        </div>
      </div>

      {error && (
        <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </div>
      )}

      {result && (
        <div className="mt-12 pt-8 border-t border-slate-100">
          <h4 className="text-xl font-bold text-slate-800 mb-4 text-center">編集結果</h4>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 inline-block w-full text-center">
            <img src={result} alt="Edited Result" className="max-h-96 mx-auto rounded-lg shadow-lg border border-white" />
          </div>
          <div className="text-center mt-6">
            <a 
              href={result} 
              download="edited-image.png"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              画像を保存する
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageEditor;
