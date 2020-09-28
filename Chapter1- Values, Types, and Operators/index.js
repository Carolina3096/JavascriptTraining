
// //CHAPTER1
// //Unary operators

// console.log(typeof 4.5);

// console.log(typeof "x");

// console.log(-(10-3));

// // boolean values 

// console.log(3>2);

// console.log("Itchy"!= "Scratchy");

// console.log("True and false is:", true && false);

// console.log("False or true is:", false || true);


// //CHAPTER 2 -Programe Structure
// let caught= 5*5;
// console.log(caught);

// let luigiDebt=140;
// luigiDebt=luigiDebt -35;
// console.log("Luigi debt now is:",luigiDebt);

// var name = "Ayda";
// const greeting = "Hello ";
// console.log(greeting + name);

// console.log(Math.max(5,100));

// let number = 0;
// while (number <= 12) {
//   console.log(number);
//   number = number + 2;
// }

// let num = 20

// if (num < 10) {
//   console.log("Small");
// } else if (num < 100) {
//   console.log("Medium");
// } else {
//   console.log("Large");
// }


// let theNumber = 4;
// console.log("Your number is the square root of " +
//             theNumber * theNumber);

//  for (let number = 0; number <= 12; number = number + 2) {
//  console.log(number);
//  }

//  //Exercise: Write a loop that makes seven calls to console.log to output the following triangle

// // #
// // ##
// // ###
// // ####
// // #####
// // ######
// // #######
// let sign='';
// for(let triangle=0; triangle<=6 ;triangle++)
// {
//    sign=sign.concat('#');
//     console.log(sign,'\n');
// }


// // FizzBuzz
// // Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// // When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// for (let number=1; number<=100; number++ )
// {

//     if(number%3==0 && number%5!=0)
//     {
//         console.log(`Number ${number}: Fizz`);
//     }
//     else 
//      if(number%3!=0 && number%5==0)
//     {
//         console.log(`Number ${number}: Buzz`);
//     }
//     else if(number%3==0 && number%5==0) 
//     {

//         console.log(`Number ${number}: FizzBuzz`);
//     }
// }
// // Chessboard
// // Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// // Passing this string to console.log should show something like this:

// //  # # # #
// // # # # # 
// //  # # # #
// // # # # # 
// //  # # # #
// // # # # # 
// //  # # # #
// // # # # #
// let hashtag='';
// for (let line=1; line<=8; line++)
// {
//   let row = '';
//     for(let character=1;character<=8; character++)
//     {
        
//         if((line+character)%2==0)
//         {
//           row+='#';
//         }
//         else {

//           row += ' ';
//         }
//     }
//     console.log(row);
// }


// //CHAPTER 3 Functions 

// function DisplayMin(number1, number2)
// {
//   console.log(`Minimum between ${number1} and ${number2} is ${Math.min(number1,number2)}`);

// }

// DisplayMin(2,3);

// function IsEven(a){

//     if(a==0) return "True";
//     else 
//     if(a==1) return "False";
//     else return IsEven(a-2);

// }

// console.log(IsEven(50));
// console.log(IsEven(75));

// // function FindBs(word)
// // {
// //     let no=0
// //  for(i=no<word.length)
// //  {
// //     if()
// //     {

// //         console.log()
// //     }

// //  }
// // }
// function Range(start,end, step=1)
// {
//      var numbers = [];
//     if(start<end)
//     {
//       for(i=start; i<=end; i=i+step)
//       {
//         numbers.push(i);
       
//       }
//     }
//     else if(start>end)
//         {   
//          for(i=start; i>=end; i--)
//              {
//                  numbers.push(i);
//              }
//         }
//     return numbers;
    
// }

// console.log(Range(5,2, -1));
// let rangeResult=Range(5,2, -1);

// function sumOfRange(a)
// {  
//     let sum=0;
//     for(i=0; i<a.length; i ++)
//     {
//         console.log(a[i]);
//          sum=sum+a[i];
//     }
//     return sum ;
// }

// console.log('Sum of range is:',sumOfRange(rangeResult));


// // Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

// // console.log(reverseArray(["A", "B", "C"]));
// // // → ["C", "B", "A"];
// // let arrayValue = [1, 2, 3, 4, 5];
// // reverseArrayInPlace(arrayValue);
// // console.log(arrayValue);
// // // → [5, 4, 3, 2, 1]

// function reverseArray(getArray)
// {
//   let reversedArray=[];
//   for(i=0; i<getArray.length; i++)
//   {
//      reversedArray.push(getArray[getArray.length-1-i]);
//   }
// console.log("The reversed array is: ",reversedArray);
// }

// let letterArray=['A','B','C'];
// reverseArray(letterArray);

// function reversedInPlaceArray( getArray)
// {
  
//   for(i=0; i<Math.floor(getArray.length/2); i++)
//   {
//         let temp= getArray[i];
//         getArray[i]=getArray[getArray.length-i-1];
//         getArray[getArray.length-i-1]=temp;
//   }
//   console.log(getArray);
// }

// let array=[1,2,3,4,5,6,7]
// reversedInPlaceArray(array);

// let list = {
//   value: 1,
//   rest: {
//     blabla: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// };

// console.log(Object.keys(list.rest));

// // Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on
// function arrayToList(arrayForList)
// {
//   let list={};
//   let local={};
//   for(let i of arrayForList.reverse())
//   {
//     local.value=i;
//     local.rest=list;
//     list=Object.assign({}, local);
//   }
//   console.log(list);
 
// }
// let arrayForList=[5,6,8];
// arrayToList(arrayForList);

// // 5.Higher-Order Functions

// function noisy(f) {
//   return (...args) => {
//     console.log("calling with", args);
//     let result = f(...args);
//     console.log("called with", args, ", returned", result);
//     return result;
//   };
// }
// noisy(Math.min)(3, 2, 1);

// // Summarizing with reduce
// function reduce(array, combine, start) {
//   let current = start;
//   for (let element of array) {
//     current = combine(current, element);
//   }
//   return current;
// }

// console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));




const square2 = x => x * x;
console.log(square2(2));


function greaterThan(n) {
  return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10);
console.log(greaterThan10(11));

// Exercise 1. Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
// let arrays = [[1, 2, 3], [4, 5], [6]];
// // Your code here.
// // → [1, 2, 3, 4, 5, 6]

let arrays = [[1, 2, 3], [4, 5], [6]];
 var flattenArray=arrays.reduce(function(initialArray,currentArray)
 {
   return initialArray.concat(currentArray);
 });

 console.log(flattenArray);

//Exercise 2.  Your own loop
// Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning.

// When defining the function, you can use a regular loop to do the actual looping.

// // Your code here.

// loop(3, n => n > 0, n => n - 1, console.log);
// // → 3
// // → 2
// // → 1

function Loop(nmbr,test,update, displayResult)
{ 
 
   while(test(nmbr))
   {
     displayResult(nmbr);
     nmbr= update(nmbr);

   }
   
   return;
}
Loop(3, n => n > 0, n => n - 1, console.log);



// Everything
// Analogous to the some method, arrays also have an every method. This one returns true when the given function returns true for every element in the array. In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

// Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.

// function every(array, test) {
//   // Your code here.
// }

// console.log(every([1, 3, 5], n => n < 10));
// // → true
// console.log(every([2, 4, 16], n => n < 10));
// // → false
// console.log(every([], n => n < 10));
// // → true

// function every ()
// {}

//Chapter 6 
// let protoRabbit = {
//   speak(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
//   }
// };
// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "killer";
// killerRabbit.speak("SKREEEE!");
// // → The killer rabbit says 'SKREEEE!'

// let ages = new Map();
// ages.set("Boris", 39);
// ages.set("Liang", 22);
// ages.set("Júlia", 62);

// console.log(`Júlia is ${ages.get("Júlia")}`);

// function Vec (number1, number2){
//   this.number1=number1;
//   this.number2=number2;
// }
// Vec.prototype.plus= function(secondVec)
// {
//   return new Vec(this.number1+secondVec.number1, this.number2+secondVec.number2)
// };
// Vec.prototype.minus= function(secondVec)
// {
//   return new Vec(this.number1-secondVec.number1, this.number2-secondVec.number2)
// };


// console.log(new Vec(1, 2).plus(new Vec(2, 3)));



// CHAPTER 6-Project: A Robot
 //PART 1
//Meadowfield
const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}
const roadGraph = buildGraph(roads);
//Finished PART1
//PART 2
//The task
class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) return p;
        return {place: destination, address: p.address};
      }).filter(p => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}

let first = new VillageState(
  "Post Office",
  [{place: "Post Office", address: "Alice's House"}]
);
let next = first.move("Alice's House");
console.log(next.place);


//Persistent data

let object = Object.freeze({value: 5});
object.value = 10;
console.log(object.value);

//Simulation
function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    } 
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
      console.log(`Moved to ${action.direction}`);
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({place, address});
  }
  return new VillageState("Post Office", parcels);
};
//runRobot(VillageState.random(), randomRobot);
//console.log(randomPick([1,2,4.10,200]));
//console.log(Math.random(3));

const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];
function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return {direction: memory[0], memory: memory.slice(1)};
}

//runRobot(VillageState.random(), routeRobot, []);

// Exercises
// Measuring a robot
function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}

function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}


//EXECISES 
//1. COMPARE ROBOTS 
// Note: I am not sure about the average number of steps if it is well calculated. 
//The hint says :  When it has generated enough measurements, it can use console.log to output the average for each robot, which is the total number of steps taken divided by the number of measurements.

function runRobotForSteps(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      return turn;
      break;
    } 
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
      // console.log(`Moved to ${action.direction}`);
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
 
var numberOfTasks=100;

var noOfStepsRobot1;
var noOfStepsRobot2;
 for(i=1; i<=numberOfTasks; i++)
 {
 noOfStepsRobot1= runRobotForSteps(VillageState.random(), robot1, memory1);
 noOfStepsRobot2=runRobotForSteps(VillageState.random(), robot2, memory2);

 console.log(`The average number of steps for Robot1 is: ${noOfStepsRobot1/i}`);
 console.log(`The average number of steps for Robot2 is: ${noOfStepsRobot2/i}`);
 console.log("\n");
 }

   
}
  

compareRobots(routeRobot, [], goalOrientedRobot, []);
