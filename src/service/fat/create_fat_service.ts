import { Fat } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";




export class CreateFatService {

    async execute(fatInfo: any): Promise< Fat | Error> {
        const { total_fat, cholesterol, saturated, oil, omega3, trans } = fatInfo;
        const fat = prismaClient.fat.create({
            data:{
                total_fat, 
                cholesterol, 
                saturated, 
                oil, 
                omega3, 
                trans,
        }});

        return fat;
    }
}