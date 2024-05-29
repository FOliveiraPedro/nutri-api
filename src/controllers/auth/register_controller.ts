import { Request, Response } from "express";
import { RegisterService } from "../../service/auth/register_service";

export class RegisterController {
    async handle(request: Request, response: Response) {
        console.log(request.body);
        const {email, name, password} = request.body;

        const service = new RegisterService();

        const result = await service.execute({email, name, password});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}
