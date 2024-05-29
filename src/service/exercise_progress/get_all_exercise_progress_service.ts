import { ExerciseProgress } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";

type ExerciseProgressUpdateRequest = {
    userId: string
}

export class GetAllExerciseProgressService {

    async execute({userId}: ExerciseProgressUpdateRequest): Promise< ExerciseProgress[] | Error >{
        
        const response = await prismaClient.exerciseProgress.findMany({where: { user_id:userId }});
        
        return response;
    }
}