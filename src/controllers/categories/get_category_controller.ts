import { Request, Response } from "express";
import { GetCategoryByNameService } from "../../service/categories/get_category_by_name_service";


export class GetCategoryController {
    async handle(request: Request, response: Response) {
        console.log(request.body);
        const {name} = request.body

        const service = new GetCategoryByNameService();

        const result = await service.execute({name});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}