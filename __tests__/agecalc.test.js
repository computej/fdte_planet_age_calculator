describe("userAgeObject", () => {
  describe("getAgeOnOtherPlanets()", () => {
    test("It should return a set=like object" , () => {
      let testAgeObject = new userAgeObject(Date.now()); 
      let testMap = testAgeObject.getAgeOnOtherPlanets();
      expect(testMap.get.toString()).toBeTruthy();
      expect(testMap.set.toString()).toBeTruthy();
    });
  });
});

