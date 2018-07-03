module.exports = (settings) => {
    const value = settings.value || 0;
    const ceiling = settings.ceiling || 100;
    return ( value / ceiling ) * 100;
}
