var vuforia = function () {

    var client = require('./lib/client');
    var util = require('./lib/util');

    return {

        'client': client,
        'util' : util
    };

};

module.exports = vuforia();
