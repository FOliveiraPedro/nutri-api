import { Request, Response } from "express";
import { CreateWeightProgressService } from "../../service/weight_progress/create_weight_progress_service";
import { GetUserId } from "../../provider/retrieve_user_information";

export class CreateWeightProgressController {
    async handle(request: Request, response: Response) {

        const authToken = await request.headers.authorization;   
        const {date, weight} = request.body;

        const userId = new GetUserId().execute(authToken!);

        const service = new CreateWeightProgressService();
        
        const result = await service.execute({date, userId, weight});


        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}