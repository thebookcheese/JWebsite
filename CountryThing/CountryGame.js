var Popularity = 70
var Income = 500
var Expenditure = 750 + EducationSpending
var TaxRate = 10
var NetIncome = -250
var EducationSpending = 120

function TaxIncrease(Increase) {
    if (Increase == 10) {
        if (Popularity > 0) {
            Popularity = (Popularity - (10*(1+(Popularity/100))))
            document.getElementById("Popularity").style.width = Math.round(Popularity) + "%"
            document.getElementById("Popularity").innerHTML = "Popularity: " + Math.round(Popularity) + "%"
            Income = Income * 1.10
            document.getElementById("Income").innerHTML = "Income: " + Math.round(Income) + " million"
            NetIncome = Income - Expenditure
            document.getElementById("Net Income").innerHTML = "Net Income: " + Math.round(NetIncome) + " million"
            TaxRate = TaxRate + 10
            document.getElementById('TaxRate').innerHTML = "Tax Rate: "+TaxRate+"%"
        } else if (Popularity < 0) {
            Popularity = 0
            document.getElementById("Popularity").style.width = Math.round(Popularity) + "%"
            document.getElementById("Popularity").innerHTML = "Popularity" + Math.round(Popularity) + "%"
        }
    } else if (Increase == 1) {
        if (Popularity > 0) {
            Popularity = (Popularity - (1*(1+(Popularity/100))))
            document.getElementById("Popularity").style.width = Math.round(Popularity) + "%"
            document.getElementById("Popularity").innerHTML = "Popularity: " + Math.round(Popularity) + "%"
            Income = Income * 1.01  
            document.getElementById("Income").innerHTML = "Income: " + Math.round(Income) + " million"
            NetIncome = Income - Expenditure
            document.getElementById("Net Income").innerHTML = "Net Income: " + Math.round(NetIncome) + " million"
            TaxRate = TaxRate + 1
            document.getElementById("TaxRate").innerHTML = "Tax Rate: " + TaxRate + "%"
        } else if (Popularity < 0) {
            Popularity = 0
            document.getElementById("Popularity").style.width = Math.round(Popularity) + "%"
            document.getElementById("Popularity").innerHTML = "Popularity" + Math.round(Popularity) + "%"
        }
    } else if (Increase == -1) {
        if (Popularity < 100) {
            Popularity = (Popularity + (1*(1+(Popularity/100))))
            document.getElementById("Popularity").style.width = Math.round(Popularity) + "%"
            document.getElementById("Popularity").innerHTML = "Popularity: " + Math.round(Popularity) + "%"
            Income = Income * 0.99
            document.getElementById("Income").innerHTML = "Income: " + Math.round(Income) + " million"
            NetIncome = Income - Expenditure
            document.getElementById("Net Income").innerHTML = "Net Income: " + Math.round(NetIncome) + " million"
            TaxRate = TaxRate - 1
            document.getElementById("TaxRate").innerHTML = "Tax Rate: " + TaxRate + "%"
        } else if (Popularity > 100) {
            Popularity = 100
            document.getElementById("Popularity").style.width = Math.round(Popularity) + "%"
            document.getElementById("Popularity").innerHTML = "Popularity: " + Math.round(Popularity) + "%"
        }
    } else if (Increase == -10) {
        if (Popularity < 100) {
            Popularity = (Popularity + (10*(1+(Popularity/100))))
            document.getElementById("Popularity").style.width = Math.round(Popularity) + "%"
            document.getElementById("Popularity").innerHTML = "Popularity: " + Math.round(Popularity) + "%"
            Income = Income * 0.90
            document.getElementById("Income").innerHTML = "Income: " + Math.round(Income) + " million"
            console.log(NetIncome)
            NetIncome = Income - Expenditure
            console.log(NetIncome)
            document.getElementById("Net Income").innerHTML = "Net Income: " + NetIncome + " million"
            TaxRate = TaxRate - 10
            document.getElementById("TaxRate").innerHTML = "Tax Rate: " + TaxRate + "%"
        } else if (Popularity > 100) {
            Popularity = 100
            document.getElementById("Popularity").style.width = Math.round(Popularity) + "%"
            document.getElementById("Popularity").innerHTML = "Popularity: " + Math.round(Popularity) + "%"
        }
    }
}   

function EducationIncrease(Increase) {
    if (Increase == 10) {
        if ((EducationSpending > 0)) {
            EducationSpending = EducationSpending * 1.10;
            document.getElementById('Expenditures').innerHTML = 'Expenditure: ' + Expenditure + ' million';
            document.getElementById('Net Income').innerHTML = 'Net Income: ' + NetIncome + ' million';
        }
    }
}