export class UserAgeObject {
  constructor(dateOne,dateTwo) {
    this.firstDate = dateOne;
    this.secondDate = dateTwo;
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