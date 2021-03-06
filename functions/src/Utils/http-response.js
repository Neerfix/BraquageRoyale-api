module.exports = {
    HTTP_200,
    HTTP_201,
    HTTP_400,
    HTTP_403,
    HTTP_404,
    HTTP_409,
    HTTP_500,
}

function errorMessage (res, code, message, reason, details) {
    return res.status(code).send({ "code": code, "message": message, "reason": reason, "details": details })
}

function HTTP_200 (req, res, next, message) {
    return res.status(200).send(message)
}

function HTTP_201 (req, res, next, message) {
    return res.status(201).send(message)
}

function HTTP_400 (req, res, message) {
    return errorMessage(res, 400, "Bad request", message);
}

function HTTP_403 (req, res, next, reason, message) {
    return errorMessage(res, 403, "Forbidden", reason, message);
}

function HTTP_404 (req, res, next, items, message) {
    return errorMessage(res, 404, "Not Found", items + " not found", message);
}

function HTTP_409 (req, res, next, items, message) {
    return errorMessage(res, 409, "Conflict", "Email Already Taken", message);
}

function HTTP_500 (req, res, next, error) {
    return errorMessage(res, 500, "Internal server error", error.message ? error.message : error, '');
}
