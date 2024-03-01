import { deepStrictEqual } from "assert";
function filterObject(object, ...args) {
    const newObj = {};
    console.log(Object.entries(object));
  for (let [key, value] of Object.entries(object)) {
    if (
      args.some(
        (arg) =>
          arg(key, value) ||
          value === arg
      )
    ) {
      newObj[key] = value;
    }
  }console.log(newObj);
  return newObj;
}

deepStrictEqual(
  filterObject(
    {
      foo: 1,
      bar: "hello",
      baz: true,
    },
    (key, value) => key === "foo" || value === "hello"
  ),
  {
    foo: 1,
    bar: "hello",
  }
);
