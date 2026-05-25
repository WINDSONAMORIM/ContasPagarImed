import multer from "multer";
import path from "path";
import fs from "fs";

const validaExistFolderUpload = () => {
  const uploadPath = path.resolve("uploads");
  console.log("Upload path:", uploadPath);
  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
  }
  return uploadPath;
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
   const uploadPath = validaExistFolderUpload();
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

export const uploadInDisck = multer({ storage: storage });

const storageMemory = multer.memoryStorage();
export const uploadInMemory = multer({ storage: storageMemory });