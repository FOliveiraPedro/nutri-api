import { Mineral } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";

type MineralRequest = {
    id: string
}

export class GetMineralNameService {

    async execute({ id }: MineralRequest): Promise< Mineral | Error >  {

        
        const response = await prismaClient.mineral.findUnique({ where: { id:id } })

        if(!response) {
            console.log("Mineral does not exists");
            return new Error("Mineral does not exists");
        }

        return response;
    }
}