import { Request, Response } from "express";
import { GetAllFatService } from "../../service/fat/get_all_fat_service";

export class GetAllFatController {
    async handle(request: Request, response: Response) {
        const service = new GetAllFatService();

        const result = await service.execute();

        return response.json(result);
    }
}