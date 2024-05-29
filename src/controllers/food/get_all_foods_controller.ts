import { Request, Response } from "express";
import { GetAllCategoriesService } from "../../service/categories/get_all_categories_service";
import { GetAllFoodsService } from "../../service/food/get_all_food_service";

export class GetAllFoodController {
    async handle(request: Request, response: Response) {
        const service = new GetAllFoodsService();

        const result = await service.execute();

        return response.json(result);
    }
}