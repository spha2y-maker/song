import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Target, Flame, Sparkles, CheckCircle2, Award, Calendar } from 'lucide-react';
import { UserProgress } from '../types';
import { soundManager } from '../utils/soundEffects';

interface GoalTrackerModalProps {
  progress: UserProgress;
  onClose: () => void;
  onUpdateGoal: (targetCarrots: number, targetSentences: number) => void;
  onClaimDailyBonus: () => void;
}

export const GoalTrackerModal: React.FC<GoalTrackerModalProps> = ({
  progress,
  onClose,
  onUpdateGoal,
  onClaimDailyBonus,
}) => {
  const [selectedCarrots, setSelectedCarrots] = useState(progress.dailyGoal.targetCarrots);
  const [selectedSentences, setSelectedSentences] = useState(progress.dailyGoal.targetSentences);
  const [isSaved, setIsSaved] = useState(false);

  const isGoalMet =
    progress.dailyGoal.earnedToday >= progress.dailyGoal.targetCarrots &&
    progress.dailyGoal.studiedToday >= progress.dailyGoal.targetSentences;

  const handleSave = () => {
    onUpdateGoal(selectedCarrots, selectedSentences);
    setIsSaved(true);
    soundManager.playCorrect();
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl border-4 border-amber-300 overflow-hidden"
      >
        {/* Header */}
        <div className="px-5 py-4 bg-amber-50 border-b border-amber-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center">
              <Target className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-800">
                오늘의 학습 목표 설정
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                초등 1학년 맞춤 매일 습관 만들기
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-500 flex items-center justify-center font-bold cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-5">
          {/* Today's Live Status */}
          <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black text-slate-700">오늘의 실시간 성취도</span>
              {isGoalMet ? (
                <span className="inline-flex items-center gap-1 text-xs font-black text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 목표 달성 완료!
                </span>
              ) : (
                <span className="text-xs text-orange-600 font-bold">진행 중 🔥</span>
              )}
            </div>

            {/* Carrot Progress */}
            <div className="mb-3">
              <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                <span>🥕 당근 수확: {progress.dailyGoal.earnedToday}개</span>
                <span>목표: {progress.dailyGoal.targetCarrots}개</span>
              </div>
              <div className="w-full h-2.5 bg-amber-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange-500 rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.min(
                      100,
                      (progress.dailyGoal.earnedToday / progress.dailyGoal.targetCarrots) * 100
                    )}%`
                  }}
                />
              </div>
            </div>

            {/* Sentences Progress */}
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                <span>📖 공부한 문장: {progress.dailyGoal.studiedToday}개</span>
                <span>목표: {progress.dailyGoal.targetSentences}개</span>
              </div>
              <div className="w-full h-2.5 bg-amber-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.min(
                      100,
                      (progress.dailyGoal.studiedToday / progress.dailyGoal.targetSentences) * 100
                    )}%`
                  }}
                />
              </div>
            </div>

            {/* Bonus Reward Button if completed */}
            {isGoalMet && !progress.dailyGoal.completed && (
              <button
                onClick={onClaimDailyBonus}
                className="mt-3 w-full py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-black rounded-xl shadow-xs hover:scale-102 transition-transform cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>목표 달성 기념 특별 보너스 당근 (+2) 받기!</span>
              </button>
            )}
          </div>

          {/* Setting Daily Target Carrots */}
          <div>
            <label className="block text-xs font-black text-slate-700 mb-2">
              1. 매일 모을 당근 목표 🥕
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { amount: 3, label: '가볍게 (3개)' },
                { amount: 5, label: '표준 (5개)' },
                { amount: 10, label: '열정 (10개)' }
              ].map(opt => (
                <button
                  key={opt.amount}
                  type="button"
                  onClick={() => setSelectedCarrots(opt.amount)}
                  className={`p-2.5 rounded-2xl text-xs font-black border-2 transition-all cursor-pointer ${
                    selectedCarrots === opt.amount
                      ? 'bg-orange-500 text-white border-orange-600 shadow-xs'
                      : 'bg-white text-slate-700 border-amber-200 hover:bg-amber-50'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Setting Daily Target Sentences */}
          <div>
            <label className="block text-xs font-black text-slate-700 mb-2">
              2. 매일 익힐 문장 개수 📚
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { amount: 1, label: '1문장 쑥쑥' },
                { amount: 3, label: '3문장 한 구간' },
                { amount: 5, label: '5문장 완벽' }
              ].map(opt => (
                <button
                  key={opt.amount}
                  type="button"
                  onClick={() => setSelectedSentences(opt.amount)}
                  className={`p-2.5 rounded-2xl text-xs font-black border-2 transition-all cursor-pointer ${
                    selectedSentences === opt.amount
                      ? 'bg-emerald-600 text-white border-emerald-700 shadow-xs'
                      : 'bg-white text-slate-700 border-amber-200 hover:bg-amber-50'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cumulative Record Highlights */}
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-around text-center text-xs">
            <div>
              <div className="text-slate-400 font-medium">연속 학습</div>
              <div className="text-sm font-black text-rose-600 flex items-center justify-center gap-0.5">
                <Flame className="w-3.5 h-3.5 fill-rose-500" />
                <span>{progress.streakDays}일째</span>
              </div>
            </div>
            <div className="w-px h-6 bg-slate-200" />
            <div>
              <div className="text-slate-400 font-medium">총 획득 당근</div>
              <div className="text-sm font-black text-orange-600">
                🥕 {progress.carrots}개
              </div>
            </div>
            <div className="w-px h-6 bg-slate-200" />
            <div>
              <div className="text-slate-400 font-medium">총 마스터</div>
              <div className="text-sm font-black text-emerald-600">
                {progress.masteredSentences.length} / 15
              </div>
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-sm rounded-2xl shadow-md transition-all cursor-pointer"
          >
            {isSaved ? '✓ 목표가 저장되었어요!' : '목표 저장하고 실천하기'}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
