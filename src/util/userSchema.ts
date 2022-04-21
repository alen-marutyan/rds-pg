const sendResponse = (statusCode: number, body: object) => {
    return {
        statusCode: statusCode,
        body: JSON.stringify(body)
    }
}

export default sendResponse;

