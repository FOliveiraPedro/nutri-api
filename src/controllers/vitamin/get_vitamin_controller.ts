import { Request, Response } from "express";
import { GetCategoryService } from "../../service/categories/get_category_service";
import { GetVitaminService } from "../../service/vitamins/get_vitamin_service";


export class GetVitaminController {
    async handle(request: Request, response: Response) {
        console.log(request.body);
        const {id} = request.body

        const service = new GetVitaminService();

        const result = await service.execute({id});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}