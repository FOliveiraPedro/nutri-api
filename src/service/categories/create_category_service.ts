import { Category } from '@prisma/client';
import { prismaClient } from '../../database/prisma_client';

type CategoryRequest = {
    name: string,
}

export class CreateCategoryService {

    async execute({ name }: CategoryRequest): Promise< Category | Error >  {

        const response = await prismaClient.category.findFirst({ where: { name:name } });

        

        if(response) {
            console.log("Category already exists");
            return new Error("Category already exists");
        }

        const category = prismaClient.category.create(
            {data:{
                name,
            }}
        );

        // await prismaClient.category.save(category);

        return category;
    }
}