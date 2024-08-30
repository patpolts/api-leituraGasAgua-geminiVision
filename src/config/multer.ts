import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

// Configuração do armazenamento de arquivos com multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../uploads'));
  },
  filename: (req, file, cb) => {
    const fileExtension = path.extname(file.originalname);
    const fileName = `${uuidv4()}${fileExtension}`;
    cb(null, fileName);
  }
});

// Exporta o middleware configurado para uso em rotas
export const upload = multer({ storage });