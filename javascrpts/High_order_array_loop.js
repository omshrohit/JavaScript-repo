let map=new Map()
map.set('name','rohit')
map.set('department','cse')
map.set('sub','web devlopement')

// console.log(map)

// for of

// for (const val of map) {
//     console.log(val)  
// }

// for (const [key,value] of map) {
//     console.log(key,"=>",value)
// }


// // for each
let students=['rohit','mohit','avishek','prince']

// students.forEach(function(value){
//     console.log(`Hello,${value}`)
// })

// students.forEach(( value ) => console.log(`Hellow,${value}`))

function boys(value){
    console.log(value)
}

students.forEach(boys)