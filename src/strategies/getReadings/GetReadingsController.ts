import { Request, Response } from "express";
import { GetReadingsStrategy } from "./GetReadingsStrategy";

export class GetReadingsController{
    constructor(
        private getReadingsStrategy: GetReadingsStrategy
    ){}

    async handle(req: Request, res: Response): Promise<any>{
        try {
            const {customer_code,measure_type} = req.params;

            const result = await this.getReadingsStrategy.execute({
                customer_code,measure_type
            });
            
            if(result == 404){
                return res.status(404).json({
                    "error_code": "MEASURE_NOT_FOUND",
                    "error_description": `Nenhuma leitura encontrada para código ${customer_code}`
                })
            }
            
            return res.status(200).json(result);

        } catch (error) {
            return res.json(error);
            
        }
    }
}