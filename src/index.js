export class UserAgeObject {

  constructor(dateOne,dateTwo) {
      this.firstDate = dateOne;
      if(!dateTwo) { 
        this.secondDate = Date.now();
      } else {
        this.secondDate = dateTwo;
      }
      if (this.firstDate.valueOf() >= this.secondDate.valueOf()) {
        throw new Error('The first date must be chronologically before the second date');
      }
  }

  oneYearMS = 1;

  getAgeOnOtherPlanets() {

    const ageDifference = this.secondDate.valueOf() - this.firstDate.valueOf();
    return new Map([
      ["Mercury", ageDifference * (1/.24)],
      ["Venus",ageDifference * (1/.62)],
      ["Mars",ageDifference * (1/1.88)],
      ["Jupiter", ageDifference * (1/11.86)]
    ]);
  }
}