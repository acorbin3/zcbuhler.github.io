function Assessment() {
  this.dateCompleted = document.getElementById("date-textBox").value;

  // Delcare the showFindings property with the dateCompleted and string.
  this.showFindings = this.dateCompleted + " HRA findings: ";
 
  //A lot of these check boxes could be a little more efficent with maybe a dictionary
  // and looping over the keys which would be checkbox ID's seeing if they were checked
  // and then the vlues would be what would be added to the "showFindings"
  //Whats nice about this approach is all you need to do is update the Dictionary to add new items.
  //Always look to see if you are doing something over and over and usualy thats where you can be more efficent
  //Ill provide an example here
  
  var checkboxKeyValuePair = {"fall-risk-checkBox":"Fall risk", "asthma-checkBox":"Asthma"}
  //Itterate over keys, check if checkbox is checked, if checked add value into the showFindings
  for(var key in checkboxKeyValuePair){
    if(document.getElementById(key).checked){
      this.showFindings += checkboxKeyValuePair[key]
    }
  }
  

  // COPD property set.
  if (document.getElementById("copd-checkBox").checked) {

    this.copd = "COPD";
    this.showFindings += this.copd + ", ";
  } else {

    this.copd = "";
  }

  // Other Breathing property set.
  if (document.getElementById("other-breathing-checkBox").checked) {

    this.otherBreathing = "Other Breathing or Lung condition";
    this.showFindings += this.otherBreathing + ", ";
  } else {

    this.otherBreathing = "";
  }

  // Heart Disease property set.
  if (document.getElementById("heart-disease-checkBox").checked) {

    this.heartDisease = "Heart Disease";
    this.showFindings += this.heartDisease + ", ";
  } else {

    this.heartDisease = "";
  }

  // Heart failure property set.
  if (document.getElementById("heart-failure-checkBox").checked) {

    this.heartFailure = "Heart Failure";
    this.showFindings += this.heartFailure + ", ";
  } else {

    this.heartFailure = "";
  }

  // HTN property set.
  if (document.getElementById("htn-checkBox").checked) {

    this.htn = "HTN";
    this.showFindings += this.htn + ", ";
  } else {

    this.htn = "";
  }

  // Kidney property set.
  if (document.getElementById("kidney-checkBox").checked) {

    this.kidney = "Kidney disease or kidney failure";
    this.showFindings += this.kidney + ", ";
  } else {

    this.kidney = "";
  }

  // Diabetes property set.
  if (document.getElementById("dm-checkBox").checked) {

    this.diabetes = "Diabetes or high blood sugar";
    this.showFindings += this.diabetes + ", ";
  } else {

    this.diabetes = "";
  }

  // Cancer property set.
  if (document.getElementById("cancer-checkBox").checked) {

    this.cancer = "Cancer";
    this.showFindings += this.cancer + ", ";
  } else {

    this.cancer = "";
  }

  // HIV property set. No currently used on care plan for UTC / Refusal
  // HRAs property commented out as it is not used at this time.
  /*
  if (document.getElementById("hiv-checkBox").checked) {

    this.hiv = "HIV";
  } else {

    this.hiv = "";
  }
  */

  // Mental Health property set. No currently used on care plan for UTC / Refusal
  // HRAs property commented out as it is not used at this time.
  /*
  if (document.getElementById("mental-checkBox").checked) {

    this.mentalHealth = "Behavioral or mental health conditions";
  } else {

    this.mentalHealth = "";
  }
  */

  // Self Health Rating property set.

  this.selfHealthRating = document.getElementById("health-textBox").value;

  // Flu vaccine property set.

  if (document.getElementById("flu-checkBox").checked) {

    this.fluVaccine = "";
  } else {

    this.fluVaccine = "No flu vaccine in last 12 months";
    this.showFindings += this.fluVaccine + ", ";
  }

  // Tobacco property set.

  if (document.getElementById("tobacco-checkBox").checked) {

    this.tobacco = "Tobacco use";
    this.showFindings += this.tobacco + ", ";
  } else {

    this.tobacco = "";
  }

  // Transportation property set.

  if (document.getElementById("transport-checkBox").checked) {

    this.transport = "Lack of transportation";
    this.showFindings += this.transport + ", ";
  } else {

    this.transport = "";
  }

  // ER visits property set.

  this.erVisits = document.getElementById("er-textBox").value;

  // INP visits property set.

  this.inpVisits = document.getElementById("inp-textBox").value;

  // Falls property set.

  this.falls = document.getElementById("falls-textBox").value;

  // Meds property set.

  this.meds = document.getElementById("meds-textBox").value;
  this.showFindings += "takes " + this.meds + " medications regularly, ";

  // Depressed property set. No currently used on care plan for UTC / Refusal
  // HRAs property commented out as it is not used at this time.
  /*
  if (document.getElementById("depressed-checkBox").checked) {

    this.mentalHealth = "depression / mental health issue";
  } else {

    this.mentalHealth = "";
  }
  */

  // Sleep property set.

  if (document.getElementById("sleep-checkBox").checked) {

    this.sleep = "Sleep disturbance";
    this.showFindings += this.sleep + ", ";
  } else {

    this.sleep = "";
  }

  // Appetite property set.

  if (document.getElementById("appetite-checkBox").checked) {

    this.appetite = "Appetite disturbance";
    this.showFindings += this.appetite + ", ";
  } else {

    this.appetite = "";
  }

  // Pain property set.

  if (document.getElementById("pain-checkBox").checked) {

    this.pain = "Positive pain screening";
    this.showFindings += this.pain + ", ";
  } else {

    this.pain = "";
  }


  ///// ADLs will just be used as

  // Meds ADL property set.

  if (document.getElementById("meds-adl-checkBox").checked) {

    this.medsADL = "Needs help taking medications";
  } else {

    this.medsADL = "";
  }

  // Mobility ADL property set.

  if (document.getElementById("mobility-adl-checkBox").checked) {

    this.mobilityADL = "Needs help with mobility";
  } else {

    this.mobilityADL = "";
  }

  // Feeding ADL property set.

  if (document.getElementById("feeding-adl-checkBox").checked) {

    this.feedingADL = "Needs help with feedings";
  } else {

    this.feedingADL = "";
  }

  // Transfers ADL property set.

  if (document.getElementById("transfers-adl-checkBox").checked) {

    this.transfersADL = "Needs help with transfers";
  } else {

    this.transfersADL = "";
  }

  // Bathing ADL property set.

  if (document.getElementById("bathing-adl-checkBox").checked) {

    this.bathingADL = "Needs help with bathing";
  } else {

    this.bathingADL = "";
  }

  // Dressing ADL property set.

  if (document.getElementById("dressing-adl-checkBox").checked) {

    this.dressingADL = "Needs help with dressing";
  } else {

    this.dressingADL = "";
  }

  // Toilet ADL property set.

  if (document.getElementById("toilet-adl-checkBox").checked) {

    this.toiletADL = "Needs help with toileting";
  } else {

    this.toiletADL = "";
  }

  this.assessmentFindings = this.generateAllReportibleFindings()
  // this.adlsHelp is configured when the generateAllReportibleFindings() function is called.
}

function showMeWhatYouGot() {
  // Create Assessment Object based on form information.
  var a = new Assessment();
  // Create Goals Object from Assessment Object.
  var g = new GoalsObject(a);
  // Create Intervention Object frin Assessment Object.
  var i = new InterventionObject(a);

  // Output information to the user.
  document.getElementById("hra-findings").innerHTML = a.assessmentFindings;
  document.getElementById("hra-goals").innerHTML = g.showGoals();
  document.getElementById("hra-interventions").innerHTML = i.showInterventions();
  // Show careplan-output div to display user results.
  document.getElementById("careplan-output").style.display = "block";
  // Hide the assessment form.
  document.getElementById("body-text-content").style.display = "none";
  // Hide Designer name
  document.getElementById("designer-name").style.display = "none";
  // Shift title to left alignment
  document.getElementById("page-title").style.display = "none";
}

// Takes use back to black form from the results page or will clear
// the form from the form version of the page by reloading the page.
function newAssesmentForm() {
  location.reload();
}

// Take the reportable findings from the Assessment Object that will be included in a
// care plan. Assigns the value to the assessmentFindings property of the Assessmen tObject.
Assessment.prototype.generateAllReportibleFindings = function() {
  // The showFindings hold a string that indicates complettion date of the assessment(s).
  var outputString = this.showFindings;

  // Formate string to include the er, inp and falls information with the forEach loop.
  var falls_ER_INP_Array = [ [this.erVisits, " ER visits" ], [this.inpVisits, " INP Admissions"], [this.falls, " Falls"] ]

  falls_ER_INP_Array.forEach(function(element) {
    if (element[0].length > 0) {
      outputString += element[0] + element[1] + " / 12 months, "
    }
  });

  // The ADL properties will be check to determine how many ADLs the member needed help with on the assessment.
  var ADL_Array = [this.medsADL, this.mobilityADL, this.feedingADL, this.transfersADL, this.bathingADL, this.dressingADL, this.toiletADL]

  // numADLHelp as the counter for ADLs that the member needs help with.
  var numADLHelp = 0;

  // Iterate through the ADL related property and increment the counter as needed.
  ADL_Array.forEach(function(element) {
    if (element !== "") {
      numADLHelp += 1;
    }
  });

  // If the member needs help with any ADLs indicate in the string else add blank string.
  if (numADLHelp > 0) {

    outputString += "Needs help with " + numADLHelp + "/7 ADLs."
    this.adlsHelpNum = outputString;
  } else {

    this.adlsHelpNum = "";
  }
  // Formate the of the string if it is ending with ", " change the trim and make last char a "."
  if (outputString[outputString.length -1] == " "){
    return outputString.slice(0, outputString.length - 2) + ".";
  } else {
    // Return the outputString so that it can be used to set the assessmentFindings property. 
    return outputString;
  }
}
