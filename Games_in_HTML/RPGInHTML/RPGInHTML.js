var InventoryList = [];
var Gold = 0;
var ItemCost = 0;
var OtherItemCost = 0;

var Slime = {
    'Health': 20,
    'Attack' : 3,
    'Defense' : 1,
}

function Inventory() {
    document.getElementById("InventoryShow").innerHTML = InventoryList;
}

function Shop() {
    Buy = prompt("What do you want to buy with your " + Gold +" gold \n nothing \n or nothing?");
    alert("You bought "+Buy)
    
}

function Travel() {
    GoTo = prompt("Where go?")
    if (GoTo == "swamp" || GoTo == "Swamp") {
        document.getElementById("town").style.display = "none";
        document.getElementById("swamp").style.display = "block";
    }
}

function FindSwampEnemy() {
    document.getElementById("Enemy").innerHTML = ""
}