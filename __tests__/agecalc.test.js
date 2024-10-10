import { UserAgeObject } from './../src/index.js';


//the month starts at 0 here
const testFirstDate = new Date(2002, 1, 17);
const testSecondDate = new Date(2024, 7, 8);
const testDuration = testSecondDate.valueOf() - testFirstDate.valueOf();
let testObject = new UserAgeObject(testFirstDate,testSecondDate);

describe("UserAgeObject", () => {

  beforeEach(() => {
    testObject = new UserAgeObject(testFirstDate,testSecondDate);
  });

  describe("constructor()", () => {
    test("It should write its first argument to the variable \"firstDate\"", () => {
      expect(testObject.firstDate).toBe(testFirstDate);
    });
    test("It should write its second argument to \"secondDate\"", () => {
      expect(testObject.secondDate).toBe(testSecondDate);
    });
    test("If the second argument is undefined, write Date.Now to secondDate", () => {
      //TODO: make more strict, see if it's between the time of starting this and the time that expect is called
      let testAgeObject = new UserAgeObject(testFirstDate);
      expect(testAgeObject.secondDate).toBeTruthy(); //that date is always incrementing by nature, just check for existence
    });
    test("It should throw an exception if the first date is chronologically after the second date", () => {
      //as in the first argument is a date that's after the second argument
      expect(() => { let objectThatShouldThrow = new UserAgeObject(testSecondDate,testFirstDate) }).toThrow();
      expect(() => { let objectThatShouldNotThrow = new UserAgeObject(testFirstDate,testSecondDate) }).not.toThrow();
    });
  });
  describe("getAgeMSOnOtherPlanets()", () => {
    test("It should return a set-like object" , () => {
      let testMap = testObject.getAgeMSOnOtherPlanets();
      //These two functions are in both JS sets and maps
      //Don't use union() et al because that's very recently implemented in browsers
      expect(testMap.has.toString()).toBeTruthy();
      expect(testMap.keys.toString()).toBeTruthy();
    });
    test("The returned object should have the following keys: \nMercury\nVenus\nMars\nJupiter" , () => {
      let testMap = testObject.getAgeMSOnOtherPlanets();
      expect(testMap.has("Mercury")).toBeTruthy();
      expect(testMap.has("Venus")).toBeTruthy();
      expect(testMap.has("Mars")).toBeTruthy();
      expect(testMap.has("Jupiter")).toBeTruthy();
    });
    test("The value of the \"Mercury\" key is equal to 1/.24 times the difference of firstDate and secondDate", () => {
      //we are checking the milliseconds from epoch from valueOf
      const earthDifference = (testSecondDate.valueOf() - testFirstDate.valueOf());
      expect(testObject.getAgeMSOnOtherPlanets().get("Mercury")).toBe(earthDifference * (1/.24));
    });
    test("The value of the \"Venus\" key is equal to 1/.62 times the difference of firstDate and secondDate", () => {
      const earthDifference = (testSecondDate.valueOf() - testFirstDate.valueOf());
      expect(testObject.getAgeMSOnOtherPlanets().get("Venus")).toBe(earthDifference * (1/.62));
    });
    test("The value of the \"Mars\" key is equal to 1/1.88 times the difference of firstDate and secondDate", () => {
      const earthDifference = (testSecondDate.valueOf() - testFirstDate.valueOf());
      expect(testObject.getAgeMSOnOtherPlanets().get("Mars")).toBe(earthDifference * (1/1.88));
    });
    test("The value of the \"Jupiter\" key is equal to 1/11.86 times the difference of firstDate and secondDate", () => {
      const earthDifference = (testSecondDate.valueOf() - testFirstDate.valueOf());
      expect(testObject.getAgeMSOnOtherPlanets().get("Jupiter")).toBe(earthDifference * (1/11.86));
    });
  });
  describe("MStoYMD", () => { //maybe this could be a global function?
    test("It should return a map containing \"Years\", \"Months\", and \"Days\"", () => {
      const outMap = testObject.MStoYMD();
      expect(outMap.has("Years")).toBeTruthy();
      expect(outMap.has("Months")).toBeTruthy();
      expect(outMap.has("Days")).toBeTruthy();
    });
    test("It should decrement the input by 31,556,952,000 until less than 31,556,952,000, incrementing \"Years\" as it does so", () => {
      const outMap = testObject.MStoYMD(testDuration);
      expect(outMap.get("Years")).toBe(22);
      const otherMap = testObject.MStoYMD(31556952001);
      expect(otherMap.get("Years")).toBe(1);
    });
  });
});

