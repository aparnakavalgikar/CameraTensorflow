var exec = require('cordova/exec');

function CameraTensorflow() {}

CameraTensorflow.prototype.DetectorActivity = function(success, error) {
    exec(success, error, "CameraTensorflow", "DetectorActivity");
};

module.exports = new CameraTensorflow();