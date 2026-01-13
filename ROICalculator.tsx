
import React, { useState, useMemo } from 'react';

const ROICalculator: React.FC = () => {
  const [hours, setHours] = useState(40); // 月間作業時間
  const [hourlyRate, setHourlyRate] = useState(3000); // 時給換算

  const monthlySaving = useMemo(() => {
    // AI導入で作業の80%が削減されると仮定
    return Math.floor(hours * 0.8 * hourlyRate);
  }, [hours, hourlyRate]);

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-3xl border border-blue-100 shadow-sm mt-12">
      <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
        <span className="bg-blue-600 text-white p-1.5 rounded-lg mr-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </span>
        AI導入効果シミュレーター
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-4">
              <label className="text-slate-700 font-bold">現在の月間作業時間</label>
              <span className="text-blue-600 font-black text-xl">{hours}時間</span>
            </div>
            <input 
              type="range" min="1" max="200" value={hours} 
              onChange={(e) => setHours(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div>
            <div className="flex justify-between mb-4">
              <label className="text-slate-700 font-bold">人件費（時給換算）</label>
              <span className="text-blue-600 font-black text-xl">{hourlyRate.toLocaleString()}円</span>
            </div>
            <input 
              type="range" min="1000" max="10000" step="500" value={hourlyRate} 
              onChange={(e) => setHourlyRate(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-blue-100 flex flex-col justify-center text-center shadow-sm">
          <p className="text-slate-500 text-sm mb-2">年間想定削減コスト</p>
          <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
            <span className="text-blue-600">¥{(monthlySaving * 12).toLocaleString()}</span>
          </div>
          <p className="text-slate-400 text-xs">※業務の80%をAIが代替すると仮定</p>
          <div className="mt-6 pt-6 border-t border-slate-50 grid grid-cols-2 gap-4">
            <div>
              <p className="text-slate-400 text-xs mb-1">月間削減時間</p>
              <p className="text-lg font-bold text-slate-700">{Math.floor(hours * 0.8)}h</p>
            </div>
            <div>
              <p className="text-slate-400 text-xs mb-1">年間削減時間</p>
              <p className="text-lg font-bold text-slate-700">{Math.floor(hours * 0.8 * 12)}h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
