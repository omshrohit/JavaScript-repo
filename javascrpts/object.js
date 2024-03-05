let mysym=Symbol('keys')

let jsUser={
    'userName':'rohit',
    [mysym]:'keys values',
    'email add':'rohityadav@gmail.com',
    'price':25000
}
// console.log(jsUser)
// jsUser['userName']='mohit'
// console.log(jsUser)

// console.log(jsUser.userName)
// console.log(jsUser['price'])


//traverse the object
// for (const key in jsUser) {
//    console.log(key,"=>",jsUser[key])
// }

let  key=Object.keys(jsUser)
console.log(key)

let value=Object.values(jsUser)
console.log(value)