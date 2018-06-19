const generateStyles = require('./generate-styles');
const defaults = {
    size: 150,
    percentage: 0,
    thickness: 5
}

module.exports = (settings = defaults) => {
    return {
        styles: generateStyles(settings || {}),
        labelText: settings.labelText,
        animationDuration: settings.animationDuration,
        percentage: settings.percentage,
        size: settings.size,
        thickness: settings.thickness
    };
};
