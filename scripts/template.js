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
                    <button class="button-add-dish" id="add-dish-${category}${index}" onclick="addDish(${dishName},${dishPrice})">Add to basket</button>
                </div>
            </section>
        </article>
    `;
}

function cartTemplate(dishName, dishPrice){
    document.getElementById('shopping-cart').innerHTML += `
        <section class="cart-box" id="cart-">
                <h3 class="cart-infos" id="cart-dish-name">1x Dishe Name</h3>
            <div class="cart-box-positions">
                <a href="#" onclick="removeOrder()"><img src="" alt=""></a>
                <p id="card-dish-price">10.50</p>
            </div>
        </section>
    `; 
}