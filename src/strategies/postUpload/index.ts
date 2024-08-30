import { MongoReadingsRepository } from "../../repositories/implementations/MongoReadingsRepository";
import { PostUploadStrategy } from "./PostUploadStrategy";
import { PostUploadController } from "./PostUploadController";
import { GeminiImageProvider } from "../../providers/implementations/GeminiImageProvider";

const imageProvider = new GeminiImageProvider();
const uploadsRepository = new MongoReadingsRepository();
const postUploadStrategy = new PostUploadStrategy(uploadsRepository,imageProvider);
const postUploadController = new PostUploadController(postUploadStrategy);

export {postUploadStrategy,postUploadController}