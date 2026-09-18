import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Medal, Flame, Heart, Send, Sparkles, Award, Users } from 'lucide-react';
import { UserProgress, FriendRank } from '../types';
import { INITIAL_FRIENDS_RANKING } from '../data/sentencesData';
import { soundManager, speakKorean } from '../utils/soundEffects';

interface SocialLeaderboardProps {
  progress: UserProgress;
  onCheerFriend?: (friendId: string) => void;
}

export const SocialLeaderboard: React.FC<SocialLeaderboardProps> = ({ progress }) => {
  const [friends, setFriends] = useState<FriendRank[]>(INITIAL_FRIENDS_RANKING);
  const [cheeredIds, setCheeredIds] = useState<Record<string, number>>({});
  const [activeLeagueTab, setActiveLeagueTab] = useState<'all' | '새싹' | '토끼' | '은당근' | '금당근'>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Compute user's league from user carrots
  const getUserLeague = (carrots: number): FriendRank['league'] => {
    if (carrots >= 26) return '금당근';
    if (carrots >= 16) return '은당근';
    if (carrots >= 6) return '토끼';
    return '새싹';
  };

  const userLeague = getUserLeague(progress.carrots);

  // Merge live user progress into leaderboard and sort by carrots descending
  const updatedLeaderboard = friends
    .map(f => {
      if (f.isUser) {
        return {
          ...f,
          carrots: progress.carrots,
          streak: progress.streakDays,
          league: userLeague,
          cheersReceived: f.cheersReceived + (cheeredIds['user'] || 0)
        };
      }
      return {
        ...f,
        cheersReceived: f.cheersReceived + (cheeredIds[f.id] || 0)
      };
    })
    .sort((a, b) => b.carrots - a.carrots);

  const userRankIndex = updatedLeaderboard.findIndex(f => f.isUser);
  const userRank = userRankIndex + 1;

  // Next League threshold
  const nextLeagueTarget =
    userLeague === '새싹'
      ? { next: '토끼 리그', need: 6 - progress.carrots }
      : userLeague === '토끼'
      ? { next: '은당근 리그', need: 16 - progress.carrots }
      : userLeague === '은당근'
      ? { next: '금당근 마스터 리그', need: 26 - progress.carrots }
      : null;

  // Cheering handler
  const handleCheer = (friend: FriendRank) => {
    soundManager.playCarrotPop();
    setCheeredIds(prev => ({
      ...prev,
      [friend.id]: (prev[friend.id] || 0) + 1
    }));

    const msg = `${friend.name} 친구에게 응원 당근 🥕을 보냈어요!`;
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const filteredList = updatedLeaderboard.filter(item => {
    if (activeLeagueTab === 'all') return true;
    return item.league === activeLeagueTab;
  });

  return (
    <div className="max-w-3xl mx-auto py-6 px-4">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-slate-900/90 text-white text-xs sm:text-sm font-bold rounded-full shadow-lg flex items-center gap-2"
          >
            <span>🎉</span>
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Banner: User's Current Live Ranking & League Progression */}
      <div className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 rounded-3xl p-5 sm:p-6 text-white shadow-lg border-2 border-yellow-200 mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black mb-2">
              <Trophy className="w-3.5 h-3.5 text-yellow-200" />
              <span>실시간 초등 1학년 겹받침 랭킹</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black">
              나의 순위: <span className="text-yellow-200 underline">{userRank}위</span> ({userLeague} 리그)
            </h2>
            <p className="text-xs sm:text-sm text-amber-100 mt-1 font-medium">
              문장 퀴즈를 풀고 당근을 모아 다음 리그로 승급해 보세요!
            </p>
          </div>

          {/* User Live Rank Snapshot */}
          <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/30 shrink-0">
            <div className="text-3xl">🐰</div>
            <div>
              <div className="text-xs text-amber-100 font-bold">보유 당근</div>
              <div className="text-xl font-black text-white flex items-center gap-1">
                <span>🥕 {progress.carrots}개</span>
              </div>
            </div>
          </div>
        </div>

        {/* League Upgrade Progress Bar */}
        {nextLeagueTarget && nextLeagueTarget.need > 0 ? (
          <div className="mt-4 pt-3 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-bold">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-yellow-200" />
              <span>
                다음 <strong className="text-yellow-200">{nextLeagueTarget.next}</strong>까지 당근{' '}
                <strong className="text-yellow-200">{nextLeagueTarget.need}개</strong> 더 필요해요!
              </span>
            </div>
            <div className="w-full sm:w-44 h-2.5 bg-black/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-300 rounded-full transition-all"
                style={{
                  width: `${Math.min(
                    100,
                    ((progress.carrots % 10) / 10) * 100
                  )}%`
                }}
              />
            </div>
          </div>
        ) : (
          <div className="mt-4 pt-3 border-t border-white/20 text-xs text-yellow-100 font-bold text-center sm:text-left">
            👑 축하합니다! 최상위 금당근 마스터 리그에 등극했습니다!
          </div>
        )}
      </div>

      {/* League Tabs */}
      <div className="bg-white rounded-2xl p-1.5 border border-amber-200 shadow-2xs mb-4 flex items-center justify-around sm:justify-start sm:gap-2">
        {(
          [
            { id: 'all', label: '전체 랭킹' },
            { id: '금당근', label: '👑 금당근 (26+)' },
            { id: '은당근', label: '🥈 은당근 (16~25)' },
            { id: '토끼', label: '🐰 토끼 (6~15)' },
            { id: '새싹', label: '🌱 새싹 (0~5)' }
          ] as const
        ).map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveLeagueTab(tab.id)}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
              activeLeagueTab === tab.id
                ? 'bg-orange-500 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Leaderboard List */}
      <div className="bg-white rounded-3xl border-2 border-amber-200/80 shadow-xs overflow-hidden">
        <div className="p-3 sm:p-4 bg-amber-50/60 border-b border-amber-100 flex items-center justify-between text-xs font-bold text-slate-500">
          <span className="w-12 text-center">순위</span>
          <span className="flex-1">친구 (초등학교)</span>
          <span className="w-20 text-center">보유 당근</span>
          <span className="w-24 text-center">응원하기</span>
        </div>

        <div className="divide-y divide-slate-100">
          {filteredList.map((friend, idx) => {
            const overallRank = updatedLeaderboard.findIndex(f => f.id === friend.id) + 1;
            const isTop3 = overallRank <= 3;
            const isMe = friend.isUser;

            return (
              <div
                key={friend.id}
                className={`p-3 sm:p-4 flex items-center justify-between transition-colors ${
                  isMe
                    ? 'bg-amber-100/70 font-bold border-l-4 border-l-orange-500'
                    : 'hover:bg-amber-50/40'
                }`}
              >
                {/* Rank number or medal */}
                <div className="w-12 flex items-center justify-center">
                  {overallRank === 1 ? (
                    <span className="text-2xl" title="1등 금메달">🥇</span>
                  ) : overallRank === 2 ? (
                    <span className="text-2xl" title="2등 은메달">🥈</span>
                  ) : overallRank === 3 ? (
                    <span className="text-2xl" title="3등 동메달">🥉</span>
                  ) : (
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 text-xs font-black flex items-center justify-center">
                      {overallRank}
                    </span>
                  )}
                </div>

                {/* Friend Info */}
                <div className="flex-1 flex items-center gap-2.5 min-w-0 pr-2">
                  <div className="text-2xl shrink-0">{friend.avatar}</div>
                  <div className="truncate">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-sm truncate ${isMe ? 'font-black text-orange-700' : 'font-bold text-slate-800'}`}>
                        {friend.name}
                      </span>
                      {isMe && (
                        <span className="px-1.5 py-0.2 bg-orange-500 text-white text-[10px] font-black rounded-md shrink-0">
                          나
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                      <span>{friend.schoolGrade}</span>
                      <span>·</span>
                      <span className="flex items-center gap-0.5 text-rose-500 font-bold">
                        <Flame className="w-3 h-3 fill-rose-500" />
                        {friend.streak}일 연속
                      </span>
                    </div>
                  </div>
                </div>

                {/* Carrots Count */}
                <div className="w-20 text-center font-black text-sm sm:text-base text-orange-600">
                  🥕 {friend.carrots}
                </div>

                {/* Cheer Action Button */}
                <div className="w-24 flex items-center justify-center">
                  {isMe ? (
                    <span className="text-[11px] text-amber-700 font-bold bg-amber-200/60 px-2 py-1 rounded-full">
                      받은 응원 {friend.cheersReceived}
                    </span>
                  ) : (
                    <button
                      onClick={() => handleCheer(friend)}
                      className="px-2.5 py-1 bg-white hover:bg-rose-50 border border-rose-200 hover:border-rose-400 text-rose-600 rounded-xl text-xs font-black shadow-2xs flex items-center gap-1 transition-all active:scale-95 cursor-pointer"
                      title="친구에게 응원 보내기"
                    >
                      <Heart className="w-3.5 h-3.5 fill-rose-500" />
                      <span>{friend.cheersReceived}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Social Motivation Footer */}
      <div className="mt-4 p-3 bg-amber-50 rounded-2xl border border-amber-200 text-center text-xs text-slate-600 font-medium">
        💡 친구들에게 응원을 보내면 친구들의 학습 의욕이 쑥쑥 올라가요! 매일 퀴즈를 풀고 1등에 도전해 보세요.
      </div>
    </div>
  );
};
