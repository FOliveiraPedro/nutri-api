import { Food } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";


type FoodRequest = {
    name: string,
    category_id: string,
    vitamin_id: string,
    fat_id: string,
    nutrient_id: string,
    mineral_id: string
}

export class CreateFoodService {

    async execute({ name, category_id, vitamin_id, fat_id, nutrient_id, mineral_id }: FoodRequest): Promise<Food | Error> {

        const response = await prismaClient.food.findFirst({ where: { name: name } });

        if (response) {
            console.log("Food already exists");
            return new Error("Food already exists");
        }

        const food = prismaClient.food.create({
            data:{
                name,
                category_id,
                vitamin_id,
                fat_id,
                nutrient_id,
                mineral_id,
        }});

        return food;
    }
}