import fs from "fs";
import { parseStringPromise } from "xml2js";

export const xmlParseJson = async (
  xml: string
): Promise<any> => {
  const xmlContent = fs.readFileSync(xml, "utf8");
  const parsed = await parseStringPromise(xmlContent, {
    explicitArray: false,
  });
  return parsed;
}