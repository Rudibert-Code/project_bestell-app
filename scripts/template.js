function dishTemplate(category, dishIMG, dishName, dishPrice, dishDescription, index){
    let locationID = category + "-section";

    document.getElementById(locationID).innerHTML += `
        <article class="dish-container" id="dish-container-a">
            <section class="dishes-base">
                <img id="dish-img-" src="${dishIMG}" alt="">
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
    `;
}