const {z} = require("zod");

const sendResponse = (statusCode, body) => {
    return {
        statusCode: statusCode,
        body: JSON.stringify(body)
    }
}


const validateUser = (email,password) => {
    let User = z.object({
        username: z.string().email(),
        password: z.string()
    });
    return User.parse({email, password});
}


module.exports = {sendResponse, validateUser}
