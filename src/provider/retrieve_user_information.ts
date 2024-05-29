import { NextFunction, Request, Response } from "express";
import {verify} from "jsonwebtoken";


export class GetUserId{

    execute(authToken: string):string{

        const [,token] = authToken.split(" ");
        
        const decode = verify(token, "0c97b3f5-5de2-44fe-8c04-f5d103f8925b");
        if(typeof decode.sub === "string"){
            return decode.sub;
        }else {
            return "Error";
        }
    }
}