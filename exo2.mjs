import { deepStrictEqual } from "assert";

Array.prototype.dedup = function () {
  let newList = [];
  for (let number of this) {
    if (!newList.includes(number)) {
      newList.push(number);
    }
  }
  return newList;
};

console.log([1, 1, 6, 2, 3, 2, 2, 4, 6, 6, 1].dedup());

deepStrictEqual(
  [1, 1, 6, 2, 3, 2, 2, 4, 6, 6, 1].dedup(),
  [1, 6, 2, 3, 4]
);
