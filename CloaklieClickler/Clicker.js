Cloklies = 0
ClokliesAdd = 1
ClickAddCount = 0
ClickAddCost = 20
const Button1 = document.querySelector(".Button1")


function Click() {
    Cloklies = Cloklies + ClokliesAdd; // Adds CloklieAdd to Cloklies (Increases amount of Cloklies)
    document.getElementById("CloklieCounter").innerHTML = Cloklies; // Changes the text of the display to the current amount of cookies
}

function ClickAdd() {
    if (ClickAddCount < 20) {
        if (Cloklies >= ClickAddCost) {
            Cloklies = Cloklies - ClickAddCost; // Takes away the cost of the upgrade from the amount of currency
            ClokliesAdd = ClokliesAdd + 1; // Adds the actual increase to currency production on click
            ClickAddCount = ClickAddCount + 1; // Adds 1 to how many times it has been upgraded

            document.getElementById("ClickAddCost").innerHTML = "Cost = ",ClickAddCost;
            document.getElementById("ClickAddUpgradeCount").innerHTML = ClickAddCount," / 20" 
            document.getElementById("CloklieCounter").innerHTML = Cloklies
            // Above code sets the html values
        }
    } else {
        Button1.style.setProperty("--Button1Visibility", "hidden");
    }
}