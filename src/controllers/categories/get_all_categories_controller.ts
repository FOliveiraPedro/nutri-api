import { Request, Response } from "express";
import { GetAllCategoriesService } from "../../service/categories/get_all_categories_service";

export class GetAllCategoryController {
    async handle(request: Request, response: Response) {
        const service = new GetAllCategoriesService();

        const result = await service.execute();

        return response.json(result);
    }
}