function init(){
    renderDishes();
    rednerCart();
}

function renderDishes(){
    for (let i = 0; i < myDishes.length; i++) {
        let category = myDishes[i].Category;
        let categoryLength = myDishes[i].Dish.length;
        
        for (let index = 0; index < categoryLength; index++) {
            let dishIMG = myDishes[i].Dish[index].Image;
            let dishName = myDishes[i].Dish[index].Name;
            let dishPrice = myDishes[i].Dish[index].Price;
            let fixedPrice = dishPrice.toFixed(2);
            let dishDescription = myDishes[i].Dish[index].Details;

            dishTemplate(category, dishIMG, dishName, fixedPrice, dishDescription, index);
        }
    }
}

 function rednerCart(){
    if (orderAmount.length > 0) {
        for (let i = 0; i < orderAmount.length; i++) {
            let dishName = orderName[i];
            let dishPrice = orderPrice[i];
            let dishAmount = orderAmount[i];

            cartTemplate(dishName, dishPrice, dishAmount);
        }   
    }
 }

function addDish(dishName, dishPrice){
    let dishIndex = getMenuIndex(dishName);
    if (dishIndex == -1) {
        orderName.push(dishName);
        orderPrice.push(dishPrice);
        orderAmount.push(1);
    } else{
        let currentPrice = orderPrice[dishIndex];
        let fixedPrice = Number(currentPrice + dishPrice); 
        orderPrice.slice(dishIndex, 1, fixedPrice);
        orderAmount++
    }
}

orderName.findIndex(getMenuIndex);

function getMenuIndex(dishName){
    let dishIndex = orderName.indexOf(dishName);
    return dishIndex;
}