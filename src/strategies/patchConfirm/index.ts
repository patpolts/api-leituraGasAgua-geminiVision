import { MongoReadingsRepository } from "../../repositories/implementations/MongoReadingsRepository";
import { PatchConfirmController } from "./PatchConfirmController";
import { PatchConfirmStrategy } from "./PatchConfirmStrategy";


const uploadsRepository = new MongoReadingsRepository();
const patchConfirmStrategy = new PatchConfirmStrategy(uploadsRepository);
const patchConfirmController = new PatchConfirmController(patchConfirmStrategy);

export {patchConfirmStrategy,patchConfirmController}