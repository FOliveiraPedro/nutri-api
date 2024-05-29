import { Request, Response } from "express";
import { DeleteConsumedFoodService } from "../../service/consumed_food/delete_consumed_food_service";

export class DeleteConsumedFoodController{
    async handle(request:Request,response: Response){
        const { id } = request.params;

        const service = new DeleteConsumedFoodService();

        const result = await service.execute(id);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}