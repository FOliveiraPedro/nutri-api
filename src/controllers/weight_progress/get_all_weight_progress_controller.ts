import { Request, Response } from "express";
import { GetAllWeightProgressService } from "../../service/weight_progress/get_all_weight_progress_service";
import { GetUserId } from "../../provider/retrieve_user_information";

export class GetAllWeightProgressController {
    async handle(request: Request, response: Response) {

        const authToken = await request.headers.authorization;
        const { start_date, end_date } = request.body;

        const userId = new GetUserId().execute(authToken!);

        const service = new GetAllWeightProgressService();

        const result = await service.execute({
            userId,
            startDate: start_date, 
            endDate: end_date
        });

        return response.json(result);
    }
}