// > const user = new User('Uma');

// > user.getName();
// 'Uma'

// > user.getIntroduction();
// 'Hi, my name is Uma'
const User = require('../lib/user')
describe("User", () => {
  it('returns the name of the instance', ()=>{
    const user = new User('Uma')
    expect(user.name).toBe('Uma')
  });
});
