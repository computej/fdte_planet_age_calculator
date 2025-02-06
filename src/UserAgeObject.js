export class UserAgeObject {
  //TODO: Numbers: not dates
  constructor(dateOne,dateTwo) {
    this.firstDate = dateOne;
    this.secondDate = 0;
    /*istanbul ignore else */ 
    if(!isNaN(dateTwo) &&  isFinite(dateTwo)) {
      this.secondDate = dateTwo;
    }
  }

  getOtherPlanetAgeValues() {
    const ageDifference = (this.secondDate - this.firstDate);
    return new Map([
      ["Earth", Math.abs(ageDifference)],
      ["Mercury", Math.abs(ageDifference) * (1/.24)],
      ["Venus",Math.abs(ageDifference) * (1/.62)],
      ["Mars",Math.abs(ageDifference) * (1/1.88)],
      ["Jupiter", Math.abs(ageDifference) * (1/11.86)],
      ["futureOrPast", Math.sign(ageDifference) > 0 ? "Future Age" : "Past Age"]
    ]);
  }
}