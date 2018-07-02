const format = require('./format');

test('Displays correct format', () => {
    const test1 = format({}, 15);
    const test2 = format({
        format: 'fraction',
        ceiling: 20,
        value: 15
    });
    expect(test1).toEqual('15%');
    expect(test2).toEqual('15 / 20');
});
