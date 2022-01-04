// array.filter method example below
// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }

phoneNumberArray = [ 'fdgrg4', '1763687364', '4763687363', '7867867862', '2', '22','34563456734567839437' ]
let checkLength = (phoneNumber) =>{
    if(phoneNumber.length <=10){
        return true
    }else{
        return false
    }
}

let filterLongNumbers = (phoneNumberList) => {
    const lengthChecker = phoneNumberList.filter(checkLength);
    return lengthChecker
}
console.log(checkLength('223'));
console.log(checkLength('22844899349383733'));

console.log(filterLongNumbers(phoneNumberArray));
