const User = require ('./user')

class UserBase {
    constructor(users){
      this.users = users;
    }

    count() {
      return this.users.length;
    }
    getNames() {
        return this.users.map(name => {
            return name.getName();
        });
        
    };

    getIntroductions() {
      return this.users.map(intro => {
          return intro.getIntroduction();
    });
    }
};
const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
  ];
const userBase = new UserBase(users);

console.log(userBase);
console.log(userBase.count());
console.log(userBase.getNames());
console.log(userBase.getIntroductions());

//Intended Output
// > const userBase = new UserBase(users);

// > userBase.count();
// 3

// > userBase.getNames();
// [ 'Uma', 'Josh', 'Ollie' ]

// > userBase.getIntroductions();
// [
//   'Hi, my name is Uma',
//   'Hi, my name is Josh',
//   'Hi, my name is Ollie'
//]