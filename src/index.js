import { UserAgeObject } from './UserAgeObject.js';
import './css/index.css';

function durationMStoYears(ms) {
  const durationYears = ms / 31556952000;
  return durationYears;
}

window.addEventListener("load", function() {
  let ageForm = document.getElementById("age-form");
  ageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstDate = Date.parse(this.document.getElementById("firstdate-input").value);
    const secondDate = Date.parse(this.document.getElementById("seconddate-input").value);
    let ages = new UserAgeObject(new Date(firstDate), new Date(secondDate)).getOtherPlanetAgeValues();
    let timespanTableElements =  document.querySelectorAll("#timespan-display td[id|=timespan]");
    let mapIndex = 0;
    ages.forEach((value) => {
      timespanTableElements[mapIndex].innerHTML = durationMStoYears(value).toFixed(2);
      mapIndex++;
    });
    this.document.getElementById("timespan-display").style.display = "block";
  });
});