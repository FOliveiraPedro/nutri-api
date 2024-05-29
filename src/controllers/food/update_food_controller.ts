import { Request, Response } from "express";
import { UpdateCategoryService } from "../../service/categories/update_category_service";
import { UpdateFoodService } from "../../service/food/update_food_service";

export class UpdateFoodController {
    async handle(request: Request, response: Response) {
        const {id} = request.params;
        const {name} = request.body;

        const service = new UpdateFoodService();

        const result = await service.execute({id,name});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}