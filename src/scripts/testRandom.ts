import { getRandomElementFromArray } from "../helpers/random";
import { getArrayFromRange } from "../helpers/util";

function main() {
  const arraySize = 12;
  const iterations = 100_000;

  const array = getArrayFromRange(0, arraySize);

  const resultCounts = array.map(() => 0);

  for (let i = 0; i < iterations; i++) {
    const value = getRandomElementFromArray(array);
    resultCounts[value] += 1;
  }

  for (let result of resultCounts.keys()) {
    console.log(`${result}: ${resultCounts[result]}`);
  }
  const min = resultCounts.reduce(
    (accum, curr) => (accum < curr ? accum : curr),
    Number.MAX_SAFE_INTEGER
  );
  const max = resultCounts.reduce(
    (accum, curr) => (accum > curr ? accum : curr),
    0
  );
  const diff = max - min;
  console.log(`max: ${max}`);
  console.log(`min: ${min}`);
  console.log(`diff: ${diff}`);
}

main();
