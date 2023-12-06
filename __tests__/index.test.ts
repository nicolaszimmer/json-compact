import JSONcompact from "../src/index";

describe("JSONcompact", () => {
  test("compacts JSON data correctly", () => {
    const input = [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
    ];
    const expectedColumns = ["name", "age"];
    const expectedRows = [
      ["Alice", 30],
      ["Bob", 25],
    ];

    const result = JSONcompact.compact(input);

    expect(result.columns).toEqual(expectedColumns);
    expect(result.rows).toEqual(expectedRows);
  });

  test("compacts JSON data with null values correctly", () => {
    const input = [
      { name: "Alice", age: 30 },
      { name: "Bob", age: null },
    ];
    const expectedColumns = ["name", "age"];
    const expectedRows = [
      ["Alice", 30],
      ["Bob", null],
    ];

    const result = JSONcompact.compact(input);

    expect(result.columns).toEqual(expectedColumns);
    expect(result.rows).toEqual(expectedRows);
  });

  test("compacts JSON data with custom description correctly", () => {
    const input = [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
    ];
    const expectedDescription = "This is a test";

    const result = JSONcompact.compact(input, expectedDescription);

    expect(result.description).toEqual(expectedDescription);
  });

  test("expands compacted JSON data correctly", () => {
    const input = [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
    ];
    const compacted = JSONcompact.compact(input);

    const result = JSONcompact.expand(compacted);

    expect(result).toEqual(input);
  });
});
