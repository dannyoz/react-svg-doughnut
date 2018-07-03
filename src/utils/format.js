module.exports = (settings, val) => {
    const format = settings.format;
    let display;
    switch (format) {
        case 'percentage':
            display = `${val}%`
            break;
        case 'fraction':
            display = `${settings.value} / ${settings.ceiling}`
            break;
        default:
            display = `${val}%`
    }

    return display;
}
