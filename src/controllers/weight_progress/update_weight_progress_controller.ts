import { Request, Response } from "express";
import { UpdateWeightProgressService } from "../../service/weight_progress/update_weight_progress_service";

export class UpdateWeightProgressController {
    async handle(request: Request, response: Response) {
        const {id} = request.params;
        const {date,weight} = request.body;

        const service = new UpdateWeightProgressService();

        const result = await service.execute({id,date,weight});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}