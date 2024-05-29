import { Mineral } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";


export class CreateMineralService {

    async execute(mineralInfo: any): Promise< Mineral | Error >  {
        const { calcium,
            magnesium, manganese, phosphor, iron, sodium, potassium, copper, zinc } = mineralInfo;

        const mineral = prismaClient.mineral.create({
            data:{
                calcium,
                magnesium,
                manganese,
                phosphor,
                iron,
                sodium,
                potassium,
                copper,
                zinc
            }
        });

        // await prismaClient.mineral.save(mineral);

        return mineral;
    }
}