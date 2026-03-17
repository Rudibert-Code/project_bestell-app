function init(){
    renderDishes();
}

function renderDishes(){
    for (let i = 0; i < myDishes.length; i++) {
        let category = myDishes[i].Category;
        let categoryLength = myDishes[i].Dish.length;
        
        for (let index = 0; index < categoryLength; index++) {
            let dishIMG = myDishes[i].Dish[index].Image;
            let dishName = myDishes[i].Dish[index].Name;
            let dishPrice = myDishes[i].Dish[index].Price;
            let dishDescription = myDishes[i].Dish[index].Details;

            dishTemplate(category, dishIMG, dishName, dishPrice, dishDescription, index);
        }
    }
}
