import { Request, Response } from "express";
import { GetUserId } from "../../provider/retrieve_user_information";
import { GetAllConsumedFoodService } from "../../service/consumed_food/get_all_consumed_food_service";

export class GetAllConsumedFoodController {
    async handle(request: Request, response: Response) {

        const authToken = await request.headers.authorization;
        const { start_date, end_date } = request.body;

        const userId = new GetUserId().execute(authToken!);

        const service = new GetAllConsumedFoodService();

        const result = await service.execute({
            userId,
            startDate: start_date,
            endDate:end_date
        });

        return response.json(result);
    }
}