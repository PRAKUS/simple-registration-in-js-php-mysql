// only js no jquery 
// cheat sheet
// document.getElementById(id) 	Find an element by element id eg:.. var myElement = document.getElementById("intro");
// document.getElementsByTagName(name) 	Find elements by tag name
// document.getElementsByClassName(name) 	Find elements by class name
// element.innerHTML =  new html content 	Change the inner HTML of an element
// element.attribute = new value 	Change the attribute value of an HTML element
// element.style.property = new style 	Change the style of an HTML element
// always have a example and a cheat sheet so you can make thing

// when budtton cicked --> get data from all the text feeeeeeeeeeeeeeeeeeeeeeeild --> call fuction to check if data comes or not lets do this

//var address = document.getElementById[email].value;

function fun() {

   let username = document.getElementById("fullname").value;
   let email = document.getElementById("emailInput").value;
   let pass = document.getElementById("passwordInput").value;
   let repass = document.getElementById("re_password").value;

    function name(username) {
        if (username == "") {
            alert("no username")
        }
    }

    function echeck(email) {
        var email_sign = /@/i;
        if (email == "" || email_sign ==" ") {
            alert("email is required")
        }
        
    }

    function password(pass) {
        if (pass == "") {
            alert("password missing")
        }
    }

    function repassword(repass) {
        if (repass == "") {
            alert("retype the pssaword")
        }
    }

    function passmatch() {
        if (pass != repass) {
            alert("\nPassword did not match")
            return false;
        }
    }



    name(username);
    password(pass);
    repassword(repass);
    echeck(email);
    passmatch();

}

function submitform() {
    var data = $("#registration").serialize();
    $.ajax({
        type: 'POST',
        url: 'register.php',
        dataType: 'json',
        data: data,
        success: function(response) {
            alert(response);
        }
    });
}
