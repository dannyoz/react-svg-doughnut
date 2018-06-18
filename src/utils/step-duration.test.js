const duration = require('./step-duration');

test('Calculates step duration correctly', () => {
    expect(duration(50, 1000)).toBe(20);
});
