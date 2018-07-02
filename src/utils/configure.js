const generateStyles = require('./generate-styles');

module.exports = (settings) => {
    return {
        styles: generateStyles(settings || {}),
        labelPosition: settings.labelPosition || 'bottom',
        labelText: settings.labelText || null,
        animationDuration: settings.animationDuration || null,
        value: settings.value || 0,
        size: settings.size || 150,
        thickness: settings.thickness || 5,
        ceiling: settings.ceiling || 100,
        format: settings.format || 'percentage'
    };
};
