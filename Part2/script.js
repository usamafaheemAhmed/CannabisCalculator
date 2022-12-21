let toComma = (x) => x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

window.onload = function() {
    result();
}

function result() {
    let grams = parseFloat(document.getElementById("grams").value)||1;
    let thc   = parseFloat(document.getElementById("thc").value)||1;
    let cbd   = parseFloat(document.getElementById("cbd").value)||1;


    let cupsOfOilAlcoholOrFat = document.getElementById("cupsOfOilAlcoholOrFat").value;

    let tablespoonsOfOilInYourRecipe = document.getElementById("tablespoonsOfOilInYourRecipe").value;
    let servingsInYourRecipe = parseFloat(document.getElementById("servingsInYourRecipe").value)||1;


    let mgToTch = grams * (thc*10);
    let mgToCbd = grams * (cbd*10);

    document.getElementById("mgToTch").innerHTML = toComma(mgToTch);
    document.getElementById("mgToCbd").innerHTML = toComma(mgToCbd);

   
    switch (cupsOfOilAlcoholOrFat) {
        case "1":
            let mgToTch1 = mgToTch / 1;
            let mgToCbd1 = mgToCbd / 1;
            document.getElementById("totalMgToThc").innerHTML = toComma(mgToTch1);
            document.getElementById("totalMgToCbd").innerHTML = toComma(mgToCbd1);
           
            if(tablespoonsOfOilInYourRecipe==1){
                let tchResult = mgToTch1 / 4;
                let cdbResult = mgToCbd1 / 4;
                document.getElementById("tchResult").innerHTML = toComma(tchResult);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult);
                let totalThcResult=tchResult/servingsInYourRecipe;
                let totalCdbResult=cdbResult/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);

            }
            else if (tablespoonsOfOilInYourRecipe==2){

                let tchResult2 = mgToTch1 / 3;
                let cdbResult2 = mgToCbd1 / 3;
                document.getElementById("tchResult").innerHTML = toComma(tchResult2);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult2);
                let totalThcResult=tchResult2/servingsInYourRecipe;
                let totalCdbResult=cdbResult2/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==3){

                let tchResult3 = mgToTch1 / 2;
                let cdbResult3 = mgToCbd1 / 2;
                document.getElementById("tchResult").innerHTML = toComma(tchResult3);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult3);
                let totalThcResult=tchResult3/servingsInYourRecipe;
                let totalCdbResult=cdbResult3/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
         
            }
            else if (tablespoonsOfOilInYourRecipe==4){

                let tchResult4 = mgToTch1 / 1;
                let cdbResult4 = mgToCbd1 / 1;
                document.getElementById("tchResult").innerHTML = toComma(tchResult4);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult4);

                let totalThcResult=tchResult4/servingsInYourRecipe;
                let totalCdbResult=cdbResult4/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==5){

                let tchResult5 = mgToTch1 / 0.5;
                let cdbResult5 = mgToCbd1 / 0.5;
                document.getElementById("tchResult").innerHTML = toComma(tchResult5);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult5);
                
                let totalThcResult=tchResult5/servingsInYourRecipe;
                let totalCdbResult=cdbResult5/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==6){  
            let tchResult6 = mgToTch1 / 0.3333;
            let cdbResult6 = mgToCbd1 / 0.3333;
            document.getElementById("tchResult").innerHTML = toComma(tchResult6);
            document.getElementById("cdbResult").innerHTML = toComma(cdbResult6);

            let totalThcResult=tchResult6/servingsInYourRecipe;
            let totalCdbResult=cdbResult6/servingsInYourRecipe;
            document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
            document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==7){
                
                let tchResult7 = mgToTch1 / 0.25;
                let cdbResult7 = mgToCbd1 / 0.25;
                document.getElementById("tchResult").innerHTML = toComma(tchResult7);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult7);

                let totalThcResult=tchResult7/servingsInYourRecipe;
                let totalCdbResult=cdbResult7/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==8){
                
                let tchResult8 = mgToTch1 / 0.12;
                let cdbResult8 = mgToCbd1 / 0.12;
                document.getElementById("tchResult").innerHTML = toComma(tchResult8);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult8);

                let totalThcResult=tchResult8/servingsInYourRecipe;
                let totalCdbResult=cdbResult8/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==9){
                let tchResult9 = mgToTch1 / 0.06;
                let cdbResult9 = mgToCbd1 / 0.06;
                document.getElementById("tchResult").innerHTML = toComma(tchResult9);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult9);

                let totalThcResult=tchResult9/servingsInYourRecipe;
                let totalCdbResult=cdbResult9/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==10){
                
                let tchResult10 = mgToTch1 / 0.04;
                let cdbResult10 = mgToCbd1 / 0.04;
                document.getElementById("tchResult").innerHTML = toComma(tchResult10);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult10);
                
                let totalThcResult=tchResult10/servingsInYourRecipe;
                let totalCdbResult=cdbResult10/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            
            }
            else if (tablespoonsOfOilInYourRecipe==11){
                
                let tchResult11 = mgToTch1 / 0.03;
                let cdbResult11 = mgToCbd1 / 0.03;
                document.getElementById("tchResult").innerHTML = toComma(tchResult11);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult11);

                let totalThcResult=tchResult11/servingsInYourRecipe;
                let totalCdbResult=cdbResult11/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
              
        break;
        case "2":
            let mgToTch2 = mgToTch / 2;
            let mgToCbd2 = mgToCbd / 2;
            document.getElementById("totalMgToThc").innerHTML = toComma(mgToTch2);
            document.getElementById("totalMgToCbd").innerHTML = toComma(mgToCbd2);

            if(tablespoonsOfOilInYourRecipe==1){
                let tchResult = mgToTch2 / 4;
                let cdbResult = mgToCbd2 / 4;
                document.getElementById("tchResult").innerHTML = toComma(tchResult);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult);
                let totalThcResult=tchResult/servingsInYourRecipe;
                let totalCdbResult=cdbResult/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);

            }
            else if (tablespoonsOfOilInYourRecipe==2){

                let tchResult2 = mgToTch2 / 3;
                let cdbResult2 = mgToCbd2 / 3;
                document.getElementById("tchResult").innerHTML = toComma(tchResult2);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult2);
                let totalThcResult=tchResult2/servingsInYourRecipe;
                let totalCdbResult=cdbResult2/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==3){

                let tchResult3 = mgToTch2 / 2;
                let cdbResult3 = mgToCbd2 / 2;
                document.getElementById("tchResult").innerHTML = toComma(tchResult3);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult3);
                let totalThcResult=tchResult3/servingsInYourRecipe;
                let totalCdbResult=cdbResult3/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
         
            }
            else if (tablespoonsOfOilInYourRecipe==4){

                let tchResult4 = mgToTch2 / 1;
                let cdbResult4 = mgToCbd2 / 1;
                document.getElementById("tchResult").innerHTML = toComma(tchResult4);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult4);

                let totalThcResult=tchResult4/servingsInYourRecipe;
                let totalCdbResult=cdbResult4/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==5){

                let tchResult5 = mgToTch2 / 0.5;
                let cdbResult5 = mgToCbd2 / 0.5;
                document.getElementById("tchResult").innerHTML = toComma(tchResult5);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult5);
                
                let totalThcResult=tchResult5/servingsInYourRecipe;
                let totalCdbResult=cdbResult5/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==6){  
            let tchResult6 = mgToTch2 / 0.3333;
            let cdbResult6 = mgToCbd2 / 0.3333;
            document.getElementById("tchResult").innerHTML = toComma(tchResult6);
            document.getElementById("cdbResult").innerHTML = toComma(cdbResult6);

            let totalThcResult=tchResult6/servingsInYourRecipe;
            let totalCdbResult=cdbResult6/servingsInYourRecipe;
            document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
            document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==7){
                
                let tchResult7 = mgToTch2 / 0.25;
                let cdbResult7 = mgToCbd2 / 0.25;
                document.getElementById("tchResult").innerHTML = toComma(tchResult7);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult7);

                let totalThcResult=tchResult7/servingsInYourRecipe;
                let totalCdbResult=cdbResult7/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==8){
                
                let tchResult8 = mgToTch2 / 0.12;
                let cdbResult8 = mgToCbd2 / 0.12;
                document.getElementById("tchResult").innerHTML = toComma(tchResult8);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult8);

                let totalThcResult=tchResult8/servingsInYourRecipe;
                let totalCdbResult=cdbResult8/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==9){
                let tchResult9 = mgToTch2 / 0.06;
                let cdbResult9 = mgToCbd2 / 0.06;
                document.getElementById("tchResult").innerHTML = toComma(tchResult9);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult9);

                let totalThcResult=tchResult9/servingsInYourRecipe;
                let totalCdbResult=cdbResult9/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==10){
                
                let tchResult10 = mgToTch2 / 0.04;
                let cdbResult10 = mgToCbd2 / 0.04;
                document.getElementById("tchResult").innerHTML = toComma(tchResult10);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult10);
                
                let totalThcResult=tchResult10/servingsInYourRecipe;
                let totalCdbResult=cdbResult10/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            
            }
            else if (tablespoonsOfOilInYourRecipe==11){
                
                let tchResult11 = mgToTch2 / 0.03;
                let cdbResult11 = mgToCbd2 / 0.03;
                document.getElementById("tchResult").innerHTML = toComma(tchResult11);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult11);

                let totalThcResult=tchResult11/servingsInYourRecipe;
                let totalCdbResult=cdbResult11/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }




        break;
        case "3":
            let mgToTch3 = mgToTch / 4;
            let mgToCbd3 = mgToCbd / 4;
            document.getElementById("totalMgToThc").innerHTML = toComma(mgToTch3);
            document.getElementById("totalMgToCbd").innerHTML = toComma(mgToCbd3);
            if(tablespoonsOfOilInYourRecipe==1){
                let tchResult = mgToTch3 / 4;
                let cdbResult = mgToCbd3 / 4;
                document.getElementById("tchResult").innerHTML = toComma(tchResult);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult);
                let totalThcResult=tchResult/servingsInYourRecipe;
                let totalCdbResult=cdbResult/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);

            }
            else if (tablespoonsOfOilInYourRecipe==2){

                let tchResult2 = mgToTch3 / 3;
                let cdbResult2 = mgToCbd3 / 3;
                document.getElementById("tchResult").innerHTML = toComma(tchResult2);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult2);
                let totalThcResult=tchResult2/servingsInYourRecipe;
                let totalCdbResult=cdbResult2/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==3){

                let tchResult3 = mgToTch3 / 2;
                let cdbResult3 = mgToCbd3 / 2;
                document.getElementById("tchResult").innerHTML = toComma(tchResult3);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult3);
                let totalThcResult=tchResult3/servingsInYourRecipe;
                let totalCdbResult=cdbResult3/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
         
            }
            else if (tablespoonsOfOilInYourRecipe==4){

                let tchResult4 = mgToTch3 / 1;
                let cdbResult4 = mgToCbd3 / 1;
                document.getElementById("tchResult").innerHTML = toComma(tchResult4);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult4);

                let totalThcResult=tchResult4/servingsInYourRecipe;
                let totalCdbResult=cdbResult4/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==5){

                let tchResult5 = mgToTch3 / 0.5;
                let cdbResult5 = mgToCbd3 / 0.5;
                document.getElementById("tchResult").innerHTML = toComma(tchResult5);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult5);
                
                let totalThcResult=tchResult5/servingsInYourRecipe;
                let totalCdbResult=cdbResult5/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==6){  
            let tchResult6 = mgToTch3 / 0.3333;
            let cdbResult6 = mgToCbd3 / 0.3333;
            document.getElementById("tchResult").innerHTML = toComma(tchResult6);
            document.getElementById("cdbResult").innerHTML = toComma(cdbResult6);

            let totalThcResult=tchResult6/servingsInYourRecipe;
            let totalCdbResult=cdbResult6/servingsInYourRecipe;
            document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
            document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==7){
                
                let tchResult7 = mgToTch3 / 0.25;
                let cdbResult7 = mgToCbd3 / 0.25;
                document.getElementById("tchResult").innerHTML = toComma(tchResult7);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult7);

                let totalThcResult=tchResult7/servingsInYourRecipe;
                let totalCdbResult=cdbResult7/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==8){
                
                let tchResult8 = mgToTch3 / 0.12;
                let cdbResult8 = mgToCbd3 / 0.12;
                document.getElementById("tchResult").innerHTML = toComma(tchResult8);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult8);

                let totalThcResult=tchResult8/servingsInYourRecipe;
                let totalCdbResult=cdbResult8/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==9){
                let tchResult9 = mgToTch3 / 0.06;
                let cdbResult9 = mgToCbd3 / 0.06;
                document.getElementById("tchResult").innerHTML = toComma(tchResult9);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult9);

                let totalThcResult=tchResult9/servingsInYourRecipe;
                let totalCdbResult=cdbResult9/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==10){
                
                let tchResult10 = mgToTch3 / 0.04;
                let cdbResult10 = mgToCbd3 / 0.04;
                document.getElementById("tchResult").innerHTML = toComma(tchResult10);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult10);
                
                let totalThcResult=tchResult10/servingsInYourRecipe;
                let totalCdbResult=cdbResult10/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            
            }
            else if (tablespoonsOfOilInYourRecipe==11){
                
                let tchResult11 = mgToTch3 / 0.03;
                let cdbResult11 = mgToCbd3 / 0.03;
                document.getElementById("tchResult").innerHTML = toComma(tchResult11);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult11);

                let totalThcResult=tchResult11/servingsInYourRecipe;
                let totalCdbResult=cdbResult11/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            

        break;
        case "4":
            let mgToTch4 = mgToTch / 8;
            let mgToCbd4 = mgToCbd / 8;
            document.getElementById("totalMgToThc").innerHTML = toComma(mgToTch4);
            document.getElementById("totalMgToCbd").innerHTML = toComma(mgToCbd4);
            if(tablespoonsOfOilInYourRecipe==1){
                let tchResult = mgToTch4 / 4;
                let cdbResult = mgToCbd4 / 4;
                document.getElementById("tchResult").innerHTML = toComma(tchResult);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult);
                let totalThcResult=tchResult/servingsInYourRecipe;
                let totalCdbResult=cdbResult/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);

            }
            else if (tablespoonsOfOilInYourRecipe==2){

                let tchResult2 = mgToTch4 / 3;
                let cdbResult2 = mgToCbd4 / 3;
                document.getElementById("tchResult").innerHTML = toComma(tchResult2);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult2);
                let totalThcResult=tchResult2/servingsInYourRecipe;
                let totalCdbResult=cdbResult2/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==3){

                let tchResult3 = mgToTch4 / 2;
                let cdbResult3 = mgToCbd4 / 2;
                document.getElementById("tchResult").innerHTML = toComma(tchResult3);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult3);
                let totalThcResult=tchResult3/servingsInYourRecipe;
                let totalCdbResult=cdbResult3/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
         
            }
            else if (tablespoonsOfOilInYourRecipe==4){

                let tchResult4 = mgToTch4 / 1;
                let cdbResult4 = mgToCbd4 / 1;
                document.getElementById("tchResult").innerHTML = toComma(tchResult4);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult4);

                let totalThcResult=tchResult4/servingsInYourRecipe;
                let totalCdbResult=cdbResult4/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==5){

                let tchResult5 = mgToTch4 / 0.5;
                let cdbResult5 = mgToCbd4 / 0.5;
                document.getElementById("tchResult").innerHTML = toComma(tchResult5);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult5);
                
                let totalThcResult=tchResult5/servingsInYourRecipe;
                let totalCdbResult=cdbResult5/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==6){  
            let tchResult6 = mgToTch4 / 0.3333;
            let cdbResult6 = mgToCbd4 / 0.3333;
            document.getElementById("tchResult").innerHTML = toComma(tchResult6);
            document.getElementById("cdbResult").innerHTML = toComma(cdbResult6);

            let totalThcResult=tchResult6/servingsInYourRecipe;
            let totalCdbResult=cdbResult6/servingsInYourRecipe;
            document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
            document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==7){
                
                let tchResult7 = mgToTch4 / 0.25;
                let cdbResult7 = mgToCbd4 / 0.25;
                document.getElementById("tchResult").innerHTML = toComma(tchResult7);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult7);

                let totalThcResult=tchResult7/servingsInYourRecipe;
                let totalCdbResult=cdbResult7/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==8){
                
                let tchResult8 = mgToTch4 / 0.12;
                let cdbResult8 = mgToCbd4 / 0.12;
                document.getElementById("tchResult").innerHTML = toComma(tchResult8);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult8);

                let totalThcResult=tchResult8/servingsInYourRecipe;
                let totalCdbResult=cdbResult8/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==9){
                let tchResult9 = mgToTch4 / 0.06;
                let cdbResult9 = mgToCbd4 / 0.06;
                document.getElementById("tchResult").innerHTML = toComma(tchResult9);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult9);

                let totalThcResult=tchResult9/servingsInYourRecipe;
                let totalCdbResult=cdbResult9/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==10){
                
                let tchResult10 = mgToTch4 / 0.04;
                let cdbResult10 = mgToCbd4 / 0.04;
                document.getElementById("tchResult").innerHTML = toComma(tchResult10);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult10);
                
                let totalThcResult=tchResult10/servingsInYourRecipe;
                let totalCdbResult=cdbResult10/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            
            }
            else if (tablespoonsOfOilInYourRecipe==11){
                
                let tchResult11 = mgToTch4 / 0.03;
                let cdbResult11 = mgToCbd4 / 0.03;
                document.getElementById("tchResult").innerHTML = toComma(tchResult11);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult11);

                let totalThcResult=tchResult11/servingsInYourRecipe;
                let totalCdbResult=cdbResult11/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }




        break;
        case "5":
            let mgToTch5 = mgToTch / 16;
            let mgToCbd5 = mgToCbd / 16;
            document.getElementById("totalMgToThc").innerHTML = toComma(mgToTch5);
            document.getElementById("totalMgToCbd").innerHTML = toComma(mgToCbd5);

            if(tablespoonsOfOilInYourRecipe==1){
                let tchResult = mgToTch5 / 4;
                let cdbResult = mgToCbd5 / 4;
                document.getElementById("tchResult").innerHTML = toComma(tchResult);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult);
                let totalThcResult=tchResult/servingsInYourRecipe;
                let totalCdbResult=cdbResult/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);

            }
            else if (tablespoonsOfOilInYourRecipe==2){

                let tchResult2 = mgToTch5 / 3;
                let cdbResult2 = mgToCbd5 / 3;
                document.getElementById("tchResult").innerHTML = toComma(tchResult2);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult2);
                let totalThcResult=tchResult2/servingsInYourRecipe;
                let totalCdbResult=cdbResult2/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==3){

                let tchResult3 = mgToTch5 / 2;
                let cdbResult3 = mgToCbd5 / 2;
                document.getElementById("tchResult").innerHTML = toComma(tchResult3);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult3);
                let totalThcResult=tchResult3/servingsInYourRecipe;
                let totalCdbResult=cdbResult3/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
         
            }
            else if (tablespoonsOfOilInYourRecipe==4){

                let tchResult4 = mgToTch5 / 1;
                let cdbResult4 = mgToCbd5 / 1;
                document.getElementById("tchResult").innerHTML = toComma(tchResult4);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult4);

                let totalThcResult=tchResult4/servingsInYourRecipe;
                let totalCdbResult=cdbResult4/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==5){

                let tchResult5 = mgToTch5 / 0.5;
                let cdbResult5 = mgToCbd5 / 0.5;
                document.getElementById("tchResult").innerHTML = toComma(tchResult5);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult5);
                
                let totalThcResult=tchResult5/servingsInYourRecipe;
                let totalCdbResult=cdbResult5/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==6){  
            let tchResult6 = mgToTch5 / 0.3333;
            let cdbResult6 = mgToCbd5 / 0.3333;
            document.getElementById("tchResult").innerHTML = toComma(tchResult6);
            document.getElementById("cdbResult").innerHTML = toComma(cdbResult6);

            let totalThcResult=tchResult6/servingsInYourRecipe;
            let totalCdbResult=cdbResult6/servingsInYourRecipe;
            document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
            document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==7){
                
                let tchResult7 = mgToTch5 / 0.25;
                let cdbResult7 = mgToCbd5 / 0.25;
                document.getElementById("tchResult").innerHTML = toComma(tchResult7);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult7);

                let totalThcResult=tchResult7/servingsInYourRecipe;
                let totalCdbResult=cdbResult7/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==8){
                
                let tchResult8 = mgToTch5 / 0.12;
                let cdbResult8 = mgToCbd5 / 0.12;
                document.getElementById("tchResult").innerHTML = toComma(tchResult8);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult8);

                let totalThcResult=tchResult8/servingsInYourRecipe;
                let totalCdbResult=cdbResult8/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==9){
                let tchResult9 = mgToTch5 / 0.06;
                let cdbResult9 = mgToCbd5 / 0.06;
                document.getElementById("tchResult").innerHTML = toComma(tchResult9);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult9);

                let totalThcResult=tchResult9/servingsInYourRecipe;
                let totalCdbResult=cdbResult9/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==10){
                
                let tchResult10 = mgToTch5 / 0.04;
                let cdbResult10 = mgToCbd5 / 0.04;
                document.getElementById("tchResult").innerHTML = toComma(tchResult10);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult10);
                
                let totalThcResult=tchResult10/servingsInYourRecipe;
                let totalCdbResult=cdbResult10/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            
            }
            else if (tablespoonsOfOilInYourRecipe==11){
                
                let tchResult11 = mgToTch5 / 0.03;
                let cdbResult11 = mgToCbd5 / 0.03;
                document.getElementById("tchResult").innerHTML = toComma(tchResult11);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult11);

                let totalThcResult=tchResult11/servingsInYourRecipe;
                let totalCdbResult=cdbResult11/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }



        break;
        case "6":
            let mgToTch6 = mgToTch / 32;
            let mgToCbd6 = mgToCbd / 32;
            document.getElementById("totalMgToThc").innerHTML = toComma(mgToTch6);
            document.getElementById("totalMgToCbd").innerHTML = toComma(mgToCbd6);


            if(tablespoonsOfOilInYourRecipe==1){
                let tchResult = mgToTch6 / 4;
                let cdbResult = mgToCbd6 / 4;
                document.getElementById("tchResult").innerHTML = toComma(tchResult);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult);
                let totalThcResult=tchResult/servingsInYourRecipe;
                let totalCdbResult=cdbResult/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);

            }
            else if (tablespoonsOfOilInYourRecipe==2){

                let tchResult2 = mgToTch6 / 3;
                let cdbResult2 = mgToCbd6 / 3;
                document.getElementById("tchResult").innerHTML = toComma(tchResult2);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult2);
                let totalThcResult=tchResult2/servingsInYourRecipe;
                let totalCdbResult=cdbResult2/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==3){

                let tchResult3 = mgToTch6 / 2;
                let cdbResult3 = mgToCbd6 / 2;
                document.getElementById("tchResult").innerHTML = toComma(tchResult3);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult3);
                let totalThcResult=tchResult3/servingsInYourRecipe;
                let totalCdbResult=cdbResult3/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
         
            }
            else if (tablespoonsOfOilInYourRecipe==4){

                let tchResult4 = mgToTch6 / 1;
                let cdbResult4 = mgToCbd6 / 1;
                document.getElementById("tchResult").innerHTML = toComma(tchResult4);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult4);

                let totalThcResult=tchResult4/servingsInYourRecipe;
                let totalCdbResult=cdbResult4/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==5){

                let tchResult5 = mgToTch6 / 0.5;
                let cdbResult5 = mgToCbd6 / 0.5;
                document.getElementById("tchResult").innerHTML = toComma(tchResult5);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult5);
                
                let totalThcResult=tchResult5/servingsInYourRecipe;
                let totalCdbResult=cdbResult5/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==6){  
            let tchResult6 = mgToTch6 / 0.3333;
            let cdbResult6 = mgToCbd6 / 0.3333;
            document.getElementById("tchResult").innerHTML = toComma(tchResult6);
            document.getElementById("cdbResult").innerHTML = toComma(cdbResult6);

            let totalThcResult=tchResult6/servingsInYourRecipe;
            let totalCdbResult=cdbResult6/servingsInYourRecipe;
            document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
            document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==7){
                
                let tchResult7 = mgToTch6 / 0.25;
                let cdbResult7 = mgToCbd6 / 0.25;
                document.getElementById("tchResult").innerHTML = toComma(tchResult7);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult7);

                let totalThcResult=tchResult7/servingsInYourRecipe;
                let totalCdbResult=cdbResult7/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==8){
                
                let tchResult8 = mgToTch6 / 0.12;
                let cdbResult8 = mgToCbd6 / 0.12;
                document.getElementById("tchResult").innerHTML = toComma(tchResult8);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult8);

                let totalThcResult=tchResult8/servingsInYourRecipe;
                let totalCdbResult=cdbResult8/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==9){
                let tchResult9 = mgToTch6 / 0.06;
                let cdbResult9 = mgToCbd6 / 0.06;
                document.getElementById("tchResult").innerHTML = toComma(tchResult9);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult9);

                let totalThcResult=tchResult9/servingsInYourRecipe;
                let totalCdbResult=cdbResult9/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==10){
                
                let tchResult10 = mgToTch6 / 0.04;
                let cdbResult10 = mgToCbd6 / 0.04;
                document.getElementById("tchResult").innerHTML = toComma(tchResult10);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult10);
                
                let totalThcResult=tchResult10/servingsInYourRecipe;
                let totalCdbResult=cdbResult10/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            
            }
            else if (tablespoonsOfOilInYourRecipe==11){
                
                let tchResult11 = mgToTch6 / 0.03;
                let cdbResult11 = mgToCbd6 / 0.03;
                document.getElementById("tchResult").innerHTML = toComma(tchResult11);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult11);

                let totalThcResult=tchResult11/servingsInYourRecipe;
                let totalCdbResult=cdbResult11/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }




        break;
        case "7":
            let mgToTch7 = mgToTch / 46;
            let mgToCbd7 = mgToCbd / 46;
            document.getElementById("totalMgToThc").innerHTML = toComma(mgToTch7);
            document.getElementById("totalMgToCbd").innerHTML = toComma(mgToCbd7);

            if(tablespoonsOfOilInYourRecipe==1){
                let tchResult = mgToTch7 / 4;
                let cdbResult = mgToCbd7 / 4;
                document.getElementById("tchResult").innerHTML = toComma(tchResult);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult);
                let totalThcResult=tchResult/servingsInYourRecipe;
                let totalCdbResult=cdbResult/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);

            }
            else if (tablespoonsOfOilInYourRecipe==2){

                let tchResult2 = mgToTch7 / 3;
                let cdbResult2 = mgToCbd7 / 3;
                document.getElementById("tchResult").innerHTML = toComma(tchResult2);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult2);
                let totalThcResult=tchResult2/servingsInYourRecipe;
                let totalCdbResult=cdbResult2/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==3){

                let tchResult3 = mgToTch7 / 2;
                let cdbResult3 = mgToCbd7 / 2;
                document.getElementById("tchResult").innerHTML = toComma(tchResult3);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult3);
                let totalThcResult=tchResult3/servingsInYourRecipe;
                let totalCdbResult=cdbResult3/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
         
            }
            else if (tablespoonsOfOilInYourRecipe==4){

                let tchResult4 = mgToTch7 / 1;
                let cdbResult4 = mgToCbd7 / 1;
                document.getElementById("tchResult").innerHTML = toComma(tchResult4);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult4);

                let totalThcResult=tchResult4/servingsInYourRecipe;
                let totalCdbResult=cdbResult4/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==5){

                let tchResult5 = mgToTch7 / 0.5;
                let cdbResult5 = mgToCbd7 / 0.5;
                document.getElementById("tchResult").innerHTML = toComma(tchResult5);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult5);
                
                let totalThcResult=tchResult5/servingsInYourRecipe;
                let totalCdbResult=cdbResult5/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==6){  
            let tchResult6 = mgToTch7 / 0.3333;
            let cdbResult6 = mgToCbd7 / 0.3333;
            document.getElementById("tchResult").innerHTML = toComma(tchResult6);
            document.getElementById("cdbResult").innerHTML = toComma(cdbResult6);

            let totalThcResult=tchResult6/servingsInYourRecipe;
            let totalCdbResult=cdbResult6/servingsInYourRecipe;
            document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
            document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==7){
                
                let tchResult7 = mgToTch7 / 0.25;
                let cdbResult7 = mgToCbd7 / 0.25;
                document.getElementById("tchResult").innerHTML = toComma(tchResult7);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult7);

                let totalThcResult=tchResult7/servingsInYourRecipe;
                let totalCdbResult=cdbResult7/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==8){
                
                let tchResult8 = mgToTch7 / 0.12;
                let cdbResult8 = mgToCbd7 / 0.12;
                document.getElementById("tchResult").innerHTML = toComma(tchResult8);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult8);

                let totalThcResult=tchResult8/servingsInYourRecipe;
                let totalCdbResult=cdbResult8/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==9){
                let tchResult9 = mgToTch7 / 0.06;
                let cdbResult9 = mgToCbd7 / 0.06;
                document.getElementById("tchResult").innerHTML = toComma(tchResult9);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult9);

                let totalThcResult=tchResult9/servingsInYourRecipe;
                let totalCdbResult=cdbResult9/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==10){
                
                let tchResult10 = mgToTch7 / 0.04;
                let cdbResult10 = mgToCbd7 / 0.04;
                document.getElementById("tchResult").innerHTML = toComma(tchResult10);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult10);
                
                let totalThcResult=tchResult10/servingsInYourRecipe;
                let totalCdbResult=cdbResult10/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            
            }
            else if (tablespoonsOfOilInYourRecipe==11){
                
                let tchResult11 = mgToTch7 / 0.03;
                let cdbResult11 = mgToCbd7 / 0.03;
                document.getElementById("tchResult").innerHTML = toComma(tchResult11);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult11);

                let totalThcResult=tchResult11/servingsInYourRecipe;
                let totalCdbResult=cdbResult11/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }


        break;
        case "8":
            let mgToTch8 = mgToTch / 60;
            let mgToCbd8 = mgToCbd / 60;
            document.getElementById("totalMgToThc").innerHTML = toComma(mgToTch8);
            document.getElementById("totalMgToCbd").innerHTML = toComma(mgToCbd8);

            if(tablespoonsOfOilInYourRecipe==1){
                let tchResult = mgToTch8 / 4;
                let cdbResult = mgToCbd8 / 4;
                document.getElementById("tchResult").innerHTML = toComma(tchResult);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult);
                let totalThcResult=tchResult/servingsInYourRecipe;
                let totalCdbResult=cdbResult/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);

            }
            else if (tablespoonsOfOilInYourRecipe==2){

                let tchResult2 = mgToTch8 / 3;
                let cdbResult2 = mgToCbd8 / 3;
                document.getElementById("tchResult").innerHTML = toComma(tchResult2);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult2);
                let totalThcResult=tchResult2/servingsInYourRecipe;
                let totalCdbResult=cdbResult2/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==3){

                let tchResult3 = mgToTch8 / 2;
                let cdbResult3 = mgToCbd8 / 2;
                document.getElementById("tchResult").innerHTML = toComma(tchResult3);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult3);
                let totalThcResult=tchResult3/servingsInYourRecipe;
                let totalCdbResult=cdbResult3/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
         
            }
            else if (tablespoonsOfOilInYourRecipe==4){

                let tchResult4 = mgToTch8 / 1;
                let cdbResult4 = mgToCbd8 / 1;
                document.getElementById("tchResult").innerHTML = toComma(tchResult4);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult4);

                let totalThcResult=tchResult4/servingsInYourRecipe;
                let totalCdbResult=cdbResult4/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==5){

                let tchResult5 = mgToTch8 / 0.5;
                let cdbResult5 = mgToCbd8 / 0.5;
                document.getElementById("tchResult").innerHTML = toComma(tchResult5);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult5);
                
                let totalThcResult=tchResult5/servingsInYourRecipe;
                let totalCdbResult=cdbResult5/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==6){  
            let tchResult6 = mgToTch8 / 0.3333;
            let cdbResult6 = mgToCbd8 / 0.3333;
            document.getElementById("tchResult").innerHTML = toComma(tchResult6);
            document.getElementById("cdbResult").innerHTML = toComma(cdbResult6);

            let totalThcResult=tchResult6/servingsInYourRecipe;
            let totalCdbResult=cdbResult6/servingsInYourRecipe;
            document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
            document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==7){
                
                let tchResult7 = mgToTch8 / 0.25;
                let cdbResult7 = mgToCbd8 / 0.25;
                document.getElementById("tchResult").innerHTML = toComma(tchResult7);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult7);

                let totalThcResult=tchResult7/servingsInYourRecipe;
                let totalCdbResult=cdbResult7/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==8){
                
                let tchResult8 = mgToTch8 / 0.12;
                let cdbResult8 = mgToCbd8 / 0.12;
                document.getElementById("tchResult").innerHTML = toComma(tchResult8);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult8);

                let totalThcResult=tchResult8/servingsInYourRecipe;
                let totalCdbResult=cdbResult8/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==9){
                let tchResult9 = mgToTch8 / 0.06;
                let cdbResult9 = mgToCbd8 / 0.06;
                document.getElementById("tchResult").innerHTML = toComma(tchResult9);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult9);

                let totalThcResult=tchResult9/servingsInYourRecipe;
                let totalCdbResult=cdbResult9/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==10){
                
                let tchResult10 = mgToTch8 / 0.04;
                let cdbResult10 = mgToCbd8 / 0.04;
                document.getElementById("tchResult").innerHTML = toComma(tchResult10);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult10);
                
                let totalThcResult=tchResult10/servingsInYourRecipe;
                let totalCdbResult=cdbResult10/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            
            }
            else if (tablespoonsOfOilInYourRecipe==11){
                
                let tchResult11 = mgToTch8 / 0.03;
                let cdbResult11 = mgToCbd8 / 0.03;
                document.getElementById("tchResult").innerHTML = toComma(tchResult11);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult11);

                let totalThcResult=tchResult11/servingsInYourRecipe;
                let totalCdbResult=cdbResult11/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }




        break;
        case "9":
            let mgToTch9 = mgToTch / 75;
            let mgToCbd9 = mgToCbd / 75;
            document.getElementById("totalMgToThc").innerHTML = toComma(mgToTch9);
            document.getElementById("totalMgToCbd").innerHTML = toComma(mgToCbd9);

            if(tablespoonsOfOilInYourRecipe==1){
                let tchResult = mgToTch9 / 4;
                let cdbResult = mgToCbd9 / 4;
                document.getElementById("tchResult").innerHTML = toComma(tchResult);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult);
                let totalThcResult=tchResult/servingsInYourRecipe;
                let totalCdbResult=cdbResult/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);

            }
            else if (tablespoonsOfOilInYourRecipe==2){

                let tchResult2 = mgToTch9 / 3;
                let cdbResult2 = mgToCbd9 / 3;
                document.getElementById("tchResult").innerHTML = toComma(tchResult2);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult2);
                let totalThcResult=tchResult2/servingsInYourRecipe;
                let totalCdbResult=cdbResult2/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==3){

                let tchResult3 = mgToTch9 / 2;
                let cdbResult3 = mgToCbd9 / 2;
                document.getElementById("tchResult").innerHTML = toComma(tchResult3);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult3);
                let totalThcResult=tchResult3/servingsInYourRecipe;
                let totalCdbResult=cdbResult3/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
         
            }
            else if (tablespoonsOfOilInYourRecipe==4){

                let tchResult4 = mgToTch9 / 1;
                let cdbResult4 = mgToCbd9 / 1;
                document.getElementById("tchResult").innerHTML = toComma(tchResult4);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult4);

                let totalThcResult=tchResult4/servingsInYourRecipe;
                let totalCdbResult=cdbResult4/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==5){

                let tchResult5 = mgToTch9 / 0.5;
                let cdbResult5 = mgToCbd9 / 0.5;
                document.getElementById("tchResult").innerHTML = toComma(tchResult5);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult5);
                
                let totalThcResult=tchResult5/servingsInYourRecipe;
                let totalCdbResult=cdbResult5/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==6){  
            let tchResult6 = mgToTch9 / 0.3333;
            let cdbResult6 = mgToCbd9 / 0.3333;
            document.getElementById("tchResult").innerHTML = toComma(tchResult6);
            document.getElementById("cdbResult").innerHTML = toComma(cdbResult6);

            let totalThcResult=tchResult6/servingsInYourRecipe;
            let totalCdbResult=cdbResult6/servingsInYourRecipe;
            document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
            document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==7){
                
                let tchResult7 = mgToTch9 / 0.25;
                let cdbResult7 = mgToCbd9 / 0.25;
                document.getElementById("tchResult").innerHTML = toComma(tchResult7);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult7);

                let totalThcResult=tchResult7/servingsInYourRecipe;
                let totalCdbResult=cdbResult7/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==8){
                
                let tchResult8 = mgToTch9 / 0.12;
                let cdbResult8 = mgToCbd9 / 0.12;
                document.getElementById("tchResult").innerHTML = toComma(tchResult8);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult8);

                let totalThcResult=tchResult8/servingsInYourRecipe;
                let totalCdbResult=cdbResult8/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==9){
                let tchResult9 = mgToTch9 / 0.06;
                let cdbResult9 = mgToCbd9 / 0.06;
                document.getElementById("tchResult").innerHTML = toComma(tchResult9);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult9);

                let totalThcResult=tchResult9/servingsInYourRecipe;
                let totalCdbResult=cdbResult9/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==10){
                
                let tchResult10 = mgToTch9 / 0.04;
                let cdbResult10 = mgToCbd9 / 0.04;
                document.getElementById("tchResult").innerHTML = toComma(tchResult10);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult10);
                
                let totalThcResult=tchResult10/servingsInYourRecipe;
                let totalCdbResult=cdbResult10/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            
            }
            else if (tablespoonsOfOilInYourRecipe==11){
                
                let tchResult11 = mgToTch9 / 0.03;
                let cdbResult11 = mgToCbd9 / 0.03;
                document.getElementById("tchResult").innerHTML = toComma(tchResult11);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult11);

                let totalThcResult=tchResult11/servingsInYourRecipe;
                let totalCdbResult=cdbResult11/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }


        break;
        case "10":
            let mgToTch10 = mgToTch / 100;
            let mgToCbd10 = mgToCbd /100;
            document.getElementById("totalMgToThc").innerHTML = toComma(mgToTch10);
            document.getElementById("totalMgToCbd").innerHTML = toComma(mgToCbd10);

            if(tablespoonsOfOilInYourRecipe==1){
                let tchResult = mgToTch10 / 4;
                let cdbResult = mgToCbd10 / 4;
                document.getElementById("tchResult").innerHTML = toComma(tchResult);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult);
                let totalThcResult=tchResult/servingsInYourRecipe;
                let totalCdbResult=cdbResult/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);

            }
            else if (tablespoonsOfOilInYourRecipe==2){

                let tchResult2 = mgToTch10 / 3;
                let cdbResult2 = mgToCbd10 / 3;
                document.getElementById("tchResult").innerHTML = toComma(tchResult2);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult2);
                let totalThcResult=tchResult2/servingsInYourRecipe;
                let totalCdbResult=cdbResult2/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==3){

                let tchResult3 = mgToTch10 / 2;
                let cdbResult3 = mgToCbd10 / 2;
                document.getElementById("tchResult").innerHTML = toComma(tchResult3);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult3);
                let totalThcResult=tchResult3/servingsInYourRecipe;
                let totalCdbResult=cdbResult3/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
         
            }
            else if (tablespoonsOfOilInYourRecipe==4){

                let tchResult4 = mgToTch10 / 1;
                let cdbResult4 = mgToCbd10 / 1;
                document.getElementById("tchResult").innerHTML = toComma(tchResult4);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult4);

                let totalThcResult=tchResult4/servingsInYourRecipe;
                let totalCdbResult=cdbResult4/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==5){

                let tchResult5 = mgToTch10 / 0.5;
                let cdbResult5 = mgToCbd10 / 0.5;
                document.getElementById("tchResult").innerHTML = toComma(tchResult5);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult5);
                
                let totalThcResult=tchResult5/servingsInYourRecipe;
                let totalCdbResult=cdbResult5/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==6){  
            let tchResult6 = mgToTch10 / 0.3333;
            let cdbResult6 = mgToCbd10 / 0.3333;
            document.getElementById("tchResult").innerHTML = toComma(tchResult6);
            document.getElementById("cdbResult").innerHTML = toComma(cdbResult6);

            let totalThcResult=tchResult6/servingsInYourRecipe;
            let totalCdbResult=cdbResult6/servingsInYourRecipe;
            document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
            document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==7){
                
                let tchResult7 = mgToTch10 / 0.25;
                let cdbResult7 = mgToCbd10 / 0.25;
                document.getElementById("tchResult").innerHTML = toComma(tchResult7);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult7);

                let totalThcResult=tchResult7/servingsInYourRecipe;
                let totalCdbResult=cdbResult7/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==8){
                
                let tchResult8 = mgToTch10 / 0.12;
                let cdbResult8 = mgToCbd10 / 0.12;
                document.getElementById("tchResult").innerHTML = toComma(tchResult8);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult8);

                let totalThcResult=tchResult8/servingsInYourRecipe;
                let totalCdbResult=cdbResult8/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==9){
                let tchResult9 = mgToTch10 / 0.06;
                let cdbResult9 = mgToCbd10 / 0.06;
                document.getElementById("tchResult").innerHTML = toComma(tchResult9);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult9);

                let totalThcResult=tchResult9/servingsInYourRecipe;
                let totalCdbResult=cdbResult9/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==10){
                
                let tchResult10 = mgToTch10 / 0.04;
                let cdbResult10 = mgToCbd10 / 0.04;
                document.getElementById("tchResult").innerHTML = toComma(tchResult10);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult10);
                
                let totalThcResult=tchResult10/servingsInYourRecipe;
                let totalCdbResult=cdbResult10/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            
            }
            else if (tablespoonsOfOilInYourRecipe==11){
                
                let tchResult11 = mgToTch10 / 0.03;
                let cdbResult11 = mgToCbd10 / 0.03;
                document.getElementById("tchResult").innerHTML = toComma(tchResult11);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult11);

                let totalThcResult=tchResult11/servingsInYourRecipe;
                let totalCdbResult=cdbResult11/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }



        break;
        case "11":
            let mgToTch11 = mgToTch / 110;
            let mgToCbd11 = mgToCbd / 110;
            document.getElementById("totalMgToThc").innerHTML = toComma(mgToTch11);
            document.getElementById("totalMgToCbd").innerHTML = toComma(mgToCbd11);

            if(tablespoonsOfOilInYourRecipe==1){
                let tchResult = mgToTch11 / 4;
                let cdbResult = mgToCbd11 / 4;
                document.getElementById("tchResult").innerHTML = toComma(tchResult);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult);
                let totalThcResult=tchResult/servingsInYourRecipe;
                let totalCdbResult=cdbResult/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);

            }
            else if (tablespoonsOfOilInYourRecipe==2){

                let tchResult2 = mgToTch11 / 3;
                let cdbResult2 = mgToCbd11 / 3;
                document.getElementById("tchResult").innerHTML = toComma(tchResult2);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult2);
                let totalThcResult=tchResult2/servingsInYourRecipe;
                let totalCdbResult=cdbResult2/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==3){

                let tchResult3 = mgToTch11 / 2;
                let cdbResult3 = mgToCbd11 / 2;
                document.getElementById("tchResult").innerHTML = toComma(tchResult3);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult3);
                let totalThcResult=tchResult3/servingsInYourRecipe;
                let totalCdbResult=cdbResult3/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
         
            }
            else if (tablespoonsOfOilInYourRecipe==4){

                let tchResult4 = mgToTch11 / 1;
                let cdbResult4 = mgToCbd11 / 1;
                document.getElementById("tchResult").innerHTML = toComma(tchResult4);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult4);

                let totalThcResult=tchResult4/servingsInYourRecipe;
                let totalCdbResult=cdbResult4/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==5){

                let tchResult5 = mgToTch11 / 0.5;
                let cdbResult5 = mgToCbd11 / 0.5;
                document.getElementById("tchResult").innerHTML = toComma(tchResult5);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult5);
                
                let totalThcResult=tchResult5/servingsInYourRecipe;
                let totalCdbResult=cdbResult5/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==6){  
            let tchResult6 = mgToTch11 / 0.3333;
            let cdbResult6 = mgToCbd11 / 0.3333;
            document.getElementById("tchResult").innerHTML = toComma(tchResult6);
            document.getElementById("cdbResult").innerHTML = toComma(cdbResult6);

            let totalThcResult=tchResult6/servingsInYourRecipe;
            let totalCdbResult=cdbResult6/servingsInYourRecipe;
            document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
            document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==7){
                
                let tchResult7 = mgToTch11 / 0.25;
                let cdbResult7 = mgToCbd11 / 0.25;
                document.getElementById("tchResult").innerHTML = toComma(tchResult7);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult7);

                let totalThcResult=tchResult7/servingsInYourRecipe;
                let totalCdbResult=cdbResult7/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==8){
                
                let tchResult8 = mgToTch11 / 0.12;
                let cdbResult8 = mgToCbd11 / 0.12;
                document.getElementById("tchResult").innerHTML = toComma(tchResult8);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult8);

                let totalThcResult=tchResult8/servingsInYourRecipe;
                let totalCdbResult=cdbResult8/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==9){
                let tchResult9 = mgToTch11 / 0.06;
                let cdbResult9 = mgToCbd11 / 0.06;
                document.getElementById("tchResult").innerHTML = toComma(tchResult9);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult9);

                let totalThcResult=tchResult9/servingsInYourRecipe;
                let totalCdbResult=cdbResult9/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==10){
                
                let tchResult10 = mgToTch11 / 0.04;
                let cdbResult10 = mgToCbd11 / 0.04;
                document.getElementById("tchResult").innerHTML = toComma(tchResult10);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult10);
                
                let totalThcResult=tchResult10/servingsInYourRecipe;
                let totalCdbResult=cdbResult10/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            
            }
            else if (tablespoonsOfOilInYourRecipe==11){
                
                let tchResult11 = mgToTch11 / 0.03;
                let cdbResult11 = mgToCbd11 / 0.03;
                document.getElementById("tchResult").innerHTML = toComma(tchResult11);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult11);

                let totalThcResult=tchResult11/servingsInYourRecipe;
                let totalCdbResult=cdbResult11/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }

        break;
        case "12":
            let mgToTch12 = mgToTch / 125;
            let mgToCbd12 = mgToCbd / 125;
            document.getElementById("totalMgToThc").innerHTML = toComma(mgToTch12);
            document.getElementById("totalMgToCbd").innerHTML = toComma(mgToCbd12);

            if(tablespoonsOfOilInYourRecipe==1){
                let tchResult = mgToTch12 / 4;
                let cdbResult = mgToCbd12 / 4;
                document.getElementById("tchResult").innerHTML = toComma(tchResult);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult);
                let totalThcResult=tchResult/servingsInYourRecipe;
                let totalCdbResult=cdbResult/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);

            }
            else if (tablespoonsOfOilInYourRecipe==2){

                let tchResult2 = mgToTch12 / 3;
                let cdbResult2 = mgToCbd12 / 3;
                document.getElementById("tchResult").innerHTML = toComma(tchResult2);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult2);
                let totalThcResult=tchResult2/servingsInYourRecipe;
                let totalCdbResult=cdbResult2/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==3){

                let tchResult3 = mgToTch12 / 2;
                let cdbResult3 = mgToCbd12 / 2;
                document.getElementById("tchResult").innerHTML = toComma(tchResult3);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult3);
                let totalThcResult=tchResult3/servingsInYourRecipe;
                let totalCdbResult=cdbResult3/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
         
            }
            else if (tablespoonsOfOilInYourRecipe==4){

                let tchResult4 = mgToTch12 / 1;
                let cdbResult4 = mgToCbd12 / 1;
                document.getElementById("tchResult").innerHTML = toComma(tchResult4);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult4);

                let totalThcResult=tchResult4/servingsInYourRecipe;
                let totalCdbResult=cdbResult4/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==5){

                let tchResult5 = mgToTch12 / 0.5;
                let cdbResult5 = mgToCbd12 / 0.5;
                document.getElementById("tchResult").innerHTML = toComma(tchResult5);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult5);
                
                let totalThcResult=tchResult5/servingsInYourRecipe;
                let totalCdbResult=cdbResult5/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==6){  
            let tchResult6 = mgToTch12 / 0.3333;
            let cdbResult6 = mgToCbd12 / 0.3333;
            document.getElementById("tchResult").innerHTML = toComma(tchResult6);
            document.getElementById("cdbResult").innerHTML = toComma(cdbResult6);

            let totalThcResult=tchResult6/servingsInYourRecipe;
            let totalCdbResult=cdbResult6/servingsInYourRecipe;
            document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
            document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==7){
                
                let tchResult7 = mgToTch12 / 0.25;
                let cdbResult7 = mgToCbd12 / 0.25;
                document.getElementById("tchResult").innerHTML = toComma(tchResult7);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult7);

                let totalThcResult=tchResult7/servingsInYourRecipe;
                let totalCdbResult=cdbResult7/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==8){
                
                let tchResult8 = mgToTch12 / 0.12;
                let cdbResult8 = mgToCbd12 / 0.12;
                document.getElementById("tchResult").innerHTML = toComma(tchResult8);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult8);

                let totalThcResult=tchResult8/servingsInYourRecipe;
                let totalCdbResult=cdbResult8/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==9){
                let tchResult9 = mgToTch12 / 0.06;
                let cdbResult9 = mgToCbd12 / 0.06;
                document.getElementById("tchResult").innerHTML = toComma(tchResult9);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult9);

                let totalThcResult=tchResult9/servingsInYourRecipe;
                let totalCdbResult=cdbResult9/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==10){
                
                let tchResult10 = mgToTch12 / 0.04;
                let cdbResult10 = mgToCbd12 / 0.04;
                document.getElementById("tchResult").innerHTML = toComma(tchResult10);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult10);
                
                let totalThcResult=tchResult10/servingsInYourRecipe;
                let totalCdbResult=cdbResult10/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            
            }
            else if (tablespoonsOfOilInYourRecipe==11){
                
                let tchResult11 = mgToTch12 / 0.03;
                let cdbResult11 = mgToCbd12 / 0.03;
                document.getElementById("tchResult").innerHTML = toComma(tchResult11);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult11);

                let totalThcResult=tchResult11/servingsInYourRecipe;
                let totalCdbResult=cdbResult11/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }


        break;
        case "13":
            let mgToTch13 = mgToTch / 142;
            let mgToCbd13 = mgToCbd / 142;
            document.getElementById("totalMgToThc").innerHTML = toComma(mgToTch13);
            document.getElementById("totalMgToCbd").innerHTML = toComma(mgToCbd13);

            if(tablespoonsOfOilInYourRecipe==1){
                let tchResult = mgToTch13 / 4;
                let cdbResult = mgToCbd13 / 4;
                document.getElementById("tchResult").innerHTML = toComma(tchResult);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult);
                let totalThcResult=tchResult/servingsInYourRecipe;
                let totalCdbResult=cdbResult/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);

            }
            else if (tablespoonsOfOilInYourRecipe==2){

                let tchResult2 = mgToTch13 / 3;
                let cdbResult2 = mgToCbd13 / 3;
                document.getElementById("tchResult").innerHTML = toComma(tchResult2);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult2);
                let totalThcResult=tchResult2/servingsInYourRecipe;
                let totalCdbResult=cdbResult2/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==3){

                let tchResult3 = mgToTch13 / 2;
                let cdbResult3 = mgToCbd13 / 2;
                document.getElementById("tchResult").innerHTML = toComma(tchResult3);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult3);
                let totalThcResult=tchResult3/servingsInYourRecipe;
                let totalCdbResult=cdbResult3/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
         
            }
            else if (tablespoonsOfOilInYourRecipe==4){

                let tchResult4 = mgToTch13 / 1;
                let cdbResult4 = mgToCbd13 / 1;
                document.getElementById("tchResult").innerHTML = toComma(tchResult4);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult4);

                let totalThcResult=tchResult4/servingsInYourRecipe;
                let totalCdbResult=cdbResult4/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==5){

                let tchResult5 = mgToTch13 / 0.5;
                let cdbResult5 = mgToCbd13 / 0.5;
                document.getElementById("tchResult").innerHTML = toComma(tchResult5);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult5);
                
                let totalThcResult=tchResult5/servingsInYourRecipe;
                let totalCdbResult=cdbResult5/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==6){  
            let tchResult6 = mgToTch13 / 0.3333;
            let cdbResult6 = mgToCbd13 / 0.3333;
            document.getElementById("tchResult").innerHTML = toComma(tchResult6);
            document.getElementById("cdbResult").innerHTML = toComma(cdbResult6);

            let totalThcResult=tchResult6/servingsInYourRecipe;
            let totalCdbResult=cdbResult6/servingsInYourRecipe;
            document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
            document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==7){
                
                let tchResult7 = mgToTch13 / 0.25;
                let cdbResult7 = mgToCbd13 / 0.25;
                document.getElementById("tchResult").innerHTML = toComma(tchResult7);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult7);

                let totalThcResult=tchResult7/servingsInYourRecipe;
                let totalCdbResult=cdbResult7/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==8){
                
                let tchResult8 = mgToTch13 / 0.12;
                let cdbResult8 = mgToCbd13 / 0.12;
                document.getElementById("tchResult").innerHTML = toComma(tchResult8);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult8);

                let totalThcResult=tchResult8/servingsInYourRecipe;
                let totalCdbResult=cdbResult8/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==9){
                let tchResult9 = mgToTch13 / 0.06;
                let cdbResult9 = mgToCbd13 / 0.06;
                document.getElementById("tchResult").innerHTML = toComma(tchResult9);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult9);

                let totalThcResult=tchResult9/servingsInYourRecipe;
                let totalCdbResult=cdbResult9/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==10){
                
                let tchResult10 = mgToTch13 / 0.04;
                let cdbResult10 = mgToCbd13 / 0.04;
                document.getElementById("tchResult").innerHTML = toComma(tchResult10);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult10);
                
                let totalThcResult=tchResult10/servingsInYourRecipe;
                let totalCdbResult=cdbResult10/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            
            }
            else if (tablespoonsOfOilInYourRecipe==11){
                
                let tchResult11 = mgToTch13 / 0.03;
                let cdbResult11 = mgToCbd13 / 0.03;
                document.getElementById("tchResult").innerHTML = toComma(tchResult11);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult11);

                let totalThcResult=tchResult11/servingsInYourRecipe;
                let totalCdbResult=cdbResult11/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }


        break;
        case "14":
            let mgToTch14 = mgToTch / 165;
            let mgToCbd14 = mgToCbd / 165;
            document.getElementById("totalMgToThc").innerHTML = toComma(mgToTch14);
            document.getElementById("totalMgToCbd").innerHTML = toComma(mgToCbd14);


            if(tablespoonsOfOilInYourRecipe==1){
                let tchResult = mgToTch14 / 4;
                let cdbResult = mgToCbd14 / 4;
                document.getElementById("tchResult").innerHTML = toComma(tchResult);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult);
                let totalThcResult=tchResult/servingsInYourRecipe;
                let totalCdbResult=cdbResult/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);

            }
            else if (tablespoonsOfOilInYourRecipe==2){

                let tchResult2 = mgToTch14 / 3;
                let cdbResult2 = mgToCbd14 / 3;
                document.getElementById("tchResult").innerHTML = toComma(tchResult2);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult2);
                let totalThcResult=tchResult2/servingsInYourRecipe;
                let totalCdbResult=cdbResult2/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==3){

                let tchResult3 = mgToTch14 / 2;
                let cdbResult3 = mgToCbd14 / 2;
                document.getElementById("tchResult").innerHTML = toComma(tchResult3);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult3);
                let totalThcResult=tchResult3/servingsInYourRecipe;
                let totalCdbResult=cdbResult3/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
         
            }
            else if (tablespoonsOfOilInYourRecipe==4){

                let tchResult4 = mgToTch14 / 1;
                let cdbResult4 = mgToCbd14 / 1;
                document.getElementById("tchResult").innerHTML = toComma(tchResult4);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult4);

                let totalThcResult=tchResult4/servingsInYourRecipe;
                let totalCdbResult=cdbResult4/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==5){

                let tchResult5 = mgToTch14 / 0.5;
                let cdbResult5 = mgToCbd14 / 0.5;
                document.getElementById("tchResult").innerHTML = toComma(tchResult5);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult5);
                
                let totalThcResult=tchResult5/servingsInYourRecipe;
                let totalCdbResult=cdbResult5/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==6){  
            let tchResult6 = mgToTch14 / 0.3333;
            let cdbResult6 = mgToCbd14 / 0.3333;
            document.getElementById("tchResult").innerHTML = toComma(tchResult6);
            document.getElementById("cdbResult").innerHTML = toComma(cdbResult6);

            let totalThcResult=tchResult6/servingsInYourRecipe;
            let totalCdbResult=cdbResult6/servingsInYourRecipe;
            document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
            document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==7){
                
                let tchResult7 = mgToTch14 / 0.25;
                let cdbResult7 = mgToCbd14 / 0.25;
                document.getElementById("tchResult").innerHTML = toComma(tchResult7);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult7);

                let totalThcResult=tchResult7/servingsInYourRecipe;
                let totalCdbResult=cdbResult7/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==8){
                
                let tchResult8 = mgToTch14 / 0.12;
                let cdbResult8 = mgToCbd14 / 0.12;
                document.getElementById("tchResult").innerHTML = toComma(tchResult8);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult8);

                let totalThcResult=tchResult8/servingsInYourRecipe;
                let totalCdbResult=cdbResult8/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==9){
                let tchResult9 = mgToTch14 / 0.06;
                let cdbResult9 = mgToCbd14 / 0.06;
                document.getElementById("tchResult").innerHTML = toComma(tchResult9);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult9);

                let totalThcResult=tchResult9/servingsInYourRecipe;
                let totalCdbResult=cdbResult9/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }
            else if (tablespoonsOfOilInYourRecipe==10){
                
                let tchResult10 = mgToTch14 / 0.04;
                let cdbResult10 = mgToCbd14 / 0.04;
                document.getElementById("tchResult").innerHTML = toComma(tchResult10);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult10);
                
                let totalThcResult=tchResult10/servingsInYourRecipe;
                let totalCdbResult=cdbResult10/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            
            }
            else if (tablespoonsOfOilInYourRecipe==11){
                
                let tchResult11 = mgToTch14 / 0.03;
                let cdbResult11 = mgToCbd14 / 0.03;
                document.getElementById("tchResult").innerHTML = toComma(tchResult11);
                document.getElementById("cdbResult").innerHTML = toComma(cdbResult11);

                let totalThcResult=tchResult11/servingsInYourRecipe;
                let totalCdbResult=cdbResult11/servingsInYourRecipe;
                document.getElementById("totalThcResult").innerHTML=toComma(totalThcResult);
                document.getElementById("totalCdbResult").innerHTML=toComma(totalCdbResult);
            }

        break;
        
    }
}

