import { Request, Response } from "express";
import { GetFoodByNameService } from "../../service/food/get_food_by_name_service";
import { isFood } from "../../shared/type_check";
import { GetCategoryByIdService } from "../../service/categories/get_category_by_id_service";
import { GetFatByIdService } from "../../service/fat/get_fat_by_id_service";
import { GetVitaminByIdService } from "../../service/vitamins/get_vitamin_by_id_service";
import { GetMineralByIdService } from "../../service/mineral/get_mineral_by_id_service";
import { GetNutrientByIdService } from "../../service/nutrient/get_nutrient_by_id_service";


export class GetFoodByNameController {
    async handle(request: Request, response: Response) {
        console.log(request.body);
        const {id} = request.body

        const service = new GetFoodByNameService();

        const result = await service.execute({id});

        const categoryService = new GetCategoryByIdService();
        const fatService = new GetFatByIdService();
        const vitaminService = new GetVitaminByIdService();
        const mineralService = new GetMineralByIdService();
        const nutrientService = new GetNutrientByIdService();

        if(isFood(result)){
            const categoryResult = await categoryService.execute({ id: result.category_id });
    
            if (categoryResult instanceof Error) {
                return response.status(400).json(categoryResult.message);
            }
    
            const fatResult = await fatService.execute({id:result.fat_id});
    
            if (fatResult instanceof Error) {
                return response.status(400).json(fatResult.message);
            }
    
            const vitaminResult = await vitaminService.execute({id:result.vitamin_id});
    
            if (vitaminResult instanceof Error) {
                return response.status(400).json(vitaminResult.message);
            }
    
            const mineralResult = await mineralService.execute({id:result.mineral_id});
    
            if (mineralResult instanceof Error) {
                return response.status(400).json(mineralResult.message);
            }
    
            const nutrientResult = await nutrientService.execute({id:result.nutrient_id});
    
            if (nutrientResult instanceof Error) {
                return response.status(400).json(nutrientResult.message);
            }

            const food = {
                "id": id,
                "name": result.name,
                "category": categoryResult,
                "nutrient": nutrientResult,
                "vitamin": vitaminResult,
                "mineral": mineralResult,
                "fat": fatResult,
            }

            return response.json(food);
        }else if (result instanceof Error){
            return response.status(400).json(result.message);
        }
    }
}