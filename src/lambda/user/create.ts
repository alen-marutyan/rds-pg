import bcrypt from "bcryptjs";
import sendResponse from "../../util/userSchema";
import db from "../../models/index";
const User = db['User']


export const handler = async (event) => {
    const data = JSON.parse(event.body);
    const email: string = data.email
    const username: string = data.username
    const password: string = data.password


    const hashPassword = bcrypt.hashSync(password)

    try {
        let newVar = await User.create({
            email,
            username,
            password: hashPassword
        })

        return sendResponse(200,{data:newVar.dataValues})
    }catch (e) {
        return sendResponse(e.statusCode, {error: e.message})
    }

}
