import { Fat } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";


type FatRequest = {
    id: string
}

export class GetFatByNameService {

    async execute({ id }: FatRequest): Promise< Fat | Error >  {
        
        const response = await prismaClient.fat.findUnique({ where: { id:id } })

        if(!response) {
            console.log("Fat does not exists");
            return new Error("Fat does not exists");
        }

        return response;
    }
}