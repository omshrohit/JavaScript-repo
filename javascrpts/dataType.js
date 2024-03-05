// PREMATIVE DATA TYPES 
const a=10.1 //number
console.log(typeof a)

let name='rohit' // string
console.log(typeof name)

let isLogin=true  //Boolean
console.log(typeof isLogin)

let state       //undefined
console.log(typeof state)

let roll=null // object
console.log(typeof roll)

console.log("\n---------OBJECT DATA TYPE---------")
let student={
    id:1,
    name:'mohit',
    dept:'cse',
    college:null
}
console.log(student)
console.log(typeof student)

console.log(student['college'],"--",typeof student['college'])
console.log(student.name,"--",typeof student.name)


console.log("\n----------ARRAY---------")
let numbers=[1,2,3,4,5,6,7,8,9,10]
console.log(numbers)
console.log(numbers[numbers.length])  // Undefined because at index there is no any element
console.log(numbers[numbers.length-1])
