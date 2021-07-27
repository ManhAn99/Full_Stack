// // //Es6

// // const alphabet = ['A', 'B', 'C', 'D', 'E' ,'F']
// // const numbers = ['1', '2', '3', '4','5', '6']

// // // const a = alphabet[0];
// // // const b = alphabet[1]

// // const [a, ,c, ...rest] = alphabet



// // const newArray = [...alphabet, ...numbers]
// // // const newArray = alphabet.concat(numbers)
// // console.log(a);
// // // console.log(a);
// // console.log(c);
// // console.log(rest);
// // console.log(newArray);

// // function sumAndMutiply(a,b) {
// //     return [a+b, a*b, a/b]
// // }

// // const [sum, mutiply, division = 'No divsion'] = sumAndMutiply(2,3)
// // console.log(sum);
// // console.log(mutiply);
// // console.log(division);

// //Object destructring
// const personOne = {
//     name : 'Kyle',
//     age : 24,
//     address : {
//         city : 'SomeWhere',
//         state : 'One of them'
    

// },
// favoriteFod : 'coca'

      
    
// }

// const personTwo = {
   
//     age : 32,
//     favoriteFod :'WaterMelom',
    
// }

// // const {name :firstName, address : {city}} = personTwo;

// // console.log(firstName, city);
// // const personThree = {...personOne, ...personTwo}
// // console.log(personThree);

// function printUser({name, age, favoriteFod= 'Rice'}) {
//     // console.log(`name is ${user.name} ,age is ${user.age}`);
//     console.log(`name is ${name} ,age is ${age} .Food is ${favoriteFod}`);
// }
// printUser(personOne)

import TaskList from "./js/taskList.js";
import InputContainer from "./js/inputContainer.js";
import BookList from "./js/BookList.js";