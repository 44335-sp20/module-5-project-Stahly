/* Module 5 Project Script File */
let basic = [
  {},
  { question: "What is my major?", answer: "IDM: New Media" },
  { question: "Where do I go to school?", answer: "NWMSU" },
  { question: "What is my favorite color?", answer: "Red" }
]


let hobbies = [
  {},
  { question: "How long have I been designing (years) ", answer: "7" },
  { question: "Am i In Greek life?", answer: "No" },
  { question: "Do I workout?", answer: "Yes" }
]

let travel = [
  {},
  { question: "Have I been out of the country before?", answer: "Yes" },
  { question: "Where would I love to go?", answer: "Germany" },
  { question: "Where is my favorite place I've visited?", answer: "Washington" }
]

let score = 0

function showQuestion(topic, amount) {
  let index = amount / 100 
  let question = ""
  let answer = ""
  if (topic == 'basic') {
    question = basic[index].question
    answer = basic[index].answer
  }
  else if (topic == 'interests') {
    question = interests[index].question
    answer = interests[index].answer
  }
  else if (topic == 'travel') {
    question = travel[index].question
    answer = travel[index].answer
  }

  let potentialAnswer = window.prompt(question)
  if (potentialAnswer == answer) {
    score = score + amount
    document.getElementById("_score").innerHTML = "Score: $" + score
    document.getElementById("_score").innerHTML = "Score: $" + score
    window.alert("Wow!Correct.")
  }
  else {
    window.alert("Wrong! Try again.")
  }
}

