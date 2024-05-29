import { sign } from "jsonwebtoken";


export class GenerateToken{

    async execute(userId: string){

        const generatedToken = sign({},"0c97b3f5-5de2-44fe-8c04-f5d103f8925b",{
            subject: userId,
            expiresIn: "120s"
        })

        return generatedToken;
    }
}