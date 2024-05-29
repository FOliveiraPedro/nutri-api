import { Request, Response } from "express";
import { GetConsumedFoodService } from "../../service/consumed_food/get_consumed_food_service";


export class GetConsumedFoodController {
    async handle(request: Request, response: Response) {
        console.log(request.body);
        const { quantity, date, foodId, userId } = request.body

        const service = new GetConsumedFoodService();

        const result = await service.execute({ quantity, date, foodId, userId });

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}