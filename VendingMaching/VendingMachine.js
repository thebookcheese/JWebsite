function VendingMachine() {
    Num = math.random(math.floor * 10);
    if (Num == 1) or (Num == 2) {
        document.getElementById("Vend").src = "Sword.jpeg";
        setTimeout(function(){
            document.getElementById("Vend").src = "Shield.jpeg";
        },20)
    } else if (Num == 3) or (Num == 4) {
        console.log("")
    }
}