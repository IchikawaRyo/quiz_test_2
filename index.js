const quiz = [
    {
        question: 'バナナにある黒い斑点',
        answer: [
            'シュガーエリア',
            'スイートエリア',
            'シュガースポット',
            'スイートスポット'
        ],
        correct: 'シュガースポット',
        reason: '実はポリフェノールや食物繊維が豊富！'
    }, 
    {
        question: 'みかんの皮にある白い繊維',
        answer: [
            'アルベド',
            'ファイバー',
            'オレンジフィード',
            'ウラルバラ'
        ],
        correct: 'アルベド',
        reason: 'この穴は狙っているわけではなく、なぜかできるらしい'
     },
     {
        question: 'チーズに空いている穴',
        answer: [
            'チーズホール',
            'チーズアイ',
            'チーズピット',
            'チーズサークル'
        ],
        correct: 'チーズアイ',
        reason: '手作業で行われているらしい！'
      },
      {
        question: '靴下を止めている金具',
        answer: [
            'ソックスホールド',
            'ソックスピン',
            'ソクパス',
            'ソクピン'
        ],
        correct: 'ソクパス',
        reason: '今はコストがかかり珍しくなっている'  
      },
      {
        question: '本についているしおりになる紐',
        answer: [
            'スピン',
            'ステイコード',
            'リードテープ',
            'アペシル'
        ],
        correct: 'スピン',
        reason: 'これあるのに使わない人いがち'
      },
      {
        question: 'お会計に使われる青いケース',
        answer: [
            'カルトン',
            'カルロス',
            'カルピン',
            'カルスト'
        ],
        correct: 'カルトン',
        reason: '年間29億ピースも使われているらしい！'
    },
    {
        question: '食パン袋を閉じるやつ',
        answer: [
            'バッククロージャー',
            'ブレッドクロージャー',
            'バッグクロージャー',
            'ブレットクロージャー'
        ],
        correct: 'バッグクロージャー',
        reason: 'よく日常で使われる！'
    },
    {
        question: '弓道の的の真ん中',
        answer: [
            '急所',
            '原点',
            '焦点',
            '図星'
        ],
        correct: '図星',
        reason: 'Thank You!'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

//何番目のボタンかを指定
const $button = document.getElementsByTagName('button');
const ButtonLength = $button.length;

//クイズの問題、選択肢を表示
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let ButtonIndex = 0;
    while(ButtonIndex < ButtonLength) {
    $button[ButtonIndex].textContent = quiz[quizIndex].answer[ButtonIndex];
    ButtonIndex++;
    }
};
setupQuiz();

//問題の正誤判定
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        alert('正解！');
        score++;
    } else {
        alert('残念！不正解！');
    }

    document.getElementById('reason').textContent = quiz[quizIndex].reason;

    quizIndex++;

    if(quizIndex < quizLength){
        setupQuiz();
    } else {
        alert('クイズ終了！正解数は' + quizLength + '問中' + score + '問です！');
    }
};

//クリックした時
let handlerIndex = 0;
while (handlerIndex < ButtonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
};



