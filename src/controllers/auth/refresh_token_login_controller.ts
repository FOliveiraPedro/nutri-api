import { Request, Response } from "express";
import { RefreshTokenLoginService } from "../../service/auth/refresh_token_login_service";

export class RefreshTokenLoginController {
    async handle(request: Request, response: Response) {

        const {refresh_token} = request.body;

        const service = new RefreshTokenLoginService();

        const result = await service.execute({refreshToken:refresh_token});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}