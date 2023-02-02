$("#mailErrer").hide();
$("#passErrer").hide();
$("#userErrer").hide();


function sign_up() {

    
    document.getElementById("myAnchor").addEventListener("click", function (event) {
        event.preventDefault()
    });

    let email = document.querySelector(".for_email").value;
    
    let obj = {}
    obj.Email = email
    obj.password = document.querySelector(".forPassword").value;
    obj.username = document.querySelector(".userNname").value;
   console.log(obj);
    let data = JSON.stringify(obj)
  
localStorage.setItem(email,data)
   

}

document.getElementById("myAnchor").addEventListener("click", function (event) {
    event.preventDefault()
    let mail = document.querySelector(".login_mail").value;

    let PassWord = document.querySelector(".login_pasword").value;



    if (mail in localStorage) {
        let x = localStorage.getItem(mail)
        var myobj = JSON.parse(x);

        if (PassWord == myobj.password) {
            window.location.replace("./userDashboard.html")
          
        } else {
            console.log("WRONG PASSWORD");
        }




    } else {
        console.log("Enter valid gmail");
     

    }
});


