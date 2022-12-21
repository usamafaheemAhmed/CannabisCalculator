let toComma = (x) => x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

let calBreakValue = 1;

function calBreak() {
    if (calBreakValue == 1) {
        calBreakValue = 0;
        document.getElementById("selectedCal").innerHTML = "Breakdown Mode";
        document.getElementById("howMuch").innerHTML = "Enter Units";
        document.getElementById("secondLabel").innerHTML = "How much?";
        document.getElementById("thirdLabel").innerHTML = "How much did you pay?";
        document.getElementById("button").innerHTML = "Calculate Breakdown " + '<i class="fa fa-money"></i>';

        document.getElementById("myTable").classList.remove("d-none");
        document.getElementById("totalResult").innerHTML = "";
    } else {
        calBreakValue = 1;
        document.getElementById("selectedCal").innerHTML = "Calculator Mode";
        document.getElementById("howMuch").innerHTML = "How Much";
        document.getElementById("secondLabel").innerHTML = "of it are you buying?";
        document.getElementById("thirdLabel").innerHTML = "*Optional: Price per Gram?";
        document.getElementById("button").innerHTML = "Calculate " + '<i class="fa fa-money"></i>';
        document.getElementById("myTable").classList.add("d-none");
        document.getElementById("totalResult").innerHTML = "";

    }
    console.log(calBreakValue);
}

function unit() {
    let unitValue = document.getElementById("units").value;
    switch (unitValue) {
        case "G":
            document.getElementById("selectedUnit").innerHTML = "Gram(s)";
            break;
        case "D":
            document.getElementById("selectedUnit").innerHTML = "Dime(s)";
            break;
        case "Du":
            document.getElementById("selectedUnit").innerHTML = "Dub(s)";
            break;
        case "E":
            document.getElementById("selectedUnit").innerHTML = "Eighth(s)";
            break;
        case "Q":
            document.getElementById("selectedUnit").innerHTML = "Quarter(s)";
            break;
        case "H":
            document.getElementById("selectedUnit").innerHTML = "Half(s)";
            break;
        case "Z":
            document.getElementById("selectedUnit").innerHTML = "Zip(s)";
            break;
        case "O":
            document.getElementById("selectedUnit").innerHTML = "Ounce(s)";
            break;
        case "P":
            document.getElementById("selectedUnit").innerHTML = "Pound(s)";
            break;
        default:
            document.getElementById("selectedUnit").innerHTML = "Unit(s)";
            break;
    }
}

function calculate() {

    let unitValue = document.getElementById("units").value;
    let number = parseFloat(document.getElementById("number").value) || 1;
    let price = parseFloat(document.getElementById("price").value) || 1;
    let total = 0;
    if (calBreakValue == 1) {
        switch (unitValue) {
            case "G":
                // document.getElementById("selectedUnit").innerHTML="Gram(s)";
                total = number * price;
                document.getElementById("totalResult").innerHTML = number + " Gram(s) cost $" + toComma(total);

                break;
            case "D":
                total = number * price;
                document.getElementById("totalResult").innerHTML = number + " Dime(s) cost $" + toComma(total);
                // document.getElementById("selectedUnit").innerHTML="Dime(s)";
                break;
            case "Du":
                // document.getElementById("selectedUnit").innerHTML="Dub(s)";
                total = number * (price * 2);
                document.getElementById("totalResult").innerHTML = number + " Dub(s) cost $" + toComma(total);

                break;
            case "E":
                // document.getElementById("selectedUnit").innerHTML="Eighth(s)";
                total = number * (price * 3.54);
                document.getElementById("totalResult").innerHTML = number + "Eighth(s) cost $" + toComma(total);
                break;
            case "Q":
                // document.getElementById("selectedUnit").innerHTML="Quarter(s)";
                total = number * (price * 7.09);
                document.getElementById("totalResult").innerHTML = number + " Quarter(s) cost $" + toComma(total);
                break;
            case "H":
                // document.getElementById("selectedUnit").innerHTML="Half(s)";
                total = number * (price * 14.17);
                document.getElementById("totalResult").innerHTML = number + " Half(s) cost $" + toComma(total);
                break;
            case "Z":
                // document.getElementById("selectedUnit").innerHTML="Zip(s)";
                total = number * (price * 28.35);
                document.getElementById("totalResult").innerHTML = number + " Zip(s) cost $" + toComma(total);
                break;
            case "O":
                // document.getElementById("selectedUnit").innerHTML="Ounce(s)";
                total = number * (price * 28.35);
                document.getElementById("totalResult").innerHTML = number + " Ounce(s) cost $" + toComma(total);
                break;
            case "P":
                // document.getElementById("selectedUnit").innerHTML="Pound(s)";
                total = number * (price * 453.59);
                document.getElementById("totalResult").innerHTML = number + " Pound(s) cost $" + toComma(total);
                break;
            default:
                alert("Please select a unit");
                break;
        }
    } else {

        switch (unitValue) {
            case "G":
                // document.getElementById("selectedUnit").innerHTML="Gram(s)";
                total = number * price;
                document.getElementById("totalResult").innerHTML = "You purchased <span class='green'> " + number + "</span> Gram(s)" + toComma(total);

                break;
            case "D":
                total = number * price;
                document.getElementById("totalResult").innerHTML = "You purchased <span class='green'> " + number + "</span> Dime(s) " + toComma(total);
                // document.getElementById("selectedUnit").innerHTML="Dime(s)";
                break;
            case "Du":
                // document.getElementById("selectedUnit").innerHTML="Dub(s)";
                total = number * (price * 2);
                document.getElementById("totalResult").innerHTML = "You purchased <span class='green'> " + number + "</span> Dub(s) " + toComma(total);

                break;
            case "E":
                // document.getElementById("selectedUnit").innerHTML="Eighth(s)";
                total = number * (price * 3.54);
                document.getElementById("totalResult").innerHTML = "You purchased <span class='green'> " + number + "</span> Eighth(s) " + toComma(total);
                break;
            case "Q":
                // document.getElementById("selectedUnit").innerHTML="Quarter(s)";
                total = number * (price * 7.09);
                document.getElementById("totalResult").innerHTML = "You purchased <span class='green'> " + number + "</span> Quarter(s) " + toComma(total);
                break;
            case "H":
                // document.getElementById("selectedUnit").innerHTML="Half(s)";
                total = number * (price * 14.17);
                document.getElementById("totalResult").innerHTML = "  You purchased <span class='green'> " + number + "</span> Half(s) " + toComma(total);
                break;
            case "Z":
                // document.getElementById("selectedUnit").innerHTML="Zip(s)";
                total = number * (price * 28.35);
                document.getElementById("totalResult").innerHTML = "You purchased <span class='green'> " + number + "</span> Zip(s) " + toComma(total);
                break;
            case "O":
                // document.getElementById("selectedUnit").innerHTML="Ounce(s)";
                total = number * (price * 28.35);
                document.getElementById("totalResult").innerHTML = "You purchased <span class='green'> " + number + "</span> Ounce(s) " + toComma(total);
                break;
            case "P":
                // document.getElementById("selectedUnit").innerHTML="Pound(s)";
                total = number * (price * 453.59);
                document.getElementById("totalResult").innerHTML = "You purchased <span class='green'> " + number + "</span> Pound(s) " + toComma(total);
                break;
            default:
                alert("Please select a unit");
                break;
        }

        let table = document.getElementById("myTable");
        let row = document.createElement("tr");
        let cell1 = document.createElement("td");
        cell1.innerHTML = "Which is <span class='green'>" + toComma(number * price) + "</span> per Gram(s)";
        row.appendChild(cell1);
        table.appendChild(row);
        let row2 = document.createElement("tr");
        let cell2 = document.createElement("td");
        cell2.innerHTML = "Which is <span class='green'>" + toComma(number * price) + "</span>  per Dime(s)";
        row2.appendChild(cell2);
        table.appendChild(row2);
        let row3 = document.createElement("tr");
        let cell3 = document.createElement("td");
        cell3.innerHTML = "Which is <span class='green'>" + toComma(number * (price * 2)) + "</span>  per Dub(s)";
        row3.appendChild(cell3);
        table.appendChild(row3);
        let row4 = document.createElement("tr");
        let cell4 = document.createElement("td");
        cell4.innerHTML = "Which is <span class='green'>" + toComma(number * (price * 3.54)) + "</span>  per Eighth(s)";
        row4.appendChild(cell4);
        table.appendChild(row4);
        let row5 = document.createElement("tr");
        let cell5 = document.createElement("td");
        cell5.innerHTML = "Which is <span class='green'>" + toComma(number * (price * 7.09)) + "</span>  per Quarter(s)";
        row5.appendChild(cell5);
        table.appendChild(row5);
        let row6 = document.createElement("tr");
        let cell6 = document.createElement("td");
        cell6.innerHTML = "Which is <span class='green'>" + toComma(number * (price * 14.17)) + "</span>  per  Half(s) ";
        row6.appendChild(cell6);
        table.appendChild(row6);
        let row7 = document.createElement("tr");
        let cell7 = document.createElement("td");
        cell7.innerHTML = "Which is <span class='green'>" + toComma(number * (price * 28.35)) + "</span>  per Zip(s) ";
        row7.appendChild(cell7);
        table.appendChild(row7);
        let row8 = document.createElement("tr");
        let cell8 = document.createElement("td");
        cell8.innerHTML = "Which is <span class='green'>" + toComma(number * (price * 28.35)) + "</span>  per Ounce(s) ";
        row8.appendChild(cell8);
        table.appendChild(row8);
        let row9 = document.createElement("tr");
        let cell9 = document.createElement("td");
        cell9.innerHTML = "Which is <span class='green'>" + toComma(number * (price * 453.59)) + "</span>  per Pound(s)";
        row9.appendChild(cell9);
        table.appendChild(row9);
    }
}