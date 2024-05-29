import { Request, Response } from "express";
import { DeleteVitaminService } from "../../service/vitamins/delete_vitamin_service";

export class DeleteVitaminController{
    async handle(request:Request,response: Response){
        const { id } = request.params;

        const service = new DeleteVitaminService();

        const result = await service.execute(id);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}