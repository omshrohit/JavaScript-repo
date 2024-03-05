let arr=[1,2,3,4,5]
// let initialValue=0
// let sum=arr.reduce((accumulator,current)=>accumulator+current,initialValue)
// console.log(sum)

// let initialValue=1
// let mul=arr.reduce( (accumulator,current) => accumulator*current,initialValue)
// console.log(mul)

// //without initial value
// let add=arr.reduce( (acc,currval)=>{
//     console.log(`acc:${acc} currval:${currval}`)
//     return acc+currval
// },0)
// console.log(add)

// let newval=arr.reduce( (acc,currval) => acc+currval ,0)
// console.log(newval)

let shopinCart=[
    {
        course:'Front end development',
        price:2500
    },
    {
        course:'back end development',
        price:2500
    },
    {
        course:'full stack development',
        price:4999
    }
]

let amouont=shopinCart.reduce((acc,currval)=> acc+currval.price,0)
console.log(amouont)
