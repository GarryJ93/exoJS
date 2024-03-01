import { deepStrictEqual } from "assert";
function categorize(values) {
  let obj = {};
   for (let value of values) {
     let type = typeof value;
     if (!obj[type]) {
       obj[type] = [];
     }
     obj[type].push(value);
   }
  return obj;
}
deepStrictEqual(
  categorize([
    1,
    "hello",
    function sayHi() {
      console.log("hi");
    },
    "world",
    true,
    0n,
    1000,
  ]),
  {
    number: [1, 1000],
    string: ["hello", "world"],
    function: [
      function sayHi() {
        console.log("hi");
      },
    ],
    boolean: [true],
    bigint: [0n],
  }
);


