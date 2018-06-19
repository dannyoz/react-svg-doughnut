const generateStyles = require('./generate-styles');
module.exports = (settings) => {
    return {
        styles: generateStyles(settings || {}),
        labelText: settings.labelText,
        animationDuration: settings.animationDuration,
        percentage: settings.percentage || 0,
        size: settings.size || 150,
        thickness: settings.thickness || 5
    };
};
