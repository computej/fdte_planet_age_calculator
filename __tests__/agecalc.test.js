import { UserAgeObject } from './../src/business.js';


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
      expect(testObject.firstDate).toStrictEqual(testFirstDate);
    });
    test("It should write its second argument to \"secondDate\"", () => {
      expect(testObject.secondDate).toStrictEqual(testSecondDate);
    });
    test("If the second argument is undefined, write Date.Now to secondDate", () => {
      //TODO: make more strict, see if it's between the time of starting this and the time that expect is called
      let testAgeObject = new UserAgeObject(testFirstDate);
      expect(testAgeObject.secondDate).toBeTruthy(); //that date is always incrementing by nature, just check for existence
    });
  });
  describe("getOtherPlanetValue()", () => {
    test("It should return a set-like object" , () => {
      let testMap = testObject.getOtherPlanetValue();
      //These two functions are in both JS sets and maps
      //Don't use union() et al because that's very recently implemented in browsers
      expect(testMap.has.toString()).toBeTruthy();
      expect(testMap.keys.toString()).toBeTruthy();
    });
    test("The returned object should have the following keys: \nMercury\nVenus\nMars\nJupiter" , () => {
      let testMap = testObject.getOtherPlanetValue();
      expect(testMap.has("Mercury")).toBeTruthy();
      expect(testMap.has("Venus")).toBeTruthy();
      expect(testMap.has("Mars")).toBeTruthy();
      expect(testMap.has("Jupiter")).toBeTruthy();
    });
    test("The value of the \"Mercury\" key is equal to 1/.24 times the argument", () => {
      //TODO: Rework: give it a argument
      expect(testObject.getOtherPlanetValue().get("Mercury")).toBe(testDuration * (1/.24));
    });
    test("The value of the \"Venus\" key is equal to 1/.62 times the argument", () => {
      expect(testObject.getOtherPlanetValue().get("Venus")).toBe(testDuration * (1/.62));
    });
    test("The value of the \"Mars\" key is equal to 1/1.88 times the argument", () => {
      expect(testObject.getOtherPlanetValue().get("Mars")).toBe(testDuration * (1/1.88));
    });
    test("The value of the \"Jupiter\" key is equal to 1/11.86 times the argument", () => {
      expect(testObject.getOtherPlanetValue().get("Jupiter")).toBe(testDuration * (1/11.86));
    });
  });
});
