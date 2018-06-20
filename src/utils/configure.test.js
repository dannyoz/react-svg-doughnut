const configure = require('./configure');

describe('Configuration tests', () => {

    test('Configures default settings correctly', () => {
        const test = configure();
        expect(test.thickness).toBe(5);
        expect(test.size).toBe(150);
        expect(test.percentage).toBe(0);
        expect(test.labelText).toBeFalsy();
        expect(test.animationDuration).toBeFalsy();
    });
    
    test('Overides default settings correctly', () => {
        const test = configure({
            thickness: 10,
            size: 200,
            percentage: 80,
            labelText: 'Complete...',
            animationDuration: 1000
        });
        expect(test.thickness).toBe(10);
        expect(test.size).toBe(200);
        expect(test.percentage).toBe(80);
        expect(test.labelText).toBe('Complete...');
        expect(test.animationDuration).toBe(1000);
    });

});
