
function validations(){

    var c = document.getElementById("contact").value;
    document.getElementById("contacterror").style.display = "none";
    console.log(c);
    if(isNaN(c) || c.length!=10){
        document.getElementById("contacterror").innerHTML = "*Invalid phone number";
        document.getElementById("contacterror").style.display = "inline";

    }
}