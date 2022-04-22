import bcrypt from "bcryptjs";
import sendResponse from "../../util/userSchema";
import db from "../../models/index";
const User = db['User']
import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";

export const handler: APIGatewayProxyHandler = async (event) => {
    const data = JSON.parse(event.body);
    const email: string = data.email
    const username: string = data.username
    const password: string = data.password
    let response: APIGatewayProxyResult;
    const hashPassword = bcrypt.hashSync(password);
    

    try {
        let infoCreate = await User.create({
            email,
            username,
            password: hashPassword
        });

        response = sendResponse(200,{data: JSON.stringify(infoCreate.dataValues)});
    }catch (e) {
        response = sendResponse(e.statusCode, {error: JSON.stringify(e.message)})
    }

    console.log("response", response);
    return response;
}
