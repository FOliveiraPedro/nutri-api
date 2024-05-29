import { Request, Response } from "express";
import { CreateNutrientService } from "../../service/nutrient/create_nutrient_service";

export class CreateNutrientController {
    async handle(request: Request, response: Response) {
        const { moisture, energy_calorie,energy_joule,  fiber, ashes, carbs, protein, } = request.body;

        const nutrientService = new CreateNutrientService();

        const result = await nutrientService.execute({
            moisture,
            energy_calorie, 
            energy_joule, 
            fiber, 
            ashes, 
            carbs, 
            protein,
        });
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}