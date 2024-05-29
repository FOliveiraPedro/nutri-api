import { Request, Response } from "express";
import { DeleteWeightProgressService } from "../../service/weight_progress/delete_weight_progress_service";

export class DeleteWeightProgressController{
    async handle(request:Request,response: Response){
        const { id } = request.params;

        const service = new DeleteWeightProgressService();

        const result = await service.execute(id);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}