var skillsList = document.getElementById("skillsList");
var educationList = document.getElementById("educationList");
var experienceList = document.getElementById("experienceList");
var showSkillsBtn = document.getElementById("showHideSkillsBtn");
var showEducationBtn = document.getElementById("showHideEducationBtn");
var showExperienceBtn = document.getElementById("showHideExpBtn");
var showHideSkillsBtn = function () {
    if (skillsList.style.display === "none") {
        showSkillsBtn.innerText = "Hide skills";
        skillsList.style.display = "block";
    }
    else {
        skillsList.style.display = "none";
        showSkillsBtn.innerText = "Show skills";
    }
};
var showHideEducationBtn = function () {
    if (educationList.style.display === "none") {
        showEducationBtn.innerText = "Hide education";
        educationList.style.display = "block";
    }
    else {
        educationList.style.display = "none";
        showEducationBtn.innerText = "Show education";
    }
};
var showHideExpBtn = function () {
    if (experienceList.style.display === "none") {
        showExperienceBtn.innerText = "Hide experience";
        experienceList.style.display = "block";
    }
    else {
        experienceList.style.display = "none";
        showExperienceBtn.innerText = "Show experience";
    }
};
