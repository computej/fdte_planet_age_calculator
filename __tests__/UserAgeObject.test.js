import { UserAgeObject } from '../src/UserAgeObject.js';

//TODO: use numbers not dates

const testFirstAge = 21;
const testSecondAge = 23;

const testDuration = testSecondAge - testFirstAge;
let testObject = new UserAgeObject(testFirstAge,testSecondAge);

describe("UserAgeObject", () => {

  beforeEach(() => {
    testObject = new UserAgeObject(testFirstAge,testSecondAge);
  });

  describe("constructor()", () => {
    test("It should write its first argument to the variable \"firstDate\"", () => {
      expect(testObject.firstDate).toStrictEqual(testFirstAge);
    });
    test("It should write its second argument to \"secondDate\"", () => {
      expect(testObject.secondDate).toStrictEqual(testSecondAge);
    });
    test.skip("If the second argument is undefined, write Date.Now to secondDate", () => {
      let testAgeObject = new UserAgeObject(testFirstAge);
      expect(testAgeObject.secondDate).toBeTruthy(); //that date is always incrementing by nature, just check for existence
    });
  });
  describe("getOtherPlanetAgeValues()", () => {
    test("It should return a set-like object" , () => {
      let testMap = testObject.getOtherPlanetAgeValues();
      expect(testMap.has.toString()).toBeTruthy();
      expect(testMap.keys.toString()).toBeTruthy();
    });
    test("The returned object should have the following keys: \nMercury\nVenus\nMars\nJupiter" , () => {
      let testMap = testObject.getOtherPlanetAgeValues();
      expect(testMap.has("Mercury")).toBeTruthy();
      expect(testMap.has("Venus")).toBeTruthy();
      expect(testMap.has("Mars")).toBeTruthy();
      expect(testMap.has("Jupiter")).toBeTruthy();
    });
    test("The value of the \"Mercury\" key is equal to 1/.24 times the argument", () => {
      expect(testObject.getOtherPlanetAgeValues().get("Mercury")).toBe(testDuration * (1/.24));
    });
    test("The value of the \"Venus\" key is equal to 1/.62 times the argument", () => {
      expect(testObject.getOtherPlanetAgeValues().get("Venus")).toBe(testDuration * (1/.62));
    });
    test("The value of the \"Mars\" key is equal to 1/1.88 times the argument", () => {
      expect(testObject.getOtherPlanetAgeValues().get("Mars")).toBe(testDuration * (1/1.88));
    });
    test("The value of the \"Jupiter\" key is equal to 1/11.86 times the argument", () => {
      expect(testObject.getOtherPlanetAgeValues().get("Jupiter")).toBe(testDuration * (1/11.86));
    });
  });
});
