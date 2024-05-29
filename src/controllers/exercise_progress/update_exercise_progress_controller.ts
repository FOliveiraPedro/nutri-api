import { Request, Response } from "express";
import { UpdateExerciseProgressService } from "../../service/exercise_progress/update_exercise_progress_service";

export class UpdateExerciseProgressController {
    async handle(request: Request, response: Response) {
        const {id} = request.params;
        const { date, calories, activity} = request.body;

        const service = new UpdateExerciseProgressService();

        const result = await service.execute({id, date, calories, activity});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}