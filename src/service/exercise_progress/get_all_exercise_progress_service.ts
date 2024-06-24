import { ExerciseProgress } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";

type ExerciseProgressUpdateRequest = {
    userId: string,
    startDate: string,
    endDate: string,
}

export class GetAllExerciseProgressService {

    async execute({ userId, startDate, endDate }: ExerciseProgressUpdateRequest): Promise< ExerciseProgress[] | Error >{
        
        const response = await prismaClient.exerciseProgress.findMany({
            where: { 
                user_id: userId,
                date:{
                    lte: startDate,
                    gte: endDate
                }
            }
        });
        
        return response;
    }
}