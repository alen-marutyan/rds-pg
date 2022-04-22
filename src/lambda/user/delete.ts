import sendResponse from "../../util/userSchema";
import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
import db from "../../models/index";
const User = db['User']

export const handler:APIGatewayProxyHandler = async (event) => {
    let response:APIGatewayProxyResult
    try {
        await User.destroy({
            where: {id: event.pathParameters.id}
        });

        response = sendResponse(200,{data: JSON.stringify('User deleted')})
    }catch (e) {
        response = sendResponse(e.statusCode, {error: JSON.stringify(e.message)})
    }

    return response
}
