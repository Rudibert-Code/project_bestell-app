function dishTemplate(category, dishIMG, dishName, dishPrice, dishDescription, index, i){
    let locationID = category + "-section";
    document.getElementById(locationID).innerHTML += `
        <article class="dish-container">
            <section class="dishes-base">
                <div class="dish-info-1">
                    <img class="image-size" id="dish-img-" src="${dishIMG}" alt="">
                    <div class="dish-info-2">
                        <h2 class="dishes-text-size font-title" id="dish-name-">${dishName}</h2>
                        <span class="font-text" id="dish-description-">${dishDescription}</span>
                    </div>
                </div>
                <div class="dish-info-3">
                    <p class="font-dish-price font-text" id="dish-price-">${dishPrice} €</p>
                    <button class="button-add-dish font-text" id="add-dish-${i}${index}" onclick="addToCart(${i},${index},${dishPrice})">Add to basket</button>
                </div>
            </section>
        </article>
    `;
}

function cartTemplate(dishName, dishPrice, dishAmount, dishIndex){
    document.getElementById('shopping-cart').innerHTML += `
        <section class="cart-box" id="order-${dishIndex}">
            <div class="cart-box-positions">
                <h3 class="cart-infos font-title" id="cart-dish-name">${dishAmount}x ${dishName}</h3>
                <img class="clickable" src="./assets/icon/delete.png" onclick="deleteOrder(${dishIndex})" alt="">
            </div>
            <div class="cart-box-positions">
                <div class="cart-box-order">
                    <a class="clickable font-text" onclick="removeOrder(${dishIndex})">-  </a>
                    <p class="font-text">${dishAmount}</p>
                    <a class="clickable font-text" onclick="addOrder(${dishIndex})">  +</a>
                </div>
                <p class="font-text" id="card-dish-price">${dishPrice}€</p>
            </div>
        </section>
    `; 
}