function dishTemplate(category, dishIMG, dishName, dishPrice, dishDescription, index){
    let locationID = category + "-section";

    document.getElementById(locationID).innerHTML += `
        <article class="dish-container">
            <section class="dishes-base">
                <div class="dish-info-1">
                    <img class="image-size" id="dish-img-" src="${dishIMG}" alt="">
                    <div class="dish-info-2">
                        <h2 class="dishes-text-size" id="dish-name-">${dishName}</h2>
                        <span id="dish-description-">${dishDescription}</span>
                    </div>
                </div>
                <div class="dish-info-3">
                    <p class="font-dish-price" id="dish-price-">${dishPrice} €</p>
                    <button class="button-add-dish" id="add-dish-${category}${index}" onclick="addDish()">Add to basket</button>
                </div>
            </section>
        </article>
    `;
}