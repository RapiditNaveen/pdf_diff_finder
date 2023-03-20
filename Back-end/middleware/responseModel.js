module.exports.sendResponse = function (code, result, message) {
  var response = {};
  response = {
    status: code,
    message: message,
    data: result,
  };
  return response;
};
module.exports.sendError = function (code, error, errorMessages = []) {
  {
    var response = {};
    response = {
      success: code,
      message: errorMessages,
      data: error,
    };
    return response;
  }
};
