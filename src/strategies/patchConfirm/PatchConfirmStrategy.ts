import { IReadingsRepository } from "../../repositories/IReadingsRepository";
import { IPatchConfirmDTO } from "./PatchConfirmDTO";


export class PatchConfirmStrategy{
    constructor(
        private uploadsRepository: IReadingsRepository,
    )
    {}

    async execute(data:IPatchConfirmDTO):Promise<any>{
        const check = await this.uploadsRepository.findByMeasure({
            uuid: data.measure_uuid
        });

        if(!check){
            throw {
                "error_code": "MEASURE_NOT_FOUND",
                "error_description": "Leitura do mÊs ja realizada ou não encontrada!"
            }
        }
        
        if(check?.readingConfirmed){
            throw {
                "error_code": "CONFIRMATION_DUPLICATE",
                "error_description": "Leitura do mês ja realizada ou já confirmada!"
            }

        }

        const checkValue = data.confirmed_value === check.reading ? 
            await this.uploadsRepository.update({readingConfirmed: true},data.measure_uuid)
            : this.uploadsRepository.update({reading: data.confirmed_value ,readingConfirmed: true},data.measure_uuid);
        
        console.log("atualizado? ",checkValue)
        return checkValue ? {"success": true} : {"success": false};


    }
}