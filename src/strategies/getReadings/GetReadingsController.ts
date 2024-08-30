import { Request, Response } from "express";
import { GetReadingsStrategy } from "./GetReadingsStrategy";

export class GetReadingsController{
    constructor(
        private getReadingsStrategy: GetReadingsStrategy
    ){}

    async handle(req: Request, res: Response): Promise<any>{
        try {
            const {customer_code,measure_type} = req.params;
        } catch (error) {
            
        }
    }
}