import * as xlsx from "xlsx";

export const xlsxParseJson = async (
  file: Express.Multer.File
): Promise<any> => {
  try {
    const workbook = xlsx.read(file.buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);
    return jsonData;
  } catch (error) {
    console.error("Error parsing XLSX file:", error);
    throw new Error("Failed to parse XLSX file");
  }
};
