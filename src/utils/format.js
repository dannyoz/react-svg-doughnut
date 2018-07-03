module.exports = (settings, val) => {
    const format = settings.format;
    let display;
    switch (format) {
        case 'percentage':
            display = `${Math.round(val)}%`
            break;
        case 'fraction':
            display = `${settings.value} / ${settings.ceiling}`
            break;
        default:
            display = `${Math.round(val)}%`
    }

    return display;
}
