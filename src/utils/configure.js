const generateStyles = require('./generate-styles');
module.exports = (settings) => {
    return {
        styles: generateStyles(settings),
    };
};
