import { Request, Response } from "express";
import { DeleteFoodService } from "../../service/food/delete_food_service";

export class DeleteFoodController{
    async handle(request:Request,response: Response){
        const { id } = request.params;

        const service = new DeleteFoodService();

        const result = await service.execute(id);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}