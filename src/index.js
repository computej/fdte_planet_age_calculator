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

  getAgeMSOnOtherPlanets() {

    const ageDifference = this.secondDate.valueOf() - this.firstDate.valueOf();
    return new Map([
      ["Mercury", ageDifference * (1/.24)],
      ["Venus",ageDifference * (1/.62)],
      ["Mars",ageDifference * (1/1.88)],
      ["Jupiter", ageDifference * (1/11.86)]
    ]);
  }

  MStoYMD(ms) {
    //year count
    let outMap = new Map([
      ["Years",0],
      ["Months",0],
      ["Days",0]
    ]);
    for (let index = ms; index >= 31556952000; index -= 31556952000) {
      outMap.set("Years", outMap.get("Years") + 1);
    }
    return outMap;
  }
}