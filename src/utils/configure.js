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
        labelPosition: settings.labelPosition || 'bottom',
        labelText: settings.labelText,
        animationDuration: settings.animationDuration,
        value: settings.value || 0,
        size: settings.size || 150,
        thickness: settings.thickness || 5,
        ceiling: settings.ceiling || 100,
        format: settings.format || 'percentage'
    };
};
