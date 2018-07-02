const generateStyles = require('./generate-styles');
const defaults = {
    size: 150,
    value: 0,
    thickness: 5,
    format: 'percentage',
    labelPosition: 'bottom'
}

module.exports = (settings = defaults) => {
    return {
        styles: generateStyles(settings || {}),
        labelPosition: settings.labelPosition,
        labelText: settings.labelText,
        animationDuration: settings.animationDuration,
        value: settings.value,
        size: settings.size,
        thickness: settings.thickness,
        ceiling: settings.ceiling,
        format: settings.format
    };
};
