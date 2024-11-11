let accountState
const accountId = 14453
let accountEmail = "Omkar@google.com"
var accountPassword = "121212"
accountCity = "Jaipur"

// accountId =2 this sort of things cant be done due to the use of const to describe the variable type 

console.log(accountId)

accountEmail = "Omkar@facebbok.com"
accountPassword = "123456780"
accountCity = "Bangalore"

console.table([accountEmail,accountId,accountPassword,accountState,accountCity])

/*
In tital there are about 4 types to declare the variable 
const = used when we store the value and didnt want to change
var= used to store the value but have the problem of scopes,functional scope and block scope
let = used to store value too just created to cover up that scopic problem of var
without any keyword= this is not recommended 
 */