// variable
var time ='10:15pm';

var bookPrice=150;
var isWhite =false;

// array
var partners =['sazid','majid','rakib','shuvo','sourov',]

var elemntsCount = partners.length;
var majidIndex =partners.indexOf('sazid');

partners.push('kazid');
partners.pop();

// condinals

if(bookPrice <120){
               console.log("buy this book")
}

else {
               console.log("discount den");
}


// loop

// while loop

var i =0;
while(i<=17){
               //do some work
               i++;
}
// for loop
for(i =0 ; i<=17; i++){

}


// function
function isMoonUp(time){

               if(time >=19||time <=5 ){
                              return true;
               }
               else{
                              return false;
               }
              
}

var moonStatus = isMoonUp(21);

console.log(moonStatus);

// let const
// value of variblue could change
let price =27;
price =29;
price =31;

// value of the variable could not change
const myname ="lal e lal mr. helel";
console.log(myname);
// name = 22;