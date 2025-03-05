export class UserAgeObject {
  constructor(dateOne) {
    this.inputAgeYears = dateOne;
  }

  getOtherPlanetAgeValues() {
    return new Map([
      ["Earth", this.inputAgeYears],
      ["Mercury", this.inputAgeYears * (1/.24)],
      ["Venus",this.inputAgeYears * (1/.62)],
      ["Mars",this.inputAgeYears * (1/1.88)],
      ["Jupiter", this.inputAgeYears * (1/11.86)]
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