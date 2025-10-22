// reference copy
const arr=[1,2,3,[4,4],4,5];
const a=arr; 
arr[0]=6;
arr[3][0]=9;
console.log(a);  // [6, 2, 3, [9, 4], 4, 5]
// a and arr both point to the same array in memory SO changing arr also changes a


// shallow copy
const arr2=[1,2,3,[4,4],4,5];
const c=[...arr2]; 
arr2[0]=8;
arr2[3][0]=10;
console.log(c);  // [1, 2, 3, [10, 4], 4, 5]
// c is a new array but its 4th element is a reference to the same inner array SO changing arr2[3] also changes c[3] . For primitive values (like numbers 1, 2, 3, 4, 5), the actual value is copied. For objects/arrays (like [4, 4]), the reference is copied — not a new copy.

// deep copy
const original = [1, 2, 3, [4, 4], { a: 5 }];
const deep = structuredClone(original);  // or JSON.parse(JSON.stringify(original)); 
original[0] = 99;          
original[3][0] = 100;      
original[4].a = 999;       
console.log(deep); // [1, 2, 3, [4, 4], { a: 5 }]
// deep is a completely independent copy of original, including all nested objects and arrays. Changes to original do not affect deep.



// hoisting example
console.log(cc); // ReferenceError: cc is not defined
var cc=67;
console.log(cc); // 67


// variable hoisting 
// let and const are hoisted, but they are in a temporal dead zone (TDZ) until their declaration is evaluated.
// console.log(aa); // ReferenceError: Cannot access 'aa' before initialization
const aa=23;
// console.log(bb);  // ReferenceError: Cannot access 'bb' before initialization
let bb=45; 



