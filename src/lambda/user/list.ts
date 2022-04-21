import sendResponse from "../../util/userSchema";
import db from "../../models/index";
const User = db['User']

export const handler = async (event) => {
    try {
        let data = await User.findAll();
        return sendResponse(200, {data})
    }catch (e) {
        return sendResponse(e.statusCode, {error: e.message})
    }

}
