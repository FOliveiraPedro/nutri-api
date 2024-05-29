import { Request, Response } from "express";
import { UpdateVitaminService } from "../../service/vitamins/update_vitamin_service";

export class UpdateVitaminController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { vitamin_a, vitamin_b1, vitamin_b2, vitamin_b3, vitamin_b6, vitamin_c } = request.body;

        const service = new UpdateVitaminService();

        const result = await service.execute({ id, vitamin_a, vitamin_b1, vitamin_b2, vitamin_b3, vitamin_b6, vitamin_c });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}