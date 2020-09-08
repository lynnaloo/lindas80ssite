module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = "2020 is a very bad year.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}