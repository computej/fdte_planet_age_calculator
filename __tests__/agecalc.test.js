import { UserAgeObject } from './../src/index.js';

const testFirstDate = new Date(2002, 2, 17);
const testSecondDate = new Date(2024, 8, 8);

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
  });
  describe("getAgeOnOtherPlanets()", () => {
    test("It should return a set=like object" , () => {
      let testAgeObject = new UserAgeObject(Date.now()); 
      let testMap = testAgeObject.getAgeOnOtherPlanets();
      //These two functions are in both JS sets and maps
      //Don't use union() et al because thats very recently implemented in browsers
      expect(testMap.has.toString()).toBeTruthy();
      expect(testMap.keys.toString()).toBeTruthy();
    });
    test("The returned object should have the following keys: \nMercury\nVenus\nMars\nJupiter" , () => {
      let testAgeObject = new UserAgeObject(Date.now());
      let testMap = testAgeObject.getAgeOnOtherPlanets();
      expect(testMap.has("Mercury")).toBeTruthy();
      expect(testMap.has("Venus")).toBeTruthy();
      expect(testMap.has("Mars")).toBeTruthy();
      expect(testMap.has("Jupiter")).toBeTruthy();
    });
    test.skip("TDB", () => {

    });
  });
});

