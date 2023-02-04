$("#pass_errer").hide();
$("#numberError").hide();
$("#nameError").hide();
$("#mailError").hide();
$("#passError").hide();
$("#login_mailerrer").hide();

var name_field;
let formail;
var forpass;
let Ac_number;



//login
document.getElementById("myAnchor").addEventListener("click", function (event) {
    event.preventDefault()

    let mail = document.querySelector(".login_mail").value;
     
    let PassWord = document.querySelector(".login_pasword").value;

    let x =localStorage.getItem(mail)
    let obj =JSON.parse(x)
    if (mail  == null || mail == '') {


        $("#login_mailerrer").show();
        $("#login_mailerrer").html("Please Enter Your Email");
        $(".login_mail").css("border-bottom", "solid 2px #FF0000");
        return false;

    }else if (PassWord  == null || PassWord == '') {
        $("#passError").show().text("Enter a PassWord");
        $("#passError").css("color", "red");
        $(".login_pasword").css("border-bottom", "solid 2px #FF0000");

        return false;
    }else{
        $("#passError").hide();
        $(".login_pasword").css("border-bottom", "solid 2px #00FF00");
      
        $("#login_mailerrer").hide();
        $(".login_mail").css("border-bottom", "solid 2px #00FF00");
        
        if (mail in localStorage) {
            if (PassWord==obj.password) {
                   
                let temp="session";
                localStorage.setItem(temp,mail)
             
                  window.location.replace("./dashBord/")
            }else{
                $("#passError").show().text("Enter a valid password");
                $("#passError").css("color", "red");
                $(".login_pasword").css("border-bottom", "solid 2px #FF0000"); 
            }
        }else{
            $("#login_mailerrer").show();
            $("#login_mailerrer").html("NOt a valid mail");
            $(".login_mail").css("border-bottom", "solid 2px #FF0000");
        }
    }
});

//sighnup kuy up functions start

function NameValidation() {

    name_field= $("#Name").val();
   

    if (name_field  == null || name_field == '') {


        $("#nameError").show();
        $("#nameError").html("Please Enter Your Name");
        $("#Name").css("border-bottom", "solid 2px #FF0000");
        return false;
    }
    else if (name_field .length < 2) {
        $("#nameError").show().text("Enter a valid name");
        $("#nameError").css("color", "red");
        $("#Name").css("border-bottom", "solid 2px #FF0000");

        return false;
    }
    else {
        $("#nameError").hide();
        $("#Name").css("border-bottom", "solid 2px #00FF00");
        return true;


    }




}


function Emailvalidation() {

    formail = $("#Email").val();

    var validRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (formail.match(validRegex)) {

        $("#mailError").hide();
        $("#Email").css("border-bottom", "solid 2px #00FF00");

        return true;

    } else if (formail == null || formail == '') {

        $("#mailError").show();
        $("#mailError").html("Please Enter Your Email");
        $("#Email").css("border-bottom", "solid 2px #FF0000");

        return false;
    }
    else {

        $("#mailError").show();
        $("#mailError").html("Please Enter Your Valid Email");
        $("#Email").css("border-bottom", "solid 2px #FF0000");


        return false;

    }


}

function pass_Validation() {

   forpass = $("#pass").val();

    if (forpass == null || forpass == '') {


        $("#pass_errer").show();
        $("#pass_errer").html("Please Enter a password");
        $("#pass").css("border-bottom", "solid 2px #FF0000");
        return false;
    }
    else if (forpass.length < 3) {
        $("#pass_errer").show().text("Enter a valid password");
        $("#pass_errer").css("color", "red");
        $("#pass").css("border-bottom", "solid 2px #FF0000");

        return false;
    }
    else {
        $("#pass_errer").hide();
        $("#pass").css("border-bottom", "solid 2px #00FF00");
        return true;


    }




}
function Acc_number_Validation() {

     Ac_number = $("#account_Number").val();



    
     if (Ac_number.length < 5) {
        $("#numberError").show();
        $("#numberError").html("Please Enter 5 Numbers");
        $("#account_Number").css("border-bottom", "solid 2px #FF0000");
        return false;

    }
    else if (Ac_number == null || Ac_number == '') {
        $("#numberError").show();
        $("#numberError").html("Enter Your A/c number ");
        $("#account_Number").css("border-bottom", "solid 2px #FF0000");
        return false;

    }
    else {
        $("#numberError").hide();
        $("#account_Number").css("border-bottom", "solid 2px #00FF00");
        return true;
    }

}
//sighnup kuy up functions end
document.getElementById("sign_up_btn").addEventListener("click", function (event) {
    event.preventDefault()

   
    if(NameValidation()===true  && Emailvalidation() ===true && pass_Validation()=== true && Acc_number_Validation()===true){
        if (formail in localStorage){
            $("#failedModal").modal("show");
        }else{
            var obj={};
    
            obj.mail=formail;
            obj.password=forpass;
          obj.accno= Ac_number
            obj.name=name_field;
            obj.balalnce="5000";
           
            let email=formail;
            let x = JSON.stringify(obj)
            localStorage.setItem(email,x)
            $("#successModal").modal("show");
        }
      
       

       
     }
});
