const {z} = require("zod");

const sendResponse = (statusCode, body) => {
    return {
        statusCode: statusCode,
        body: JSON.stringify(body)
    }
}


const validateUser = (email,username,password) => {
    let User = z.object({
        email: z.string().email(),
        username: z.string(),
        password: z.string()
    });
    return User.parse({email,username, password});
}


module.exports = {sendResponse, validateUser}
