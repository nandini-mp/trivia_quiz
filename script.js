const quizData = [
    {
      question: "What is the capital of France?",
      a: "Berlin",
      b: "Madrid",
      c: "Paris",
      d: "Lisbon",
      correct: "c"
    },
    {
      question: "Who developed the theory of relativity?",
      a: "Isaac Newton",
      b: "Albert Einstein",
      c: "Marie Curie",
      d: "Nikola Tesla",
      correct: "b"
    },
    {
      question: "Which planet is known as the Red Planet?",
      a: "Earth",
      b: "Venus",
      c: "Mars",
      d: "Jupiter",
      correct: "c"
    }
  ];
  
  const quizContainer = document.getElementById("quiz");
  const submitButton = document.getElementById("submit");
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  
  let currentQuiz = 0;
  let score = 0;
  
  function loadQuiz() {
    const currentData = quizData[currentQuiz];
    quizContainer.innerHTML = `
      <h2>${currentData.question}</h2>
      <label>
        <input type="radio" name="answer" value="a">
        ${currentData.a}
      </label><br>
      <label>
        <input type="radio" name="answer" value="b">
        ${currentData.b}
      </label><br>
      <label>
        <input type="radio" name="answer" value="c">
        ${currentData.c}
      </label><br>
      <label>
        <input type="radio" name="answer" value="d">
        ${currentData.d}
      </label>
    `;
  }
  
  function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let selected;
    answers.forEach((answer) => {
      if (answer.checked) selected = answer.value;
    });
    return selected;
  }
  
  submitButton.addEventListener("click", () => {
    const selectedAnswer = getSelected();
    
    if (selectedAnswer) {
      if (selectedAnswer === quizData[currentQuiz].correct) score++;
      
      currentQuiz++;
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quizContainer.innerHTML = "";
        resultElement.classList.remove("hidden");
        scoreElement.textContent = `${score} / ${quizData.length}`;
      }
    } else {
      alert("Please select an answer!");
    }
  });
  
  loadQuiz();  