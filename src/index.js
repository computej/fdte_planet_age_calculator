export class UserAgeObject {
  constructor(date) {
    this.givenBirthday = date;
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