// let arr1=[10,20,30,40,50,60]
// let arr2=arr1.slice(1,4)
// console.log(arr2)
// console.log(arr1)

// let arr3=arr1.splice(1,4)  // it will manupulate the original array
// console.log(arr3)
// console.log(arr1)
let arr1=[10,20,30,40,50,60]
// arr1.push(70)
// console.log(arr1)
// console.log(arr1.pop())
// console.log(arr1);

arr1.unshift(0)
console.log(arr1)
arr1.shift()
console.log(arr1)

console.log(arr1.join(" "))

let array=[1,2,3,4,[10,20,30,[5,2,5]]]
console.log(array)
console.log(array.flat(Infinity))