import sendResponse from "../../util/userSchema";

import db from "../../models/index";
const User = db['User']

export const handler = async (event) => {

    try {
        await User.destroy({
            where: {id: event.pathParameters.id}
        });

        return sendResponse(200,{data: 'User deleted'})
    }catch (e) {
        return sendResponse(e.statusCode, {error: e.message})
    }

}
