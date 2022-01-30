// let factorial =1;
// for(let i =1; i<=5; i++){
//               factorial= factorial*i;

// }

// console.log(factorial);

function getFactorial(numbers){
               let factorial=1;
               for(let i =1; i<=numbers;i++){
                              factorial=factorial*i;

               }

               return factorial;

}

let firstFactorial =getFactorial(7);

console.log(firstFactorial);

let secondFactorial =getFactorial(9);
console.log(secondFactorial);




