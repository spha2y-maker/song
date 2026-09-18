import React from 'react';
import { motion } from 'motion/react';
import { Check, Lock, Play, Star, Sparkles, Volume2, Award } from 'lucide-react';
import { Stage, UserProgress, SentenceItem } from '../types';
import { STAGES_DATA, SENTENCES_DATA } from '../data/sentencesData';
import { KoboinCharacter } from './KoboinCharacter';
import { speakKorean } from '../utils/soundEffects';

interface DuolingoPathProps {
  progress: UserProgress;
  onSelectStage: (stage: Stage) => void;
  onSelectSentence: (sentence: SentenceItem) => void;
}

export const DuolingoPath: React.FC<DuolingoPathProps> = ({
  progress,
  onSelectStage,
  onSelectSentence,
}) => {
  // Find current active stage
  const currentStageIndex = STAGES_DATA.findIndex(
    s => !progress.completedStages.includes(s.id)
  );
  const activeStageId = currentStageIndex === -1 ? 5 : STAGES_DATA[currentStageIndex].id;

  return (
    <div className="max-w-3xl mx-auto py-6 px-4">
      {/* Motivational Banner with Koboin */}
      <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-amber-50 rounded-3xl p-4 sm:p-6 border-2 border-orange-200/80 shadow-xs mb-8 flex flex-col sm:flex-row items-center gap-4">
        <KoboinCharacter
          animationType="happy_wave"
          size="sm"
          className="shrink-0"
          speechText="안녕! 난 씩씩한 남자 아이 토끼 코보인이야!"
          onClick={() => speakKorean('안녕 친구야! 난 씩씩한 남자 아이 토끼 코보인이야! 오늘도 나랑 겹받침 신나게 달려보자!')}
        />
        <div className="flex-1 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-500 text-white text-xs font-black rounded-full mb-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>씩씩한 토끼 코보인의 응원</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-slate-800">
            {progress.completedStages.length === 5
              ? '🎉 대단해! 15개 모든 겹받침을 마스터했어!'
              : `지금은 ${activeStageId}구간 도전 중! 당근을 모아볼까?`}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            소리 내어 따라 읽고 퀴즈를 맞히면 달콤한 당근 🥕이 쏟아져요!
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <button
              onClick={() => speakKorean('책을 읽다, 무릎을 꿇다, 잔디를 밟다! 나처럼 씩씩하게 소리 내어 읽으면 진짜 쉬워! 헤헤!')}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-white hover:bg-orange-50 text-orange-700 text-xs font-bold rounded-xl border border-orange-200 shadow-2xs transition-colors cursor-pointer"
            >
              <Volume2 className="w-3.5 h-3.5 text-orange-500" />
              <span>코보인 목소리 듣기</span>
            </button>
            <span className="text-xs text-slate-500 font-medium">
              마스터한 문장: <strong className="text-orange-600 font-black">{progress.masteredSentences.length}</strong> / 15
            </span>
          </div>
        </div>
      </div>

      {/* Stage Path (Winding Roadmap) */}
      <div className="relative flex flex-col items-center">
        {STAGES_DATA.map((stage, index) => {
          const isCompleted = progress.completedStages.includes(stage.id);
          const isUnlocked =
            index === 0 || progress.completedStages.includes(STAGES_DATA[index - 1].id);
          const isCurrent = isUnlocked && !isCompleted;

          // Horizontal offset alternating like Duolingo path
          const offsetClass =
            index % 2 === 0
              ? 'sm:-translate-x-12'
              : 'sm:translate-x-12';

          const stageSentences = SENTENCES_DATA.filter(s =>
            stage.sentenceIds.includes(s.id)
          );

          return (
            <div
              key={stage.id}
              className={`w-full flex flex-col items-center mb-10 relative ${offsetClass}`}
            >
              {/* Vertical path connecting line */}
              {index < STAGES_DATA.length - 1 && (
                <div className="absolute top-24 -bottom-10 w-3 bg-amber-200 -z-10 rounded-full" />
              )}

              {/* Stage Container Card */}
              <div
                className={`w-full max-w-md rounded-3xl p-4 sm:p-5 border-2 transition-all duration-300 relative ${
                  isCurrent
                    ? 'bg-white border-orange-400 shadow-lg ring-4 ring-orange-200/60'
                    : isCompleted
                    ? 'bg-amber-50/80 border-amber-300 shadow-xs'
                    : 'bg-slate-50/90 border-slate-200 opacity-80'
                }`}
              >
                {/* Stage Header Info */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm text-white ${
                        isCompleted
                          ? 'bg-emerald-500'
                          : isCurrent
                          ? 'bg-orange-500 animate-bounce'
                          : 'bg-slate-400'
                      }`}
                    >
                      {isCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : stage.id}
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-black text-slate-800">
                        {stage.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-medium line-clamp-1">
                        {stage.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold">
                    <span>🥕</span>
                    <span>+{stage.carrotsReward}</span>
                  </div>
                </div>

                {/* Sentences pill list for this stage */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-3">
                  {stageSentences.map(sentence => {
                    const isMastered = progress.masteredSentences.includes(sentence.id);
                    return (
                      <button
                        key={sentence.id}
                        disabled={!isUnlocked}
                        onClick={() => onSelectSentence(sentence)}
                        className={`p-2 rounded-2xl border text-left transition-all cursor-pointer ${
                          isMastered
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-900 hover:bg-emerald-100'
                            : isUnlocked
                            ? 'bg-white border-amber-200 text-slate-800 hover:border-orange-400 hover:shadow-2xs'
                            : 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] font-bold mb-0.5">
                          <span className="px-1 bg-amber-200/70 text-amber-900 rounded">
                            {sentence.batchim}
                          </span>
                          {isMastered && <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />}
                        </div>
                        <div className="text-xs font-black truncate">{sentence.sentence}</div>
                        <div className="text-[10px] text-slate-500">{sentence.pronunciation}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Action Button for Stage */}
                <div className="mt-4 flex items-center justify-between pt-2 border-t border-slate-100">
                  <div className="text-xs text-slate-500">
                    {isCompleted ? (
                      <span className="text-emerald-600 font-bold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 stroke-[3]" /> 완주 성공! 언제든 복습 가능
                      </span>
                    ) : isCurrent ? (
                      <span className="text-orange-600 font-bold flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-orange-500 text-orange-500" /> 지금 도전하세요!
                      </span>
                    ) : (
                      <span className="text-slate-400 flex items-center gap-1">
                        <Lock className="w-3.5 h-3.5" /> 이전 구간을 완료하면 열려요
                      </span>
                    )}
                  </div>

                  <button
                    disabled={!isUnlocked}
                    onClick={() => onSelectStage(stage)}
                    className={`px-4 py-2 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-xs cursor-pointer ${
                      isCompleted
                        ? 'bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300'
                        : isCurrent
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white hover:scale-105'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    {isCompleted ? (
                      <>
                        <Star className="w-4 h-4 text-amber-600" />
                        <span>복습하기</span>
                      </>
                    ) : isCurrent ? (
                      <>
                        <Play className="w-4 h-4 fill-white" />
                        <span>퀴즈 시작!</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4" />
                        <span>잠김</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Interactive Koboin mascot indicator next to current active stage */}
                {isCurrent && (
                  <div className="hidden md:block absolute -right-32 top-2 z-10 pointer-events-auto">
                    <KoboinCharacter
                      animationType={stageSentences[0].animationType}
                      size="sm"
                      showSpeechBubble={true}
                      speechText="여기서 기다릴게!"
                      onClick={() => speakKorean(`${stage.title}에 어서 와! 코보인과 함께 당근을 모아보자!`)}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Final Master Victory Trophy */}
        <div className="w-full max-w-sm rounded-3xl p-6 bg-gradient-to-b from-amber-400 via-orange-400 to-amber-500 text-white text-center shadow-lg border-4 border-yellow-200 relative overflow-hidden mt-2">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-5xl mb-2"
          >
            👑
          </motion.div>
          <h3 className="text-xl font-black">황금 당근 국어왕</h3>
          <p className="text-xs text-amber-100 mt-1 font-medium">
            15문장 겹받침을 모두 익히고 친구 랭킹 1위를 차지해 보세요!
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs font-black">
            <Award className="w-4 h-4" />
            <span>최종 보상: 황금 당근 왕관 & +5 당근</span>
          </div>
        </div>
      </div>
    </div>
  );
};
