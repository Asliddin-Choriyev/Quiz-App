"use strict";

// questions
const buttons = document.querySelectorAll(".option");
const next_btn = document.querySelector(".next-btn");
let quizCount = document.getElementById("quizCount");
const trueAns = document.querySelector(".true-box>h1");
const trueBox = document.querySelector(".true-box");
const falseBox = document.querySelector(".false-box");
const falseAns = document.querySelector(".false-box>h1");
const homePage = document.querySelector(".home-page");

const allQuestions = [
  {
    question:
      "JavaScript tilida o'zgaruvchini e'lon qilish uchun qaysi kalit so'zdan foydalaniladi?",
    options: ["let", "var", "const", "int"],
    rightAnswer: "let",
  },
  {
    question:
      "JavaScript da massiv elementlarini kesish uchun qaysi metoddan foydalaniladi?",
    options: ["slice()", "splice()", "cut()", "split()"],
    rightAnswer: "slice()",
  },
  {
    question: "'NaN' JavaScriptda qanday ma'noni bildiradi?",
    options: [
      "Not a Number",
      "New and Notable",
      "Null and None",
      "Number and Numeric",
    ],
    rightAnswer: "Not a Number",
  },
  {
    question: "JavaScript da 'undefined' ma'noni bildiradigan dataType qaysi?",
    options: ["Obyekt", "String", "Number", "Undefined"],
    rightAnswer: "Undefined",
  },
  {
    question: "JavaScriptda ishlatiladigan funksiya turini toping?",
    options: [
      "experession function",
      "arrow function",
      "declaration function",
      "barcha javoblar to'g'ri",
    ],
    rightAnswer: "barcha javoblar to'g'ri",
  },
];
let i = 0;
let score = 0;
let question = document.getElementById("question");
let option = document.querySelector(".option");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");

function showQestion() {
  for (let a = 0; a < option.length; a++) {
    option[a].style.background = "none";
  }
  question.textContent = allQuestions[i].question;
  option1.textContent = allQuestions[i].options[0];
  option2.textContent = allQuestions[i].options[1];
  option3.textContent = allQuestions[i].options[2];
  option4.textContent = allQuestions[i].options[3];
  quizCount.textContent = `Question ${i + 1} of ${allQuestions.length}`;
}
function checker(e) {
  if (
    e.textContent === allQuestions[i].rightAnswer &&
    score < allQuestions.length
  ) {
    score += 1;
  }
  setTimeout(nextQuiz, 300);
}
function nextQuiz() {
  if (i < allQuestions.length - 1) {
    i += 1;
    showQestion();
  } else {
    const main = document.querySelector(".main");
    const results = document.querySelector(".results");
    trueBox.classList.remove("hidden");
    falseBox.classList.remove("hidden");
    main.classList.add("hidden");
    results.classList.remove("hidden");
    trueAns.textContent = score;
    falseAns.textContent = allQuestions.length - score;
  }
}

next_btn.addEventListener("click", nextQuiz);

showQestion();

function backQuiz() {
  trueBox.style.backgroundColor = "red";
  falseBox.style.marginTop = "500px";
  location.reload();
}
