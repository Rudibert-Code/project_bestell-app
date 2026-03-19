let toggled = false;

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
            let dishName = String(myDishes[i].Dish[index].Name);
            let dishPrice = Number(myDishes[i].Dish[index].Price);
            let fixedPrice = dishPrice.toFixed(2);
            let dishDescription = myDishes[i].Dish[index].Details;
            dishTemplate(category, dishIMG, dishName, fixedPrice, dishDescription, index, i);
        }
    }
}

function addToCart(listI, listDishIndex, dishPrice){
    let dishName = myDishes[listI].Dish[listDishIndex].Name;
    let dishIndex = orderName.indexOf(dishName);
    if (dishIndex == -1) {
        orderName.push(dishName);
        orderPrice.push(dishPrice);
        orderAmount.push(1);
    } else{
        let currentPrice = orderPrice[dishIndex];
        let addedPrice = currentPrice + dishPrice;
        let fixedPrice = Number(addedPrice.toFixed(2));
        orderPrice.splice(dishIndex, 1, fixedPrice);
        orderAmount[dishIndex]++
    }
    rednerCart();
}

function rednerCart(){
    document.getElementById('shopping-cart').innerHTML = "";
    if (toggled == true) {
        toggled = false;
        toggleCart();        
    }
    if (orderAmount.length > 0) {
        for (let i = 0; i < orderAmount.length; i++) {
            let dishName = orderName[i];
            let dishPrice = orderPrice[i];
            let dishAmount = orderAmount[i];
            cartTemplate(dishName, dishPrice, dishAmount, i);
        }
    } else{
        toggled = true;
        toggleCart();
    }
    calculateFinalPrice();
}

function toggleCart(){
    document.getElementById('cart-no-orders').classList.toggle("cart-hide");
    document.getElementById('cart-price-calculator').classList.toggle("cart-hide");
    document.getElementById('cart-button').classList.toggle("cart-hide");
}

function calculateFinalPrice(){
    let subTotal = 0;
    let finalPrice;
    for (let i = 0; i < orderAmount.length; i++) {
        let dishPrice = Number(orderPrice[i]);
        let addedPrice = subTotal + dishPrice; 
        subTotal = addedPrice;
        finalPrice = Number(addedPrice.toFixed(2));
    }
    document.getElementById('cart-subtotal').innerHTML = finalPrice;
    document.getElementById('cart-total').innerHTML = finalPrice + 5;
}

function removeOrder(n){
    let preAmount = orderAmount[n];
    orderAmount[n]-- 
    let newAmount = orderAmount[n];
    let currentPrice = orderPrice[n];
    let calcPrice = currentPrice / preAmount;
    let result = calcPrice * newAmount;
    orderPrice.splice(n, 1, result);
    rednerCart();
}

function addOrder(n){
    let preAmount = orderAmount[n];
    orderAmount[n]++ 
    let newAmount = orderAmount[n];
    let currentPrice = orderPrice[n];
    let calcPrice = currentPrice / preAmount;
    let result = calcPrice * newAmount;
    orderPrice.splice(n, 1, result);
    rednerCart();
}

function deleteOrder(n){
    orderName.splice(n, 1);
    orderPrice.splice(n, 1);
    orderAmount.splice(n, 1);
    rednerCart();
}
