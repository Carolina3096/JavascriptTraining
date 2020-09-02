
//CHAPTER1
//Unary operators

console.log(typeof 4.5);

console.log(typeof "x");

console.log(-(10-3));

// boolean values 

console.log(3>2);

console.log("Itchy"!= "Scratchy");

console.log("True and false is:", true && false);

console.log("False or true is:", false || true);


//CHAPTER 2 -Programe Structure
let caught= 5*5;
console.log(caught);

let luigiDebt=140;
luigiDebt=luigiDebt -35;
console.log("Luigi debt now is:",luigiDebt);

var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);

console.log(Math.max(5,100));

let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}

let num = 20

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}


let theNumber = 4;
console.log("Your number is the square root of " +
            theNumber * theNumber);

 for (let number = 0; number <= 12; number = number + 2) {
 console.log(number);
 }

 //Exercise: Write a loop that makes seven calls to console.log to output the following triangle

// #
// ##
// ###
// ####
// #####
// ######
// #######
let sign='';
for(let triangle=0; triangle<=6 ;triangle++)
{
   sign=sign.concat('#');
    console.log(sign,'\n');
}


// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

for (let number=1; number<=100; number++ )
{

    if(number%3==0 && number%5!=0)
    {
        console.log(`Number ${number}: Fizz`);
    }
    else 
     if(number%3!=0 && number%5==0)
    {
        console.log(`Number ${number}: Buzz`);
    }
    else if(number%3==0 && number%5==0) 
    {

        console.log(`Number ${number}: FizzBuzz`);
    }
}
// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
let hashtag='';
for (let line=1; line<=8; line++)
{
  let row = '';
    for(let character=1;character<=8; character++)
    {
        
        if((line+character)%2==0)
        {
          row+='#';
        }
        else {

          row += ' ';
        }
    }
    console.log(row);
}


//CHAPTER 3 Functions 

function DisplayMin(number1, number2)
{
  console.log(`Minimum between ${number1} and ${number2} is ${Math.min(number1,number2)}`);

}

DisplayMin(2,3);

function IsEven(a){

    if(a==0) return "True";
    else 
    if(a==1) return "False";
    else return IsEven(a-2);

}

console.log(IsEven(50));
console.log(IsEven(75));

// function FindBs(word)
// {
//     let no=0
//  for(i=no<word.length)
//  {
//     if()
//     {

//         console.log()
//     }

//  }
// }
function Range(start,end, step=1)
{
     var numbers = [];
    if(start<end)
    {
      for(i=start; i<=end; i=i+step)
      {
        numbers.push(i);
       
      }
    }
    else if(start>end)
        {   
         for(i=start; i>=end; i--)
             {
                 numbers.push(i);
             }
        }
    return numbers;
    
}

console.log(Range(5,2, -1));
let rangeResult=Range(5,2, -1);

function sumOfRange(a)
{  
    let sum=0;
    for(i=0; i<a.length; i ++)
    {
        console.log(a[i]);
         sum=sum+a[i];
    }
    return sum ;
}

console.log('Sum of range is:',sumOfRange(rangeResult));


// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

// console.log(reverseArray(["A", "B", "C"]));
// // → ["C", "B", "A"];
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
// // → [5, 4, 3, 2, 1]

function reverseArray(getArray)
{
  let reversedArray=[];
  for(i=0; i<getArray.length; i++)
  {
     reversedArray.push(getArray[getArray.length-1-i]);
  }
console.log("The reversed array is: ",reversedArray);
}

let letterArray=['A','B','C'];
reverseArray(letterArray);

function reversedInPlaceArray( getArray)
{
  
  for(i=0; i<Math.floor(getArray.length/2); i++)
  {
        let temp= getArray[i];
        getArray[i]=getArray[getArray.length-i-1];
        getArray[getArray.length-i-1]=temp;
  }
  console.log(getArray);
}

let array=[1,2,3,4,5,6,7]
reversedInPlaceArray(array);

let list = {
  value: 1,
  rest: {
    blabla: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

console.log(Object.keys(list.rest));

// Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on
function arrayToList(arrayForList)
{
  let list={};
  let local={};
  for(let i of arrayForList.reverse())
  {
    local.value=i;
    local.rest=list;
    list=Object.assign({}, local);
  }
  console.log(list);
 
}
let arrayForList=[5,6,8];
arrayToList(arrayForList);