import { Request, Response } from "express";
import { GetCategoryByNameService } from "../../service/categories/get_category_by_name_service";
import { GetVitaminByNameService } from "../../service/vitamins/get_vitamin_by_name_service";


export class GetVitaminController {
    async handle(request: Request, response: Response) {
        console.log(request.body);
        const {id} = request.body

        const service = new GetVitaminByNameService();

        const result = await service.execute({id});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}