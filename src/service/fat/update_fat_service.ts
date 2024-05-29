import { prismaClient } from "../../database/prisma_client";


type FatUpdateRequest = {
    id: string,
    total_fat: string,
    cholesterol: string,
    saturated: string,
    oil: string,
    omega3: string,
    trans: string,
}

export class UpdateFatService{
    async execute({id, total_fat, cholesterol, saturated, oil, omega3, trans }: FatUpdateRequest){
        const fat = await prismaClient.fat.findFirst({where: { id:id}})

        if(!fat){
            return new Error("Fat does not exists!");
        }

        await prismaClient.fat.update({
            where:{
                id:id
            },
            data:{
                total_fat:total_fat? total_fat: fat.total_fat,
                cholesterol:cholesterol? cholesterol: fat.cholesterol,
                saturated:saturated? saturated: fat.saturated,
                oil:oil? oil: fat.oil,
                omega3:omega3? omega3: fat.omega3,
                trans:trans? trans: fat.trans
            }
        });

        return fat;

    }
}