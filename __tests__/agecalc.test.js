import { UserAgeObject } from './../src/index.js';

const testFirstDate = new Date(2002, 1, 17);
const testSecondDate = new Date(2024, 7, 8);

describe("UserAgeObject", () => {
  describe("constructor()", () => {
    test("It should write its first argument to the variable \"firstDate\"", () => {
      let testAgeObject = new UserAgeObject(testFirstDate);
      expect(testAgeObject.firstDate).toBe(testFirstDate);
    });
    test("It should write its second argument to \"secondDate\"", () => {
      let testAgeObject = new UserAgeObject(testFirstDate, testSecondDate);
      expect(testAgeObject.secondDate).toBe(testSecondDate);
    });
    test("If the second argument is undefined, write Date.Now to secondDate", () => {
      let testAgeObject = new UserAgeObject(testFirstDate);
      expect(testAgeObject.secondDate).toBeTruthy(); //that date is always incrementing by nature, just check for existence
    });
    test("It should throw an exeption if the first date is chronologically after the second date", () => {
      //as in the first argument is a date that's after the second argument
      expect(() => { let testAgeObject = new UserAgeObject(testSecondDate,testFirstDate) }).toThrow();
      expect(() => { let testAgeObject = new UserAgeObject(testFirstDate,testSecondDate) }).not.toThrow();
    });
  });
  describe("getAgeOnOtherPlanets()", () => {
    test("It should return a set=like object" , () => {
      let testAgeObject = new UserAgeObject(testFirstDate, testSecondDate);
      let testMap = testAgeObject.getAgeOnOtherPlanets();
      //These two functions are in both JS sets and maps
      //Don't use union() et al because thats very recently implemented in browsers
      expect(testMap.has.toString()).toBeTruthy();
      expect(testMap.keys.toString()).toBeTruthy();
    });
    test("The returned object should have the following keys: \nMercury\nVenus\nMars\nJupiter" , () => {
      let testAgeObject = new UserAgeObject(testFirstDate, testSecondDate);
      let testMap = testAgeObject.getAgeOnOtherPlanets();
      expect(testMap.has("Mercury")).toBeTruthy();
      expect(testMap.has("Venus")).toBeTruthy();
      expect(testMap.has("Mars")).toBeTruthy();
      expect(testMap.has("Jupiter")).toBeTruthy();
    });
    test.skip("The value of the \"Mercury\" key is equal to .24 times the difference of firstDate and secondDate", () => {
      //as in the raw milliseconds from Date.getTime()
    });
  });
});

