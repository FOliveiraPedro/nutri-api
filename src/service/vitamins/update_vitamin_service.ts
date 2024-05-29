import { prismaClient } from "../../database/prisma_client";

type VitaminUpdateRequest = {
    id: string
    vitamin_a: string,
    vitamin_b1: string,
    vitamin_b2: string,
    vitamin_b3: string,
    vitamin_b6: string,
    vitamin_c: string,
}

export class UpdateVitaminService{
    async execute({id, vitamin_a, vitamin_b1, vitamin_b2, vitamin_b3, vitamin_b6, vitamin_c}: VitaminUpdateRequest){
        const vitamin = await prismaClient.vitamin.findUnique({where: { id:id}})

        if(!vitamin){
            return new Error("Vitamin does not exists!");
        }

        vitamin.vitamin_a = vitamin_a? vitamin_a: vitamin.vitamin_a;
        vitamin.vitamin_b1 = vitamin_b1? vitamin_b1: vitamin.vitamin_b1;
        vitamin.vitamin_b2 = vitamin_b2? vitamin_b2: vitamin.vitamin_b2;
        vitamin.vitamin_b3 = vitamin_b3? vitamin_b3: vitamin.vitamin_b3;
        vitamin.vitamin_b6 = vitamin_b6? vitamin_b6: vitamin.vitamin_b6;
        vitamin.vitamin_c = vitamin_c? vitamin_c: vitamin.vitamin_c;

        await prismaClient.vitamin.update({
            where:{
                id:id
            },
            data:{
                vitamin_a: vitamin_a? vitamin_a: vitamin.vitamin_a,
                vitamin_b1: vitamin_b1? vitamin_b1: vitamin.vitamin_b1,
                vitamin_b2: vitamin_b2? vitamin_b2: vitamin.vitamin_b2,
                vitamin_b3: vitamin_b3? vitamin_b3: vitamin.vitamin_b3,
                vitamin_b6: vitamin_b6? vitamin_b6: vitamin.vitamin_b6,
                vitamin_c: vitamin_c? vitamin_c: vitamin.vitamin_c,
            }
        });

        return vitamin;

    }
}