module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const responseMessage = "2020 was not a good year."

    context.res = {
        body: {
            text: responseMessage
        }
    };
}