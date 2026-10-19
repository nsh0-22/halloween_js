const questions = [
    {
        number: `質問1` ,
        title: '友達みんなとハロウィンパーティを開催することに！今年はあなたが主催の年ですが、どんな風に準備を進める？' ,
        answers: [
            `A. これまでにない形の形式を考えたり、サプライズを用意してワクワクするような回にしよう！` ,
            `B. SNSなどで参考情報を集めたりみんなに意見を聞いたりしながら、みんなが楽しめる回にしよう！` ,
            `C. 過去の主催者に話を聞いて慎重に準備をして、なるべくこれまでの雰囲気を崩さない回にしよう！`
        ] ,
        scores: [
            { openness: 2 } ,
            { openness: 1 } ,
            { openness: 0, conscientiousness: 1 }
        ]
    } ,
    {
        number: `質問2` ,
        title: 'ハロウィンの仮装で見たことない衣装を着ている人を発見！' ,
        answers: [
            `A. 自分も着てみたい！次回はこれにしよう！` ,
            `B. 何をモチーフにしているんだろう？聞いてみようかな！` ,
            `C. みんなそれぞれの個性があっていいなあ！`
        ] ,
        scores: [
            { openness: 2 } ,
            { openness: 2 } ,
            { openness: 0, agreeableness: 1 }
        ]
    } ,
    {
        number: `質問3` ,
        title: '自分の大好きなお菓子の新作がセール中という情報をキャッチ！' ,
        answers: [
            `A. 新作なんて気になる！せっかくのセールだし、今日くらいは気にせず買っちゃおう！` ,
            `B. 節約すると決めたから、今回は我慢して帰ろう！` ,
            `C. 予算内で買えるか確認して、余裕があれば買って帰ろう！`
        ] ,
        scores: [
            { openness: 1 } ,
            { conscientiousness: 2 } ,
            { conscientiousness: 2 }
        ]
    } ,
    {
        number: `質問4` ,
        title: '今夜は友人たちとハロウィンパーティ！でも急な仕事を対応しなくちゃ・・' ,
        answers: [
            `A. 友人には申し訳ないけど仕事なのできちんと対応を終わらせてから遅れて合流しよう・・！` ,
            `B. せっかくなら対応を終えたらオフィスで一緒に頑張ったメンバーとも乾杯しちゃおう！` ,
            `C. 仕事が残っていると気になってパーティーを楽しめなさそう…。少しでも早く終わらせて、すっきりした気持ちで参加しよう！`
        ] ,
        scores: [
            { conscientiousness: 2 } ,
            { extraversion: 1 } ,
            { neuroticism: 1 }
        ]
    } ,
    {
        number: `質問5` ,
        title: '世間はハロウィンムード全開！至る所にハロウィン衣装の人がいっぱいいるよ' ,
        answers: [
            `A. 家にいてもつまらないので、友達を大勢誘って街に繰り出したい！` ,
            `B. せっかくなら楽しい気分になりたいので、今日会えそうな友達に声をかけて、都合が合えば一緒に出かけようかな！` ,
            `C. 人混みやトラブルが心配だし、家でSNSを見ながら楽しむくらいが安心かな！`
        ] ,
        scores: [
            { extraversion: 2 } ,
            { extraversion: 1, agreeableness: 1 } ,
            { neuroticism: 1 }
        ]
    } ,
    {
        number: `質問6` ,
        title: '今日は会社で業務終了後にハロウィンの催し物があるみたい！' ,
        answers: [
            `A. 普段しゃべらない部署の人とも交流できるチャンス！積極的に話しかけにいこう！` ,
            `B. 楽しそうだけど、仕事で疲れてるからちょっと顔を出す程度にして帰ろう` ,
            `C. 参加したいけど、職場の人にどう見られるか気になって、なかなか気を抜けなさそう`
        ] ,
        scores: [
            { extraversion: 2 } ,
            { extraversion: 1 } ,
            { neuroticism: 2 }
        ]
    } ,
    {
        number: `質問7` ,
        title: '会社で企画しているイベントの会議で同期と先輩との間でちょっと意見が割れているみたい。あなたはどうする？' ,
        answers: [
            `A. お互いの言い分も尊重しながら、着地点を見出す` ,
            `B. それぞれが傷つかないように配慮しつつ、どっちもいいね！と場を盛り上げて乗り切る` ,
            `C. 第3の視点として新しい着眼点のアイデアを出す`
        ] ,
        scores: [
            { agreeableness: 2 } ,
            { extraversion: 1 } ,
            { openness: 2 }
        ]
    } ,
    {
        number: `質問8` ,
        title: '楽しくお店でハロウィンイベントを楽しんでいたら隣の席でケンカ勃発！' ,
        answers: [
            `A. 自分たちには関係ないので気にせずイベントを楽しもう` ,
            `B. 周囲の人やお店に迷惑がかかっているし、みんなが安心して楽しめるように、店員さんに声をかけよう` ,
            `C. 自分たちにも危害が及ばないか心配なので少し席を離れて様子を見よう`
        ] ,
        scores: [
            { agreeableness: 0 } ,
            { agreeableness: 2 } ,
            { neuroticism: 1 }
        ]
    } ,
    {
        number: `質問9` ,
        title: '来週末は友達の家に泊まってハロウィンのお菓子作り！' ,
        answers: [
            `A. 自分が担当している持ち物に不備がないか、手土産がいるかなど今からソワソワしちゃう！` ,
            `B. みんなでお泊まりとか最高！作るのもいいけど一緒に食べれるお菓子も持っていこう！` ,
            `C. 一緒に泊まるメンバーのキャラを想定してみんなが楽しめるような役割分担を頭の中でイメージしちゃう！`
        ] ,
        scores: [
            { neuroticism: 2 } ,
            { extraversion: 1 } ,
            { agreeableness: 1 }
        ]
    } ,
    {
        number: `質問10` ,
        title: '楽しみにしていた仮装パーティーに行く直前、家の玄関の鏡で衣装に穴があいていることに気付いた・・！' ,
        answers: [
            `A. こういうデザイン！ということにして、みんなに見せて笑い話にしちゃお！` ,
            `B. 時間的にギリギリ間に合うから、裁縫して整えてから向かおう！` ,
            `C. いつからこの状態だったんだろうとか、他にもほつれているところはないかなとか気になってプチパニック！`
        ] ,
        scores: [
            { extraversion: 1 } ,
            { conscientiousness: 2 } ,
            { neuroticism: 2 }
        ]
    }
];

let currentQuestionIndex = 0;
const answers = [];

const scores = {
    openness: 0,
    conscientiousness: 0,
    extraversion: 0,
    agreeableness: 0,
    neuroticism: 0
};

function changeQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    const numberElement = document.getElementById('question-number');
    numberElement.textContent = currentQuestion.number;

    const titleElement = document.getElementById('question-title');
    titleElement.textContent = currentQuestion.title;

    answerElementA.textContent = currentQuestion.answers[0];
    answerElementB.textContent = currentQuestion.answers[1];
    answerElementC.textContent = currentQuestion.answers[2];

    answerElementA.classList.remove('selected');
    answerElementB.classList.remove('selected');
    answerElementC.classList.remove('selected');

    console.log(answers[currentQuestionIndex]);

    if (answers[currentQuestionIndex] === 'A') {
        answerElementA.classList.add('selected');
    }

    if (answers[currentQuestionIndex] === 'B') {
        answerElementB.classList.add('selected');
    }

    if (answers[currentQuestionIndex] === 'C') {
        answerElementC.classList.add('selected');
    }

    if (currentQuestionIndex === 0) {
        prevButton.style.visibility = 'hidden';
    } else {
        prevButton.style.visibility = 'visible';
    }

    if (currentQuestionIndex === questions.length - 1) {
        nextButton.style.visibility = 'hidden';
        resultButton.style.display = 'block';
    } else {
        nextButton.style.visibility = 'visible';
        resultButton.style.display = 'none';
    }
}

function calculateScores() {
    scores.openness = 0;
    scores.conscientiousness = 0;
    scores.extraversion = 0;
    scores.agreeableness = 0;
    scores.neuroticism = 0;

    for (let i = 0; i < answers.length; i++) {
        const answerScore = questions[i].scores['ABC'.indexOf(answers[i])];
        
        for (const [trait, point] of Object.entries(answerScore)) {
            scores[trait] += point;
        }
    }

    console.log(scores);
}

function determineCharacter() {
    const maxScore = Math.max(...Object.values(scores));

    let character;

    if (scores.openness === maxScore) {
        character = 'dracula';
    } else if (scores.conscientiousness === maxScore) {
        character = 'zombie';
    } else if (scores.extraversion === maxScore) {
        character = 'jackOLantern';
    } else if (scores.agreeableness === maxScore) {
        character = 'witch';
    } else if (scores.neuroticism === maxScore) {
        character = 'ghost';
    }
    
    return character;
}


const answerElementA = document.getElementById('answer-a');
const answerElementB = document.getElementById('answer-b');
const answerElementC = document.getElementById('answer-c');

const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

const errorMessage = document.getElementById('error-message');

const resultButton = document.getElementById('result-button');

changeQuestion();

nextButton.addEventListener('click', function() {
    if (answers[currentQuestionIndex] === undefined) {
        errorMessage.textContent = '回答を選んでね';
        return;
    }

    errorMessage.textContent = '';

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        changeQuestion();
    }
});

prevButton.addEventListener('click', function() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        changeQuestion();
    }
});

answerElementA.addEventListener('click', function() {
    answers[currentQuestionIndex] = 'A';
    answerElementB.classList.remove('selected');
    answerElementC.classList.remove('selected');

    answerElementA.classList.add('selected');

    errorMessage.textContent = '';
});

answerElementB.addEventListener('click', function() {
    answers[currentQuestionIndex] = 'B';
    answerElementA.classList.remove('selected');
    answerElementC.classList.remove('selected');

    answerElementB.classList.add('selected');

    errorMessage.textContent = '';
});

answerElementC.addEventListener('click', function() {
    answers[currentQuestionIndex] = 'C';
    answerElementA.classList.remove('selected');
    answerElementB.classList.remove('selected');

    answerElementC.classList.add('selected');

    errorMessage.textContent = '';
});

resultButton.addEventListener('click', function() {
    calculateScores();

    const character = determineCharacter();
    sessionStorage.setItem('character', character);
    window.location.href = 'result.html';
});