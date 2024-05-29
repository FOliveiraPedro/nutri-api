import { Request, Response } from "express";
import { DeleteExerciseProgressService } from "../../service/exercise_progress/delete_exercise_progress_service";

export class DeleteExerciseProgressController{
    async handle(request:Request,response: Response){
        const { id } = request.params;

        const service = new DeleteExerciseProgressService();

        const result = await service.execute(id);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}