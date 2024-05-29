import { Request, Response } from "express";
import { GetAllCategoriesService } from "../../service/categories/get_all_categories_service";
import { GetAllNutrientsService } from "../../service/nutrient/get_all_nutrients_service";

export class GetAllNutrientsController {
    async handle(request: Request, response: Response) {
        const service = new GetAllNutrientsService();

        const result = await service.execute();

        return response.json(result);
    }
}