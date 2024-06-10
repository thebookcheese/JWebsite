var Enemy ="";
const PHouseEnemys = ["Peter Dad", "Peter"];

function Travel() {
    var WhereTravel = prompt("Where do you want to go; \n Creepy Cave (1) \n Peter House (2)")
    if (WhereTravel == "1") {
        window.location.href = "https://jasperweb.pages.dev/Padms_in_Javascript/Locations/Creepy_Cave";
    } else if (WhereTravel == "2") {
        window.location.href = "https://jasperweb.pages.dev/Padms_in_Javascript/Locations/Peter_House";
    } else {
        alert("Not valid")
    }
}

function PeterHouseEnemyGet() {
    Enemy = Math.floor((Math.random()) * 3 );
    document.getElementById("EnemyGet").innerHTML = "The enemy is" +PHouseEnemys[Enemy];
}