const question1 = {
    number: `質問1` ,
    title: '友達みんなとハロウィンパーティを開催することに！今年はあなたが主催の年ですが、どんな風に準備を進める？' ,
    answers: [
        `A. これまでにない形の形式を考えたり、サプライズを用意してワクワクするような回にしよう！` ,
        `B. SNSなどで参考情報を集めたりみんなに意見を聞いたりしながら、みんなが楽しめる回にしよう！` ,
        `C. 過去の主催者に話を聞いて慎重に準備をして、なるべくこれまでの雰囲気を崩さない回にしよう！`
    ]
};

function changeQuestion() {
  const numberElement = document.getElementById('question-number');
  numberElement.textContent = question1.number;

  const titleElement = document.getElementById('question-title');
  titleElement.textContent = question1.title;

  const answerElementA = document.getElementById('answer-a');
  answerElementA.textContent = question1.answers[0];

  const answerElementB = document.getElementById('answer-b');
  answerElementB.textContent = question1.answers[1];
  
  const answerElementC = document.getElementById('answer-c');
  answerElementC.textContent = question1.answers[2];
}

changeQuestion();