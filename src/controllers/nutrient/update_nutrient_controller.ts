import { Request, Response } from "express";
import { UpdateNutrientService } from "../../service/nutrient/update_nutrient_service";

export class UpdateNutrientController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { moisture, energy_calorie,energy_joule, fiber, ashes, carbs, protein, } = request.body;

        const service = new UpdateNutrientService();

        const result = await service.execute({
            id,
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