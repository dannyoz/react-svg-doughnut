const calculatePathShape = require('./calculate-path-shape');

test('Calculates path shape correctly', () => {
    const expectation = 'M 100 5 A 95 95 0 1 1 5.000000000144695 100.00016580627893';
    expect(calculatePathShape(75, 200, 5)).toBe(expectation);
});
