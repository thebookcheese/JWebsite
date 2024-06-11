var Enemy =""; // Define Enemy (Used in Locations to get the enemy) 

// Define Player Stats and Attacks
function Slash() {
    alert("WIP")
}

// Town Functions
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


// Peter House Location Functions
const PHouseEnemys = ["Peter Dad", "Peter"];
function PeterHouseEnemyGet() {
    Enemy = Math.floor((Math.random()) * 3 );
    document.getElementById("EnemyGet").innerHTML = "The enemy is" +PHouseEnemys[Enemy];
}

function PeterHouseFight() {
    document.getElementById("PeterHouseRun").innerHTMl = <button onclick="Slash">Slash</button>;
    const newButton = document.createElement('button');
    newButton.textContent = 'Block';
    document.body.appendChild(newButton);
}

function PeterHouseRun() {
    window.location.href="https://jasperweb.pages.dev/Padms_in_Javascript/Padms.html";
}