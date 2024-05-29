import { NextFunction, Request, Response } from "express";
import {verify} from "jsonwebtoken";


export function ensureauthencticated(request: Request, response: Response, next: NextFunction){
    const authToken = request.headers.authorization;

    if(!authToken){
        return response.status(401).json({
            message:"Unauthoraized request"
        })
    }

    const [,token] = authToken.split(" ");

    try{
        verify(token, "0c97b3f5-5de2-44fe-8c04-f5d103f8925b");
        return next();
    }catch{
        return response.status(401).json({
            message: "Token expired"
        })
    }
}