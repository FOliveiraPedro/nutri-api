import { ExerciseProgress } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";

type ExerciseRequest = {
    exerciseId: string,
    startDate: string,
    endDate: string,
}

export class GetExerciseService {

    async execute({ exerciseId, startDate, endDate }: ExerciseRequest): Promise< ExerciseProgress | Error >  {
        console.log(exerciseId);

        
        const response = await prismaClient.exerciseProgress.findUnique({
            where: { 
                id: exerciseId,
                date:{
                    lte:startDate,
                    gte:endDate
                }
            } 
        })

        if(!response) {
            console.log("Exercise does not exists");
            return new Error("Exercise does not exists");
        }

        return response;
    }
}