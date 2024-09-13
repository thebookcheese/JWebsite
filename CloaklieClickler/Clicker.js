
let Cloklies = 0;
let ClokliesAdd = 1;
let ClickAddCount = 0;
let ClickAddCost = 20;
let CloklieChefCount = 0;
let CloklieChefCost = 100;

var Button1 = "";
var Button2 = "";

function Run() {
    Cloklies = Cloklies + (CloklieChefCount * 1)
    document.getElementById("CloklieCounter").innerHTML = Cloklies  
}



function Click() {
    Cloklies = Cloklies + ClokliesAdd; // Adds CloklieAdd to Cloklies (Increases amount of Cloklies)
    document.getElementById("CloklieCounter").innerHTML = Cloklies; // Changes the text of the display to the current amount of cookies
}

function ClickAdd() {
    console.log(Button1)
    if (ClickAddCount < 19) {
        if (Cloklies >= ClickAddCost) {
            Cloklies -= ClickAddCost; // Deducts cost from Cloklies
            ClokliesAdd += 1; // Increases Cloklies production
            ClickAddCount += 1; // Tracks upgrade count

            document.getElementById("ClickAddCost").innerHTML = "Cost = " + ClickAddCost;
            document.getElementById("ClickAddUpgradeCount").innerHTML = ClickAddCount + " / 20";
            document.getElementById("CloklieCounter").innerHTML = Cloklies; // Updates the display
        }
    } else {
        Button1.style = "display: none"; // Hides button when max upgrades reached
        Button2.style = "visibility: visible"; // shows button when max upgrades reached
    }
}

function ClickAdd10() {
    if (Cloklies >= 300) {
        ClokliesAdd = ClokliesAdd + 10;
        Cloklies = Cloklies - 300;
    }
    Button2.style  = "display: none";
    Buy1.style = "visibility: visible";

}

function CloklieChefBuy() {
    if (Cloklies >= CloklieChefCost) {
        Cloklies = Cloklies - CloklieChefCost;
        CloklieChefCount = CloklieChefCount + 1;

        document.getElementById("CloklieChefNumber").innerHTML = CloklieChefCount +" Cloklie Chef(s)";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    Button1 = document.getElementById("upgrades1");
    Button2 = document.getElementById("upgrades2");
    Buy1 = document.getElementById("buy1");
});

setInterval(Run, 1000)