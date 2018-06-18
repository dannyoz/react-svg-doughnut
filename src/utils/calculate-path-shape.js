module.exports = (percentage, size, thickness) => {
    const PI = Math.PI;
    const cos = Math.cos;
    const sin = Math.sin;
    const centerY = size / 2;
    const centerX = size / 2;
    const radius = (size / 2) - thickness;
    const startAngle = - 90;
    const startRadians = startAngle * PI / 180;
    const endAngle = percentage * 3.6 - 90;
    const endRadians = (endAngle - 0.0001) * PI / 180;
    const largeArc = ((endRadians - startRadians) % (PI * 2)) > PI ? 1 : 0;
    const startX = centerX + cos(startRadians) * radius;
    const startY = centerY + sin(startRadians) * radius;
    const endX = centerX + cos(endRadians) * radius;
    const endY = centerY + sin(endRadians) * radius;

    const attrString = [
        'M', startX, startY,
        'A', radius, radius, 0,
        largeArc, 1, endX, endY
    ].join(' ');
    
    return String(attrString);
}
