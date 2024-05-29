import { Request, Response } from "express";
import { Readable } from "stream";
import readline from "readline"
import { TacoCsvService } from "../../service/taco_csv/taco_csv_service";
import { Category, Fat, Food, Mineral, Nutrient, Vitamin } from '@prisma/client';

type FoodData = {
    name: string,
    category: Category,
    vitamin: Vitamin,
    fat: Fat,
    nutrient: Nutrient,
    mineral: Mineral
}

export class TacoCsvController {
    async handle(request: Request, response: Response) {
        
        const {file} = request;
        if (file === undefined) {
            return response.status(400).json();
        }

        const {buffer} = file;

        const readbleFile = new Readable();
        readbleFile.push(buffer);
        readbleFile.push(null);

        const tacoLine = readline.createInterface({
            input:readbleFile,
        })

        const taco: FoodData[] = [];

        const foodResult: Food[]= []

        for await ( let line of tacoLine){
            const tacoLineSplit = line.split(";");
            let category: Category = {
                name: tacoLineSplit[2],
                id: ""
            };
            let fat: Fat = {
                cholesterol: tacoLineSplit[2],
                oil: tacoLineSplit[2],
                omega3: tacoLineSplit[2],
                saturated: tacoLineSplit[2],
                total_fat: tacoLineSplit[2],
                trans: tacoLineSplit[2],
                id: ""
            };
            let vitamin: Vitamin = {
                vitamin_a: tacoLineSplit[21],
                vitamin_b1:tacoLineSplit[24],
                vitamin_b2:tacoLineSplit[25],
                vitamin_b3:tacoLineSplit[27],
                vitamin_b6:tacoLineSplit[26],
                vitamin_c:tacoLineSplit[28],
                id: ""
            };
            let mineral: Mineral = {
                calcium:tacoLineSplit[12],
                copper:tacoLineSplit[19],
                iron:tacoLineSplit[16],
                magnesium:tacoLineSplit[13],
                manganese:tacoLineSplit[14],
                phosphor:tacoLineSplit[15],
                potassium:tacoLineSplit[18],
                sodium:tacoLineSplit[17],
                zinc:tacoLineSplit[20],
                id: ""
            };
            let nutrient: Nutrient = {
                ashes:tacoLineSplit[11],
                carbs:tacoLineSplit[9],
                energy_calorie:tacoLineSplit[4],
                energy_joule:tacoLineSplit[5],
                fiber:tacoLineSplit[10],
                moisture:tacoLineSplit[3],
                protein:tacoLineSplit[6],
                id: ""
            };

            taco.push({
                name: tacoLineSplit[1],
                category: category,
                fat: fat,
                mineral: mineral,
                vitamin: vitamin,
                nutrient: nutrient,
            })
            
        }

        for await( let {name,category,fat,mineral,nutrient,vitamin} of taco){
            const tacoCsvService = new TacoCsvService();
            const tacoResult = await tacoCsvService.execute({
                name:name,
                category:category,
                fat:fat,
                mineral:mineral,
                nutrient:nutrient,
                vitamin:vitamin,
            });

            if (isFood(tacoResult)) {
                foodResult.push(tacoResult);
                console.log({
                    id: tacoResult.id,
                    name:tacoResult.name,
                })
            } else if (tacoResult instanceof Error) {
                return response.status(400).json(tacoResult.message);
            }
        }
        return response.json(foodResult);
    }
}

function isFood(pet: Food | Error): pet is Food {
    return true;
 }
