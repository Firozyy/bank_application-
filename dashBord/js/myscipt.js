

let userData;


//session accesing
let y = "session"
let x = localStorage.getItem(y)
console.log(typeof (x));
////session end

if (x in localStorage) {
    let data_from_localstorage = localStorage.getItem(x);
    userData = JSON.parse(data_from_localstorage)
}
console.log(userData);
let top_name = userData.name

$("#USER_name_top").html(top_name.toUpperCase())