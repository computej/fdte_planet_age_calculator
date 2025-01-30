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
    const ageDifference = Math.abs(this.secondDate - this.firstDate);
    return new Map([
      ["Earth", ageDifference],
      ["Mercury", ageDifference * (1/.24)],
      ["Venus",ageDifference * (1/.62)],
      ["Mars",ageDifference * (1/1.88)],
      ["Jupiter", ageDifference * (1/11.86)]
    ]);
  }
}