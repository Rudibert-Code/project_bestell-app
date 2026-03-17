function dishTemplate(category, dishName, dishPrice, dishDescription, index){
    if (category == "Burger") {
        document.getElementById('burger-section').innerHTML += `
            <article class="dish-container" id="dish-container-a">
                <section class="dishes-base">
                    <img id="dish-img-" src="./assets/img/Rectangle 10.png" alt="">
                    <div class="dish-info">
                        <h2 class="dishes-text-size" id="dish-name-">${dishName}</h2>
                        <span id="dish-description-">${dishDescription}</span>
                    </div>
                    <div class="dish-info">
                        <p id="dish-price-">${dishPrice}€</p>
                        <button id="add-dish-${category}${index}" onclick="addDish()">...</button>
                    </div>
                </section>
            </article>
        `};
}