import React from 'react';
import { motion } from 'motion/react';
import { Award, Sparkles, Shirt, Check, Lock, Heart } from 'lucide-react';
import { UserProgress } from '../types';
import { BADGES_DATA } from '../data/sentencesData';
import { KoboinCharacter } from './KoboinCharacter';
import { soundManager, speakKorean } from '../utils/soundEffects';

interface CarrotFarmProps {
  progress: UserProgress;
  onSelectCostume: (costume: UserProgress['selectedCostume']) => void;
}

export const CarrotFarm: React.FC<CarrotFarmProps> = ({ progress, onSelectCostume }) => {
  // Available costumes unlock rules
  const costumes = [
    { id: 'default', name: '기본 코보인', req: 0, icon: '🐰', desc: '귀엽고 다정한 토끼 코보인' },
    { id: 'glasses', name: '책벌레 안경', req: 6, icon: '👓', desc: '당근 6개 모으면 오픈! 책을 잘 읽어요' },
    { id: 'cape', name: '용감한 망토', req: 15, icon: '🦸', desc: '당근 15개 모으면 오픈! 슈퍼 토끼!' },
    { id: 'crown', name: '황금 왕관', req: 25, icon: '👑', desc: '당근 25개 마스터 전용 왕관!' }
  ] as const;

  // Number of carrot sprouts to render in the visual garden (up to 25)
  const sproutsCount = Math.min(30, progress.carrots);

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 space-y-6">
      {/* Garden Header */}
      <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 rounded-3xl p-6 text-white shadow-md border-2 border-emerald-300 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black mb-2">
            <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
            <span>코보인의 무럭무럭 당근 텃밭</span>
          </div>
          <h2 className="text-2xl font-black">
            내가 키운 당근: 총 <span className="text-yellow-200 underline">{progress.carrots}개</span>
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100 mt-1 font-medium max-w-md">
            문장 퀴즈를 풀고 단계를 정복할 때마다 달콤한 당근이 텃밭에 쏙쏙 자라나요!
          </p>
        </div>

        {/* Mascot in Garden */}
        <div className="bg-white/10 backdrop-blur-md p-3 rounded-3xl border border-white/20">
          <KoboinCharacter
            costume={progress.selectedCostume}
            animationType="celebrate"
            size="md"
            showSpeechBubble={true}
            speechText="내 당근 밭이야! 멋지지?"
            onClick={() => {
              soundManager.playCarrotPop();
              speakKorean('당근을 많이 모아서 코보인에게 예쁜 모자와 망토를 입혀줘!');
            }}
          />
        </div>
      </div>

      {/* Visual Interactive Carrot Garden Plot */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-amber-200 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base sm:text-lg font-black text-slate-800 flex items-center gap-2">
              <span>🌱 실시간 당근 수확 밭</span>
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              당근을 톡톡 누르면 맛있게 냠냠 소리가 나요!
            </p>
          </div>
          <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-black rounded-full">
            당근 {progress.carrots}포기 심어짐
          </span>
        </div>

        {/* Soil Bed */}
        <div className="bg-gradient-to-b from-amber-900 to-amber-950 p-4 sm:p-6 rounded-2xl border-4 border-amber-800 shadow-inner min-h-36 flex flex-wrap items-center justify-center gap-3">
          {Array.from({ length: Math.max(1, sproutsCount) }).map((_, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                soundManager.playCarrotPop();
                speakKorean('아삭아삭 맛있는 당근!');
              }}
              className="text-2xl sm:text-3xl p-1 bg-amber-800/60 rounded-xl hover:bg-amber-700/80 transition-colors cursor-pointer"
              title="맛있는 당근"
            >
              🥕
            </motion.button>
          ))}
          {sproutsCount === 0 && (
            <div className="text-xs text-amber-200 font-bold">
              아직 당근이 없어요. 퀴즈를 풀고 첫 당근을 심어보세요!
            </div>
          )}
        </div>
      </div>

      {/* Koboin Costume Shop & Dressing Room */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-amber-200 shadow-xs">
        <div className="flex items-center gap-2 mb-4">
          <Shirt className="w-5 h-5 text-orange-500" />
          <div>
            <h3 className="text-base sm:text-lg font-black text-slate-800">
              코보인 드레스룸 (당근 보상 교환)
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              당근을 일정 수량 모으면 코보인의 멋진 아이템이 열려요!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {costumes.map(c => {
            const isUnlocked = progress.carrots >= c.req;
            const isSelected = progress.selectedCostume === c.id;

            return (
              <div
                key={c.id}
                className={`p-4 rounded-2xl border-2 transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-amber-50 border-orange-500 ring-2 ring-orange-200'
                    : isUnlocked
                    ? 'bg-white border-slate-200 hover:border-amber-300'
                    : 'bg-slate-50 border-slate-200 opacity-60'
                }`}
              >
                <div>
                  <div className="text-3xl mb-1">{c.icon}</div>
                  <div className="font-black text-sm text-slate-800">{c.name}</div>
                  <p className="text-[11px] text-slate-500 mt-0.5">{c.desc}</p>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-100">
                  {isSelected ? (
                    <span className="inline-flex items-center gap-1 text-xs font-black text-orange-600">
                      <Check className="w-3.5 h-3.5 stroke-[3]" /> 착용 중
                    </span>
                  ) : isUnlocked ? (
                    <button
                      onClick={() => {
                        onSelectCostume(c.id as UserProgress['selectedCostume']);
                        soundManager.playCorrect();
                      }}
                      className="w-full py-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-black rounded-xl transition-colors cursor-pointer"
                    >
                      착용하기
                    </button>
                  ) : (
                    <span className="text-[11px] text-slate-400 font-bold flex items-center gap-1">
                      <Lock className="w-3 h-3" /> 당근 {c.req}개 필요
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Badges Showcase (업적 배지 전시관) */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-amber-200 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-800">
                나의 겹받침 업적 배지
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                각 구간을 완주하거나 특별한 미션을 달성하면 수여돼요!
              </p>
            </div>
          </div>
          <span className="text-xs font-black text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
            {progress.badgesEarned.length} / {BADGES_DATA.length} 획득
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {BADGES_DATA.map(badge => {
            const isEarned = progress.badgesEarned.includes(badge.id);

            return (
              <div
                key={badge.id}
                className={`p-4 rounded-2xl border-2 transition-all flex items-start gap-3 ${
                  isEarned
                    ? 'bg-gradient-to-br from-amber-50 to-orange-50/40 border-amber-300 shadow-2xs'
                    : 'bg-slate-50 border-slate-200 opacity-50'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 ${
                    isEarned ? 'bg-white shadow-xs border border-amber-200' : 'bg-slate-200'
                  }`}
                >
                  {isEarned ? badge.icon : '🔒'}
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-800">
                    {badge.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {badge.description}
                  </p>
                  {isEarned && (
                    <span className="inline-flex items-center gap-0.5 text-[10px] font-black text-emerald-600 mt-1">
                      <Check className="w-3 h-3 stroke-[3]" /> 달성 완료
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
