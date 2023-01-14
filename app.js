//rest and spread exercises

//1. refactor to ES2015

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds=(...nums) => nums.filter(nextValue => nextValue%2===0)

//2. findMin

//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

// need to do rest for the variable amount of arguments to start with
//need to do spread to use math.min on the elements in the new arg array

//Make sure to do this using the rest and spread operator.

// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

const findMin=(...args)=>Math.min(...args)

//3. mergeObjects

//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

//ES2015 arrow
const mergeObjects=(obj1, obj2)=>({...obj1,...obj2})
// Non arrow
function mergeObjects2(obj1,obj2){
    return {...obj1,...obj2}
}

//4.doubleAndReturnArgs


// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

//doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
//doubleAndReturnArgs([2],10,4) // [2, 20, 8]

//use rest in the parameters. map on args to double them into a new array. Then we can spread the first array into the mapped array before the double values.

// non-arrow version
function doubleAndReturnArgs(arr,...args){
   const mapped=args.map(function(val){
        return val*2
    })
    return [...arr,...mapped]
    
}

//arrow version

const doubleAndReturnArgsArrow= (arr, ...args) =>[...arr,...args.map(val=>val*2)]


//5.slice and dice 

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return[...array1,...array2]
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    let newObj={...obj}
    newObj[key]=val
    return newObj
}
//fancy!
function addKeyVal2(obj, key, val) {
    return{...obj,[key]:val}
}

/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let newObj={...obj}
    delete newObj[key]
    return newObj

}
//why doesn't this work?
function removeKey(obj, key) {
    let newObj={...obj}
    delete newObj.key//this breaks it
    return newObj

}

//** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return{...obj1,...obj2}

}

/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    let newObj={...obj}
    newObj[key]=val
    return newObj

}