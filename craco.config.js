const path = require('path');

module.exports = {
    webpack : {
        alias : {
            '@' : path.resolve(__dirname, 'src'),
            "_styles" : path.resolve(__dirname, "src/assets/styles"),
            "_scenes" : path.resolve(__dirname, "src/scenes"),
            "_images" : path.resolve(__dirname, "src/assets/images")
        }
    }
}