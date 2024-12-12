export class UserAgeObject {
  constructor(dateOne,dateTwo) {
      this.firstDate = new Date(dateOne);
      if(!dateTwo) { 
        this.secondDate = new Date(Date.now());
      } else {
        this.secondDate = new Date(dateTwo);
      }
  }

  getOtherPlanetAgeValues() {
    const ageDifference = Math.abs(this.secondDate.valueOf() - this.firstDate.valueOf());
    return new Map([
      ["Mercury", ageDifference * (1/.24)],
      ["Venus",ageDifference * (1/.62)],
      ["Mars",ageDifference * (1/1.88)],
      ["Jupiter", ageDifference * (1/11.86)]
    ]);
  }
}