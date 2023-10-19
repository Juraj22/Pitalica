const questions = [
  {
    question: "Koji je bio moj prvi dar tebi?",
    answer: "cvijet",
  },
  {
    question: "Gdje smo se prvi puta poljubili?",
    answer: "jarun",
  },
  {
    question: "Naš prvi sport, koji nam se jako svidio?",
    answer: "minigolf",
  },
  {
    question: "Naš prvi izlet u prirodi je bio gdje?",
    answer: "plitvicka jezera",
  },
  {
    question: "Gdje smo išli na prvo putovanje van HR?",
    answer: "budimpesta",
  },
  {
    question: "Gdje smo išli za advent,izvan Zagreba (božična bajka)?",
    answer: "salaj",
  },
  {
    question: "Gdje sam te prvi puta vodio na bazene?",
    answer: "aqua vivae",
  },
  {
    question: "Koje jelo si mi prvi puta skuhala?",
    answer: "musaka",
  },
  {
    question: "Gdje smo proveli prvu Novu godinu?",
    answer: "kino",
  },
  {
    question: "Gdje smo išli vikend poslije Nove godine?",
    answer: "sarajevo",
  },
  {
    question: "Šta smo gledali u Lisinskom?",
    answer: "lijepotica i zvijer",
  },
  {
    question: "Gdje sam te prvi puta odvezao na motoru?",
    answer: "kod kumasina",
  },
  {
    question: "Šta smo zajedno složili u nekoliko dana?",
    answer: "puzzle",
  },
  {
    question: "U kojem restoranu smo bili za Valentinovo?",
    answer: "rustica",
  },
  {
    question: "Gdje smo bili za 1.Maj?",
    answer: "jarun",
  },
  {
    question: "Na kojem izvoru smo prvi puta imali piknik?",
    answer: "cetine",
  },
  {
    question: "Gdje smo se vozili u kajaku?",
    answer: "zrmanja",
  },
  {
    question: "Gdje si me prvi put vodila u Hercegovini?",
    answer: "kravica",
  },
  {
    question: "Šta smo jeli za tvoj rođendan?",
    answer: "sushi",
  },
  {
    question: "Prvo ljetovanje van HR (grad)?",
    answer: "ksamil",
  },
  {
    question: "Prvo zajedničko putovanje s ekipom (aktivnost)?",
    answer: "jedrenje",
  },
  {
    question: "Gdje smo si prvi puta rekli da se volimo (na ...)?",
    answer: "jedrilici",
  },
  {
    question: "Šta najviše voliš raditi?",
    answer: "putovati",
  },
  {
    question: "Šta sam ti napisao za cilj na poklonu za mjesec dana veze?",
    answer: "100 godina",
  },
];

const resultImages = [
  "slike/cvijet.jpg",
  "slike/jarun.jpg",
  "slike/minigolf.jpg",
  "slike/plitvicka jezera.jpg",
  "slike/budimpesta.jpg",
  "slike/salaj.jpg",
  "slike/aqua vivae.jpg",
  "slike/musaka.jpg",
  "slike/kino.jpg",
  "slike/sarajevo.jpg",
  "slike/lijepotica i zvijer.jpg",
  "slike/kod kumasina.jpg",
  "slike/puzzle.jpg",
  "slike/rustica.jpg",
  "slike/jarunMaj.jpg",
  "slike/cetina.jpg",
  "slike/zrmanja.jpg",
  "slike/kravica.jpg",
  "slike/sushi.jpg",
  "slike/ksamil.jpg",
  "slike/jedrenje.jpg",
  "slike/jedrilici.jpg",
  "slike/putovati.jpg",
  "slike/100.jpg",
];

let currentQuestion = 0;

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const resultContainer = document.getElementById("result-container");
const resultImage = document.getElementById("result-image");
const nagrada = document.getElementById("nagrada");

function displayQuestion() {
  if (currentQuestion < questions.length) {
    questionElement.textContent = questions[currentQuestion].question;
    answerElement.value = "";
    resultContainer.style.display = "none";
  } else {
    // Sva pitanja su odgovorena
    questionElement.style.display = "none";
    answerElement.style.display = "none";
    resultContainer.style.display = "block";
    resultImage.style.display = "none";

    // Prikažite sliku "nagrada"
    nagrada.style.display = "block";
    nagrada.src = "slike/siofok.jpg"; // Zamijenite putanju sa stvarnom putanjom do slike nagrade
  }
}

function showResultImage() {
  if (currentQuestion <= resultImages.length) {
    resultImage.style.display = "block";
    resultImage.src = resultImages[currentQuestion - 1]; // Prikazuje sliku iz niza
  }
}

function checkAnswer(event) {
  if (event.key === "Enter") {
    const userAnswer = answerElement.value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestion].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
      answerElement.classList.add("correct-answer");
      resultContainer.style.display = "block";
      nagrada.style.display = "none";
      currentQuestion++;

      if (currentQuestion <= questions.length) {
        setTimeout(displayQuestion, 12000);
        showResultImage(); // Prikazuje sliku nakon točnog odgovora
      }
    }
  }
}

answerElement.addEventListener("keyup", checkAnswer);
displayQuestion();
