# README for JSONcompact

## Overview

JSONcompact is a TypeScript/JavaScript library designed to convert complex JSON data into a compact, tabular format. This format is particularly suitable for processing and analysis with AI models like GPT-3. The library also provides functionality to revert this compacted data back to its original form. It offers an optional feature to round numerical values to a specified number of decimal places. The library is useful in scenarios where you need to minimize JSON size without losing the essence and structure of the data. **You can expect a reduction in token size of >40% for larger data sets.**


## Features

- **Compact**: Converts a JSON array of objects into a compact format with a descriptive header, reducing the size of the JSON data.
- **Optional Rounding**: Option to round numerical values to a specified number of decimal places.
- **Expand**: Reverts the compacted data back to its original JSON format.
- **Customizable Description**: Allows for a custom description for the compacted data, aiding in clarity and context for AI models.
- **Support for String and Object Input**: Accepts JSON data as both string and object formats.

## Installation

```bash
npm install jsoncompact
```

## Usage

### Importing the Library

```javascript
import JSONcompact from 'jsoncompact';
```

### Compacting JSON Data

```javascript
const originalData = [
  { name: "Alice", age: 30.123, occupation: "Engineer" },
  { name: "Bob", age: 25.456, occupation: "Designer" }
];

// Compact without rounding
const compacted = JSONcompact.compact(originalData);
console.log(compacted);

// Compact with rounding to 2 decimal places
const compactedRounded = JSONcompact.compact(originalData, undefined, 2);
console.log(compactedRounded);
```

### Expanding Compacted Data

```javascript
const expandedData = JSONcompact.expand(compacted);
console.log(expandedData);
```

### Working with JSON Strings

The library also supports compacting and expanding JSON strings directly.

```javascript
const jsonDataString = JSON.stringify(originalData);
const compactedString = JSONcompact.compactedJSON(jsonDataString);
console.log(compactedString);

const expandedString = JSONcompact.expandedJSON(compactedString);
console.log(expandedString);
```

## API Reference

### `JSONcompact.compact(data, [description], [roundToDecimalPlaces])`

Compacts an array of data objects or a JSON string into a tabular format.

- `data`: An array of objects or a JSON string representing the data to be compacted.
- `description`: Optional. Custom description for the compacted data.
- `roundToDecimalPlaces`: Optional. Number of decimal places to round numerical values to. If not provided, numbers are not rounded.

### `JSONcompact.expand(data)`

Expands the compacted data back into its original format.

- `data`: The compacted data object or a string in the compacted JSON format.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open issues to improve the library.

## License

This project is licensed under the [MIT License](LICENSE).

---

This updated README reflects the changes to the `compact` function and provides clear instructions on how to use the new optional rounding feature.