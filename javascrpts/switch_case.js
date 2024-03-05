const user='admin'

switch (user){
    case 'student':
        console.log(`Student can able to modify there
         profile and can access only purchased lectures`)
         break
    case 'teacher':
        console.log("can access only cources")
        break
    case 'admin':
        console.log("admin have full access of the website!")
        break
    default:
        console.log("normal user")
}