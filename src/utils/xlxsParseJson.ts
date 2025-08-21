import * as xlsx from "xlsx";
import { Employee } from "../entities/employee";
import { PayRollDTO } from "../entities/payRoll";
import { mapperPayRoll } from "./mapperPayRoll";

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

export const xlsxParseJsonPayRoll = async (file: Express.Multer.File): Promise<PayRollDTO[]> => {
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

    const headersOrigin = jsonData[0].map((h) => h.trim());

    const headers = (header: string): string => {
      return header
        .normalize("NFD")                 // separa letra do acento
        .replace(/[\u0300-\u036f]/g, "")  // remove acentos
        .replace(/[^a-zA-Z0-9 ]/g, " ")   // troca especiais por espaço
        .trim()
        .split(/\s+/)                     // divide por espaço
        .map((word, index) =>
          index === 0
            ? word.toLowerCase()          // primeira em minúsculo
            : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join("");
    };

    const dataRows = jsonData.slice(1);
    
    const jsonDataFormatted: PayRollDTO[] = dataRows.map((row) => { 
      const rowObj: Record<string,any> = {};
      headersOrigin.forEach((header, i) => {
        const cleanHeader = headers(header)
        rowObj[cleanHeader] = row[i]
      });
      return mapperPayRoll(rowObj)
    })
    
    return jsonDataFormatted;
  } catch (error) {
    console.error("Error parsing XLSX file:", error);
    throw new Error("Failed to parse XLSX file");
  } 
};