function startSurvey() {
  var surveyQuestions = [
    "What is your age?",
    "Where are you from?",
    "What is your favorite color?",
    "How often do you exercise?",
    "What is your preferred programming language?",
  ];

  var surveyAnswers = [];

  function promptQuestion(index) {
    if (index < surveyQuestions.length) {
      var question = surveyQuestions[index];
      var answer = prompt(question);
      surveyAnswers.push(answer);
      promptQuestion(index + 1);
    } else {
      displaySurveyResults();
    }
  }

  function displaySurveyResults() {
    console.log("Survey Results:");
    for (var i = 0; i < surveyQuestions.length; i++) {
      console.log(surveyQuestions[i] + " - " + surveyAnswers[i]);
    }
  }
  promptQuestion(0);
}
startSurvey();

