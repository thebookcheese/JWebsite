function FunFunction1() {
    result = confirm("Are you the boss");
    if (result == true) {
        window.location.href = "https://jasperweb.pages.dev/Fun_Stuff/Fun1";
    } else {
        alert("Not boss");
    }
}

function FunFunction2() {
    str1 = prompt("Enter a string");
    str2 = prompt("Enter a string you want combined");
    alert(str1 + str2);
}

function FunFunction3() {
    Input = prompt("Enter a text");
    document.getElementById("FunButton3-1").innerHTML = Input;
}