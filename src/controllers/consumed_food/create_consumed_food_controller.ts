import { Request, Response } from "express";
import { GetUserId } from "../../provider/retrieve_user_information";
import { CreateConsumedFoodService } from "../../service/consumed_food/create_consumed_food_service";

export class CreateConsumedFoodController {
    async handle(request: Request, response: Response) {

        const authToken = await request.headers.authorization;   
        const { date, quantity, foodId} = request.body;

        const userId = new GetUserId().execute(authToken!);

        const service = new CreateConsumedFoodService();
        
        const result = await service.execute({ quantity, date, foodId, userId });


        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}