let boughtCandyPrices=[];

function addCandy(candyType, Weight){
    let price=0;
    if (candyType=="Sweet") {
        price=Weight*0.5;
    }else if (candyType=="Toffee") {
        price=Weight*1.1;
    } else if (candyType=="Chewing-gun") {
        price=weight*0.03;
    }         
    else if (candyType=="Chocolate") {
        price=Weight*0.7;
    } 
    boughtCandyPrices.push(price);
}

let amountToSpend= Math.random()*50;

addCandy("Sweet",520);

function canBuyMoreCandy(){
    let totalPrice=0;
    for (let i = 0; i < boughtCandyPrices.length; i++) {
        totalPrice= totalPrice+boughtCandyPrices[i];        
    }
    if (totalPrice<amountToSpend) {
        console.log("You can but more");
    }
    else{
        console.log("Sorry, It's enought for you");
    }
    console.log(totalPrice);

}
canBuyMoreCandy();
console.log(amountToSpend);
