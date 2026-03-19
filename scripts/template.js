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

function cartTemplate(dishName, dishPrice, dishAmount, dishIndex){
    document.getElementById('shopping-cart').innerHTML += `
        <section class="cart-box" id="order-${dishIndex}">
            <div class="cart-box-positions">
                <h3 class="cart-infos" id="cart-dish-name">${dishAmount}x ${dishName}</h3>
                <a href="#"><img src="./assets/icon/delete.png" alt=""></a>
            </div>
            <div class="cart-box-positions">
                <div class="cart-box-order">
                    <a href="#" onclick="removeOrder(${dishIndex})">-  </a>
                    <p>${dishAmount}</p>
                    <a href="#" onclick="addOrder(${dishIndex})">  +</a>
                </div>
                <p id="card-dish-price">${dishPrice}€</p>
            </div>
        </section>
    `; 
}