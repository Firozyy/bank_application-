$("#emailHelp").hide()


var userData;


//session accesing
let y = "session"
let x = localStorage.getItem(y)
let formail = JSON.parse(x)






////session end

//data geting from local storage
if (y in localStorage) {
    let data_from_localstorage = localStorage.getItem(formail);
    userData = JSON.parse(data_from_localstorage)
}

let top_name = userData.name

$("#USER_name_top").html(top_name.toUpperCase())

//logout session removing
function session_remove() {
    localStorage.removeItem(y);
}

//account number
const accountNnumber = userData.accno
$("#account_number").html(accountNnumber)

//Transaction work srart





$("#contactForm").submit(function (e) {
    e.preventDefault();

    let accno = $("#Account_Number").val();

    let input_cash = $("#Input_cash").val();

    let cash = parseInt(input_cash)





    let users = Object.values(window.localStorage);
    let toAccDetails = {};

    for (let item of users) {
        let itemJs = JSON.parse(item);




        //account number validating or inspecting
        if (itemJs["accno"] == accno) {
            toAccDetails = itemJs["mail"];

        } else {

        }

    }

    if (toAccDetails in localStorage) {
        let new_data = localStorage.getItem(toAccDetails);
      
        var p = JSON.parse(new_data);
      
        //sufficiant balnce checking
        if (userData.balalnce >= cash) {
          
            let toBal = parseInt(p.balalnce);
            
            toBal += cash;////adding
            p.balalnce=toBal;
            let data = {}
            data.name = userData.name;
            data.amount = cash
         p.credit.push(data);


            //to localastorage  CHANGING RECIEVER
            let for_stringify = JSON.stringify(p)
            localStorage.setItem(toAccDetails, for_stringify)

            //to localastorage  CHANGING sender
            userData.balalnce -= cash//substrating
             //sender tranns adding
             let trans = {}
             trans.name = p.name;
             trans.amount = cash
             userData.debit.push(trans);
              //sender tranns end
            let con_verting = JSON.stringify(userData)
            localStorage.setItem(formail, con_verting)
            window.alert("TRANSACTION SUCCESS!!!!")

           
         p.credit.push(data);
        } else {
            window.alert("insuficiant balance")
        }

    } else {
        window.alert("invalid account number")
    }



});

//acocount balance 

const balance = userData.balalnce
$("#account_balance").html(balance)


//totel transaction
let trans_count=userData.debit.length;
$("#trans_count").html(trans_count)

//last  transaction
let cr_length=userData.credit.length;
let cr_last_arr=userData.credit[cr_length-1]
let cr_name=cr_last_arr.name
let cr_cash=cr_last_arr.amount

$("#last_cr_name").html(cr_name)
$("#last_cr_amount").html(cr_cash)


for (let check of userData.credit){
    let name=check.name
    let amount=check.amount
  console.log(amount); 
  let htmlRow = `<tr>
             
  <td>${name}</td>
  <td>${amount}</td>
  <td class="text-success"  >SUCCESS</td>
 
  

  
</tr>`
document.querySelector(".content_table").innerHTML += htmlRow;
   
}

//debit table
for (let debit_work of userData.debit){
    let name=debit_work.name
    let amount=debit_work.amount
  console.log(amount); 
  let debit_htmlRow = `<tr>
             
  <td>${name}</td>
  <td>${amount}</td>
  <td class="text-success"  >SUCCESS</td>
 
  

  
</tr>`
document.querySelector(".content_table2").innerHTML += debit_htmlRow;
   
}

