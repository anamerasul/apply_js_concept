// function getFactorial(numbers){
//                let factorial =1;

//                let i =1;
//                while(i<=numbers){
//                               factorial=factorial*i;
//                               i++;
//                }
//                return factorial;
// }


// const myFactorial =getFactorial(6);
// console.log(myFactorial);

function getFactorial(numbers){
               let factorial =1;
               let i =numbers;

               while(i>=1){
                              factorial =factorial*i;
                              i--;

               }

               return factorial;
}

const myFactorial =getFactorial(6);
console.log(myFactorial);


// for loop reverse

function getFactorial2(numbers){
               let factorial =1;
               for(let i =numbers; i>=1; i--){
                              factorial=factorial*i;
               }
               return factorial;
}

const myFactorialOne =getFactorial2(6);
console.log(myFactorialOne);