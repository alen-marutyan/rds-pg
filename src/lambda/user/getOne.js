const { sendResponse} = require('../../util/userSchema');

const {User} = require('../../models/index');

module.exports.handler = async (event) => {

    try {
        let data = await User.findOne({
            where: {id: event.pathParameters.id}
        });

        return sendResponse(200,data)
    }catch (e) {
        return sendResponse(e.statusCode, JSON.stringify(e.message))
    }

}
