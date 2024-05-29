import { Request, Response } from "express";
import { DeleteNutrientService } from "../../service/nutrient/delete_nutrient_service";

export class DeleteNutrientController{
    async handle(request:Request,response: Response){
        const { id } = request.params;

        const service = new DeleteNutrientService();

        const result = await service.execute(id);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}