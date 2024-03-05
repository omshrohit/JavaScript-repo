// STACK(primitive data),HEAP(Non-Primitive)

// let name="rohit"
// let anotherName=name
// anotherName='mohit'

// console.log(name)
// console.log(anotherName)
let student={
    email:'student@gamil.com',
    username:'student'
}
let student2=student
student2.username='student1'
console.log(student)
console.log(student2)