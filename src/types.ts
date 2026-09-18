export type BatchimType = 'ㄺ' | 'ㄼ' | 'ㅀ' | 'ㅄ';

export interface SentenceItem {
  id: number;
  sentence: string;          // e.g. "책을 읽다"
  batchimWord: string;       // e.g. "읽다"
  batchim: BatchimType;      // e.g. "ㄺ"
  pronunciation: string;     // e.g. "[익따]"
  meaning: string;           // 초등 1학년 눈높이 쉬운 설명
  situationPrompt: string;   // 코보인의 상황 연기 설명
  animationType:
    | 'reading'
    | 'kneeling'
    | 'digging'
    | 'comforting'
    | 'sick'
    | 'thin_paper'
    | 'reluctant'
    | 'strong_arm'
    | 'paying'
    | 'clear_sky'
    | 'wide_field'
    | 'short_pants'
    | 'empty_pockets'
    | 'stepping_grass'
    | 'bright_light';
  keyRuleTip: string;        // 겹받침 규칙 팁
  stageId: number;           // 1 ~ 5
  quizzes: QuizItem[];
}

export type QuizType =
  | 'choose_word'        // 바른 낱말 고르기 (읽다 vs 익다 vs 일다)
  | 'choose_sound'       // 올바른 발음 고르기 ([익따] vs [일따])
  | 'fill_batchim'       // 빈칸 겹받침 채우기 (이__다 -> ㄺ)
  | 'sentence_builder'   // 낱말 조립하기 ([책을] [읽다])
  | 'situation_match';   // 코보인 연기 보고 맞는 문장 고르기

export interface QuizItem {
  id: string;
  type: QuizType;
  question: string;
  questionSub?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  hint: string;
}

export interface Stage {
  id: number;
  title: string;
  subtitle: string;
  sentenceIds: number[];
  carrotsReward: number;
  badgeId: string;
  themeColor: string;
  iconName: string;
}

export interface UserProgress {
  carrots: number;
  level: number;
  streakDays: number;
  lastActiveDate: string;
  completedStages: number[];
  masteredSentences: number[]; // sentence ids
  sentenceScores: Record<number, number>; // sentenceId -> correct attempts
  badgesEarned: string[];
  selectedCostume: 'default' | 'glasses' | 'crown' | 'cape';
  dailyGoal: {
    targetCarrots: number;
    earnedToday: number;
    targetSentences: number;
    studiedToday: number;
    completed: boolean;
  };
}

export interface FriendRank {
  id: string;
  name: string;
  avatar: string;
  schoolGrade: string;
  carrots: number;
  league: '새싹' | '토끼' | '은당근' | '금당근';
  streak: number;
  cheersReceived: number;
  isUser?: boolean;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: string;
}
