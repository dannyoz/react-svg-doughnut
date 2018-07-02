const configure = require('./configure');

describe('Configuration tests', () => {

    test('Configures default settings correctly', () => {
        const test = configure();
        expect(test.thickness).toBe(5);
        expect(test.size).toBe(150);
        expect(test.value).toBe(0);
        expect(test.labelText).toBeFalsy();
        expect(test.animationDuration).toBeFalsy();
        expect(test.format).toBe('percentage');
        expect(test.labelPosition).toBe('bottom');
    });
    
    test('Overides default settings correctly', () => {
        const test = configure({
            thickness: 10,
            size: 200,
            value: 80,
            labelText: 'Complete...',
            animationDuration: 1000,
            labelPosition: 'top',
            format: 'fraction'
        });
        expect(test.thickness).toBe(10);
        expect(test.size).toBe(200);
        expect(test.value).toBe(80);
        expect(test.labelText).toBe('Complete...');
        expect(test.animationDuration).toBe(1000);
        expect(test.format).toBe('fraction');
        expect(test.labelPosition).toBe('top');
    });

});
