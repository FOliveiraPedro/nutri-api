import { Request, Response } from "express";
import { CreateFoodService } from "../../service/food/create_food_service";
import { GetCategoryService } from "../../service/categories/get_category_service";
import { CreateFatService } from "../../service/fat/create_fat_service";
import { CreateMineralService } from "../../service/mineral/create_mineral_service";
import { CreateNutrientService } from "../../service/nutrient/create_nutrient_service";
import { CreateVitaminService } from "../../service/vitamins/create_vitamin_service";
import { isCategory, isFat, isMineral, isNutrient, isVitamin } from "../../shared/type_check";

export class CreateFoodController {
    async handle(request: Request, response: Response) {
        const { name, category, fat, vitamin, mineral, nutrient } = request.body;

        const foodService = new CreateFoodService();

        const categoryService = new GetCategoryService();
        const fatService = new CreateFatService();
        const vitaminService = new CreateVitaminService();
        const mineralService = new CreateMineralService();
        const nutrientService = new CreateNutrientService();

        let categoryId = "";
        let fatId = "";
        let vitaminId = "";
        let mineralId = "";
        let nutrientId = "";

        const categoryResult = await categoryService.execute({ name: category });

        if (isCategory(categoryResult)) {
            categoryId = categoryResult.id;
        } else if (categoryResult instanceof Error) {
            return response.status(400).json(categoryResult.message);
        }

        const fatResult = await fatService.execute(fat);

        if (isFat(fatResult)) {
            fatId = fatResult.id;
        } else if (fatResult instanceof Error) {
            return response.status(400).json(fatResult.message);
        }

        const vitaminResult = await vitaminService.execute(vitamin);

        if (isVitamin(vitaminResult)) {
            vitaminId = vitaminResult.id;
        } else if (vitaminResult instanceof Error) {
            return response.status(400).json(vitaminResult.message);
        }

        const mineralResult = await mineralService.execute(mineral);

        if (isMineral(mineralResult)) {
            mineralId = mineralResult.id;
        } else if (mineralResult instanceof Error) {
            return response.status(400).json(mineralResult.message);
        }

        const nutrientResult = await nutrientService.execute(nutrient);

        if (isNutrient(nutrientResult)) {
            nutrientId = nutrientResult.id;
        } else if (nutrientResult instanceof Error) {
            return response.status(400).json(nutrientResult.message);
        }

        const result = await foodService.execute({ 
            name, 
            category_id: categoryId, 
            vitamin_id: vitaminId, 
            fat_id: fatId, 
            nutrient_id: nutrientId, 
            mineral_id: mineralId 
        });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}