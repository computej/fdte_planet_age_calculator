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

  getAgeOnOtherPlanets() {
    return new Map([
      ["Mercury", false],
      ["Venus",false],
      ["Mars",false],
      ["Jupiter", false]
    ]);
  }
}