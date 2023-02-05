import { makeNumberedDiceSet } from "./dice";

describe("makeNumberedDiceSet", () => {
  it("returns correct dice configuration for list with both numbers and objects", () => {
    const config = [
      2,
      { name: "just a regular die", number: 6 },
      { name: "die x 10", number: 6, suffix: "0" },
      12,
    ];

    const expectedOutput = {
      d2: {
        name: "d2",
        choices: ["1", "2"],
      },
      "just a regular die": {
        name: "just a regular die",
        choices: ["1", "2", "3", "4", "5", "6"],
      },
      "die x 10": {
        name: "die x 10",
        choices: ["10", "20", "30", "40", "50", "60"],
      },
      d12: {
        name: "d12",
        choices: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
        ],
      },
    };

    const dice = makeNumberedDiceSet(config);
    expect(dice).toEqual(expectedOutput);
  });
});
