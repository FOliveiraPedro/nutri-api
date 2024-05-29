import { Request, Response } from "express";
import { GetUserId } from "../../provider/retrieve_user_information";
import { CreateExerciseProgressService } from "../../service/exercise_progress/create_exercise_progress_service";

export class CreateExerciseProgressController {
    async handle(request: Request, response: Response) {

        const authToken = await request.headers.authorization;   
        const { date, calories, activity} = request.body;

        const userId = new GetUserId().execute(authToken!);

        const service = new CreateExerciseProgressService();
        
        const result = await service.execute({date, userId, calories, activity});


        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}