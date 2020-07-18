import {Request, Response, json} from "express";
import { getRepository } from "typeorm";
import User from "../entities/User";

class UserController {

    async store(request: Request, response: Response) {
        const userRepository = getRepository(User);

        const {name, email, password} = request.body;

        const user = await userRepository.create({name, email, password});
        await userRepository.save(user);
        return response.json(user);
    }

}

export default UserController;