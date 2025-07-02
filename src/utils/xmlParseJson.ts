import fs from "fs";
import { parseStringPromise } from "xml2js";
import { AccountsPayableDTO, AccountsPayableResumeDTO } from "../entities/accountsPayable";
import { mappersXml } from "./mappersXml";

export const xmlParseJson = async (
  xml: string
): Promise<AccountsPayableResumeDTO> => {
  const xmlContent = fs.readFileSync(xml, "utf8");
  const parsed = await parseStringPromise(xmlContent, {
    explicitArray: false,
  });
  return mappersXml(parsed).getResumeProps();
}