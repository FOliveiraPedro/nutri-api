import { Request, Response } from "express";
import { CreateVitaminService } from "../../service/vitamins/create_vitamin_service";

export class CreateVitaminController {
    async handle(request: Request, response: Response) {
        const { vitamin_a, vitamin_b1, vitamin_b2, vitamin_b3, vitamin_b6, vitamin_c } = request.body;

        const service = new CreateVitaminService();

        const result = await service.execute({ vitamin_a, vitamin_b1, vitamin_b2, vitamin_b3, vitamin_b6, vitamin_c });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}