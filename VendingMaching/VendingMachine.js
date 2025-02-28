function VendingMachine() {
    Num = Math.random(Math.floor * 10);
    if (Num == 1 || Num == 2) {
        document.getElementById("Vend").src = "Sword.jpeg";
        setTimeout(function(){
            document.getElementById("Vend").src = "Shield.jpeg";
        },20)
    } else if (Num == 3 || Num == 4) {
        console.log("")
    }
}
