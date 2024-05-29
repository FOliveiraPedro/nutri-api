import { Request, Response } from "express";
import { CreateFatService } from "../../service/fat/create_fat_service";

export class CreateFatController {
    async handle(request: Request, response: Response) {
        const { total_fat, cholesterol, saturated, oil, omega3, trans } = request.body;

        const service = new CreateFatService();

        const result = await service.execute({total_fat, cholesterol, saturated, oil, omega3, trans});

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}