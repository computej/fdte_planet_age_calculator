export class UserAgeObject {
  constructor(dateOne,dateTwo) {
      this.firstDate = dateOne;
      if(!dateTwo) { 
        this.secondDate = Date.now();
      } else {
        this.secondDate = dateTwo;
      }
  }

  getOtherPlanetValue() {
    const ageDifference = Math.abs(this.secondDate.valueOf() - this.firstDate.valueOf());
    return new Map([
      ["Mercury", ageDifference * (1/.24)],
      ["Venus",ageDifference * (1/.62)],
      ["Mars",ageDifference * (1/1.88)],
      ["Jupiter", ageDifference * (1/11.86)]
    ]);
  }

  durationMStoYears() {
    const durationYears = Math.abs(this.secondDate.valueOf() - this.firstDate.valueOf()) / 31556952000;
    return durationYears;
  }
}