import { Request, Response } from "express";
import { UpdateCategoryService } from "../../service/categories/update_category_service";

export class UpdateCategoryController {
    async handle(request: Request, response: Response) {
        const {id} = request.params;
        const {name} = request.body;

        const service = new UpdateCategoryService();

        const result = await service.execute({id,name});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}