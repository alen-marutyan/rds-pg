const {validateUser, sendResponse} = require('../../util/userSchema');
const bcrypt = require('bcryptjs');

const {User} = require('../../models/index');

module.exports.handler = async (event) => {
    const { email, username, password } = JSON.parse(event.body);


    if (!validateUser(email,username,password)){
        return sendResponse(500, 'Error Validate' )
    }
    const hashPassword = bcrypt.hashSync(password);

    try {
        let data = await User.update({
            email: email,
            username: username,
            password: hashPassword
        },{
            where:{id: event.pathParameters.id}
        })

        return sendResponse(200, {email, username})
    }catch (e) {
        return sendResponse(e.statusCode, JSON.stringify(e.message))
    }


}
