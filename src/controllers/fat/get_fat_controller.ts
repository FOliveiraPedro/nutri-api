import { Request, Response } from "express";
import { GetCategoryService } from "../../service/categories/get_category_service";
import { GetFatService } from "../../service/fat/get_fat_service";


export class GetFatController {
    async handle(request: Request, response: Response) {
        console.log(request.body);
        const {id} = request.body

        const service = new GetFatService();

        const result = await service.execute({id});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}