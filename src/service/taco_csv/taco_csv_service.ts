import { CreateFoodService } from "../../service/food/create_food_service";
import { GetCategoryByNameService } from "../categories/get_category_by_name_service";
import { CreateFatService } from "../../service/fat/create_fat_service";
import { CreateMineralService } from "../../service/mineral/create_mineral_service";
import { CreateNutrientService } from "../../service/nutrient/create_nutrient_service";
import { CreateVitaminService } from "../../service/vitamins/create_vitamin_service";
import { Category, Fat, Food, Mineral, Nutrient, Vitamin } from "@prisma/client";
import { isCategory, isFat, isMineral, isNutrient, isVitamin } from "../../shared/type_check";

type FoodData = {
    name: string,
    category: Category,
    vitamin: Vitamin,
    fat: Fat,
    nutrient: Nutrient,
    mineral: Mineral
}

export class TacoCsvService {

    async execute({ name, category, vitamin, fat, nutrient, mineral }: FoodData): Promise<Food | Error> {
        const foodService = new CreateFoodService();

        const categoryService = new GetCategoryByNameService();
        const fatService = new CreateFatService();
        const vitaminService = new CreateVitaminService();
        const mineralService = new CreateMineralService();
        const nutrientService = new CreateNutrientService();

        let categoryId = "";
        let fatId = "";
        let vitaminId = "";
        let mineralId = "";
        let nutrientId = "";

        const categoryResult = await categoryService.execute({ name: category.name });

        if (isCategory(categoryResult)) {
            categoryId = categoryResult.id;
        } else if (categoryResult instanceof Error) {
            return Error("Error on Category");
        }

        const fatResult = await fatService.execute(fat);

        if (isFat(fatResult)) {
            fatId = fatResult.id;
        } else if (fatResult instanceof Error) {
            return Error("Error on Fat");
        }

        const vitaminResult = await vitaminService.execute(vitamin);

        if (isVitamin(vitaminResult)) {
            vitaminId = vitaminResult.id;
        } else if (vitaminResult instanceof Error) {
            return Error("Error on Vitamin");
        }

        const mineralResult = await mineralService.execute(mineral);

        if (isMineral(mineralResult)) {
            mineralId = mineralResult.id;
        } else if (mineralResult instanceof Error) {
            return Error("Error on Mineral");
        }

        const nutrientResult = await nutrientService.execute(nutrient);

        if (isNutrient(nutrientResult)) {
            nutrientId = nutrientResult.id;
        } else if (nutrientResult instanceof Error) {
            return Error("Error on Nutrient");
        }

        const result = await foodService.execute({ 
            name: name, 
            category_id: categoryId, 
            vitamin_id: vitaminId, 
            fat_id: fatId, 
            nutrient_id: nutrientId, 
            mineral_id: mineralId 
        });
        return result;
    }
}