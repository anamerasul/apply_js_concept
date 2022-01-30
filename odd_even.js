// function oddVsEven(number){

//                var reminder =number%2;
//                if(reminder===0){
//                               console.log(number ,"is even")
//                }
//                else{
//                               console.log(number ,"is odd")            
//                }

//                return reminder;
// }

// oddVsEven(16);

// const number=4;

// console.log(number%2)
// console.log(number%2==0)

const number =145;

function isEven(number){
if(number%2==0){
               return true;
}

return false;
}


const myNumber =1641;

const isMyNumberEven =isEven(myNumber)

console.log(isMyNumberEven)

const herNumber =1892;
const isHerNumberEven =isEven(herNumber);

console.log(isHerNumberEven);


function isOdd(number){
               if(number%2 !=0){
                              return true;
               }

               return false;

}

const MyfriendNumber =1451;
const myfriendNumberOdd =isOdd(MyfriendNumber);
console.log(myfriendNumberOdd);


const isMyNumberOdd =isOdd(myNumber);
console.log(isMyNumberOdd);

const isHerNumberOdd =isOdd(herNumber);
console.log(isHerNumberOdd);