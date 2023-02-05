import { makeNumberedDie } from "./dice";

describe("makeNumberedDie", () => {
  it("makes die from just number", () => {
    const d4 = makeNumberedDie({ dNumber: 4 });
    expect(d4).toEqual({ name: "d4", choices: ["1", "2", "3", "4"] });
  });

  it("makes die with custom name", () => {
    const d6 = makeNumberedDie({ dNumber: 6, name: "regular die" });
    expect(d6).toEqual({
      name: "regular die",
      choices: ["1", "2", "3", "4", "5", "6"],
    });
  });

  it("makes die with custom modifier", () => {
    const d6 = makeNumberedDie({
      dNumber: 6,
      name: "regular die but times 10",
      choiceModifier: (choice) => choice + "0",
    });
    expect(d6).toEqual({
      name: "regular die but times 10",
      choices: ["10", "20", "30", "40", "50", "60"],
    });
  });
});
