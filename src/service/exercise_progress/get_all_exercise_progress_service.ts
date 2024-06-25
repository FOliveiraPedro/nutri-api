import { ExerciseProgress } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";

type ExerciseProgressUpdateRequest = {
    userId: string,
    startDate: string,
    endDate: string,
}

export class GetAllExerciseProgressService {

    async execute({ userId, startDate, endDate }: ExerciseProgressUpdateRequest): Promise< ExerciseProgress[] | Error >{
        
        let start: Date = new Date(startDate);
        let end: Date = new Date(endDate);

        const response = await prismaClient.exerciseProgress.findMany({
            where: { 
                user_id: userId,
                date:{
                    lte: end,
                    gte: start
                }
            }
        });
        
        return response;
    }
}