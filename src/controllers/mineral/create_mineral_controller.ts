import { Request, Response } from "express";
import { CreateMineralService } from "../../service/mineral/create_mineral_service";

export class CreateMineralController {
    async handle(request: Request, response: Response) {
        const { name, category } = request.body;

        const foodService = new CreateMineralService();

        // const result = await foodService.execute({ name });
        // if (result instanceof Error) {
        //     return response.status(400).json(result.message);
        // }
        // return response.json(result);
        return response.json('');
    }
}