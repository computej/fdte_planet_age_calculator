//TODO: UI logic
import { UserAgeObject } from './../src/business.js';
import './css/index.css';

window.addEventListener("load", function() {
  let ageForm = document.getElementById("age-form");
  ageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputDate = Date.parse(this.document.getElementById("birthday-input").value);
    let ages = new UserAgeObject(new Date(inputDate), new Date(Date.now())).getOtherPlanetValue();
    let timespanTableElements =  document.querySelectorAll("#timespan-display td[id|=timespan]");
    let mapIndex = 0; // map foreach has key and value but no index indicator
    ages.forEach((value, key) => {
      timespanTableElements[mapIndex].innerHTML = (value  / 31556952000).toFixed(2);
      mapIndex++;
    });
  });
});