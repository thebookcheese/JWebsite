
let Cloklies = 0;
let ClokliesAdd = 1;
let ClickAddCount = 0;
let ClickAddCost = 20;
const Button1 = document.querySelector(".Button1");

function Click() {
    Cloklies = Cloklies + ClokliesAdd; // Adds CloklieAdd to Cloklies (Increases amount of Cloklies)
    document.getElementById("CloklieCounter").innerHTML = Cloklies; // Changes the text of the display to the current amount of cookies
}

function ClickAdd() {
    console.log(Button1)
    if (ClickAddCount < 20) {
        if (Cloklies >= ClickAddCost) {
            Cloklies -= ClickAddCost; // Deducts cost from Cloklies
            ClokliesAdd += 1; // Increases Cloklies production
            ClickAddCount += 1; // Tracks upgrade count

            document.getElementById("ClickAddCost").innerHTML = "Cost = " + ClickAddCost;
            document.getElementById("ClickAddUpgradeCount").innerHTML = ClickAddCount + " / 20";
            document.getElementById("CloklieCounter").innerHTML = Cloklies; // Updates the display
        }
    } else {
        Button1.style.setProperty("--Button1Visibility", hidden); // Hides button when max upgrades reached
    }
}