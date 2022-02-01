//This is a variable that holds my age 
let myAge = 23;
//Variable earlyYears set to 2 
let earlyYears = 2;
earlyYears*=10.5;
//Variable laterYears set to myAge - 2 
let laterYears = myAge - 2;
//laterYears multiplied by 4
laterYears*=4;
console.log(earlyYears, laterYears);
//Final addition to convert to dog years 
let myAgeInDogYears = earlyYears + laterYears;
//My name in lower case assigned to a variable
let myName = 'Eddie Nala'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);