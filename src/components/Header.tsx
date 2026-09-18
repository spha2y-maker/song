import React from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX, Flame, Target, Trophy, BookOpen, Sparkles } from 'lucide-react';
import { UserProgress } from '../types';

interface HeaderProps {
  progress: UserProgress;
  activeTab: 'path' | 'dashboard' | 'ranking' | 'garden';
  setActiveTab: (tab: 'path' | 'dashboard' | 'ranking' | 'garden') => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
  onOpenGoalModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  progress,
  activeTab,
  setActiveTab,
  soundEnabled,
  setSoundEnabled,
  onOpenGoalModal,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b-2 border-amber-200/80 shadow-xs">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between gap-2">
        {/* Brand & Character Title */}
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setActiveTab('path')}
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-400 p-0.5 shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center">
            <span className="text-xl select-none">🐰</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-base sm:text-lg font-black text-slate-800 tracking-tight">
                코보인과 겹받침
              </h1>
              <span className="px-1.5 py-0.5 bg-orange-100 text-orange-700 text-[11px] font-bold rounded-md">
                초등 1학년
              </span>
            </div>
            <p className="hidden sm:block text-[11px] text-slate-500 font-medium">
              15문장 쏙쏙 익히기
            </p>
          </div>
        </div>

        {/* Status Indicators: Streak, Carrots, Goal */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Daily Goal Quick Tracker */}
          <button
            id="daily-goal-button"
            onClick={onOpenGoalModal}
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-full text-xs font-bold text-amber-900 transition-colors cursor-pointer"
            title="오늘의 학습 목표 보기"
          >
            <Target className="w-3.5 h-3.5 text-amber-600" />
            <span className="hidden md:inline">오늘 목표</span>
            <span className="text-amber-700 font-black">
              {progress.dailyGoal.earnedToday}/{progress.dailyGoal.targetCarrots}
            </span>
            <div className="w-10 h-1.5 bg-amber-200 rounded-full overflow-hidden ml-0.5 hidden sm:block">
              <div
                className="h-full bg-amber-500 rounded-full transition-all duration-500"
                style={{
                  width: `${Math.min(
                    100,
                    (progress.dailyGoal.earnedToday / progress.dailyGoal.targetCarrots) * 100
                  )}%`
                }}
              />
            </div>
          </button>

          {/* Streak Days */}
          <div
            className="flex items-center gap-1 px-2.5 py-1.5 bg-rose-50 border border-rose-200/80 rounded-full text-xs font-bold text-rose-600 shadow-2xs"
            title="연속 학습 스트릭"
          >
            <Flame className="w-4 h-4 fill-rose-500 text-rose-500 animate-pulse" />
            <span>{progress.streakDays}일</span>
          </div>

          {/* Carrot Currency Counter */}
          <motion.div
            key={progress.carrots}
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full text-xs sm:text-sm font-black shadow-xs"
            title="획득한 당근"
          >
            <span className="text-sm sm:text-base">🥕</span>
            <span>{progress.carrots}</span>
          </motion.div>

          {/* Audio Toggle */}
          <button
            id="sound-toggle-button"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-600 border border-slate-200 transition-colors cursor-pointer"
            title={soundEnabled ? '소리 켜짐' : '소리 꺼짐'}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-emerald-600" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-amber-50/70 border-t border-amber-100 px-3 sm:px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-around sm:justify-start sm:gap-3 py-1">
          <button
            id="nav-path-tab"
            onClick={() => setActiveTab('path')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'path'
                ? 'bg-white text-orange-600 shadow-xs border border-orange-200'
                : 'text-slate-600 hover:text-orange-600 hover:bg-white/50'
            }`}
          >
            <span className="text-base">🗺️</span>
            <span>학습 모험길</span>
          </button>

          <button
            id="nav-dashboard-tab"
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'dashboard'
                ? 'bg-white text-orange-600 shadow-xs border border-orange-200'
                : 'text-slate-600 hover:text-orange-600 hover:bg-white/50'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>15문장 대시보드</span>
          </button>

          <button
            id="nav-ranking-tab"
            onClick={() => setActiveTab('ranking')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'ranking'
                ? 'bg-white text-orange-600 shadow-xs border border-orange-200'
                : 'text-slate-600 hover:text-orange-600 hover:bg-white/50'
            }`}
          >
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>친구 랭킹</span>
          </button>

          <button
            id="nav-garden-tab"
            onClick={() => setActiveTab('garden')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'garden'
                ? 'bg-white text-orange-600 shadow-xs border border-orange-200'
                : 'text-slate-600 hover:text-orange-600 hover:bg-white/50'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>당근 밭 & 배지</span>
          </button>
        </div>
      </nav>
    </header>
  );
};
