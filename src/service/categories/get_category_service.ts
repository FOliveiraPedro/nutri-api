import { Category } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";

type CategoryRequest = {
    name: string
}

export class GetCategoryService {

    async execute({ name }: CategoryRequest): Promise< Category | Error >  {

        
        const response = await prismaClient.category.findFirst({ where: { name:name } })

        if(!response) {
            console.log("Category does not exists");
            return new Error("Category does not exists");
        }

        return response;
    }
}