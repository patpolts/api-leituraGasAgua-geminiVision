import { Request, Response } from "express";
import { PatchConfirmStrategy } from "./PatchConfirmStrategy";


function isValidString(value: any): boolean {
    return typeof value === 'string' && value.trim().length > 0;
}
  
function isValidInteger(value: any): boolean {
    return typeof value === 'number' ;
}
  
export class PatchConfirmController{
    constructor(
        private patchConfirmStrategy: PatchConfirmStrategy
    ){}

    async handle(req: Request, res: Response): Promise<any>{
        try {
            const {measure_uuid,confirmed_value} = req.body;

            if(!isValidString(measure_uuid)){
                return res.status(400).json({ 
                    error_code: 'INVALID_DATA',
                    error_description: 'Verifique se o campo measure_uuid é  do tipo string válida.' 
                });
            }

            if(!isValidInteger(confirmed_value)){
                return res.status(400).json({ 
                    error_code: 'INVALID_DATA',
                    error_description: 'Verifique se o campo confirmed_value é integer válido.' 
                });

            }

            const result = await this.patchConfirmStrategy.execute({
                measure_uuid,confirmed_value
            });
            
            return res.status(200).json(result);

        } catch (error) {
            console.error(error);
            return res.json(error);
            
        }
    }
}