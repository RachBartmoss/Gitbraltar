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
   
      promptEmail();
    }
  }

 
  function promptEmail() {
    var email = prompt("Please enter your email:");

    
    if (validateEmail(email)) {
      
      console.log("Thank you for completing the survey. Your email " + email + " has been recorded.");
    } else {
     
      console.log("Invalid email format. Please try again.");
      promptEmail();
    }
  }

  
  function validateEmail(email) {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  
  promptQuestion(0);
}


startSurvey();

