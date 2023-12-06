interface DataObject {
  [key: string]: any;
}

const JSONcompact = {
  compact(
    data: DataObject[] | string,
    description?: string,
    roundToDecimalPlaces?: number
  ): { description: string; columns: string[]; rows: (number | null)[][] } {
    let dataArray: DataObject[];

    if (typeof data === "string") {
      try {
        dataArray = JSON.parse(data);
      } catch (error) {
        throw new Error("Invalid JSON data");
      }
    } else {
      dataArray = data;
    }

    if (!Array.isArray(dataArray)) {
      throw new Error("Input data must be an array of objects");
    }

    const defaultDescription =
      "This table's 'columns' list field names, and 'rows' are arrays of corresponding values in the same sequential order.";

    const columns: string[] = [];
    dataArray.forEach((obj) => {
      Object.keys(obj).forEach((key) => {
        if (!columns.includes(key)) {
          columns.push(key);
        }
      });
    });

    const rows = dataArray.map((obj) =>
      columns.map((key) => {
        let value = obj[key] ?? null;
        if (
          typeof roundToDecimalPlaces === "number" &&
          typeof value === "number" &&
          Number.isFinite(value)
        ) {
          value = parseFloat(value.toFixed(roundToDecimalPlaces));
        }
        return value;
      })
    );

    return { description: description ?? defaultDescription, columns, rows };
  },
  compactedJSON(
    data: DataObject[] | string,
    description?: string,
    roundToDecimalPlaces?: number
  ): string {
    const compacted = JSONcompact.compact(
      data,
      description,
      roundToDecimalPlaces
    );
    return JSON.stringify(compacted);
  },
  expand(
    data:
      | { description: string; columns: string[]; rows: (number | null)[][] }
      | string
  ): DataObject[] {
    let compacted: {
      description: string;
      columns: string[];
      rows: (number | null)[][];
    };

    if (typeof data === "string") {
      try {
        compacted = JSON.parse(data);
      } catch (error) {
        throw new Error("Invalid JSON data");
      }
    } else {
      compacted = data;
    }

    if (!Array.isArray(compacted.rows)) {
      throw new Error("Input data must be an array of objects");
    }

    const dataArray: DataObject[] = [];
    compacted.rows.forEach((row) => {
      const obj: DataObject = {};
      row.forEach((value, index) => {
        obj[compacted.columns[index]] = value;
      });
      dataArray.push(obj);
    });

    return dataArray;
  },
  expandedJSON(
    data:
      | { description: string; columns: string[]; rows: (number | null)[][] }
      | string
  ): string {
    const expanded = JSONcompact.expand(data);
    return JSON.stringify(expanded);
  },
};

export default JSONcompact;
