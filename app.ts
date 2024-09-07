let skillsList = document.getElementById("skillsList") as HTMLUListElement;
let educationList = document.getElementById(
  "educationList"
) as HTMLUListElement;
let experienceList = document.getElementById(
  "experienceList"
) as HTMLUListElement;
let showSkillsBtn = document.getElementById(
  "showHideSkillsBtn"
) as HTMLButtonElement;
let showEducationBtn = document.getElementById(
  "showHideEducationBtn"
) as HTMLButtonElement;
let showExperienceBtn = document.getElementById(
  "showHideExpBtn"
) as HTMLButtonElement;

const showHideSkillsBtn = () => {
  if (skillsList.style.display === "none") {
    showSkillsBtn.innerText = "Hide skills";
    skillsList.style.display = "block";
  } else {
    skillsList.style.display = "none";
    showSkillsBtn.innerText = "Show skills";
  }
};

const showHideEducationBtn = () => {
  if (educationList.style.display === "none") {
    showEducationBtn.innerText = "Hide education";
    educationList.style.display = "block";
  } else {
    educationList.style.display = "none";
    showEducationBtn.innerText = "Show education";
  }
};

const showHideExpBtn = () => {
  if (experienceList.style.display === "none") {
    showExperienceBtn.innerText = "Hide experience";
    experienceList.style.display = "block";
  } else {
    experienceList.style.display = "none";
    showExperienceBtn.innerText = "Show experience";
  }
};
