import { Request, Response } from "express";
import { GetCategoryByNameService } from "../../service/categories/get_category_by_name_service";
import { GetNutrientByNameService } from "../../service/nutrient/get_nutrient_by_name_service";


export class GetNutrientController {
    async handle(request: Request, response: Response) {
        console.log(request.body);
        const {id} = request.body

        const service = new GetNutrientByNameService();

        const result = await service.execute({id});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}