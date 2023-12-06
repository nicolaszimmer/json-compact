interface DataObject {
    [key: string]: any;
}
declare const JSONcompact: {
    compact(data: DataObject[] | string, description?: string): {
        description: string;
        columns: string[];
        rows: (number | null)[][];
    };
    compactedJSON(data: DataObject[] | string, description?: string): string;
    expand(data: {
        description: string;
        columns: string[];
        rows: (number | null)[][];
    } | string): DataObject[];
    expandedJSON(data: {
        description: string;
        columns: string[];
        rows: (number | null)[][];
    } | string): string;
};
export default JSONcompact;
//# sourceMappingURL=index.d.ts.map