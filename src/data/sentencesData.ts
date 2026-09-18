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
    keyRuleTip: "'ㄺ' 받침은 뒤의 'ㄱ' 소리가 나서 [익따]로 읽어요!",
    stageId: 1,
    quizzes: [
      {
        id: 'q1-1',
        type: 'choose_word',
        question: '빈칸에 들어갈 올바른 겹받침 낱말은?',
        questionSub: '코보인이 재미있는 동화_____ 재미있게 본다.',
        options: ['책을 읽다', '책을 익다', '책을 일다'],
        correctAnswer: '책을 읽다',
        explanation: "'책을 눈으로 볼 때'는 'ㄹ'과 'ㄱ'이 함께 있는 '읽다'를 써요.",
        hint: '동화책을 읽을 때는 ㄹ과 ㄱ이 함께 있어요!'
      },
      {
        id: 'q1-2',
        type: 'choose_sound',
        question: "'책을 읽다'의 바른 소리(발음)는 무엇일까요?",
        options: ['[익따]', '[일따]', '[잉따]'],
        correctAnswer: '[익따]',
        explanation: "'읽다'는 뒤에 있는 'ㄱ' 소리를 살려 [익따]라고 소리내요!",
        hint: '과일이 익다 할 때처럼 [익따] 소리가 나요.'
      },
      {
        id: 'q1-3',
        type: 'fill_batchim',
        question: "'이__다'의 빈칸에 알맞은 겹받침을 골라보세요!",
        options: ['ㄺ', 'ㄼ', 'ㅀ', 'ㅄ'],
        correctAnswer: 'ㄺ',
        explanation: "'읽다'에는 'ㄺ' 받침이 들어갑니다.",
        hint: 'ㄹ 다음에 기역(ㄱ)이 와요!'
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
    keyRuleTip: "'ㅀ' 받침 뒤에 'ㄷ'이 오면 소리가 합쳐져 [꿀따]로 거세게 소리나요!",
    stageId: 1,
    quizzes: [
      {
        id: 'q2-1',
        type: 'choose_word',
        question: '예절 바르게 절할 때의 올바른 낱말은?',
        questionSub: '바닥에 다소곳이 무릎을 _____ 인사해요.',
        options: ['꿇다', '꿀다', '쿨다'],
        correctAnswer: '꿇다',
        explanation: "'무릎을 바닥에 대다'는 'ㅀ' 받침의 '꿇다'를 써요.",
        hint: 'ㄹ과 ㅎ이 사이좋게 들어 있어요.'
      },
      {
        id: 'q2-2',
        type: 'choose_sound',
        question: "'무릎을 꿇다'를 바르게 읽은 것은?",
        options: ['[꿀따]', '[굴따]', '[쿨다]'],
        correctAnswer: '[꿀따]',
        explanation: "'꿇다'는 발음할 때 된소리가 되어 [꿀따]로 소리나요.",
        hint: '달콤한 꿀처럼 [꿀따]!'
      },
      {
        id: 'q2-3',
        type: 'sentence_builder',
        question: '낱말 카드를 순서대로 놓아 문장을 완성해 보세요!',
        options: ['꿇다', '무릎을'],
        correctAnswer: '무릎을 꿇다',
        explanation: "'무릎을' 먼저 오고 뒤에 '꿇다'가 와요.",
        hint: '무엇을 꿇는지 먼저 써요.'
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
    keyRuleTip: "'뚫다'도 'ㅀ' 받침이에요! 발음할 때는 [뚤따]라고 소리나요.",
    stageId: 1,
    quizzes: [
      {
        id: 'q3-1',
        type: 'choose_word',
        question: '종이나 벽에 쏙 길을 낼 때 쓰는 말은?',
        questionSub: '당근밭으로 가는 비밀 구멍을 _____!',
        options: ['뚫다', '뚤다', '둘다'],
        correctAnswer: '뚫다',
        explanation: "'구멍을 뚫다'의 '뚫'에는 'ㅀ' 받침이 쓰여요.",
        hint: '쌍디귿(ㄸ) 밑에 ㄹ과 ㅎ 받침!'
      },
      {
        id: 'q3-2',
        type: 'choose_sound',
        question: "'구멍을 뚫다'의 올바른 소리는?",
        options: ['[뚤따]', '[둘따]', '[툴따]'],
        correctAnswer: '[뚤따]',
        explanation: "'뚫다'는 소리 날 때 [뚤따]로 발음해요.",
        hint: '뻥 뚫릴 때처럼 [뚤따]!'
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
    keyRuleTip: "'ㅄ' 받침은 앞의 'ㅂ' 소리가 나서 [가엽따]라고 소리나요!",
    stageId: 2,
    quizzes: [
      {
        id: 'q4-1',
        type: 'choose_word',
        question: '불쌍하고 안쓰러울 때 쓰는 올바른 말은?',
        options: ['가엾다', '가엽다', '가엿다'],
        correctAnswer: '가엾다',
        explanation: "'가엾다'는 'ㅂ'과 'ㅅ'이 함께 있는 'ㅄ' 겹받침 낱말이에요.",
        hint: 'ㅂ 밑에 ㅅ도 함께 숨어 있어요.'
      },
      {
        id: 'q4-2',
        type: 'choose_sound',
        question: "'고양이가 가엾다'의 발음으로 알맞은 것은?",
        options: ['[가엽따]', '[가엿따]', '[가열따]'],
        correctAnswer: '[가엽따]',
        explanation: "'ㅄ' 받침에서 'ㅂ' 소리가 남아 [가엽따]로 발음돼요.",
        hint: '앞에 있는 비읍(ㅂ) 소리가 나요!'
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
    keyRuleTip: "'앓다'는 'ㅀ' 받침이에요! 발음은 [알따]로 'ㄹ' 소리가 또렷하게 나요.",
    stageId: 2,
    quizzes: [
      {
        id: 'q5-1',
        type: 'choose_word',
        question: '몸이 아파서 병을 겪을 때 올바른 표현은?',
        questionSub: '코보인이 기침을 콜록콜록, 감기를 _____ 있어요.',
        options: ['앓고', '알고', '안고'],
        correctAnswer: '앓고',
        explanation: "'병을 앓다'할 때는 'ㅀ' 받침의 '앓다'를 씁니다.",
        hint: '지식을 알다(知)와 아파서 앓다를 구별해요!'
      },
      {
        id: 'q5-2',
        type: 'choose_sound',
        question: "'감기를 앓다'의 올바른 발음은?",
        options: ['[알따]', '[안따]', '[앙따]'],
        correctAnswer: '[알따]',
        explanation: "'앓다'는 소리 낼 때 [알따]로 발음합니다.",
        hint: '리을(ㄹ) 소리를 살려 [알따]!'
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
    keyRuleTip: "'ㄼ' 받침은 대부분 앞의 'ㄹ' 소리가 나서 [얄따]로 읽어요!",
    stageId: 2,
    quizzes: [
      {
        id: 'q6-1',
        type: 'choose_word',
        question: "'두껍다'의 반대말은 무엇일까요?",
        options: ['종이가 얇다', '종이가 얄다', '종이가 얍다'],
        correctAnswer: '종이가 얇다',
        explanation: "두께가 얇을 때는 'ㄹ'과 'ㅂ'이 합쳐진 'ㄼ' 받침 '얇다'를 써요.",
        hint: 'ㄹ과 ㅂ이 나란히!'
      },
      {
        id: 'q6-2',
        type: 'choose_sound',
        question: "'종이가 얇다'는 어떻게 소리 내어 읽을까요?",
        options: ['[얄따]', '[얍따]', '[얌따]'],
        correctAnswer: '[얄따]',
        explanation: "'얇다'는 앞의 'ㄹ'이 소리 나서 [얄따]로 읽어요.",
        hint: '리을(ㄹ) 소리를 내며 [얄따]!'
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
    keyRuleTip: "'싫다'의 'ㅎ'과 'ㄷ'이 만나면 거센소리 'ㅌ'이 되어 [실타]로 소리나요!",
    stageId: 3,
    quizzes: [
      {
        id: 'q7-1',
        type: 'choose_word',
        question: "'좋다'의 반대말은 무엇일까요?",
        options: ['싫다', '실다', '십다'],
        correctAnswer: '싫다',
        explanation: "'싫다'는 'ㅀ' 겹받침을 씁니다.",
        hint: '시 밑에 리을과 히읗(ㅀ)!'
      },
      {
        id: 'q7-2',
        type: 'choose_sound',
        question: "'나가기 싫다'를 소리 나는 대로 바르게 적은 것은?",
        options: ['[실타]', '[실따]', '[시타]'],
        correctAnswer: '[실타]',
        explanation: "'ㅎ'과 뒤의 'ㄷ'이 만나 'ㅌ' 소리가 나므로 [실타]가 맞아요.",
        hint: '티읕(ㅌ) 소리가 나요 [실타]!'
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
    keyRuleTip: "'굵다'는 'ㄺ' 받침이라 뒤의 'ㄱ' 소리가 나서 [국따]로 발음해요.",
    stageId: 3,
    quizzes: [
      {
        id: 'q8-1',
        type: 'choose_word',
        question: "'가늘다'의 반대말로 알맞은 것은?",
        options: ['팔뚝이 굵다', '팔뚝이 국다', '팔뚝이 굴다'],
        correctAnswer: '팔뚝이 굵다',
        explanation: "'둘레가 두텁다'는 'ㄺ' 받침의 '굵다'를 씁니다.",
        hint: '책을 읽다의 ㄺ과 같은 받침!'
      },
      {
        id: 'q8-2',
        type: 'choose_sound',
        question: "'팔뚝이 굵다'의 바른 소리는?",
        options: ['[국따]', '[굴따]', '[궁따]'],
        correctAnswer: '[국따]',
        explanation: "'굵다'는 기역 소리가 나서 [국따]로 발음해요.",
        hint: '따뜻한 국처럼 [국따]!'
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
    keyRuleTip: "'값'은 'ㅄ' 받침이에요! 뒤에 모음이 오면 [갑쓸]로 소리가 이어져요.",
    stageId: 3,
    quizzes: [
      {
        id: 'q9-1',
        type: 'choose_word',
        question: '물건의 가격을 뜻하는 알맞은 글자는?',
        questionSub: '마트에서 당근을 사고 물건_____ 치렀어요.',
        options: ['값을', '갑을', '갓을'],
        correctAnswer: '값을',
        explanation: "가격을 뜻할 때는 'ㅄ' 받침의 '값'을 써야 해요.",
        hint: '비읍(ㅂ)과 시옷(ㅅ)이 함께!'
      },
      {
        id: 'q9-2',
        type: 'choose_sound',
        question: "'물건값을'을 소리 나는 대로 바르게 읽은 것은?",
        options: ['[갑쓸]', '[가블]', '[갑틀]'],
        correctAnswer: '[갑쓸]',
        explanation: "'값'의 'ㅅ'이 된소리로 뒤로 넘어가 [갑쓸]로 읽어요.",
        hint: '시옷 소리가 쌍시옷처럼 뒤로 가요!'
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
    keyRuleTip: "'맑다'는 'ㄺ' 받침이에요! 'ㄱ' 소리가 나서 [막따]로 읽어요.",
    stageId: 4,
    quizzes: [
      {
        id: 'q10-1',
        type: 'choose_word',
        question: "'흐리다'의 반대말로 알맞은 것은?",
        options: ['하늘이 맑다', '하늘이 막다', '하늘이 말다'],
        correctAnswer: '하늘이 맑다',
        explanation: "'깨끗하고 청명하다'는 'ㄺ' 받침의 '맑다'를 써요.",
        hint: '마 밑에 ㄹ과 ㄱ!'
      },
      {
        id: 'q10-2',
        type: 'choose_sound',
        question: "'하늘이 맑다'를 올바르게 읽은 것은?",
        options: ['[막따]', '[말따]', '[망따]'],
        correctAnswer: '[막따]',
        explanation: "'맑다'는 뒤의 'ㄱ' 소리가 남아 [막따]로 발음합니다.",
        hint: '기역 소리를 살려 [막따]!'
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
    keyRuleTip: "'넓다'는 'ㄼ' 받침이에요! 'ㄹ' 소리를 살려 [널따]로 소리나요.",
    stageId: 4,
    quizzes: [
      {
        id: 'q11-1',
        type: 'choose_word',
        question: "'좁다'의 반대말로 알맞은 낱말은?",
        options: ['운동장이 넓다', '운동장이 널다', '운동장이 넙다'],
        correctAnswer: '운동장이 넓다',
        explanation: "면적이 클 때는 'ㄼ' 받침의 '넓다'를 사용해요.",
        hint: '너 밑에 리을(ㄹ)과 비읍(ㅂ)!'
      },
      {
        id: 'q11-2',
        type: 'choose_sound',
        question: "'운동장이 넓다'의 알맞은 발음은?",
        options: ['[널따]', '[넙따]', '[넘따]'],
        correctAnswer: '[널따]',
        explanation: "'넓다'는 앞의 'ㄹ' 소리가 나서 [널따]로 발음해요.",
        hint: '시원하게 [널따]!'
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
    keyRuleTip: "'짧다'는 'ㄼ' 받침이에요! 앞의 'ㄹ' 소리가 나서 [짤따]로 읽어요.",
    stageId: 4,
    quizzes: [
      {
        id: 'q12-1',
        type: 'choose_word',
        question: "'길다'의 반대말로 알맞은 낱말은?",
        options: ['바지가 짧다', '바지가 짤다', '바지가 짭다'],
        correctAnswer: '바지가 짧다',
        explanation: "'길이가 작다'는 뜻은 'ㄼ' 받침의 '짧다'를 씁니다.",
        hint: '짜 밑에 ㄹ과 ㅂ!'
      },
      {
        id: 'q12-2',
        type: 'choose_sound',
        question: "'바지가 짧다'의 바른 소리는?",
        options: ['[짤따]', '[짭따]', '[짱따]'],
        correctAnswer: '[짤따]',
        explanation: "'짧다'는 소리 날 때 [짤따]로 발음돼요.",
        hint: '리을 소리를 내어 [짤따]!'
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
    keyRuleTip: "'없다'는 'ㅄ' 받침이에요! 앞의 'ㅂ' 소리가 남아 [업따]로 발음해요.",
    stageId: 5,
    quizzes: [
      {
        id: 'q13-1',
        type: 'choose_word',
        question: "'있다'의 반대말로 알맞은 것은?",
        options: ['구슬이 없다', '구슬이 업다', '구슬이 엇다'],
        correctAnswer: '구슬이 없다',
        explanation: "'존재하지 않는다'는 'ㅄ' 받침의 '없다'를 써요.",
        hint: '어 밑에 ㅂ과 ㅅ이 함께!'
      },
      {
        id: 'q13-2',
        type: 'choose_sound',
        question: "'구슬이 없다'의 바른 발음은?",
        options: ['[업따]', '[엇따]', '[얼따]'],
        correctAnswer: '[업따]',
        explanation: "'없다'는 앞의 'ㅂ' 소리가 나서 [업따]로 소리납니다.",
        hint: '비읍 소리를 내며 [업따]!'
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
    keyRuleTip: "★초특급 주의! 'ㄼ' 받침 중에서 '밟다'는 특별하게 뒤의 'ㅂ' 소리가 나서 [밥따]로 읽어요!",
    stageId: 5,
    quizzes: [
      {
        id: 'q14-1',
        type: 'choose_word',
        question: '발로 꾹꾹 누르며 걸을 때 올바른 표기는?',
        questionSub: '공원에서 폭신폭신 잔디를 _____ 산책해요.',
        options: ['밟다', '밥다', '발다'],
        correctAnswer: '밟다',
        explanation: "'발로 누르다'는 'ㄼ' 받침의 '밟다'를 씁니다.",
        hint: '바 밑에 ㄹ과 ㅂ!'
      },
      {
        id: 'q14-2',
        type: 'choose_sound',
        question: "★시험에 꼭 나와요! '잔디를 밟다'의 올바른 발음은?",
        options: ['[밥따]', '[발따]', '[밤따]'],
        correctAnswer: '[밥따]',
        explanation: "'밟다'는 아주 특별한 규칙으로 [밥따]로 소리납니다. 꼭 기억하세요!",
        hint: '맛있는 밥 먹을 때처럼 [밥따]!'
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
    keyRuleTip: "'밝다'는 'ㄺ' 받침이에요! 뒤의 'ㄱ' 소리가 나서 [박따]로 발음해요.",
    stageId: 5,
    quizzes: [
      {
        id: 'q15-1',
        type: 'choose_word',
        question: "'어둡다'의 반대말로 알맞은 낱말은?",
        options: ['불빛이 밝다', '불빛이 박다', '불빛이 발다'],
        correctAnswer: '불빛이 밝다',
        explanation: "'환하게 빛나다'는 'ㄺ' 받침의 '밝다'를 씁니다.",
        hint: '바 밑에 ㄹ과 ㄱ!'
      },
      {
        id: 'q15-2',
        type: 'choose_sound',
        question: "'불빛이 밝다'를 바르게 소리 내어 읽은 것은?",
        options: ['[박따]', '[발따]', '[방따]'],
        correctAnswer: '[박따]',
        explanation: "'밝다'는 'ㄱ' 소리를 살려 [박따]로 발음합니다.",
        hint: '손뼉을 치듯 맑고 경쾌하게 [박따]!'
      }
    ]
  }
];

export const STAGES_DATA: Stage[] = [
  {
    id: 1,
    title: '1구간: 호기심 코보인의 하루',
    subtitle: '책을 읽다 · 무릎을 꿇다 · 구멍을 뚫다',
    sentenceIds: [1, 2, 3],
    carrotsReward: 3,
    badgeId: 'badge-stage-1',
    themeColor: 'from-amber-400 to-orange-500',
    iconName: 'BookOpen'
  },
  {
    id: 2,
    title: '2구간: 따뜻한 마음과 건강',
    subtitle: '고양이가 가엾다 · 감기를 앓다 · 종이가 얇다',
    sentenceIds: [4, 5, 6],
    carrotsReward: 3,
    badgeId: 'badge-stage-2',
    themeColor: 'from-rose-400 to-pink-500',
    iconName: 'Heart'
  },
  {
    id: 3,
    title: '3구간: 으랏차차 튼튼 코보인',
    subtitle: '나가기 싫다 · 팔뚝이 굵다 · 물건값을 치르다',
    sentenceIds: [7, 8, 9],
    carrotsReward: 3,
    badgeId: 'badge-stage-3',
    themeColor: 'from-blue-400 to-indigo-500',
    iconName: 'BicepsFlexed'
  },
  {
    id: 4,
    title: '4구간: 즐거운 우리 학교와 날씨',
    subtitle: '하늘이 맑다 · 운동장이 넓다 · 바지가 짧다',
    sentenceIds: [10, 11, 12],
    carrotsReward: 3,
    badgeId: 'badge-stage-4',
    themeColor: 'from-emerald-400 to-teal-500',
    iconName: 'Sun'
  },
  {
    id: 5,
    title: '5구간: 지혜로운 겹받침 마스터',
    subtitle: '구슬이 없다 · 잔디를 밟다 · 불빛이 밝다',
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
