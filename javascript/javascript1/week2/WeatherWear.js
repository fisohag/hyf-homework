function suggestClothes(temperature) {
    if (temperature >= 20) {
        return "Shorts & T-shirt";
    }
    else if (temperature < 20 && temperature >= 15) {
        return "Jeans & Shirt";
    }
    else if (temperature < 15 && temperature >= 10) {
        return "Jeans, Shirt & Light jacket";
    }
    else if (temperature < 10 && temperature >= 0) {
        return "Jeans, Shirt & Winter jacket";
    }
    else {
        return "Jeans, Shirt, Winter jacket & extra Cloths";
    }
}
const clothesToWear = suggestClothes(10);
console.log(clothesToWear); 