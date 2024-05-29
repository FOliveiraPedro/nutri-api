import { Request, Response } from "express";
import { CreateCategoryService } from "../../service/categories/create_category_service";

export class CreateCategoryController {
    async handle(request: Request, response: Response) {
        const {name} = request.body;

        const service = new CreateCategoryService();

        const result = await service.execute({name});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}