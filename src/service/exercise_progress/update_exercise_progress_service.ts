import { ExerciseProgress } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";

type ExerciseProgressUpdateRequest = {
    id: string
    date: string,
    calories: string,
    activity: string
}

export class UpdateExerciseProgressService{
    async execute({id, date, activity, calories}: ExerciseProgressUpdateRequest): Promise< ExerciseProgress | Error >{
        const exerciseProgress = await prismaClient.exerciseProgress.findUnique({where: { id:id }})

        if(!exerciseProgress){
            return new Error("Exercise progress does not exists!");
        }
        exerciseProgress.activity = activity? activity: exerciseProgress.activity;
        exerciseProgress.calories = calories? calories: exerciseProgress.calories;

        await prismaClient.exerciseProgress.update({
            where:{
                id:id
            },
            data:{
                date:date? '': '',
                activity: activity? activity: exerciseProgress.activity,
                calories: calories? calories: exerciseProgress.calories
            }
        });

        return exerciseProgress;

    }
}