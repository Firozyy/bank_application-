

let userData;


//session accesing
let y = "session"
let x = localStorage.getItem(y)

////session end

//data geting from local storage
if ( y in localStorage) {
    let data_from_localstorage = localStorage.getItem(x);
    userData = JSON.parse(data_from_localstorage)
}
console.log(userData);
let top_name = userData.name

$("#USER_name_top").html(top_name.toUpperCase())

//logout session removing
function session_remove(){
    localStorage.removeItem(y);
}
//acocount balance 

const balance=userData. balalnce
$("#account_balance").html(balance)
//account number
const accountNnumber=userData.accno
$("#account_number").html(accountNnumber)