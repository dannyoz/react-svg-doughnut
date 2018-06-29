const calculatePercentage = require('./calculate-percentage');

describe('Calculate percentage tests', () => {

    test('Configures default settings correctly', () => {
        const test1 = calculatePercentage({
            value: 60,
            ceiling: 120
        });
        const test2 = calculatePercentage({
            value: 30,
            ceiling: 120
        });
        expect(test1).toBe(50);
        expect(test2).toBe(25);
    });
    
});
