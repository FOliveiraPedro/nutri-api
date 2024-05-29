import { ExerciseProgress } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";

type ExerciseRequest = {
    exerciseId: string
}

export class GetExerciseService {

    async execute({ exerciseId }: ExerciseRequest): Promise< ExerciseProgress | Error >  {
        console.log(exerciseId);

        
        const response = await prismaClient.exerciseProgress.findUnique({
            where: { 
                id: exerciseId
            } 
        })

        if(!response) {
            console.log("Exercise does not exists");
            return new Error("Exercise does not exists");
        }

        return response;
    }
}