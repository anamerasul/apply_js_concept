function isleapYear(year){
               if(year%100 ===0 ? year%400 ==0:year%4==0){
                              return true;
               }
               return false;

}

const theseYear =2008;

const isTheseyearLeap =isleapYear(theseYear);
console.log(isTheseyearLeap);

const YourYear =2100;
const isYourYearLeapYear =isleapYear(YourYear);

console.log(isYourYearLeapYear);
