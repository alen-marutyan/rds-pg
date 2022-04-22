import sendResponse from "../../util/userSchema";
import db from "../../models/index";
import {APIGatewayProxyHandler, APIGatewayProxyResult} from "aws-lambda";
const User = db['User']

export const handler:APIGatewayProxyHandler = async (event) => {
    let response: APIGatewayProxyResult;
    try {
        let data = await User.findAll();
        response = sendResponse(200, {data: JSON.stringify(data)})
    }catch (e) {
        response = sendResponse(e.statusCode, {error: JSON.stringify(e.message)})
    }
    return response;
}
