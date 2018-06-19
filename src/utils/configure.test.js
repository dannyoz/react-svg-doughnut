const configure = require('./configure');

test('Configures settings correctly', () => {
    const test = configure({});
    expect(test.thickness).toBe(5);
    expect(test.size).toBe(150);
    expect(test.percentage).toBe(0);
    expect(test.labelText).toBeFalsy();
    expect(test.animationDuration).toBeFalsy();
});
