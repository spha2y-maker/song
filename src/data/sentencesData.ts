import { SentenceItem, Stage, Badge, FriendRank, UserProgress } from '../types';

export const SENTENCES_DATA: SentenceItem[] = [
  {
    id: 1,
    sentence: '책을 읽다',
    batchimWord: '읽다',
    batchim: 'ㄺ',
    pronunciation: '[익따]',
    meaning: '눈으로 글자를 보고 뜻을 이해해요.',
    situationPrompt: '코보인이 커다란 그림책을 펼치고 눈을 반짝이며 재미있게 읽고 있어요!',
    animationType: 'reading',
    keyRuleTip: "'읽다'는 'ㄹ'과 'ㄱ'이 함께 있는 'ㄺ' 겹받침을 써요!",
    stageId: 1,
    quizzes: [
      {
        id: 'q1-1',
        type: 'choose_word',
        question: '빈칸에 들어갈 올바른 맞춤법 낱말은 무엇일까요?',
        questionSub: '코보인이 재미있는 동화_____ 재미있게 본다.',
        options: ['책을 읽다', '책을 익다', '책을 일다'],
        correctAnswer: '책을 읽다',
        explanation: "'책을 눈으로 볼 때'는 'ㄹ'과 'ㄱ'이 함께 있는 '읽다'를 써요.",
        hint: '동화책을 읽을 때는 ㄹ과 ㄱ이 함께 있어요!'
      },
      {
        id: 'q1-2',
        type: 'ox_quiz',
        question: "[OX 퀴즈] 다음 문장의 맞춤법이 맞으면 O, 틀리면 X를 골라보세요!",
        questionSub: "코보인이 어제 동화책을 '익었다'.",
        options: ['O', 'X'],
        correctAnswer: 'X',
        explanation: "'익었다'는 과일이나 벼가 익을 때 쓰는 말이에요. 책을 볼 때는 '읽었다'로 써야 올바른 맞춤법이에요!",
        hint: '과일이 익는 것과 책을 읽는 것을 구분해요!'
      },
      {
        id: 'q1-3',
        type: 'fill_batchim',
        question: "'이__다'의 빈칸에 알맞은 겹받침을 골라보세요!",
        options: ['ㄺ', 'ㄼ', 'ㅀ', 'ㅄ'],
        correctAnswer: 'ㄺ',
        explanation: "'읽다'에는 'ㄹ'과 'ㄱ'이 합쳐진 'ㄺ' 받침이 들어갑니다.",
        hint: 'ㄹ 다음에 기역(ㄱ)이 와요!'
      },
      {
        id: 'q1-4',
        type: 'sentence_builder',
        question: '낱말 카드를 순서대로 놓아 올바른 문장을 완성해 보세요!',
        options: ['읽다', '책을'],
        correctAnswer: '책을 읽다',
        explanation: "'책을'이 먼저 오고 뒤에 '읽다'가 와요.",
        hint: '무엇을 읽는지 먼저 놓아요.'
      }
    ]
  },
  {
    id: 2,
    sentence: '무릎을 꿇다',
    batchimWord: '꿇다',
    batchim: 'ㅀ',
    pronunciation: '[꿀따]',
    meaning: '두 무릎을 바닥에 대고 몸을 낮춰요.',
    situationPrompt: '코보인이 두 손을 공손히 모으고 무릎을 꿇어 어른께 예절 바르게 인사해요.',
    animationType: 'kneeling',
    keyRuleTip: "'무릎을 꿇다'의 '꿇'에는 'ㅀ' 받침을 써요!",
    stageId: 1,
    quizzes: [
      {
        id: 'q2-1',
        type: 'choose_word',
        question: '예절 바르게 절할 때 쓰는 올바른 표기는?',
        questionSub: '바닥에 다소곳이 무릎을 _____ 인사해요.',
        options: ['꿇다', '꿀다', '쿨다'],
        correctAnswer: '꿇다',
        explanation: "'무릎을 바닥에 대다'는 'ㅀ' 받침의 '꿇다'를 써요.",
        hint: 'ㄹ과 ㅎ이 사이좋게 들어 있어요.'
      },
      {
        id: 'q2-2',
        type: 'ox_quiz',
        question: "[OX 퀴즈] '무릎을 꿇다'의 '꿇'에는 'ㅀ' 받침이 들어간다.",
        questionSub: '무릎을 바닥에 댈 때 쓰는 바른 글자예요.',
        options: ['O', 'X'],
        correctAnswer: 'O',
        explanation: "맞아요! '무릎을 꿇다'는 리을과 히읗이 합쳐진 'ㅀ' 겹받침을 써요.",
        hint: '꿀(Honey)과 헷갈리지 않게 ㅀ을 기억해요!'
      },
      {
        id: 'q2-3',
        type: 'find_error',
        question: '다음 중 올바른 맞춤법으로 쓴 문장은 어느 것일까요?',
        options: [
          '코보인이 공손히 무릎을 꿇었다',
          '코보인이 공손히 무릎을 꿀었다',
          '코보인이 공손히 무릎을 쿨었다'
        ],
        correctAnswer: '코보인이 공손히 무릎을 꿇었다',
        explanation: "무릎을 굽혀 절할 때는 '꿇다(꿇었다)'가 올바른 표기입니다.",
        hint: 'ㅀ 받침이 있는 문장을 찾아보세요!'
      },
      {
        id: 'q2-4',
        type: 'sentence_builder',
        question: '낱말 카드를 순서대로 놓아 바른 문장을 만들어보세요!',
        options: ['꿇다', '무릎을'],
        correctAnswer: '무릎을 꿇다',
        explanation: "'무릎을' 먼저 오고 뒤에 '꿇다'가 와요.",
        hint: '무릎을 먼저 두고 다음에 행동을 놓아요.'
      }
    ]
  },
  {
    id: 3,
    sentence: '구멍을 뚫다',
    batchimWord: '뚫다',
    batchim: 'ㅀ',
    pronunciation: '[뚤따]',
    meaning: '막힌 곳을 파거나 헤집어서 길을 내요.',
    situationPrompt: '코보인이 당근밭으로 가는 비밀 터널 구멍을 쏙 뚫고 뿅 나타났어요!',
    animationType: 'digging',
    keyRuleTip: "'구멍을 뚫다'의 '뚫'에는 'ㅀ' 받침이 쓰여요!",
    stageId: 1,
    quizzes: [
      {
        id: 'q3-1',
        type: 'choose_word',
        question: '종이나 벽에 쏙 길을 낼 때 쓰는 올바른 말은?',
        questionSub: '당근밭으로 가는 비밀 구멍을 _____!',
        options: ['뚫다', '뚤다', '둘다'],
        correctAnswer: '뚫다',
        explanation: "'구멍을 뚫다'의 '뚫'에는 'ㅀ' 받침이 쓰여요.",
        hint: '쌍디귿(ㄸ) 밑에 ㄹ과 ㅎ 받침!'
      },
      {
        id: 'q3-2',
        type: 'ox_quiz',
        question: "[OX 퀴즈] '벽에 구멍을 뚤었어요'는 올바른 맞춤법이다.",
        questionSub: '뚤었어요 vs 뚫었어요',
        options: ['O', 'X'],
        correctAnswer: 'X',
        explanation: "'뚤다'는 잘못된 표기예요! 'ㅀ' 받침을 살려 '뚫었어요'라고 써야 맞아요.",
        hint: 'ㅀ 받침이 빠지면 안 돼요!'
      },
      {
        id: 'q3-3',
        type: 'fill_batchim',
        question: "'구멍을 뚜__다'에 들어갈 알맞은 겹받침은?",
        options: ['ㅀ', 'ㄺ', 'ㄼ', 'ㅄ'],
        correctAnswer: 'ㅀ',
        explanation: "'뚫다'에는 'ㅀ' 겹받침이 들어갑니다.",
        hint: '리을(ㄹ)과 히읗(ㅎ)이 함께 들어가요.'
      },
      {
        id: 'q3-4',
        type: 'situation_match',
        question: '코보인이 비밀 터널을 만들려고 땅을 파고 있어요. 어울리는 문장은?',
        options: ['구멍을 뚫다', '구멍을 꿇다', '구멍을 앓다'],
        correctAnswer: '구멍을 뚫다',
        explanation: "막힌 곳을 파서 길을 낼 때는 '구멍을 뚫다'가 맞아요.",
        hint: '뻥 뚫어주는 표현이에요!'
      }
    ]
  },
  {
    id: 4,
    sentence: '고양이가 가엾다',
    batchimWord: '가엾다',
    batchim: 'ㅄ',
    pronunciation: '[가엽따]',
    meaning: '마음이 찡하고 불쌍해서 돌봐주고 싶어요.',
    situationPrompt: '비를 쫄딱 맞은 아기 고양이에게 코보인이 노란 우산을 씌워주며 쓰다듬어줘요.',
    animationType: 'comforting',
    keyRuleTip: "'가엾다'는 'ㅂ'과 'ㅅ'이 함께 있는 'ㅄ' 겹받침 낱말이에요!",
    stageId: 2,
    quizzes: [
      {
        id: 'q4-1',
        type: 'choose_word',
        question: '불쌍하고 안쓰러울 때 쓰는 올바른 맞춤법 낱말은?',
        options: ['고양이가 가엾다', '고양이가 가엽다', '고양이가 가엿다'],
        correctAnswer: '고양이가 가엾다',
        explanation: "'가엾다'는 'ㅂ'과 'ㅅ'이 함께 있는 'ㅄ' 겹받침 낱말이에요.",
        hint: 'ㅂ 밑에 ㅅ도 함께 숨어 있어요.'
      },
      {
        id: 'q4-2',
        type: 'ox_quiz',
        question: "[OX 퀴즈] '가엾다'의 받침에는 'ㅄ' 겹받침이 쓰인다.",
        questionSub: 'ㅂ과 ㅅ이 함께 있는지 확인해 보세요!',
        options: ['O', 'X'],
        correctAnswer: 'O',
        explanation: "맞아요! '가엾다'는 비읍과 시옷이 결합된 'ㅄ' 받침을 사용해요.",
        hint: '비읍(ㅂ)과 시옷(ㅅ) 쌍둥이 받침!'
      },
      {
        id: 'q4-3',
        type: 'fill_batchim',
        question: "'고양이가 가여__다'의 빈칸에 알맞은 겹받침은?",
        options: ['ㅄ', 'ㄼ', 'ㄺ', 'ㅀ'],
        correctAnswer: 'ㅄ',
        explanation: "'가엾다'에는 'ㅄ' 받침이 들어갑니다.",
        hint: '비읍(ㅂ)과 시옷(ㅅ)이 함께 있는 글자를 고르세요.'
      },
      {
        id: 'q4-4',
        type: 'find_error',
        question: '다음 중 올바른 맞춤법으로 쓴 문장을 골라보세요!',
        options: [
          '비를 맞은 아기 고양이가 가엾다',
          '비를 맞은 아기 고양이가 가엽다',
          '비를 맞은 아기 고양이가 가엿다'
        ],
        correctAnswer: '비를 맞은 아기 고양이가 가엾다',
        explanation: "안쓰러운 마음을 나타낼 때는 '가엾다'가 바른 표기예요.",
        hint: 'ㅄ 받침이 바르게 쓰인 문장을 찾아요!'
      }
    ]
  },
  {
    id: 5,
    sentence: '감기를 앓다',
    batchimWord: '앓다',
    batchim: 'ㅀ',
    pronunciation: '[알따]',
    meaning: '병에 걸려 몸이 쑤시고 아파요.',
    situationPrompt: '코보인이 목도리를 칭칭 감고 머리에 얼음주머니를 올린 채 에취 기침을 해요.',
    animationType: 'sick',
    keyRuleTip: "'병을 앓다'는 'ㅀ' 받침이에요! '지식을 알다'와 구분해요.",
    stageId: 2,
    quizzes: [
      {
        id: 'q5-1',
        type: 'choose_word',
        question: '몸이 아파서 병에 걸렸을 때 올바른 표기는?',
        questionSub: '코보인이 기침을 콜록콜록, 감기를 _____ 있어요.',
        options: ['앓고', '알고', '안고'],
        correctAnswer: '앓고',
        explanation: "'병을 앓다'할 때는 'ㅀ' 받침의 '앓다'를 씁니다.",
        hint: '정답을 아는 것과 아파서 앓는 것을 구별해요!'
      },
      {
        id: 'q5-2',
        type: 'ox_quiz',
        question: "[OX 퀴즈] '정답을 알다'와 '감기를 앓다'의 받침은 서로 같다.",
        questionSub: '알다 vs 앓다',
        options: ['O', 'X'],
        correctAnswer: 'X',
        explanation: "틀려요! '정답을 알다'는 'ㄹ' 받침이지만, '병을 앓다'는 'ㅀ' 받침이에요.",
        hint: '아플 때는 히읗(ㅎ)이 들어간 ㅀ 받침이에요!'
      },
      {
        id: 'q5-3',
        type: 'fill_batchim',
        question: "'감기를 아__다'에 들어갈 올바른 받침은?",
        options: ['ㅀ', 'ㄺ', 'ㄼ', 'ㅄ'],
        correctAnswer: 'ㅀ',
        explanation: "'앓다'는 'ㅀ' 겹받침을 씁니다.",
        hint: '리을과 히읗(ㅀ)이 함께 들어가요.'
      },
      {
        id: 'q5-4',
        type: 'situation_match',
        question: '코보인이 열이 나고 목도리를 두른 채 누워 있어요. 알맞은 문장은?',
        options: ['감기를 앓다', '감기를 얇다', '감기를 읽다'],
        correctAnswer: '감기를 앓다',
        explanation: "감기나 병에 걸렸을 때는 '감기를 앓다'라고 표현해요.",
        hint: '아픈 상황에 알맞은 말을 고르세요.'
      }
    ]
  },
  {
    id: 6,
    sentence: '종이가 얇다',
    batchimWord: '얇다',
    batchim: 'ㄼ',
    pronunciation: '[얄따]',
    meaning: '두께가 두껍지 않고 아주 가늘어요.',
    situationPrompt: '코보인이 손가락 사이에 얇은 종이를 들고 나풀나풀 흔들며 미소 지어요.',
    animationType: 'thin_paper',
    keyRuleTip: "'두껍다'의 반대말은 'ㄼ' 받침의 '얇다'를 써요!",
    stageId: 2,
    quizzes: [
      {
        id: 'q6-1',
        type: 'choose_word',
        question: "'두껍다'의 반대말로 올바른 표기는 무엇일까요?",
        options: ['종이가 얇다', '종이가 얄다', '종이가 얍다'],
        correctAnswer: '종이가 얇다',
        explanation: "두께가 얇을 때는 'ㄹ'과 'ㅂ'이 합쳐진 'ㄼ' 받침 '얇다'를 써요.",
        hint: 'ㄹ과 ㅂ이 나란히 있는 글자!'
      },
      {
        id: 'q6-2',
        type: 'ox_quiz',
        question: "[OX 퀴즈] '종이가 얍아서 쉽게 찢어져요'는 올바른 맞춤법이다.",
        questionSub: '얍아서 vs 얇아서',
        options: ['O', 'X'],
        correctAnswer: 'X',
        explanation: "'얍다'는 잘못된 글자예요! 'ㄼ' 받침을 사용해 '얇아서'라고 써야 맞아요.",
        hint: 'ㄹ과 ㅂ이 함께 들어가야 해요!'
      },
      {
        id: 'q6-3',
        type: 'fill_batchim',
        question: "'종이가 야__다'에 들어갈 알맞은 겹받침은?",
        options: ['ㄼ', 'ㄺ', 'ㅀ', 'ㅄ'],
        correctAnswer: 'ㄼ',
        explanation: "'얇다'에는 'ㄼ' 받침이 들어갑니다.",
        hint: '리을(ㄹ)과 비읍(ㅂ)이 합쳐진 받침!'
      },
      {
        id: 'q6-4',
        type: 'sentence_builder',
        question: '낱말 카드를 순서대로 놓아 바른 문장을 완성하세요!',
        options: ['얇다', '종이가'],
        correctAnswer: '종이가 얇다',
        explanation: "'종이가'가 먼저 오고 '얇다'가 뒤에 옵니다.",
        hint: '무엇이 얇은지 먼저 놓아요.'
      }
    ]
  },
  {
    id: 7,
    sentence: '나가기 싫다',
    batchimWord: '싫다',
    batchim: 'ㅀ',
    pronunciation: '[실타]',
    meaning: '마음에 들지 않거나 하고 싶지 않아요.',
    situationPrompt: '추운 날씨에 이불 속에 쏙 들어가서 밖으로 나가기 싫다고 고개를 도리도리하는 코보인!',
    animationType: 'reluctant',
    keyRuleTip: "'좋다'의 반대말은 'ㅀ' 받침의 '싫다'예요!",
    stageId: 3,
    quizzes: [
      {
        id: 'q7-1',
        type: 'choose_word',
        question: "'좋다'의 반대말로 올바른 맞춤법은 무엇일까요?",
        options: ['나가기 싫다', '나가기 실다', '나가기 십다'],
        correctAnswer: '나가기 싫다',
        explanation: "'마음에 들지 않다'는 'ㅀ' 겹받침을 쓰는 '싫다'가 맞아요.",
        hint: '시 밑에 리을과 히읗(ㅀ)!'
      },
      {
        id: 'q7-2',
        type: 'ox_quiz',
        question: "[OX 퀴즈] '이불 밖으로 나가기 실어요'는 바른 맞춤법이다.",
        questionSub: '실어요 vs 싫어요',
        options: ['O', 'X'],
        correctAnswer: 'X',
        explanation: "'실어요'는 짐을 차에 실을 때 쓰는 말이에요! 마음에 안 들 때는 '싫어요'가 맞아요.",
        hint: 'ㅀ 받침이 있는 싫어요를 써야 해요!'
      },
      {
        id: 'q7-3',
        type: 'fill_batchim',
        question: "'나가기 시__다'의 빈칸에 알맞은 겹받침은?",
        options: ['ㅀ', 'ㄺ', 'ㄼ', 'ㅄ'],
        correctAnswer: 'ㅀ',
        explanation: "'싫다'에는 'ㅀ' 받침이 들어갑니다.",
        hint: '좋다의 반대말은 ㅀ 받침!'
      },
      {
        id: 'q7-4',
        type: 'find_error',
        question: '다음 중 올바른 표기로 적힌 문장은?',
        options: [
          '추운 날에는 밖에 나가기 싫다',
          '추운 날에는 밖에 나가기 실다',
          '추운 날에는 밖에 나가기 십다'
        ],
        correctAnswer: '추운 날에는 밖에 나가기 싫다',
        explanation: "'싫다'가 정확한 맞춤법 표기입니다.",
        hint: 'ㅀ 받침을 찾아보세요.'
      }
    ]
  },
  {
    id: 8,
    sentence: '팔뚝이 굵다',
    batchimWord: '굵다',
    batchim: 'ㄺ',
    pronunciation: '[국따]',
    meaning: '둘레나 부피가 두껍고 튼튼해요.',
    situationPrompt: '코보인이 당근 아령을 번쩍 들고 뽀빠이처럼 불끈 힘을 주며 자랑해요!',
    animationType: 'strong_arm',
    keyRuleTip: "'가늘다'의 반대말은 'ㄺ' 받침의 '굵다'예요!",
    stageId: 3,
    quizzes: [
      {
        id: 'q8-1',
        type: 'choose_word',
        question: "'가늘다'의 반대말로 알맞은 낱말 표기는?",
        options: ['팔뚝이 굵다', '팔뚝이 국다', '팔뚝이 굴다'],
        correctAnswer: '팔뚝이 굵다',
        explanation: "'둘레가 두텁다'는 'ㄺ' 받침의 '굵다'를 씁니다.",
        hint: '책을 읽다의 ㄺ과 똑같은 받침!'
      },
      {
        id: 'q8-2',
        type: 'ox_quiz',
        question: "[OX 퀴즈] '굵다'의 받침은 '책을 읽다'의 '읽다' 받침과 같다.",
        questionSub: '굵다의 받침 vs 읽다의 받침',
        options: ['O', 'X'],
        correctAnswer: 'O',
        explanation: "맞아요! '굵다'와 '읽다'는 둘 다 'ㄹ'과 'ㄱ'이 함께 있는 'ㄺ' 받침을 사용해요.",
        hint: '둘 다 ㄺ 받침이에요!'
      },
      {
        id: 'q8-3',
        type: 'fill_batchim',
        question: "'팔뚝이 구__다'에 들어갈 알맞은 겹받침은?",
        options: ['ㄺ', 'ㄼ', 'ㅀ', 'ㅄ'],
        correctAnswer: 'ㄺ',
        explanation: "'굵다'에는 'ㄺ' 받침이 들어갑니다.",
        hint: '리을과 기역(ㄺ)!'
      },
      {
        id: 'q8-4',
        type: 'situation_match',
        question: '코보인이 무거운 당근 아령을 불끈 들고 튼튼함을 뽐내요. 알맞은 문장은?',
        options: ['팔뚝이 굵다', '팔뚝이 얇다', '팔뚝이 짧다'],
        correctAnswer: '팔뚝이 굵다',
        explanation: "튼튼하고 힘찬 팔뚝을 표현할 때는 '팔뚝이 굵다'가 어울려요.",
        hint: '힘센 코보인의 튼튼한 팔!'
      }
    ]
  },
  {
    id: 9,
    sentence: '물건값을 치르다',
    batchimWord: '값',
    batchim: 'ㅄ',
    pronunciation: '[갑쓸]',
    meaning: '물건을 사고 그에 맞는 돈을 내요.',
    situationPrompt: '코보인이 맛있는 주홍 당근을 바구니에 담고 반짝이는 동전을 가게 주인에게 건네요.',
    animationType: 'paying',
    keyRuleTip: "가격을 나타내는 '값'은 'ㅄ' 받침을 써요!",
    stageId: 3,
    quizzes: [
      {
        id: 'q9-1',
        type: 'choose_word',
        question: '물건의 가격을 뜻하는 알맞은 표기는?',
        questionSub: '마트에서 당근을 사고 물건_____ 치렀어요.',
        options: ['값을', '갑을', '갓을'],
        correctAnswer: '값을',
        explanation: "가격을 뜻할 때는 'ㅄ' 받침의 '값'을 써야 해요.",
        hint: '비읍(ㅂ)과 시옷(ㅅ)이 함께 들어 있어요.'
      },
      {
        id: 'q9-2',
        type: 'ox_quiz',
        question: "[OX 퀴즈] '사과 갑이 많이 올랐어요'는 바른 맞춤법이다.",
        questionSub: '사과 갑 vs 사과 값',
        options: ['O', 'X'],
        correctAnswer: 'X',
        explanation: "가격을 뜻할 때는 '갑'이 아니라 'ㅄ' 받침의 '값'이라고 써야 올바릅니다.",
        hint: '시옷(ㅅ)도 함께 들어가야 해요!'
      },
      {
        id: 'q9-3',
        type: 'fill_batchim',
        question: "'물건 가__을 치르다'에 들어갈 올바른 겹받침은?",
        options: ['ㅄ', 'ㄼ', 'ㄺ', 'ㅀ'],
        correctAnswer: 'ㅄ',
        explanation: "'값'에는 'ㅄ' 겹받침이 들어갑니다.",
        hint: '비읍과 시옷이 함께 있어요.'
      },
      {
        id: 'q9-4',
        type: 'find_error',
        question: '다음 중 올바른 맞춤법으로 쓴 문장은?',
        options: [
          '가게에서 맛있는 당근 값을 치렀다',
          '가게에서 맛있는 당근 갑을 치렀다',
          '가게에서 맛있는 당근 갓을 치렀다'
        ],
        correctAnswer: '가게에서 맛있는 당근 값을 치렀다',
        explanation: "가격을 지불할 때는 '값'이 올바른 맞춤법입니다.",
        hint: 'ㅄ 받침이 들어간 단어예요.'
      }
    ]
  },
  {
    id: 10,
    sentence: '하늘이 맑다',
    batchimWord: '맑다',
    batchim: 'ㄺ',
    pronunciation: '[막따]',
    meaning: '구름이 없고 푸르며 깨끗해요.',
    situationPrompt: '코보인이 잔디 언덕에서 무지개와 파란 하늘을 보며 신나게 손을 흔들어요!',
    animationType: 'clear_sky',
    keyRuleTip: "'흐리다'의 반대말은 'ㄺ' 받침의 '맑다'예요!",
    stageId: 4,
    quizzes: [
      {
        id: 'q10-1',
        type: 'choose_word',
        question: "'흐리다'의 반대말로 날씨가 깨끗하고 푸른 모양은?",
        options: ['하늘이 맑다', '하늘이 막다', '하늘이 말다'],
        correctAnswer: '하늘이 맑다',
        explanation: "'깨끗하고 청명하다'는 'ㄺ' 받침의 '맑다'를 써요.",
        hint: '마 밑에 ㄹ과 ㄱ!'
      },
      {
        id: 'q10-2',
        type: 'ox_quiz',
        question: "[OX 퀴즈] '비가 그치고 하늘이 막아졌어요'는 올바른 맞춤법이다.",
        questionSub: '막아졌어요 vs 맑아졌어요',
        options: ['O', 'X'],
        correctAnswer: 'X',
        explanation: "'막다'는 길을 가로막을 때 쓰는 말이에요! 날씨가 갤 때는 '맑아졌어요'가 맞아요.",
        hint: 'ㄹ과 ㄱ이 함께 있는 맑다를 써요!'
      },
      {
        id: 'q10-3',
        type: 'fill_batchim',
        question: "'하늘이 마__다'에 들어갈 겹받침은 무엇일까요?",
        options: ['ㄺ', 'ㄼ', 'ㅀ', 'ㅄ'],
        correctAnswer: 'ㄺ',
        explanation: "'맑다'에는 'ㄺ' 받침이 들어갑니다.",
        hint: '리을과 기역(ㄺ)!'
      },
      {
        id: 'q10-4',
        type: 'situation_match',
        question: '구름 한 점 없이 파란 하늘에 예쁜 무지개가 떴어요. 어울리는 표현은?',
        options: ['하늘이 맑다', '하늘이 굵다', '하늘이 밟다'],
        correctAnswer: '하늘이 맑다',
        explanation: "화창하고 푸른 날씨에는 '하늘이 맑다'가 올바른 표현이에요.",
        hint: '깨끗하고 화창한 날씨를 나타내요.'
      }
    ]
  },
  {
    id: 11,
    sentence: '운동장이 넓다',
    batchimWord: '넓다',
    batchim: 'ㄼ',
    pronunciation: '[널따]',
    meaning: '면적이나 공간이 아주 커요.',
    situationPrompt: '초등학교 푸른 잔디 운동장에서 코보인이 신나게 달리기 경주를 해요!',
    animationType: 'wide_field',
    keyRuleTip: "'좁다'의 반대말은 'ㄼ' 받침의 '넓다'를 써요!",
    stageId: 4,
    quizzes: [
      {
        id: 'q11-1',
        type: 'choose_word',
        question: "'좁다'의 반대말로 면적이 아주 큰 상태를 나타내는 낱말은?",
        options: ['운동장이 넓다', '운동장이 널다', '운동장이 넙다'],
        correctAnswer: '운동장이 넓다',
        explanation: "면적이 클 때는 'ㄼ' 받침의 '넓다'를 사용해요.",
        hint: '너 밑에 리을(ㄹ)과 비읍(ㅂ)!'
      },
      {
        id: 'q11-2',
        type: 'ox_quiz',
        question: "[OX 퀴즈] '우리 학교 운동장이 참 넙어요'는 올바른 맞춤법이다.",
        questionSub: '넙어요 vs 넓어요',
        options: ['O', 'X'],
        correctAnswer: 'X',
        explanation: "'넙어요'는 틀린 표기예요! 'ㄼ' 받침을 살려 '넓어요'로 써야 올바릅니다.",
        hint: 'ㄹ과 ㅂ이 함께 있어야 해요!'
      },
      {
        id: 'q11-3',
        type: 'fill_batchim',
        question: "'운동장이 너__다'에 알맞은 겹받침은?",
        options: ['ㄼ', 'ㄺ', 'ㅀ', 'ㅄ'],
        correctAnswer: 'ㄼ',
        explanation: "'넓다'에는 'ㄼ' 받침이 들어갑니다.",
        hint: '리을과 비읍이 합쳐진 받침!'
      },
      {
        id: 'q11-4',
        type: 'find_error',
        question: '다음 중 올바른 맞춤법으로 쓴 문장은?',
        options: [
          '초등학교 운동장이 아주 넓다',
          '초등학교 운동장이 아주 널다',
          '초등학교 운동장이 아주 넙다'
        ],
        correctAnswer: '초등학교 운동장이 아주 넓다',
        explanation: "'넓다'가 올바른 표기입니다.",
        hint: '너 밑에 ㄼ이 들어간 글자예요.'
      }
    ]
  },
  {
    id: 12,
    sentence: '바지가 짧다',
    batchimWord: '짧다',
    batchim: 'ㄼ',
    pronunciation: '[짤따]',
    meaning: '길이가 길지 않고 깡총해요.',
    situationPrompt: '키가 쑥 자란 코보인이 발목이 훤히 보이는 짧은 멜빵바지를 입고 쑥스러워해요.',
    animationType: 'short_pants',
    keyRuleTip: "'길다'의 반대말은 'ㄼ' 받침의 '짧다'를 써요!",
    stageId: 4,
    quizzes: [
      {
        id: 'q12-1',
        type: 'choose_word',
        question: "'길다'의 반대말로 길이가 작고 깡총한 상태는?",
        options: ['바지가 짧다', '바지가 짤다', '바지가 짭다'],
        correctAnswer: '바지가 짧다',
        explanation: "'길이가 작다'는 뜻은 'ㄼ' 받침의 '짧다'를 씁니다.",
        hint: '짜 밑에 ㄹ과 ㅂ!'
      },
      {
        id: 'q12-2',
        type: 'ox_quiz',
        question: "[OX 퀴즈] '바지가 짤아졌어요'는 올바른 맞춤법이다.",
        questionSub: '짤아졌어요 vs 짧아졌어요',
        options: ['O', 'X'],
        correctAnswer: 'X',
        explanation: "'짤다'는 잘못된 표기예요! 'ㄼ' 받침의 '짧아졌어요'가 맞습니다.",
        hint: 'ㄹ과 ㅂ이 함께 있는 짧다를 기억해요!'
      },
      {
        id: 'q12-3',
        type: 'fill_batchim',
        question: "'바지가 짜__다'에 들어갈 알맞은 겹받침은?",
        options: ['ㄼ', 'ㄺ', 'ㅀ', 'ㅄ'],
        correctAnswer: 'ㄼ',
        explanation: "'짧다'에는 'ㄼ' 겹받침이 들어갑니다.",
        hint: '운동장이 넓다의 ㄼ과 같은 받침!'
      },
      {
        id: 'q12-4',
        type: 'sentence_builder',
        question: '낱말 카드를 순서대로 놓아 바른 문장을 완성하세요!',
        options: ['짧다', '바지가'],
        correctAnswer: '바지가 짧다',
        explanation: "'바지가' 먼저 오고 뒤에 '짧다'가 와요.",
        hint: '무엇이 짧은지 먼저 놓아요.'
      }
    ]
  },
  {
    id: 13,
    sentence: '구슬이 없다',
    batchimWord: '없다',
    batchim: 'ㅄ',
    pronunciation: '[업따]',
    meaning: '가지고 있지 않거나 보이지 않아요.',
    situationPrompt: '보물 주머니를 털털 털어보았지만 반짝이는 유리구슬이 하나도 없어서 눈을 둥그렇게 뜬 코보인!',
    animationType: 'empty_pockets',
    keyRuleTip: "'있다'의 반대말은 'ㅄ' 받침의 '없다'예요!",
    stageId: 5,
    quizzes: [
      {
        id: 'q13-1',
        type: 'choose_word',
        question: "'있다'의 반대말로 존재하지 않는 것을 뜻하는 올바른 말은?",
        options: ['구슬이 없다', '구슬이 업다', '구슬이 엇다'],
        correctAnswer: '구슬이 없다',
        explanation: "'존재하지 않는다'는 'ㅄ' 받침의 '없다'를 써요.",
        hint: '어 밑에 ㅂ과 ㅅ이 함께!'
      },
      {
        id: 'q13-2',
        type: 'ox_quiz',
        question: "[OX 퀴즈] '주머니에 아무것도 업어요'는 올바른 표기이다.",
        questionSub: '업어요 vs 없어요',
        options: ['O', 'X'],
        correctAnswer: 'X',
        explanation: "'업다'는 아기를 등에 업을 때 쓰는 말이에요! 없을 때는 '없어요'가 맞아요.",
        hint: '아기를 업는 것과 구슬이 없는 것은 달라요!'
      },
      {
        id: 'q13-3',
        type: 'fill_batchim',
        question: "'구슬이 어__다'에 들어갈 올바른 겹받침은?",
        options: ['ㅄ', 'ㄼ', 'ㄺ', 'ㅀ'],
        correctAnswer: 'ㅄ',
        explanation: "'없다'에는 'ㅄ' 받침이 들어갑니다.",
        hint: '비읍과 시옷이 함께 있어요.'
      },
      {
        id: 'q13-4',
        type: 'situation_match',
        question: '코보인이 보물 주머니를 털었지만 아무것도 나오지 않아요. 어울리는 문장은?',
        options: ['구슬이 없다', '구슬이 얇다', '구슬이 굵다'],
        correctAnswer: '구슬이 없다',
        explanation: "아무것도 존재하지 않는 상황이므로 '구슬이 없다'가 맞아요.",
        hint: '텅 빈 주머니를 생각해보세요!'
      }
    ]
  },
  {
    id: 14,
    sentence: '잔디를 밟다',
    batchimWord: '밟다',
    batchim: 'ㄼ',
    pronunciation: '[밥따]',
    meaning: '발로 땅이나 바닥을 꾹꾹 눌러 디뎌요.',
    situationPrompt: '초록초록 푹신한 잔디밭 위를 코보인이 가볍게 콩콩 밟으며 나비와 놀아요.',
    animationType: 'stepping_grass',
    keyRuleTip: "발로 디딜 때는 'ㄼ' 받침의 '밟다'를 써요!",
    stageId: 5,
    quizzes: [
      {
        id: 'q14-1',
        type: 'choose_word',
        question: '발로 꾹꾹 누르며 걸을 때 올바른 맞춤법 표기는?',
        questionSub: '공원에서 폭신폭신 잔디를 _____ 산책해요.',
        options: ['밟다', '밥다', '발다'],
        correctAnswer: '밟다',
        explanation: "'발로 누르다'는 'ㄼ' 받침의 '밟다'를 씁니다.",
        hint: '바 밑에 ㄹ과 ㅂ!'
      },
      {
        id: 'q14-2',
        type: 'ox_quiz',
        question: "[OX 퀴즈] '잔디를 발으면 안 돼요'는 올바른 맞춤법이다.",
        questionSub: '발으면 vs 밟으면',
        options: ['O', 'X'],
        correctAnswer: 'X',
        explanation: "'발으면'은 틀린 표기예요! 'ㄼ' 받침을 살려 '밟으면'이라고 써야 바른 맞춤법이에요.",
        hint: 'ㄼ 받침을 꼭 기억하세요!'
      },
      {
        id: 'q14-3',
        type: 'fill_batchim',
        question: "'잔디를 바__다'에 들어갈 알맞은 겹받침은?",
        options: ['ㄼ', 'ㄺ', 'ㅀ', 'ㅄ'],
        correctAnswer: 'ㄼ',
        explanation: "'밟다'에는 'ㄼ' 받침이 들어갑니다.",
        hint: '리을과 비읍이 합쳐진 받침!'
      },
      {
        id: 'q14-4',
        type: 'find_error',
        question: '다음 중 올바른 맞춤법으로 쓴 문장을 골라보세요!',
        options: [
          '폭신폭신한 잔디를 밟다',
          '폭신폭신한 잔디를 밥다',
          '폭신폭신한 잔디를 발다'
        ],
        correctAnswer: '폭신폭신한 잔디를 밟다',
        explanation: "'밟다'가 정확한 맞춤법 표기입니다.",
        hint: '바 밑에 ㄼ이 쓰인 글자예요.'
      }
    ]
  },
  {
    id: 15,
    sentence: '불빛이 밝다',
    batchimWord: '밝다',
    batchim: 'ㄺ',
    pronunciation: '[박따]',
    meaning: '빛이 환해서 주변이 잘 보여요.',
    situationPrompt: '어두운 밤 코보인이 당근 모양의 호롱불 전등을 켜자 온 세상이 환하고 밝아져요!',
    animationType: 'bright_light',
    keyRuleTip: "'어둡다'의 반대말은 'ㄺ' 받침의 '밝다'를 써요!",
    stageId: 5,
    quizzes: [
      {
        id: 'q15-1',
        type: 'choose_word',
        question: "'어둡다'의 반대말로 알맞은 맞춤법 낱말은?",
        options: ['불빛이 밝다', '불빛이 박다', '불빛이 발다'],
        correctAnswer: '불빛이 밝다',
        explanation: "'환하게 빛나다'는 'ㄺ' 받침의 '밝다'를 씁니다.",
        hint: '바 밑에 ㄹ과 ㄱ!'
      },
      {
        id: 'q15-2',
        type: 'ox_quiz',
        question: "[OX 퀴즈] '어두운 방에 불을 켜니 환하게 박아요'는 올바른 표기이다.",
        questionSub: '박아요 vs 밝아요',
        options: ['O', 'X'],
        correctAnswer: 'X',
        explanation: "'박다'는 못을 벽에 박을 때 쓰는 말이에요! 빛이 환할 때는 '밝아요'가 맞아요.",
        hint: '못을 박는 것과 불빛이 밝은 것을 구분해요!'
      },
      {
        id: 'q15-3',
        type: 'fill_batchim',
        question: "'불빛이 바__다'에 들어갈 알맞은 겹받침은?",
        options: ['ㄺ', 'ㄼ', 'ㅀ', 'ㅄ'],
        correctAnswer: 'ㄺ',
        explanation: "'밝다'에는 'ㄺ' 받침이 들어갑니다.",
        hint: '리을과 기역(ㄺ)!'
      },
      {
        id: 'q15-4',
        type: 'situation_match',
        question: '깜깜한 밤에 코보인이 당근 호롱불을 켜자 방이 환해졌어요. 알맞은 문장은?',
        options: ['불빛이 밝다', '불빛이 꿇다', '불빛이 앓다'],
        correctAnswer: '불빛이 밝다',
        explanation: "환하게 빛나는 상황에는 '불빛이 밝다'가 올바른 표현입니다.",
        hint: '환한 빛을 나타내는 문장이에요.'
      }
    ]
  }
];

export const STAGES_DATA: Stage[] = [
  {
    id: 1,
    title: '1구간: 호기심 코보인의 하루',
    subtitle: '책을 읽다 · 무릎을 꿇다 · 구멍을 뚫다 (총 12문항)',
    sentenceIds: [1, 2, 3],
    carrotsReward: 3,
    badgeId: 'badge-stage-1',
    themeColor: 'from-amber-400 to-orange-500',
    iconName: 'BookOpen'
  },
  {
    id: 2,
    title: '2구간: 따뜻한 마음과 건강',
    subtitle: '고양이가 가엾다 · 감기를 앓다 · 종이가 얇다 (총 12문항)',
    sentenceIds: [4, 5, 6],
    carrotsReward: 3,
    badgeId: 'badge-stage-2',
    themeColor: 'from-rose-400 to-pink-500',
    iconName: 'Heart'
  },
  {
    id: 3,
    title: '3구간: 으랏차차 튼튼 코보인',
    subtitle: '나가기 싫다 · 팔뚝이 굵다 · 물건값을 치르다 (총 12문항)',
    sentenceIds: [7, 8, 9],
    carrotsReward: 3,
    badgeId: 'badge-stage-3',
    themeColor: 'from-blue-400 to-indigo-500',
    iconName: 'BicepsFlexed'
  },
  {
    id: 4,
    title: '4구간: 즐거운 우리 학교와 날씨',
    subtitle: '하늘이 맑다 · 운동장이 넓다 · 바지가 짧다 (총 12문항)',
    sentenceIds: [10, 11, 12],
    carrotsReward: 3,
    badgeId: 'badge-stage-4',
    themeColor: 'from-emerald-400 to-teal-500',
    iconName: 'Sun'
  },
  {
    id: 5,
    title: '5구간: 지혜로운 겹받침 마스터',
    subtitle: '구슬이 없다 · 잔디를 밟다 · 불빛이 밝다 (총 12문항)',
    sentenceIds: [13, 14, 15],
    carrotsReward: 5,
    badgeId: 'badge-stage-5',
    themeColor: 'from-purple-500 to-amber-500',
    iconName: 'Crown'
  }
];

export const BADGES_DATA: Badge[] = [
  {
    id: 'badge-stage-1',
    name: '호기심 탐험가',
    description: '1구간 겹받침 3문장 완전 정복!',
    icon: '🧭'
  },
  {
    id: 'badge-stage-2',
    name: '마음 따뜻이',
    description: '2구간 겹받침 3문장 완전 정복!',
    icon: '💝'
  },
  {
    id: 'badge-stage-3',
    name: '천하장사 코보인',
    description: '3구간 겹받침 3문장 완전 정복!',
    icon: '💪'
  },
  {
    id: 'badge-stage-4',
    name: '초등 1학년 모범생',
    description: '4구간 겹받침 3문장 완전 정복!',
    icon: '🎒'
  },
  {
    id: 'badge-stage-5',
    name: '황금 당근 국어왕',
    description: '15개 모든 겹받침 마스터 등극!',
    icon: '👑'
  },
  {
    id: 'badge-streak-3',
    name: '3일 연속 쑥쑥이',
    description: '3일 동안 쉬지 않고 공부했어요!',
    icon: '🔥'
  },
  {
    id: 'badge-carrot-20',
    name: '당근 부자 농부',
    description: '달콤한 당근을 20개 이상 모았어요!',
    icon: '🥕'
  }
];

export const INITIAL_USER_PROGRESS: UserProgress = {
  carrots: 5, // starting carrots
  level: 1,
  streakDays: 2,
  lastActiveDate: new Date().toISOString().split('T')[0],
  completedStages: [],
  masteredSentences: [],
  sentenceScores: {},
  badgesEarned: ['badge-streak-3'],
  selectedCostume: 'default',
  dailyGoal: {
    targetCarrots: 5,
    earnedToday: 2,
    targetSentences: 3,
    studiedToday: 1,
    completed: false
  }
};

export const INITIAL_FRIENDS_RANKING: FriendRank[] = [
  {
    id: 'f1',
    name: '김민준',
    avatar: '👦',
    schoolGrade: '햇살초 1-1',
    carrots: 28,
    league: '금당근',
    streak: 7,
    cheersReceived: 14
  },
  {
    id: 'f2',
    name: '이서연',
    avatar: '👧',
    schoolGrade: '햇살초 1-2',
    carrots: 22,
    league: '은당근',
    streak: 5,
    cheersReceived: 9
  },
  {
    id: 'user',
    name: '나 (코보인 친구)',
    avatar: '🐰',
    schoolGrade: '1학년',
    carrots: 5,
    league: '새싹',
    streak: 2,
    cheersReceived: 3,
    isUser: true
  },
  {
    id: 'f3',
    name: '박도윤',
    avatar: '👦',
    schoolGrade: '샛별초 1-3',
    carrots: 16,
    league: '은당근',
    streak: 4,
    cheersReceived: 8
  },
  {
    id: 'f4',
    name: '최지우',
    avatar: '👧',
    schoolGrade: '햇살초 1-1',
    carrots: 12,
    league: '토끼',
    streak: 3,
    cheersReceived: 6
  },
  {
    id: 'f5',
    name: '정예준',
    avatar: '👦',
    schoolGrade: '무지개초 1-2',
    carrots: 9,
    league: '토끼',
    streak: 2,
    cheersReceived: 5
  },
  {
    id: 'f6',
    name: '강하은',
    avatar: '👧',
    schoolGrade: '햇살초 1-2',
    carrots: 4,
    league: '새싹',
    streak: 1,
    cheersReceived: 2
  }
];
