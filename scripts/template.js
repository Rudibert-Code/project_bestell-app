function dishTemplate(category, dishIMG, dishName, dishPrice, dishDescription, index, i){
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
                    <button class="button-add-dish" id="add-dish-${category}${index}" onclick="addToCart(${i},${index},${dishPrice})">Add to basket</button>
                </div>
            </section>
        </article>
    `;
}

function cartTemplate(dishName, dishPrice, dishAmount){
    document.getElementById('shopping-cart').innerHTML = ""; 
    document.getElementById('shopping-cart').innerHTML += `
        <section class="cart-box" id="cart-">
                <h3 class="cart-infos" id="cart-dish-name">${dishAmount}x ${dishName}}</h3>
            <div class="cart-box-positions">
                <a href="#" onclick="removeOrder()"><img src="" alt=""></a>
                <p id="card-dish-price">${dishPrice}€</p>
            </div>
        </section>
    `; 
}