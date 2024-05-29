import { ExerciseProgress } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";


type ExerciseProgressRequest = {
    date: string,
    userId: string,
    calories: string,
    activity: string
}

export class CreateExerciseProgressService {

    async execute({ date, userId, calories, activity }: ExerciseProgressRequest): Promise< ExerciseProgress | Error >  {

        const convertedDate = '';

        const exerciseProgress = prismaClient.exerciseProgress.create({
            data: {
                date:convertedDate, 
                calories, 
                activity, 
                user_id:userId
            } 
        });

        // await prismaClient.exerciseProgress.save(exerciseProgress);

        return exerciseProgress;
    }
}