import { Request, Response } from "express";
import { GetFoodService } from "../../service/food/get_food_service";


export class GetFoodController {
    async handle(request: Request, response: Response) {
        console.log(request.body);
        const {name} = request.body

        const service = new GetFoodService();

        const result = await service.execute({name});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}