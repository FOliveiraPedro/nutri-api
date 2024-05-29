import { Mineral } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";


type MineralUpdateRequest = {
    id: string
    calcium: string,
    magnesium: string,
    manganese: string,
    phosphor: string,
    iron: string,
    sodium: string,
    potassium: string,
    copper: string,
    zinc: string,
}

export class UpdateMineralService{
    async execute({id, calcium,
        magnesium, manganese, phosphor, iron, sodium, potassium, copper, zinc}: MineralUpdateRequest): Promise< Mineral | Error >{
        const mineral = await prismaClient.mineral.findUnique({where: { id:id}})

        if(!mineral){
            return new Error("Mineral does not exists!");
        }

        mineral.calcium = calcium? calcium: mineral.calcium;
        mineral.magnesium = magnesium? magnesium: mineral.magnesium;
        mineral.manganese = manganese? manganese: mineral.manganese;

        mineral.phosphor = phosphor? phosphor: mineral.phosphor;
        mineral.iron = iron? iron: mineral.iron;
        mineral.sodium = sodium? sodium: mineral.sodium;

        mineral.potassium = potassium? potassium: mineral.potassium;
        mineral.copper = copper? copper: mineral.copper;
        mineral.zinc = zinc? zinc: mineral.zinc;

        await prismaClient.mineral.update({
            where:{
                id:id
            },
            data:{
                calcium: calcium? calcium: mineral.calcium,
                magnesium: magnesium? magnesium: mineral.magnesium,
                manganese: manganese? manganese: mineral.manganese,
                phosphor: phosphor? phosphor: mineral.phosphor,
                iron: iron? iron: mineral.iron,
                sodium: sodium? sodium: mineral.sodium,
                potassium: potassium? potassium: mineral.potassium,
                copper: copper? copper: mineral.copper,
                zinc: zinc? zinc: mineral.zinc,
            }
        });

        // await prismaClient.mineral.save(mineral);

        return mineral;

    }
}