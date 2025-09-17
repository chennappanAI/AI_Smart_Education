function askQuestion() {
  let question = document.getElementById("question").value;
  let answerDiv = document.getElementById("answer");

  if(question.toLowerCase().includes("2x + 5 = 15")) {
    answerDiv.innerHTML = `
      Step 1: 2x + 5 = 15<br>
      Step 2: 2x = 10<br>
      Step 3: x = 5<br>
      Definition: Linear equation solution.
    `;
  } else {
    answerDiv.innerHTML = "Sorry, I can only solve demo math questions for now!";
  }
}
