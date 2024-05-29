import { Request, Response } from "express";
import { UpdateConsumedFoodService } from "../../service/consumed_food/update_consumed_food_service";

export class UpdateConsumedFoodController {
    async handle(request: Request, response: Response) {
        const {id} = request.params;
        const { quantity, date, foodId,} = request.body;

        const service = new UpdateConsumedFoodService();

        const result = await service.execute({ id, quantity, date, foodId });

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}