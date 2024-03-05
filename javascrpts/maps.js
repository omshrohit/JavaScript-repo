let array=[1,2,3,4,5,6,7,8,9,10]

// const newarray=array.map( (num) => num**2)
// console.log(newarray)

//----------------------CHANING-------------------------
const newarray=array
                .map( (num) => num*10)
                .map( (num)=> num+1)
                .filter( (num)=> num>=50)

console.log(newarray)