import { MongoReadingsRepository } from "../../repositories/implementations/MongoReadingsRepository";
import { GetReadingsStrategy } from "./GetReadingsStrategy";
import { GetReadingsController } from "./GetReadingsController";

const uploadsRepository = new MongoReadingsRepository();
const getReadingsStrategy = new GetReadingsStrategy(uploadsRepository);
const getReadingsController = new GetReadingsController(getReadingsStrategy);

export {getReadingsStrategy,getReadingsController}