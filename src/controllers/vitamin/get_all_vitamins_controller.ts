import { Request, Response } from "express";
import { GetAllVitaminsService } from "../../service/vitamins/get_all_vitamins_service";

export class GetAllVitaminController {
    async handle(request: Request, response: Response) {
        const service = new GetAllVitaminsService();

        const result = await service.execute();

        return response.json(result);
    }
}