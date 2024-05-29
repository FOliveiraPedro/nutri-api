import { prismaClient } from "../../database/prisma_client";

type ConsumedFoodRequest = {
    id: string
    quantity: number,
    date: Date,
    foodId: string,
}
export class UpdateConsumedFoodService{
    async execute({ id, quantity, date, foodId,}: ConsumedFoodRequest){
        const consumed = await prismaClient.consumedFood.findFirst({where: { id:id}})

        if(!consumed){
            return new Error("Consumed Food does not exists!");
        }

        await prismaClient.consumedFood.update({
            where:{
                id:id
            },
            data:{
                date:date? '': '',
                quantity:quantity? '': consumed.quantity,
                id:foodId? foodId: consumed.food_id
            }
        });

        return consumed;

    }
}