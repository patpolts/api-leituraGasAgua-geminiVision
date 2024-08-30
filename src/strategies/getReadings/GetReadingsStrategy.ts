import { IReadingsRepository } from "src/repositories/IReadingsRepository";
import { IGetReadingsDTO } from "./GetReadingsDTO";

export class GetReadingsStrategy{
    constructor(
        private uploadsRepository: IReadingsRepository
    ){}

    async execute(data: IGetReadingsDTO): Promise<any>{
        return data
    }
}