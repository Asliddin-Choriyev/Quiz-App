"use strict";

// Questions Data

const allQuestions = [
  {
    question: "Javascript is an _______ language?",
    options: [
      "Object-Oriented",
      "Object-Based",
      "Procedural",
      "None of the above",
    ],
    rightAnswer: "Object-Oriented",
  },
  {
    question:
      "Quyidagi kalit so'zlardan qaysi biri Javascriptda o'zgaruvchini aniqlash uchun ishlatiladi?",
    options: ["var", "let", "A va B", "hech qaysi"],
    rightAnswer: "A va B",
  },
  {
    question: `Quyidagi usullardan qaysi biri Javascript yordamida HTML elementlariga kirish uchun ishlatiladi?`,
    options: [
      "getElementbyId()",
      "getElementbyClassName()",
      "A va B",
      "hech qaysi",
    ],
    rightAnswer: "A va B",
  },
  {
    question: `Comment qismiga duch kelganda, Javascript compliatori qanday vazifa bajaradi?`,
    options: [
      "xatolik yuz beradi",
      "bu qismni e'tiborsiz qoldiradi",
      "ogohlantirish beradi",
      "hech qaysi",
    ],
    rightAnswer: "bu qismni e'tiborsiz qoldiradi",
  },
  {
    question: `Quyidagi usullardan qaysi biri Javascript yordamida ma'lumotlarni  ko'rinishda ko'rsatish uchun ishlatilishi mumkin?`,
    options: [
      "document.write()",
      "console.log()",
      "window.alert()",
      "barchasi",
    ],
    rightAnswer: "barchasi",
  },
  {
    question: `Qanday qilib ma'lumotlar turini o'zgarmas tur deb e'lon qilish mumkin?`,
    options: ["const", "var", "let", "barchasi"],
    rightAnswer: "const",
  },
  {
    question: `Quyidagi kod snippetining chiqishi qanday bo'ladi?
    ______________________________________
   <scrip> document.write(5 + "9") </script>`,
    options: ["Compilation Error", "14", "RunTime Error", "59"],
    rightAnswer: "59",
  },
  {
    question: `Switch operatori berilgan teglar bilan ifodaga mos kelsa, qaysilari solishtiriladi?`,
    options: [
      "Ma’lumotlar turi ham,qiymati ham",
      "Faqat ma'lumot turi",
      "Faqat qiymati",
      "hech qaysi",
    ],
    rightAnswer: "Ma’lumotlar turi ham,qiymati ham",
  },
  {
    question: `Berilgan xususiyat haqiqiy yoki noto'g'ri ekanligini tekshirish uchun qanday kalit so'z ishlatiladi?`,
    options: ["in", "is in", "exists", "lies"],
    rightAnswer: "in",
  },
  {
    question: `Agar operatorning qiymati NULL bo'lsa, unar operator tomonidan qaytariladigan turi:`,
    options: ["boolean", "undefined", "object", "integer"],
    rightAnswer: "object",
  },
  {
    question: `var a = true + true + true * 3;  print(a)`,
    options: ["3", "0", "Error", "5"],
    rightAnswer: "5",
  },
  {
    question: `print(NaN === NaN);`,
    options: ["true", "false", "undefined", "Error"],
    rightAnswer: "false",
  },
  {
    question: `print(typeof(NaN));`,
    options: ["object", "number", "string", "hech qaysi"],
    rightAnswer: "number",
  },
  {
    question: `Javascriptda ob'ektni JSON qatoriga ketma-ketlashtirish uchun qaysi funksiyadan foydalaniladi?`,
    options: ["stringify()", "parse()", "convert()", "hech qaysi"],
    rightAnswer: "stringify()",
  },
  {
    question: `a = [1, 2, 3, 4, 5];
    print(a.slice(2, 4));`,
    options: ["3,4", "2,3", "3,4,5", "2,3,4"],
    rightAnswer: "3,4",
  },
  {
    question: `print(parseInt("123Hello"));
    print(parseInt("Hello123"));`,
    options: ["123 NaN", "123Hello Hello123", "NaN NaN", "123 123"],
    rightAnswer: "123 NaN",
  },
  {
    question: `Quyidagilardan qaysilari Closurelar hisoblanadi?`,
    options: ["o'zgaruvchilar", "funksiyalar", "obyektlar", "barchasi"],
    rightAnswer: "barchasi",
  },
  {
    question: `Quyidagilardan qaysi biri Javascript frameworki emas?`,
    options: ["node", "vue", "react", "cassandra"],
    rightAnswer: "cassandra",
  },
  {
    question: `Javascriptda asinxron funksiyani e'lon qilish uchun qaysi kalit so'zdan foydalaniladi?`,
    options: ["async", "await", "setTimeout", "hech qaysi"],
    rightAnswer: "async",
  },
  {
    question: `Javascriptda intervalli taymerni qanday to'xtatish mumkin?`,
    options: ["clearInterval", "clearTimer", "intervalOver", "hech qaysi"],
    rightAnswer: "clearInterval",
  },
  {
    question: `Qanday qilib javascriptda sharh yozamiz?`,
    options: ["/**/", "//", "#", "$$"],
    rightAnswer: "//",
  },
  {
    question: `Quyidagilardan qaysi biri server tomonidagi Javascript obyektlari emas?`,
    options: ["Date", "FileUpload", "Function", "barchasi"],
    rightAnswer: "barchasi",
  },
];

// questions
const buttons = document.querySelectorAll(".option");
const next_btn = document.querySelector(".next-btn");
let quizCount = document.getElementById("quizCount");
const trueAns = document.querySelector(".true-box>h1");
const trueBox = document.querySelector(".true-box");
const falseBox = document.querySelector(".false-box");
const falseAns = document.querySelector(".false-box>h1");
const homePage = document.querySelector(".home-page");

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
  location.reload();
}
