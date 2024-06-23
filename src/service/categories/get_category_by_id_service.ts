import { Category } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";

type CategoryRequest = {
    id: string
}

export class GetCategoryByIdService {

    async execute({ id }: CategoryRequest): Promise< Category | Error >  {

        
        const response = await prismaClient.category.findUnique({ where: { id:id } })

        if(!response) {
            console.log("Category does not exists");
            return new Error("Category does not exists");
        }

        return response;
    }
}