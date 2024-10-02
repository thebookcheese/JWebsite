var InventoryList = [];
var Gold = 0;
var ItemCost = 0;
var OtherItemCost = 0;

function Inventory() {
    document.getElementById("InventoryShow").innerHTML = InventoryList;
}

function Shop() {
    Buy = prompt("What do you want to buy with your " + Gold +" gold \n nothing \n or nothing?");
    alert("You bought "+Buy)
    
}

function Travel() {
    
}