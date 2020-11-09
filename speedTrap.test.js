const { expect } = require('@jest/globals');
const speedTrapTest = require('./speedTrap');


test('test1', () => {
    expect(speedTrapTest(1, 1)).toBeCloseTo(0.6818183727273262, 6)

});

test('test2', () => {
    expect(speedTrapTest(5280, 60)).toBeCloseTo(60, 6)
});
