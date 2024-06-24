import { Request, Response } from "express";
import { GetUserId } from "../../provider/retrieve_user_information";
import { GetAllExerciseProgressService } from "../../service/exercise_progress/get_all_exercise_progress_service";

export class GetAllExerciseProgressController {
    async handle(request: Request, response: Response) {

        const authToken = await request.headers.authorization;
        const { start_date, end_date } = request.body;

        const userId = new GetUserId().execute(authToken!);

        const service = new GetAllExerciseProgressService();

        const result = await service.execute({
            userId,
            startDate: start_date,
            endDate:end_date
        });

        return response.json(result);
    }
}