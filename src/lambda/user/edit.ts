import bcrypt from "bcryptjs";
import sendResponse from "../../util/userSchema";
import db from "../../models/index";
import {APIGatewayProxyHandler, APIGatewayProxyResult} from "aws-lambda";
const User = db['User']

export const handler:APIGatewayProxyHandler = async (event) => {
    const data = JSON.parse(event.body);
    const email: string = data.email
    const username: string = data.username
    const password: string = data.password
    const hashPassword = bcrypt.hashSync(password);
    let response: APIGatewayProxyResult;

    try {
        await User.update({
            email: email,
            username: username,
            password: hashPassword
        },{
            where:{id: event.pathParameters.id}
        })

        response = sendResponse(200, {data: JSON.stringify({email, username})})
    }catch (e) {
        response = sendResponse(e.statusCode, {error: JSON.stringify(e.message)});
    }

    return response;
}
