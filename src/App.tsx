import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { DuolingoPath } from './components/DuolingoPath';
import { SentenceDashboard } from './components/SentenceDashboard';
import { SocialLeaderboard } from './components/SocialLeaderboard';
import { CarrotFarm } from './components/CarrotFarm';
import { QuizModal } from './components/QuizModal';
import { GoalTrackerModal } from './components/GoalTrackerModal';
import { Stage, SentenceItem, UserProgress } from './types';
import { INITIAL_USER_PROGRESS, STAGES_DATA } from './data/sentencesData';
import { soundManager } from './utils/soundEffects';

const STORAGE_KEY = 'koboin_korean_progress_v1';

export default function App() {
  // Load progress from localStorage or use initial default
  const [progress, setProgress] = useState<UserProgress>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // fallback
        }
      }
    }
    return INITIAL_USER_PROGRESS;
  });

  const [activeTab, setActiveTab] = useState<'path' | 'dashboard' | 'ranking' | 'garden'>('path');
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Active quiz / stage modals
  const [selectedStage, setSelectedStage] = useState<Stage | null>(null);
  const [selectedSentenceFocus, setSelectedSentenceFocus] = useState<SentenceItem | null>(null);
  const [showGoalModal, setShowGoalModal] = useState(false);

  // Persist progress to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  // Sync sound engine state
  useEffect(() => {
    soundManager.enabled = soundEnabled;
  }, [soundEnabled]);

  // Handle stage completion
  const handleCompleteStage = (stageId: number, carrotsReward: number, masteredSentenceIds: number[]) => {
    setProgress(prev => {
      const newCompletedStages = prev.completedStages.includes(stageId)
        ? prev.completedStages
        : [...prev.completedStages, stageId];

      const newMastered = Array.from(new Set([...prev.masteredSentences, ...masteredSentenceIds]));

      // Check for stage badges
      const targetStage = STAGES_DATA.find(s => s.id === stageId);
      const newBadges = [...prev.badgesEarned];
      if (targetStage && !newBadges.includes(targetStage.badgeId)) {
        newBadges.push(targetStage.badgeId);
      }
      if (newMastered.length === 15 && !newBadges.includes('badge-stage-5')) {
        newBadges.push('badge-stage-5');
      }
      if (prev.carrots + carrotsReward >= 20 && !newBadges.includes('badge-carrot-20')) {
        newBadges.push('badge-carrot-20');
      }

      // Update daily goal tracking
      const newEarnedToday = prev.dailyGoal.earnedToday + carrotsReward;
      const newStudiedToday = prev.dailyGoal.studiedToday + masteredSentenceIds.length;

      return {
        ...prev,
        carrots: prev.carrots + carrotsReward,
        completedStages: newCompletedStages,
        masteredSentences: newMastered,
        badgesEarned: newBadges,
        dailyGoal: {
          ...prev.dailyGoal,
          earnedToday: newEarnedToday,
          studiedToday: newStudiedToday,
          completed: prev.dailyGoal.completed
        }
      };
    });
  };

  // Update daily goal targets
  const handleUpdateGoal = (targetCarrots: number, targetSentences: number) => {
    setProgress(prev => ({
      ...prev,
      dailyGoal: {
        ...prev.dailyGoal,
        targetCarrots,
        targetSentences
      }
    }));
  };

  // Claim daily bonus (+2 carrots)
  const handleClaimDailyBonus = () => {
    soundManager.playFanfare();
    setProgress(prev => ({
      ...prev,
      carrots: prev.carrots + 2,
      dailyGoal: {
        ...prev.dailyGoal,
        completed: true
      }
    }));
  };

  // Change costume
  const handleSelectCostume = (costume: UserProgress['selectedCostume']) => {
    setProgress(prev => ({
      ...prev,
      selectedCostume: costume
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/40 text-slate-800 font-['Noto_Sans_KR',sans-serif]">
      {/* Top Navigation & Status Bar */}
      <Header
        progress={progress}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onOpenGoalModal={() => setShowGoalModal(true)}
      />

      {/* Main Tab Content */}
      <main className="flex-1 pb-16">
        {activeTab === 'path' && (
          <DuolingoPath
            progress={progress}
            onSelectStage={stage => {
              setSelectedSentenceFocus(null);
              setSelectedStage(stage);
            }}
            onSelectSentence={sentence => {
              setSelectedSentenceFocus(sentence);
              setSelectedStage(null);
            }}
          />
        )}

        {activeTab === 'dashboard' && (
          <SentenceDashboard
            progress={progress}
            onPracticeSentence={sentence => {
              setSelectedSentenceFocus(sentence);
              setSelectedStage(null);
            }}
          />
        )}

        {activeTab === 'ranking' && (
          <SocialLeaderboard progress={progress} />
        )}

        {activeTab === 'garden' && (
          <CarrotFarm
            progress={progress}
            onSelectCostume={handleSelectCostume}
          />
        )}
      </main>

      {/* Quiz Modal Player */}
      {(selectedStage || selectedSentenceFocus) && (
        <QuizModal
          stage={selectedStage}
          sentenceFocus={selectedSentenceFocus}
          onClose={() => {
            setSelectedStage(null);
            setSelectedSentenceFocus(null);
          }}
          onCompleteStage={handleCompleteStage}
          progress={progress}
        />
      )}

      {/* Daily Goal Setup Modal */}
      {showGoalModal && (
        <GoalTrackerModal
          progress={progress}
          onClose={() => setShowGoalModal(false)}
          onUpdateGoal={handleUpdateGoal}
          onClaimDailyBonus={handleClaimDailyBonus}
        />
      )}

      {/* Footer */}
      <footer className="py-6 border-t border-amber-200/80 bg-white/70 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 font-bold text-slate-700">
            <span>🐰 토끼 코보인과 함께하는 국어 쑥쑥 모험</span>
          </div>
          <p className="text-[11px] text-slate-400">
            초등학교 1학년 국어 겹받침(ㄺ, ㄼ, ㅀ, ㅄ) 15문장 완전 정복
          </p>
        </div>
      </footer>
    </div>
  );
}
