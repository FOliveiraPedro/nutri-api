import { Request, Response } from "express";
import { UpdateFatService } from "../../service/fat/update_fat_service";

export class UpdateFatController {
    async handle(request: Request, response: Response) {
        const {id} = request.params;
        const {total_fat, cholesterol, saturated, oil, omega3, trans} = request.body;

        const service = new UpdateFatService();

        const result = await service.execute({id, total_fat, cholesterol, saturated, oil, omega3, trans});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}