import { Request, Response } from "express";
import { DeleteCategoryService } from "../../service/categories/delete_category_service";
import { DeleteFatService } from "../../service/fat/delete_fat_service";

export class DeleteFatController{
    async handle(request:Request,response: Response){
        const { id } = request.params;

        const service = new DeleteFatService();

        const result = await service.execute(id);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}