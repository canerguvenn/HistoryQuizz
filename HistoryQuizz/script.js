const questions = [
    {
      question: 'Türkiye Cumhuriyetini kuran kahraman kimdir ? ',
      answer1: 'İsmet İnönü',
      answer2: 'Kazım Karabekir',
      correctAnswer: 'Mustafa Kemal Atatürk',
    },
    {
      question: 'Türkiye Cumhuriyeti kaç yılında kurulmuştur ?',
      answer1: '1922',
      answer2: '1918',
      correctAnswer: '1923',
    },
  
    {
      question: 'Mustafa Kemal Atatürk kaç tarihte vefat etmiştir ?',
      answer1: '10 kasım 1936',
      answer2: '10 kasım 1937',
      correctAnswer: '10 kasım 1938',
    },
  
    {
      question: 'Hangisi itilaf devleti değildir? ',
      answer1: 'İngiltere',
      answer2: 'Fransa',
      correctAnswer: 'Almanya',
    },
  
    {
      question: '1. Dünya Savaşı kaç yılında başlayıp bitmiştir',
      answer1: '1912-1914',
      answer2: '1914-1922',
      correctAnswer: '1914-1918',
    },
  ];
    
    const startScreen = document.querySelector('.start-screen');
    const startBtn = document.querySelector('.start-btn');
    const questionContainer = document.querySelector('.question-container');
    const answers = document.querySelectorAll('.answer');
    const answerList = document.querySelector('.answer-list');
    const nextBtn = document.querySelector('.next-btn');
    const repeatBtn = document.querySelector('.repeat-btn')
    
    const question = document.querySelector('h3');
    const answer1 = document.querySelector('.answer-1');
    const answer2 = document.querySelector('.answer-2');
    const answer3 = document.querySelector('.answer-3');
    
    let questionCounter = 0
    let score = 0 
    let guess
  
    startBtn.addEventListener('click', () => {
      questionContainer.style.display = 'flex'
      startScreen.style.display = 'none'
  
    })
  
    answerList.addEventListener('click', (e) => {
      answers.forEach((answer) => {
        answer.classList.remove('active')
      })
  
      if(e.target.classList.contains('answer')){
        e.target.classList.add('active')
        guess= e.target.textContent
        console.log(guess)
      }
    })
  
    nextBtn.addEventListener('click', () => {
      if(guess === questions[questionCounter].correctAnswer){
        score++
      }
      questionCounter++
  
      if(questionCounter === questions.length){
        questionContainer.innerHTML= `You score is ${score}`
        nextBtn.style.dislay = 'none'
      }else{
        showQuestions()
      }
    })
    function showQuestions(){
      answers.forEach((answer) => {
      answer.classList.remove('active')
    })
    
    question.textContent= `Q${questionCounter + 1} : ${questions[questionCounter].question}`
  
    let order = randomizeQuestion();
    console.log(order);
    answer1.textContent = order[0];
    answer2.textContent = order[1];
    answer3.textContent = order[2];
  
    }
    
    showQuestions()
  
    function randomizeQuestion() {
      let questionOrder = [
        [
          questions[questionCounter].answer1,
          questions[questionCounter].answer2,
          questions[questionCounter].correctAnswer,
        ],
        [
          questions[questionCounter].correctAnswer,
          questions[questionCounter].answer1,
          questions[questionCounter].answer2,
        ],
        [
          questions[questionCounter].answer2,
          questions[questionCounter].correctAnswer,
          questions[questionCounter].answer1,
        ],
      ];
    
      let selectedOrder = Math.floor(Math.random() * 3);
      return questionOrder[selectedOrder];
    }
  
    repeatBtn.addEventListener('click', () => {
      if(questionCounter === questions.length){
        repeatBtn.style.display = 'flex'
      }
      window.location.reload()
    })
  
  