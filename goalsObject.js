function GoalsObject(assessmentObject) {
  // Hold goals that correspond with positive assessment findings.
  this.fallRisk = "review practices and equipment to prevent falls with PCP within 30 days or next appt";
  this.asthma = "receive pneumonia vaccine every 5 years, as applicable";
  this.copd = "complete spirometry testing annually";
  this.otherBreathing = "reports changes in breathing or shortness of breath to provider(s)";
  this.heartDisease = "maintain LDL <100, HDL >60 and total cholesterol <200";
  this.HeartFailure = "report any weight gain >3 lbs in 24 hour peroid to provider(s)";
  this.htn = "maintain avg BP <140/90 over 30 days";
  this.kidney = " have eGFR remain >60 ml/min over 60 days"
  this.diabetes = "achieve/maintain HbA1c <7% within 90 days";
  this.cancer = "follow up with PCP at least annually";
  this.fluVaccine = "discuss flu vaccine with PCP annually";
  this.tobacco = "decrease tobacco use by 20% within 60 days";
  this.transport = "utilize CAL as needed";

  this.erVisits = "0 ER visits over 60 days";
  this.inpVisits = "0 inpatient stays over 60 days";
  this.falls = "0 falls over 60 days";
  this.meds = "refill medications 30 / 90 days and as needed";

  this.sleep = "discuss sleep concerns with PCP and report improvement within 90 days";
  this.appetite = "discuss appetite concerns with PCP and report improvement within 90 days";
  this.pain = "rate pain <3 on 0-10 scale within 60 days";

  this.adlsHelpNum = "complete functional status assessment at least annually";

  this.assessment = assessmentObject;
  this.goalsList = this.generateGoals();
}

GoalsObject.prototype.generateGoals = function() {
  // The goal character limit in EMMA as of 9/15/17 is 200.
  GOAL_CHARACTER_LIMIT = 200;

  var goalsObjectReference = this;
  // Lists the properties to review.
  var propertiesForGoalsSelectedArray = ["fallRisk", "asthma", "copd", "otherBreathing", "heartDisease",
      "HeartFailure", "htn", "kidney", "diabetes", "cancer", "fluVaccine", "tobacco",
      "transport", "erVisits", "inpVisits", "falls", "meds", "sleep", "appetite", "pain",
      "adlsHelpNum"];

  // Hold the list of goals
  var listOfGoals = [];

  // Reference the AssessmentObject passed to the GoalsObject.
  var assessment = this.assessment;

  // Initiates the first goals string.
  var currentGoalString = "Member will ";

  // Create a loop that reviews the properties that needs goals for the care plan
  // if a goal is needed add it to the goal string, but if it makes the goal string
  // length exceed the GOAL_CHARACTER_LIMIT add the currentGoalString to the listOfGoals
  // array then reset the currentGoalString and add the new current goal that should be
  // included.
  propertiesForGoalsSelectedArray.forEach(function(property) {
    // If the current property in the AssessmentObject is not "" enter the if branch.

    if (assessment[property]) {
      // If the goal that corresponds with the currently property does not make
      // the currentGoalString exceed GOAL_CHARACTER_LIMIT add it to the currentGoalString.



      if ( (currentGoalString.length + goalsObjectReference[property].length + ", ".length) <=  GOAL_CHARACTER_LIMIT ) {
        currentGoalString += goalsObjectReference[property] + ", ";
      } else {
        // Formate goal but removing ", " from the end and adding "." to end of goal.
        listOfGoals.push(currentGoalString.substring(0, currentGoalString.length -2) + ".");
        currentGoalString = "Member will ";
        currentGoalString += goalsObjectReference[property] + ", ";
      }
    }
  });
  // Makes sure that last currentGoalString is added to the listOfGoals;
  if (currentGoalString !== "Member will ") {
    // Formate goal but removing ", " from the end and adding "." to end of goal.
    listOfGoals.push(currentGoalString.substring(0, currentGoalString.length -2) + ".");
  }
  return listOfGoals;
}

// Use to display goalList property to user.
GoalsObject.prototype.showGoals = function() {
  // displayGoalString will make a string to return for display
  var displayGoalString = "";
  var goalNum = 1;
  this.goalsList.forEach(function(goal) {
    displayGoalString += "<strong>" + goalNum + ") </strong><br><br>" + goal + "<br><br>";
    goalNum += 1;
  });
  return displayGoalString;
}
