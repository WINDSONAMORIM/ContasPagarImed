import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";
import unzipper from "unzipper";
import { normalizeString } from "../../../utils/normalize";

export class UploadDocsService {
  constructor() {}
  async uploaderDocsService(file: Express.Multer.File): Promise<void> {
    try {
      await fsPromises.mkdir(path.dirname(file.path), { recursive: true });
      await fs
        .createReadStream(file.path)
        .pipe(unzipper.Extract({ path: path.dirname(file.path) }))
        .promise();

    async function walkDir(dirPath:string, level = 0): Promise<void> {
        const dirents = await fsPromises.readdir(dirPath, { withFileTypes: true });
        for (const dirent of dirents) {
            const oldPath = path.join(dirPath, dirent.name);
            const normalizedPath = normalizeString(dirent.name);
            const newPath = path.join(dirPath, normalizedPath);
            if (oldPath !== newPath) {
                await fsPromises.rename(oldPath, newPath);
            }

            console.log(`${'--'.repeat(level)} ${normalizedPath}`);
            if (dirent.isFile()) {
              switch(normalizedPath){
                case "CNDS.PDF":
                  // verificaCNDs(newPath);
                  break;
              }
            }
            if (dirent.isDirectory()) {
                // switch (normalizedPath.toUpperCase()) {
                //   case "PEDIDO":
                //     console.log("Found 'Pedido' folder.");
                //   case "receipts":
                //   case "reports":
                //     // Valid folder names
                //     break;
                //   default:
                //     console.warn(
                //       `Warning: Unexpected folder name "${normalizedPath}" found.`,
                //     );
                // }
                await walkDir(newPath, level + 1);
            }
        }
    }        

    await walkDir(path.dirname(file.path));      
      
    } catch (error) {
      console.error("Error extracting zip file:", error);
      throw error;
    }
  }
}
