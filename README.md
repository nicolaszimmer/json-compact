# README for JSONcompact

## Overview

JSONcompact is a TypeScript/JavaScript library designed to convert complex JSON data into a compact, tabular format suitable for processing and analysis, particularly with AI models like GPT-3 and GPT-4. It also provides functionality to revert this compacted data back to its original form. The library is useful in scenarios where you need to minimize JSON size without losing the essence and structure of the data. **You can expect a reduction in token size of >30% for larger data sets**

## Features

- **Compact**: Converts a JSON array of objects into a compact format with a descriptive header, reducing the size of the JSON data.
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
  { name: "Alice", age: 30, occupation: "Engineer" },
  { name: "Bob", age: 25, occupation: "Designer" }
];

const compacted = JSONcompact.compact(originalData);
console.log(compacted);
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

### `JSONcompact.compact(data, [description])`

Compacts an array of data objects or a JSON string into a tabular format.

- `data`: An array of objects or a JSON string representing the data to be compacted.
- `description`: Optional. Custom description for the compacted data.

### `JSONcompact.expandedJSON(data)`

Expands the compacted data back into its original format.

- `data`: The compacted data object or a string in the compacted JSON format.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open issues to improve the library.

## License

This project is licensed under the [MIT License](LICENSE).