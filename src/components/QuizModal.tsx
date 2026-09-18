import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { X, Heart, Volume2, CheckCircle2, AlertCircle, ArrowRight, Sparkles, RefreshCw, Trophy } from 'lucide-react';
import { Stage, SentenceItem, QuizItem, UserProgress } from '../types';
import { SENTENCES_DATA } from '../data/sentencesData';
import { KoboinCharacter } from './KoboinCharacter';
import { soundManager, speakKorean } from '../utils/soundEffects';

interface QuizModalProps {
  stage: Stage | null;
  sentenceFocus?: SentenceItem | null;
  onClose: () => void;
  onCompleteStage: (stageId: number, carrotsEarned: number, masteredIds: number[]) => void;
  progress: UserProgress;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  stage,
  sentenceFocus,
  onClose,
  onCompleteStage,
  progress,
}) => {
  // Determine list of sentences to study in this session
  const sentences: SentenceItem[] = sentenceFocus
    ? [sentenceFocus]
    : stage
    ? SENTENCES_DATA.filter(s => stage.sentenceIds.includes(s.id))
    : [];

  // Build sequential quiz questions list
  const allQuizzes: { sentence: SentenceItem; quiz: QuizItem }[] = [];
  sentences.forEach(s => {
    s.quizzes.forEach(q => {
      allQuizzes.push({ sentence: s, quiz: q });
    });
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedSentenceWords, setSelectedSentenceWords] = useState<string[]>([]);
  const [feedbackState, setFeedbackState] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [hearts, setHearts] = useState(3);
  const [completed, setCompleted] = useState(false);
  const [earnedCarrots, setEarnedCarrots] = useState(0);

  const currentItem = allQuizzes[currentIndex];

  // Play pronunciation on mount of question
  useEffect(() => {
    if (currentItem) {
      speakKorean(currentItem.sentence.sentence, 0.85);
      setSelectedOption(null);
      setSelectedSentenceWords([]);
      setFeedbackState('idle');
    }
  }, [currentIndex]);

  if (!currentItem && !completed) return null;

  // Handle word block selection for sentence_builder quiz
  const handleWordTileClick = (word: string) => {
    if (selectedSentenceWords.includes(word)) {
      setSelectedSentenceWords(selectedSentenceWords.filter(w => w !== word));
    } else {
      setSelectedSentenceWords([...selectedSentenceWords, word]);
    }
  };

  // Submit Answer
  const handleCheckAnswer = () => {
    if (!currentItem) return;

    let isCorrect = false;
    if (currentItem.quiz.type === 'sentence_builder') {
      const combined = selectedSentenceWords.join(' ');
      isCorrect = combined === currentItem.quiz.correctAnswer;
    } else {
      isCorrect = selectedOption === currentItem.quiz.correctAnswer;
    }

    if (isCorrect) {
      soundManager.playCorrect();
      setFeedbackState('correct');
    } else {
      soundManager.playTryAgain();
      setFeedbackState('wrong');
      setHearts(prev => Math.max(0, prev - 1));
    }
  };

  // Move to next question or finish
  const handleContinue = () => {
    if (feedbackState === 'wrong' && hearts === 0) {
      // Out of hearts, reset hearts and let them try again gently
      setHearts(3);
      setFeedbackState('idle');
      setSelectedOption(null);
      setSelectedSentenceWords([]);
      return;
    }

    if (currentIndex + 1 < allQuizzes.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Stage / Session completed!
      const reward = stage ? stage.carrotsReward : 1;
      setEarnedCarrots(reward);
      setCompleted(true);
      soundManager.playFanfare();

      // Trigger Confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      const masteredIds = sentences.map(s => s.id);
      if (stage) {
        onCompleteStage(stage.id, reward, masteredIds);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border-4 border-amber-300 overflow-hidden my-auto">
        {/* Top Bar: Progress & Hearts */}
        <div className="px-4 sm:px-6 py-3.5 bg-amber-50 border-b border-amber-200 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-amber-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            title="닫기"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Progress Bar */}
          <div className="flex-1 max-w-xs h-3 bg-amber-200/80 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 rounded-full transition-all duration-300"
              style={{
                width: `${((currentIndex + (completed ? 1 : 0)) / allQuizzes.length) * 100}%`
              }}
            />
          </div>

          {/* Hearts Life counter */}
          <div className="flex items-center gap-1">
            {[1, 2, 3].map(h => (
              <Heart
                key={h}
                className={`w-5 h-5 transition-transform ${
                  h <= hearts
                    ? 'fill-rose-500 text-rose-500 scale-100'
                    : 'fill-slate-200 text-slate-300 scale-90'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Modal Content */}
        {!completed && currentItem ? (
          <div className="p-4 sm:p-6 flex flex-col items-center">
            {/* Stage / Sentence Indicator */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-black rounded-lg">
                문장 {currentItem.sentence.id} / 15
              </span>
              <span className="px-2.5 py-1 bg-orange-100 text-orange-700 text-xs font-black rounded-lg">
                겹받침: {currentItem.sentence.batchim}
              </span>
            </div>

            {/* Koboin Actor Acting Out The Scene */}
            <div className="w-full bg-gradient-to-b from-amber-50 to-orange-50/50 rounded-2xl p-4 border border-amber-200/80 flex flex-col items-center relative mb-4">
              <KoboinCharacter
                animationType={currentItem.sentence.animationType}
                size="md"
                className="cursor-pointer"
                onClick={() => speakKorean(currentItem.sentence.sentence)}
              />

              {/* Target Sentence Card */}
              <div className="mt-2 text-center">
                <div className="inline-flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-wide">
                    {currentItem.sentence.sentence}
                  </h3>
                  <button
                    onClick={() => speakKorean(currentItem.sentence.sentence + ' 발음은 ' + currentItem.sentence.pronunciation)}
                    className="p-1.5 rounded-full bg-white hover:bg-orange-100 text-orange-600 border border-orange-200 shadow-2xs transition-colors cursor-pointer"
                    title="소리 듣기"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-xs text-orange-600 font-bold mt-0.5">
                  바른 소리: <span className="font-extrabold">{currentItem.sentence.pronunciation}</span>
                </div>
                <p className="text-xs text-slate-600 mt-1 max-w-md font-medium">
                  {currentItem.sentence.situationPrompt}
                </p>
              </div>
            </div>

            {/* Question Box */}
            <div className="w-full text-center mb-4">
              <h4 className="text-base sm:text-lg font-black text-slate-800">
                {currentItem.quiz.question}
              </h4>
              {currentItem.quiz.questionSub && (
                <p className="text-xs sm:text-sm text-slate-600 mt-1 font-semibold">
                  "{currentItem.quiz.questionSub}"
                </p>
              )}
            </div>

            {/* Options Interactive Area */}
            {currentItem.quiz.type === 'sentence_builder' ? (
              /* Sentence Word Tile Assembler */
              <div className="w-full flex flex-col items-center gap-4 mb-4">
                {/* Result Drop Area */}
                <div className="min-h-12 w-full max-w-md p-2 bg-amber-50/60 rounded-2xl border-2 border-dashed border-amber-300 flex items-center justify-center gap-2 flex-wrap">
                  {selectedSentenceWords.length === 0 ? (
                    <span className="text-xs text-slate-400 font-medium">
                      아래 낱말 카드를 순서대로 눌러보세요!
                    </span>
                  ) : (
                    selectedSentenceWords.map((word, i) => (
                      <button
                        key={i}
                        onClick={() => handleWordTileClick(word)}
                        className="px-4 py-2 bg-orange-500 text-white font-black text-sm rounded-xl shadow-xs hover:bg-orange-600 cursor-pointer"
                      >
                        {word} ✕
                      </button>
                    ))
                  )}
                </div>

                {/* Word choices */}
                <div className="flex gap-2 flex-wrap justify-center">
                  {currentItem.quiz.options.map((word, i) => {
                    const isSelected = selectedSentenceWords.includes(word);
                    return (
                      <button
                        key={i}
                        disabled={isSelected || feedbackState !== 'idle'}
                        onClick={() => handleWordTileClick(word)}
                        className={`px-5 py-3 rounded-2xl text-sm font-black border-2 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed'
                            : 'bg-white text-slate-800 border-amber-200 hover:border-orange-400 hover:bg-amber-50/50 shadow-xs active:scale-95'
                        }`}
                      >
                        {word}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* Multiple Choice Option Buttons */
              <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-4">
                {currentItem.quiz.options.map((option, idx) => {
                  const isSelected = selectedOption === option;
                  return (
                    <button
                      key={idx}
                      disabled={feedbackState !== 'idle'}
                      onClick={() => setSelectedOption(option)}
                      className={`p-3.5 rounded-2xl border-2 font-black text-sm sm:text-base transition-all text-center cursor-pointer ${
                        isSelected
                          ? 'bg-orange-500 text-white border-orange-600 shadow-md scale-102'
                          : 'bg-white text-slate-800 border-amber-200 hover:border-orange-400 hover:bg-amber-50/50 shadow-xs'
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Check Button (when feedback is idle) */}
            {feedbackState === 'idle' && (
              <button
                disabled={
                  currentItem.quiz.type === 'sentence_builder'
                    ? selectedSentenceWords.length === 0
                    : selectedOption === null
                }
                onClick={handleCheckAnswer}
                className="w-full max-w-sm py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 disabled:from-slate-200 disabled:to-slate-300 disabled:text-slate-400 text-white font-black text-sm sm:text-base rounded-2xl shadow-md transition-all cursor-pointer disabled:cursor-not-allowed"
              >
                정답 확인하기!
              </button>
            )}

            {/* Duolingo-style Cheerful Bottom Feedback Drawer */}
            <AnimatePresence>
              {feedbackState !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  className={`w-full rounded-2xl p-4 mt-3 border-2 flex flex-col sm:flex-row items-center justify-between gap-3 ${
                    feedbackState === 'correct'
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                      : 'bg-rose-50 border-rose-300 text-rose-950'
                  }`}
                >
                  <div className="flex items-start gap-3 text-center sm:text-left">
                    {feedbackState === 'correct' ? (
                      <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0 hidden sm:block" />
                    ) : (
                      <AlertCircle className="w-8 h-8 text-rose-500 shrink-0 hidden sm:block" />
                    )}
                    <div>
                      <div className="flex items-center justify-center sm:justify-start gap-1 font-black text-base">
                        {feedbackState === 'correct' ? (
                          <>
                            <Sparkles className="w-4 h-4 text-emerald-600" />
                            <span>정답이에요! 참 잘했어요! 🎉</span>
                          </>
                        ) : (
                          <span>아쉬워요! 한 번 더 확인해봐요.</span>
                        )}
                      </div>
                      <p className="text-xs font-semibold mt-0.5 opacity-90">
                        {feedbackState === 'correct'
                          ? currentItem.quiz.explanation
                          : currentItem.quiz.hint}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleContinue}
                    className={`px-6 py-3 font-black text-sm rounded-2xl shadow-md flex items-center gap-1.5 transition-transform hover:scale-105 cursor-pointer shrink-0 ${
                      feedbackState === 'correct'
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                        : 'bg-rose-600 hover:bg-rose-700 text-white'
                    }`}
                  >
                    <span>{currentIndex + 1 === allQuizzes.length ? '결과 보기' : '다음 문제'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          /* Stage Victory Completion View */
          <div className="p-6 sm:p-8 flex flex-col items-center text-center">
            <KoboinCharacter
              animationType="celebrate"
              size="lg"
              showSpeechBubble={true}
              speechText="대단해! 완주를 축하해!"
            />

            <h3 className="text-2xl font-black text-slate-900 mt-2">
              🎉 겹받침 미션 완주 성공!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
              코보인과 함께 겹받침 문장을 멋지게 익혔어요!
            </p>

            {/* Reward Box */}
            <div className="w-full max-w-sm my-5 p-4 bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 rounded-3xl border-2 border-orange-300 shadow-sm flex items-center justify-around">
              <div className="text-center">
                <div className="text-3xl animate-bounce">🥕</div>
                <div className="text-xs text-slate-500 font-bold mt-1">획득한 당근</div>
                <div className="text-lg font-black text-orange-600">+{earnedCarrots}개</div>
              </div>
              <div className="w-px h-10 bg-orange-300" />
              <div className="text-center">
                <div className="text-3xl">🏆</div>
                <div className="text-xs text-slate-500 font-bold mt-1">현재 내 당근</div>
                <div className="text-lg font-black text-amber-700">
                  {progress.carrots + earnedCarrots}개
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-500 max-w-xs mb-5 font-medium">
              당근을 많이 모아서 친구 랭킹 1위와 새로운 모자를 열어보세요!
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-base rounded-2xl shadow-lg transition-transform hover:scale-105 cursor-pointer"
            >
              학습 완료하고 계속하기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
