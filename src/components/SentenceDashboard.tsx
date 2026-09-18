import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Volume2, Play, Search, Sparkles, Filter, Award, BookOpen } from 'lucide-react';
import { SentenceItem, UserProgress, BatchimType } from '../types';
import { SENTENCES_DATA } from '../data/sentencesData';
import { KoboinCharacter } from './KoboinCharacter';
import { speakKorean } from '../utils/soundEffects';

interface SentenceDashboardProps {
  progress: UserProgress;
  onPracticeSentence: (sentence: SentenceItem) => void;
}

export const SentenceDashboard: React.FC<SentenceDashboardProps> = ({
  progress,
  onPracticeSentence,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | BatchimType>('all');
  const [filterStatus, setFilterStatus] = useState<'all' | 'mastered' | 'unmastered'>('all');
  const [inspectSentence, setInspectSentence] = useState<SentenceItem | null>(null);

  // Filtered sentences
  const filteredSentences = SENTENCES_DATA.filter(item => {
    if (selectedCategory !== 'all' && item.batchim !== selectedCategory) return false;
    const isMastered = progress.masteredSentences.includes(item.id);
    if (filterStatus === 'mastered' && !isMastered) return false;
    if (filterStatus === 'unmastered' && isMastered) return false;
    return true;
  });

  const masteredCount = progress.masteredSentences.length;
  const progressPercent = Math.round((masteredCount / SENTENCES_DATA.length) * 100);

  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      {/* Top Header & Visual Progress Summary */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-amber-200/80 shadow-xs mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-800 text-xs font-black rounded-full mb-1">
              <BookOpen className="w-3.5 h-3.5 text-amber-600" />
              <span>초등 1학년 겹받침 15문장 완전 정복 현황</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-800">
              코보인과 함께한 학습 대시보드
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              마스터한 문장은 초록색 체크로 표시돼요. 언제든 카드를 눌러 발음을 듣고 복습할 수 있어요!
            </p>
          </div>

          {/* Progress Circular Dial */}
          <div className="flex items-center gap-4 bg-amber-50/80 px-4 py-3 rounded-2xl border border-amber-200 shrink-0">
            <div className="relative w-14 h-14 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="28"
                  cy="28"
                  r="24"
                  fill="none"
                  stroke="#FDE68A"
                  strokeWidth="5"
                />
                <circle
                  cx="28"
                  cy="28"
                  r="24"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="5"
                  strokeDasharray={2 * Math.PI * 24}
                  strokeDashoffset={
                    2 * Math.PI * 24 * (1 - masteredCount / SENTENCES_DATA.length)
                  }
                  strokeLinecap="round"
                  className="transition-all duration-700"
                />
              </svg>
              <span className="absolute text-xs font-black text-slate-800">
                {progressPercent}%
              </span>
            </div>
            <div>
              <div className="text-xs text-slate-500 font-bold">마스터 성취도</div>
              <div className="text-base font-black text-orange-600">
                {masteredCount} <span className="text-xs text-slate-400 font-normal">/ 15 문장</span>
              </div>
            </div>
          </div>
        </div>

        {/* Batchim Category Quick Chips */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
          {/* Category tabs */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs text-slate-400 font-bold mr-1">겹받침:</span>
            {(['all', 'ㄺ', 'ㄼ', 'ㅀ', 'ㅄ'] as const).map(cat => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-orange-500 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat === 'all' ? '전체 15' : cat}
                </button>
              );
            })}
          </div>

          {/* Status filter tabs */}
          <div className="flex items-center gap-1">
            {(
              [
                { id: 'all', label: '전체' },
                { id: 'mastered', label: '마스터' },
                { id: 'unmastered', label: '도전 중' }
              ] as const
            ).map(st => (
              <button
                key={st.id}
                onClick={() => setFilterStatus(st.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  filterStatus === st.id
                    ? 'bg-amber-100 text-amber-900 border border-amber-300'
                    : 'text-slate-500 hover:bg-slate-100'
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 15 Sentences Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
        {filteredSentences.map(item => {
          const isMastered = progress.masteredSentences.includes(item.id);
          return (
            <motion.div
              key={item.id}
              whileHover={{ y: -3 }}
              onClick={() => {
                setInspectSentence(item);
                speakKorean(item.sentence);
              }}
              className={`p-4 rounded-3xl border-2 transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                isMastered
                  ? 'bg-white border-emerald-300 shadow-xs hover:border-emerald-400'
                  : 'bg-white border-amber-200/80 shadow-xs hover:border-orange-400'
              }`}
            >
              {/* Card Header: Number, Batchim & Mastered Stamp */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-black flex items-center justify-center">
                    {item.id}
                  </span>
                  <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs font-black rounded-md">
                    {item.batchim}
                  </span>
                </div>

                {isMastered ? (
                  <span className="inline-flex items-center gap-0.5 px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[11px] font-black rounded-full">
                    <Check className="w-3 h-3 stroke-[3]" /> 마스터
                  </span>
                ) : (
                  <span className="text-[11px] text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded-full">
                    도전 대기
                  </span>
                )}
              </div>

              {/* Main Sentence & Pronunciation */}
              <div className="my-2">
                <h3 className="text-lg font-black text-slate-800 group-hover:text-orange-600 transition-colors">
                  {item.sentence}
                </h3>
                <div className="text-xs text-orange-600 font-bold mt-0.5">
                  겹받침 글자: <span className="font-black text-slate-800">{item.batchimWord}</span> ({item.batchim})
                </div>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2 font-medium">
                  {item.meaning}
                </p>
              </div>

              {/* Card Footer: Voice button and practice button */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={e => {
                    e.stopPropagation();
                    speakKorean(item.sentence);
                  }}
                  className="p-1.5 rounded-xl bg-amber-50 hover:bg-orange-100 text-orange-600 transition-colors cursor-pointer"
                  title="문장 듣기"
                >
                  <Volume2 className="w-4 h-4" />
                </button>

                <button
                  onClick={e => {
                    e.stopPropagation();
                    onPracticeSentence(item);
                  }}
                  className="px-3 py-1 bg-orange-500 hover:bg-orange-600 text-white text-xs font-black rounded-xl shadow-2xs flex items-center gap-1 transition-all cursor-pointer"
                >
                  <Play className="w-3 h-3 fill-white" />
                  <span>연습 퀴즈</span>
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Sentence Detail Popup Inspector */}
      <AnimatePresence>
        {inspectSentence && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border-4 border-amber-300 overflow-hidden"
            >
              {/* Popup Header */}
              <div className="p-4 bg-amber-50 border-b border-amber-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-orange-500 text-white text-xs font-black rounded-lg">
                    문장 {inspectSentence.id}
                  </span>
                  <span className="text-sm font-black text-slate-800">
                    겹받침 '{inspectSentence.batchim}' 배우기
                  </span>
                </div>
                <button
                  onClick={() => setInspectSentence(null)}
                  className="w-7 h-7 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-500 flex items-center justify-center font-black cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Popup Body: Koboin Action + Rule Details */}
              <div className="p-5 flex flex-col items-center text-center">
                <KoboinCharacter
                  animationType={inspectSentence.animationType}
                  size="md"
                  className="cursor-pointer mb-2"
                  onClick={() => speakKorean(inspectSentence.sentence)}
                />

                <div className="inline-flex items-center gap-2 mt-1">
                  <h3 className="text-2xl font-black text-slate-900">
                    {inspectSentence.sentence}
                  </h3>
                  <button
                    onClick={() => speakKorean(inspectSentence.sentence)}
                    className="p-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 cursor-pointer"
                    title="문장 듣기"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="inline-block mt-1 px-3 py-1 bg-amber-100 text-amber-900 text-sm font-black rounded-full">
                  핵심 겹받침: <span className="text-orange-600 font-extrabold">{inspectSentence.batchimWord} ({inspectSentence.batchim})</span>
                </div>

                {/* Situation & Rule Explanation */}
                <div className="w-full bg-amber-50/70 rounded-2xl p-3.5 border border-amber-200 mt-4 text-left">
                  <div className="text-xs font-bold text-amber-800 flex items-center gap-1 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                    <span>코보인의 겹받침 꿀팁 비법</span>
                  </div>
                  <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                    {inspectSentence.keyRuleTip}
                  </p>
                  <p className="text-xs text-slate-500 mt-2 font-medium">
                    상황: {inspectSentence.situationPrompt}
                  </p>
                </div>

                {/* Actions */}
                <div className="w-full mt-5 flex gap-2">
                  <button
                    onClick={() => {
                      const cur = inspectSentence;
                      setInspectSentence(null);
                      onPracticeSentence(cur);
                    }}
                    className="flex-1 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-sm rounded-2xl shadow-md transition-all cursor-pointer"
                  >
                    이 문장 퀴즈 풀기 🎯
                  </button>
                  <button
                    onClick={() => setInspectSentence(null)}
                    className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-2xl cursor-pointer"
                  >
                    닫기
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
