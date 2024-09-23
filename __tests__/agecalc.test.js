import { UserAgeObject } from './../src/index.js';

describe("UserAgeObject", () => {
  describe("getAgeOnOtherPlanets()", () => {
    test("It should return a set=like object" , () => {
      let testAgeObject = new UserAgeObject(Date.now()); 
      let testMap = testAgeObject.getAgeOnOtherPlanets();
      //These two functions are in both JS sets and maps
      //Don't use union() et al because thats very recently implemented in browsers
      expect(testMap.has.toString()).toBeTruthy();
      expect(testMap.keys.toString()).toBeTruthy();
    });
  });
});

