import { UserAgeObject } from './UserAgeObject.js';
import './css/index.css';

window.addEventListener("load", function() {
  let ageForm = document.getElementById("age-form");
  ageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstDate = this.document.getElementById("firstdate-input").value;
    const secondDate = this.document.getElementById("seconddate-input").value;
    let ages = new UserAgeObject(firstDate, secondDate).getOtherPlanetAgeValues();
    let timespanTableElements =  document.querySelectorAll("#timespan-display td[id|=timespan]");
    let mapIndex = 0;
    ages.forEach((value) => {
      if(mapIndex < 5) {
        timespanTableElements[mapIndex].innerHTML = value.toFixed(2);
      }
      mapIndex++;
    });
    this.document.getElementById("timespan-display").style.display = "block";
    if(ages.get("futureOrPast") === "Past Age") {
      this.document.querySelector(".years-header").textContent = "Years Since";
    } else {
      this.document.querySelector(".years-header").textContent = "Years Until";
    }
  });
});