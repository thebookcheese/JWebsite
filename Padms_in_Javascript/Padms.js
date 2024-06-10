function Travel() {
    WhereTravel = prompt("Where do you want to go; \n Creepy Cave (1) \n (2) Peter House")
    if (WhereTravel == "1") {
        window.location.href = "https://jasperweb.pages.dev/Padms_in_Javascript/Locations/Creepy_Cave";
    } else if (WhereTravel == "2") {
        window.location.href = "https://jasperweb.pages.dev/Padms_in_Javascript/Locations/Peter_House";
    } else {
        alert("Not valid")
    }
}