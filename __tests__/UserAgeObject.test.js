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
    test("It should write its first argument to the variable \"inputAgeYears\"", () => {
      expect(testObject.inputAgeYears).toStrictEqual(testFirstAge);
    });
    test.skip("It should write its second argument to \"secondDate\"", () => {
      expect(testObject.secondDate).toStrictEqual(testSecondAge);
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
    test("The value of the \"Mercury\" key is equal to 1/.24 times the value of testFirstAge", () => {
      expect(testObject.getOtherPlanetAgeValues().get("Mercury")).toBe(testFirstAge * (1/.24));
    });
    test("The value of the \"Venus\" key is equal to 1/.62 times the value of testFirstAge", () => {
      expect(testObject.getOtherPlanetAgeValues().get("Venus")).toBe(testFirstAge * (1/.62));
    });
    test("The value of the \"Mars\" key is equal to 1/1.88 times the value of testFirstAge", () => {
      expect(testObject.getOtherPlanetAgeValues().get("Mars")).toBe(testFirstAge * (1/1.88));
    });
    test("The value of the \"Jupiter\" key is equal to 1/11.86 times the value of testFirstAge", () => {
      expect(testObject.getOtherPlanetAgeValues().get("Jupiter")).toBe(testFirstAge * (1/11.86));
    });

    //may move to the new function
    test.skip("if the difference between secondDate and firstDate is a positive value, write \"Future Age\" to futureOrPast", () => {
      expect(testObject.getOtherPlanetAgeValues().get("futureOrPast")).toBe("Future Age");
    });
    test.skip("if the difference between secondDate and firstDate is a negative value or equal to 0, write \"Past Age\" to futureOrPast", () => {
      let newTestObject = new UserAgeObject(testSecondAge,testFirstAge);
      expect(newTestObject.getOtherPlanetAgeValues().get("futureOrPast")).toBe("Past Age");
    });
  });
  //TODO: New function to be added, computes years until or since a different age.
  describe("getYearsUntilSince()", () => {
    test.skip("WIP", () => {
      
    });
  });
});
