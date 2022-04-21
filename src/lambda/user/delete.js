const { sendResponse} = require('../../util/userSchema');

const {User} = require('../../models/index');

module.exports.handler = async (event) => {

    try {
        await User.destroy({
            where: {id: event.pathParameters.id}
        });

        return sendResponse(200,'deleted User')
    }catch (e) {
        return sendResponse(e.statusCode, JSON.stringify(e.message))
    }

}
