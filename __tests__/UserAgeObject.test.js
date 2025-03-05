import { UserAgeObject } from '../src/UserAgeObject.js';

//TODO: use numbers not dates

const testFirstAge = 21;
const testSecondAge = 23;

let testObject = new UserAgeObject(testFirstAge,testSecondAge);

describe("UserAgeObject", () => {

  beforeEach(() => {
    testObject = new UserAgeObject(testFirstAge,testSecondAge);
  });

  describe("constructor()", () => {
    test("It should write its first argument to the variable \"inputAgeYears\"", () => {
      expect(testObject.inputAgeYears).toStrictEqual(testFirstAge);
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
  });
  describe("getOtherPlanetYearsUntilSince()", () => {
    test("It should return a set like object", () => {
      let testMap = testObject.getOtherPlanetYearsUntilSince(1);
      expect(testMap.has.toString()).toBeTruthy();
      expect(testMap.keys.toString()).toBeTruthy();
    });
    test("The returned object should have the following keys: \nEarth\nMercury\nVenus\nMars\nJupiter", () => {
      let testMap = testObject.getOtherPlanetYearsUntilSince(1);
      expect(testMap.has("Earth")).toBeTruthy();
      expect(testMap.has("Mercury")).toBeTruthy();
      expect(testMap.has("Venus")).toBeTruthy();
      expect(testMap.has("Mars")).toBeTruthy();
      expect(testMap.has("Jupiter")).toBeTruthy();
    });
    test("The value of \'Mercury\' should be the difference between the argument and inputAgeYears, times 1/.24", () => {
      let testMap = testObject.getOtherPlanetYearsUntilSince(testSecondAge);
      expect(testMap.get("Mercury")).toBe((testSecondAge - testObject.inputAgeYears) * (1/.24));
    });
    test("The value of \'Venus\' should be the difference between the argument and inputAgeYears, times 1/.62", () => {
      let testMap = testObject.getOtherPlanetYearsUntilSince(testSecondAge);
      expect(testMap.get("Venus")).toBe((testSecondAge - testObject.inputAgeYears) * (1/.62));
    });
    test("The value of \'Mars\' should be the difference between the argument and inputAgeYears, times 1/1.88 ", () => {
      let testMap = testObject.getOtherPlanetYearsUntilSince(testSecondAge);
      expect(testMap.get("Mars")).toBe((testSecondAge - testObject.inputAgeYears) * (1/1.88));
    });
    test("The value of \'Jupiter\' should be the difference between the argument and inputAgeYears, times 1/11.86", () => {
      let testMap = testObject.getOtherPlanetYearsUntilSince(testSecondAge);
      expect(testMap.get("Jupiter")).toBe((testSecondAge - testObject.inputAgeYears) * (1/11.86));
    });
  });
});
