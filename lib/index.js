"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JSONcompact = {
    compact(data, description, roundToDecimalPlaces) {
        let dataArray;
        if (typeof data === "string") {
            try {
                dataArray = JSON.parse(data);
            }
            catch (error) {
                throw new Error("Invalid JSON data");
            }
        }
        else {
            dataArray = data;
        }
        if (!Array.isArray(dataArray)) {
            throw new Error("Input data must be an array of objects");
        }
        const defaultDescription = "This table's 'columns' list field names, and 'rows' are arrays of corresponding values in the same sequential order.";
        const columns = [];
        dataArray.forEach((obj) => {
            Object.keys(obj).forEach((key) => {
                if (!columns.includes(key)) {
                    columns.push(key);
                }
            });
        });
        const rows = dataArray.map((obj) => columns.map((key) => {
            var _a;
            let value = (_a = obj[key]) !== null && _a !== void 0 ? _a : null;
            if (typeof roundToDecimalPlaces === "number" &&
                typeof value === "number" &&
                Number.isFinite(value)) {
                value = parseFloat(value.toFixed(roundToDecimalPlaces));
            }
            return value;
        }));
        return { description: description !== null && description !== void 0 ? description : defaultDescription, columns, rows };
    },
    compactedJSON(data, description, roundToDecimalPlaces) {
        const compacted = JSONcompact.compact(data, description, roundToDecimalPlaces);
        return JSON.stringify(compacted);
    },
    expand(data) {
        let compacted;
        if (typeof data === "string") {
            try {
                compacted = JSON.parse(data);
            }
            catch (error) {
                throw new Error("Invalid JSON data");
            }
        }
        else {
            compacted = data;
        }
        if (!Array.isArray(compacted.rows)) {
            throw new Error("Input data must be an array of objects");
        }
        const dataArray = [];
        compacted.rows.forEach((row) => {
            const obj = {};
            row.forEach((value, index) => {
                obj[compacted.columns[index]] = value;
            });
            dataArray.push(obj);
        });
        return dataArray;
    },
    expandedJSON(data) {
        const expanded = JSONcompact.expand(data);
        return JSON.stringify(expanded);
    },
};
exports.default = JSONcompact;
//# sourceMappingURL=index.js.map