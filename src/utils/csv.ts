export function arrayToCsv(headers: string[], data: any[]): string {
    const csvRows = [headers.join(",")];
    data.forEach((row) => {
        const rowValues = headers.map(header => `"${String(row[header] || '').replace(/"/g, '""')}"`);
        csvRows.push(rowValues.join(","));
    });
    return csvRows.join("\r\n");
}

export function downloadCSV(filename: string, csvData: string) {
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
}