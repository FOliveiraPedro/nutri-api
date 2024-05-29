import { Vitamin } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";


export class CreateVitaminService {

    async execute(vitaminInfo: any): Promise<Vitamin | Error> {
        const { vitamin_a, vitamin_b1, vitamin_b2, vitamin_b3, vitamin_b6, vitamin_c } = vitaminInfo;
        const vitamin = prismaClient.vitamin.create({
            data:{
                vitamin_a,
                vitamin_b1,
                vitamin_b2,
                vitamin_b3,
                vitamin_b6,
                vitamin_c
            }
        });

        // await prismaClient.vitamin.save(vitamin);

        return vitamin;
    }
}