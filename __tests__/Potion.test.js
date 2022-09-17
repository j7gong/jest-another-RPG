const Potion = require('../lib/Potion.js');
jest.mock('../lib/Potion.js');

test('creates a health potion object', ()=> {
    const potion = new Potion();

    expect(potion.name).toBe('health');
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});