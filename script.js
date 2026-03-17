function init(){
    renderDishes();
}

function renderDishes(){
    for (let i = 0; i < myDishes.length; i++) {
        let category = myDishes[i].Dish;
        let categoryLength = myDishes[i].Dish.length;
        
        for (let index = 0; index < categoryLength; index++) {
            let dishName = myDishes[i].Dish[index].Name;
            let dishPrice = myDishes[i].Dish[index].Price;
            let dishDescription = myDishes[i].Dish[index].Details;

            dishTemplate(category, dishName, dishPrice, dishDescription, index);
        }
    }
}
