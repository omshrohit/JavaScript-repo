let arr1=[1,2,3,0,5,6]
// console.log(arr1,typeof arr1)
// arr1.push(10)                    //add at the end of the array
// console.log(arr1)
// arr1.pop()                       //it will remove the last item from the array
// console.log(arr1)
// arr1.unshift(10)                 // it will add the given argument at the begning of the array
// console.log(arr1)

// arr1.shift()                     // it will remove the first item of the array
// arr1.shift()
// arr1.shift()
// arr1.shift()
// arr1.shift()
// console.log(arr1)

// console.log(arr1.includes(10))       // include return the value in the form of boolean True  or False
// console.log(arr1.indexOf(21))        // if element is not present in   array in will return '-1'

// let st=arr1.join()                   // join method add all the elements of the array in a 'string'
// let st1=arr1.join("")
// console.log(st,typeof st)
// console.log(st1,typeof st2)


console.log("----SLICE & SPLICE---")
let array1=[10,20,30,40,50,60]
console.log("Array1",array1)


let array2=array1.slice(1,4)  //slice will return the a part of the array and i will not manupulate the arry
console.log("\nArray2",array2)
console.log("Array1",array1)

let array3=array1.splice(1,4)
/*
it return the value for given first index to given last index ,last index will be include here.
 it will manupulate the orignal array 
*/
//console.log("\nArray3",array3)
//console.log("Array1",array1)
let arr=[1,3,2,4]
let obj={...arr}
console.log(obj);