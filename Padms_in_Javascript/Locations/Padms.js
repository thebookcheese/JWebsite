var Enemy =""; // Define Enemy (Used in Locations to get the enemy) 

// Define Player Stats and Attacks
// Player Stats
var PMaxHealth = 100;
var PHealth = 100;
var PDodgeChance = 4;


function Slash() {
    Pdamage = Math.random() * (6 - 4) + 4; // Damage = (5 + 1) to (5 - 1)
    if (Enemy == "Peter") {
        Dodge = Math.random() * 100;
        if (Dodge > PeDodgeChance) { // Works out if Peter dodges or not
            PeHealth_Battle = PeHealth_Battle - PDamage; // If no dodge take damage
            document.getElementById("EnemyHealthShow").innerHTML = "EnemyHealth is"+PeHealth_Battle;
            CodingFlex()
        } else {
            console.log("pass"); // Funny Pass
        }
    } else if (Enemy == "Peter Dad") {
        console.log("pass");
    }
}

function Block() {
    BlockChance = 30;
    BlockPercent = 40;
    CodingFlex();
}

// Town Functions
function Travel() {
    var WhereTravel = prompt("Where do you want to go; \n Creepy Cave (1) \n Peter House (2)");
    if (WhereTravel == "1") {
        window.location.href = "https://jasperweb.pages.dev/Padms_in_Javascript/Locations/Creepy_Cave";
    } else if (WhereTravel == "2") {
        window.location.href = "https://jasperweb.pages.dev/Padms_in_Javascript/Locations/Peter_House";
    } else {
        alert("Not valid")
    }
}

// Peter House Enemy Stats and Attacks
// Peter Stats and Attacks
var PeHealth_General = 25; // Peter Health
var PeDodgeChance = 3; // Peter Dodge Chance

var PeHealth_Battle = 25;
function CodingFlex() {
    PeDamage = Math. random() * (5 - 3) + 3; // Attack = 4 (Damage is between +1 and -1)
    PHealth = PHealth - PeDamage;
    document.getElementById("PHealthShow").innerHTML = "Your health is"+PHealth;
}

// Peter House Location Functions
const PHouseEnemys = ["Peter Dad", "Peter"];
function PeterHouseEnemyGet() {
    Enemy = Math.floor((Math.random()) * 3 );
    document.getElementById("EnemyGet").innerHTML = "The enemy is" +PHouseEnemys[Enemy];

}

function PeterHouseFight() {
    document.getElementById("PeterHouseRun").remove();
    document.getElementById("PeterHouseFight").remove();

    const newButton1 = document.createElement('button');
    newButton1.textContent = 'Slash';
    newButton1.setAttribute("onclick","Slash()");

    document.body.appendChild(newButton1);
    const newButton2 = document.createElement('button');
    newButton2.textContent = 'Block';
    document.body.appendChild(newButton2);
}

function PeterHouseRun() {
    window.location.href="https://jasperweb.pages.dev/Padms_in_Javascript/Padms.html";
}