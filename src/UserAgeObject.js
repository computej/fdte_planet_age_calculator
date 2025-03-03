export class UserAgeObject {
  //TODO: rename a few variables here. what to do with dateTwo?
  //TODO: use only one argument
  constructor(dateOne,dateTwo) {
    this.inputAgeYears = dateOne;
    this.secondDate = 0;
    /*istanbul ignore else */ 
    if(!isNaN(dateTwo) &&  isFinite(dateTwo)) {
      this.secondDate = dateTwo;
    }
  }

  getOtherPlanetAgeValues() {
    return new Map([
      ["Earth", this.inputAgeYears],
      ["Mercury", this.inputAgeYears * (1/.24)],
      ["Venus",this.inputAgeYears * (1/.62)],
      ["Mars",this.inputAgeYears * (1/1.88)],
      ["Jupiter", this.inputAgeYears * (1/11.86)],
      ["futureOrPast", Math.sign(this.inputAgeYears) > 0 ? "Future Age" : "Past Age"]
    ]);
  }

  getOtherPlanetYearsUntilSince(compareAge) {
    const ageDifference = compareAge - this.inputAgeYears;
    return new Map([
      ["Earth", ageDifference],
      ["Mercury", ageDifference * (1/.24)],
      ["Venus", ageDifference * (1/.62)],
      ["Mars", ageDifference * (1/1.88)],
      ["Jupiter", ageDifference * (1/11.86)]
    ]);
  }
}