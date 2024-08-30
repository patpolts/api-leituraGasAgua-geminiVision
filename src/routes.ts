import { postUploadController } from "./strategies/postUpload";
import { Router } from "express";
import { upload } from './config/multer';
import { patchConfirmController } from "./strategies/patchConfirm";
import { getReadingsController } from "./strategies/getReadings";

const router = Router();

router.post('/upload', upload.single('file'), async (req, res) => {
    return await postUploadController.handle(req,res);
});

router.patch('/confirm', async (req, res) => {
    return await patchConfirmController.handle(req,res);
});

router.get('/:customer_code/list', async (req, res) => {
    return await getReadingsController.handle(req,res);
});


export { router }