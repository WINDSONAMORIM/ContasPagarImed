import * as xlsx from "xlsx";
import { Employee } from "../entities/employee";

export const xlsxParseJson = async (file: Express.Multer.File): Promise<Employee[]> => {
  try {
    const workbook = xlsx.read(file.buffer, {
      type: "buffer",
      cellDates: true,
    });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const jsonData = xlsx.utils.sheet_to_json<string[]>(worksheet, {
      header: 1,
      raw: false,
    });

    const headers = jsonData[0].map((h) => h.trim());
    const dataRows = jsonData.slice(1);
    
    const jsonDataFormatted: Employee[] = dataRows.map((row) => {
      return {        
        ParceriaId: 43,
        Nome: row[headers.indexOf("NomeCompleto")]?.toString().trim() || "",
        CPF: row[headers.indexOf("CPF")]?.toString().trim() || "",
        CnsDoProfissional:
          row[headers.indexOf("NumCNS")]?.toString().trim() || "",
      };
    });

    return jsonDataFormatted;
  } catch (error) {
    console.error("Error parsing XLSX file:", error);
    throw new Error("Failed to parse XLSX file");
  }
};
