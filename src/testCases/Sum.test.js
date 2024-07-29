const Sum = require("./Sum");

describe("Sum Component Test", () => {
  test("first test case", () => {
    let data = 10;
    expect(data).toBe(10);
  });

  //   test("second test case - Sum check correct", () => {
  //     expect(Sum(1, 2)).toBe(3);
  //   });

  //   test("third test case - Sum check not-correct", () => {
  //     expect(Sum(1, 2)).not.toBe(4);
  //   });

  // test("four test case - Object Check ", () => {
  //   let data = Sum(1, 2);
  //   expect(data).toEqual({ name: "code" });
  // });

  // test("five case - test callback function", (done) => {
  //   function callback(data) {
  //     try {
  //       expect(data).toBe("Hello");
  //       done();
  //     } catch (error) {
  //       done(error);
  //     }
  //   }
  //   Sum(callback);
  // });

  test("six - promise check", () => {
    return Sum().then((data) => {
      expect(data).toBe("Hello");
    });
  });

  test("seven - async & await function test", async () => {
    const data = await Sum();
    expect(data).toBe("Hello");
  });
});
