import { Vitamin } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";


type VitaminRequest = {
    id: string
}

export class GetVitaminByNameService {

    async execute({ id }: VitaminRequest): Promise< Vitamin | Error >  {
        
        const response = await prismaClient.vitamin.findUnique({ where: { id:id } })

        if(!response) {
            console.log("Vitamin does not exists");
            return new Error("Vitamin does not exists");
        }

        return response;
    }
}