function deepClone(value) {
  let newObj = {};
  for (let [key, val] of Object.entries(value)) {
    if (typeof val === "object") {
      newObj[key] = {};
      for (let [insideKey, insideVal] of Object.entries(val)) {
        if (typeof insideVal === "object") {
          newObj[key][insideKey] = deepClone(insideVal);
        } else {
          newObj[key][insideKey] = insideVal;
        }
      }
    } else {
      newObj[key] = val;
    }
  }
  console.log(newObj);
  return newObj;
}

const original = {
  n: 1,
  subObj: {
    s: "foo",
    anotherSubObj: {
      t: "bar",
    },
  },
};

const clone = deepClone(original);

if (
  [
    () => clone !== original,
    () => clone.n === original.n,
    () => typeof clone.subObj === "object",
    () => clone.subObj !== original.subObj,
    () => clone.subObj.s === original.subObj.s,
    () => clone.subObj.anotherSubObj !== original.subObj.anotherSubObj,
    () => clone.subObj.anotherSubObj.t === original.subObj.anotherSubObj.t,
  ].some((check) => !check())
)
  throw Error("not a deep clone !");
