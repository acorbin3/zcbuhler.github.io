function InterventionObject(assessmentObject) {
  // Hold reference to assessment object with the assessmentReference property.
  this.assessmentReference = assessmentObject;

  // Delcare labs intervention / outcome properties.
  this.labsIntervention = "Case manager will request related lab work from provider.";
  this.labsOutcome = "Lab request faxed to Provider ***Provider-please fax recent lab results to 8556786410.";

  // Assessment reviewed intervention / outcome properties.
  this.assessmentReviewIntervention = "Case manager will review needs identified within HRA completed " + assessmentObject.dateCompleted + ".";
  this.assessmentOutcome = assessmentObject.assessmentFindings +
  "\n\n The Care plan was created based on HRA findings due to member not enrolling in case managemet.";

  // Declare the transporat intervention / outcome.
  this.transportIntervention = "Member will utilize Community Assistance line as needed for assistance with transporation needs.";
  this.transportOutcome = "Member can use the Community Assistance line (CAL) 866-775-2192 to acquire transportation resources in the area."

  // Decluare the careGAP intervention / outcome.
  this.careGapIntervention = "Case manager reviewed member's HEDIS care gaps and included care gaps on care plan to member and PCP.";
  this.careGapOutcome = "HEDIS Care Gaps identified: ___________";

  // Declaure the education intervention / outcome.
  this.educationIntervention = "CM will send educational materials.";
  this.educationalOutcome = "Case manager sent: ___________";
}

// The showInterventions method return a string of the interventions that
// can be shown to the user.
InterventionObject.prototype.showInterventions = function() {
  // If transportation is an issue for the member included it as an intervention / outcome else
  // do not include it.
  if (this.assessmentReference.transport == "") {
    return "<strong>1)</strong><br><br>" +
    this.labsIntervention + "<br><br>" +
    this.labsOutcome + "<br><br>" +
    "<strong>2)</strong><br><br>" +
    this.assessmentReviewIntervention + "<br><br>" +
    this.assessmentOutcome + "<br><br>" +
    "<strong>3)</strong><br><br>" +
    this.careGapIntervention + "<br><br>" +
    this.careGapOutcome + "<br><br>" +
    "<strong>4)</strong><br><br>" +
    this.educationIntervention + "<br><br>" +
    this.educationalOutcome;
  } else {
    return "<strong>1)</strong><br><br>" +
    this.labsIntervention + "<br><br>" +
    this.labsOutcome + "<br><br>" +
    "<strong>2)</strong><br><br>" +
    this.assessmentReviewIntervention + "<br><br>" +
    this.assessmentOutcome + "<br><br>" +
    "<strong>3)</strong><br><br>" +
    this.transportIntervention + "<br><br>" +
    this.transportOutcome + "<br><br>" +
    "<strong>4)</strong><br><br>" +
    this.careGapIntervention + "<br><br>" +
    this.careGapOutcome + "<br><br>" +
    "<strong>5)</strong><br><br>" +
    this.educationIntervention + "<br><br>" +
    this.educationalOutcome;
  }
}
