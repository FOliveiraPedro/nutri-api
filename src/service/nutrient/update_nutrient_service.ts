import { prismaClient } from "../../database/prisma_client";

type NutrientUpdateRequest = {
    id: string
    moisture: string,
    energy_calorie:string,
    energy_joule:string,
    fiber: string,
    ashes: string,
    carbs: string,
    protein: string,
}

export class UpdateNutrientService{
    async execute({ id, moisture, energy_calorie,energy_joule, fiber, ashes, carbs, protein, }: NutrientUpdateRequest){
        const nutrient = await prismaClient.nutrient.findUnique({where: { id:id}})

        if(!nutrient){
            return new Error("Nutrient does not exists!");
        }

        await prismaClient.nutrient.update({
            where:{
                id:id
            },
            data:{
                moisture: moisture? moisture: nutrient.moisture,
                energy_calorie: energy_calorie? energy_calorie: nutrient.energy_calorie,
                energy_joule: energy_joule? energy_joule: nutrient.energy_joule,
                fiber: fiber? fiber: nutrient.fiber,
                ashes: ashes? ashes: nutrient.ashes,
                carbs: carbs? carbs: nutrient.carbs,
                protein: protein? protein: nutrient.protein,
            }
        });

        return nutrient;

    }
}