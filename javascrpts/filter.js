const numbers=[1,2,3,4,5,6,7,8,9,10]

// const newnumbers=numbers.filter( (num) => num>4 )
// console.log(newnumbers)

// const newnumbers=numbers.filter( (num)=> {
//     return num>4 && num%2==0
// })
// console.log(newnumbers)

const newarray=[]
numbers.forEach( (num) => {
    if(num>4){
        newarray.push(num)
    }
})

console.log(newarray)