const quizData = {
  sports: [
    {
      question: "Which country won the FIFA World Cup in 2018?",
      options: ["Germany", "Brazil", "France", "Argentina"],
      answer: "France"
    },
    {
      question: "How many players are on a basketball team on the court?",
      options: ["5", "6", "7", "11"],
      answer: "5"
    },
    {
      question: "Which sport uses the terms love, deuce, and ace?",
      options: ["Tennis", "Cricket", "Badminton", "Golf"],
      answer: "Tennis"
    },
    {
      question: "What is the national sport of Canada?",
      options: ["Ice Hockey", "Lacrosse", "Baseball", "Basketball"],
      answer: "Lacrosse"
    },
    {
      question: "Who is known as the 'Fastest Man Alive'?",
      options: ["Usain Bolt", "Tyson Gay", "Michael Johnson", "Asafa Powell"],
      answer: "Usain Bolt"
    }
  ],
  traditions: [
    {
      question: "Which country is famous for the Day of the Dead?",
      options: ["Japan", "Mexico", "India", "Egypt"],
      answer: "Mexico"
    },
    {
      question: "What is Holi known as?",
      options: ["Festival of Fire", "Festival of Lights", "Festival of Colors", "Harvest Festival"],
      answer: "Festival of Colors"
    },
    {
      question: "Which festival involves floating lanterns in Thailand?",
      options: ["Diwali", "Yi Peng", "Hanukkah", "Obon"],
      answer: "Yi Peng"
    },
    {
      question: "Which country celebrates 'Obon' to honor the spirits of ancestors?",
      options: ["China", "India", "Japan", "Korea"],
      answer: "Japan"
    },
    {
      question: "Which dance is traditional in Hawaiian culture?",
      options: ["Samba", "Ballet", "Hula", "Flamenco"],
      answer: "Hula"
    }
  ],
  movies: [
    {
      question: "Which movie features the character 'Forrest Gump'?",
      options: ["Cast Away", "Forrest Gump", "Saving Private Ryan", "Big"],
      answer: "Forrest Gump"
    },
    {
      question: "Which studio produced 'Toy Story'?",
      options: ["DreamWorks", "Pixar", "Universal", "Disney"],
      answer: "Pixar"
    },
    {
      question: "Who directed 'Inception'?",
      options: ["Steven Spielberg", "Christopher Nolan", "James Cameron", "Quentin Tarantino"],
      answer: "Christopher Nolan"
    },
    {
      question: "Which movie is about a clown named Pennywise?",
      options: ["It", "The Joker", "Insidious", "The Conjuring"],
      answer: "It"
    },
    {
      question: "Which 1997 movie is based on a real ship disaster?",
      options: ["Titanic", "Poseidon", "The Perfect Storm", "Deepwater Horizon"],
      answer: "Titanic"
    }
  ],
  food: [
    {
      question: "Which country is famous for sushi?",
      options: ["Thailand", "Japan", "China", "Vietnam"],
      answer: "Japan"
    },
    {
      question: "What is the main ingredient in guacamole?",
      options: ["Tomato", "Avocado", "Onion", "Pepper"],
      answer: "Avocado"
    },
    {
      question: "Which Italian dish is made with flat dough and toppings?",
      options: ["Pizza", "Pasta", "Lasagna", "Risotto"],
      answer: "Pizza"
    },
    {
      question: "Which fruit is known as the 'king of fruits'?",
      options: ["Mango", "Banana", "Apple", "Pineapple"],
      answer: "Mango"
    },
    {
      question: "Which sweet is commonly eaten during Diwali in India?",
      options: ["Mochi", "Baklava", "Ladoo", "Churros"],
      answer: "Ladoo"
    }
  ]
}; 4

let currentTheme = '';
let score = 0;

function startQuiz(theme) {
  currentTheme = theme;
  score = 0;
  const quizSection = document.getElementById('quiz-section');
  const quizTitle = document.getElementById('quiz-title');
  const quizDiv = document.getElementById('quiz');
  const finalScore = document.getElementById('final-score');
  const finalMessage = document.getElementById('final-message');

  quizSection.style.display = 'block';
  quizTitle.textContent = `Quiz on ${theme.charAt(0).toUpperCase() + theme.slice(1)}`;
  finalScore.textContent = '';
  finalMessage.textContent = '';

  quizDiv.innerHTML = '';

  quizData[theme].forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.innerHTML = <p><strong>Q${index + 1}: ${q.question}</strong></p>;

    q.options.forEach(option => {
      const id = q$,{index},_$,{option};
      questionDiv.innerHTML += `
        <label>
          <input type="radio" name="q${index}" value="${option}"> ${option}
        </label><br>`;
    });

    quizDiv.appendChild(questionDiv);
  });
}

document.getElementById('submit-quiz').addEventListener('click', () => {
  const questions = quizData[currentTheme];
  score = 0;

  questions.forEach((q, i) => {
    const selected = document.querySelector(input[name="q${i}"] :checked);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });

  const finalScore = document.getElementById('final-score');
  const finalMessage = document.getElementById('final-message');
  finalScore.textContent = You scored  "$;{score} out, of $;{questions.length}";

  if (score === questions.length) {
    finalMessage.textContent = "🎉 Excellent! You're a quiz master!";
  } else if (score >= questions.length / 2) {
    finalMessage.textContent = "👍 Nice try! You did well!";
  } else {
    finalMessage.textContent = "😅 Oops! Better luck next time.";
  }
});

function resetQuiz() {
  document.getElementById('quiz-section').style.display = 'none';
}

// Joke API
function getJoke() {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(res => res.json())
    .then(data => {
      document.getElementById('joke').textContent = $;{data.setup} $;{data.punchline};
    })
    .catch(err => {
      document.getElementById('joke').textContent = 'Oops! Could not fetch a joke right now.';
      console.error(err);
    });
} 