
// IIFE it clear polution of global scope related variable
(function chai(name){
    console.log(`DB CONNECTED ${name}`)
})('rohit');

((name)=>{
    console.log(`DB CONNECTED ${name}`)
})('mohit')


