// let rating=4
// if (rating==4){
//     console.log("superb")
// }
// else if(rating==5){
//     console.log("awesom")
// }
// else{
//     console.log("we will improve")
// }

// let a=100
// let b=20
// let c=a>b?"A is greater":"B is greater"
// console.log(c)

// let user='studen'
// switch(user){
//     case 'student':
//         console.log("you can  see your course details")
//         break
    
//     case 'teacter':
//         console.log("you have course details")

//     case 'admin':
//         console.log("you have all  access of the website")

//     default:
//         console.log("invalid input")
// }


//arrow function
// const sqr=(a,b)=>{
//     return a**b
// }
// console.log(sqr(2,5))



//regular function
// function add(a,b){
//     return a+b
// }
// console.log(add(2,5))
// for(let i=1;i<=10;i++){
//     console.log(i)
// }
let n=50
let i;
for(i=2;i<5;i++){
    if(n%i==0){
        console.log('not Prime')
        break
    }
}
if(i==n){
    console.log("Prime")
}