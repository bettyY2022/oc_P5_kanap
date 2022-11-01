// => récupération des données de localstorage 
let productsPanier = JSON.parse(localStorage.getItem("productsCart"));
console.log(productsPanier);
document.querySelector("#totalQuantity").textContent = '0'
document.querySelector("#totalPrice").textContent = '0'
 productsPanier.forEach(async (product) => {
    await fetch("http://localhost:3000/api/products/" + product.id)
    .then((res) => res.json())
    .then(cart =>  {
        let totalQuantity = parseInt(document.querySelector("#totalQuantity").textContent);
        totalQuantity = totalQuantity + product.quantity;
        let totalPrice = parseInt(document.querySelector("#totalPrice").textContent);
        totalPrice = totalPrice + cart.price*product.quantity;
        document.querySelector("#cart__items").innerHTML += `<article class="cart__item" id="${cart._id}"  data-color="${cart.color}">
        <div class="cart__item__img">
        <img src="${cart.imageUrl}" alt="${cart.altTxt}">
        </div>
        <div class="cart__item__content">
        <div class="cart__item__content__description">
        <h2>${cart.name}</h2>
        <p>${product.color}</p>
        <p>${cart.price},00 €</p>
        </div>
        <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
        <p>Qté :</p>
        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${product.quantity}">
        </div>
        <div class="cart__item__content__settings__delete">
        <p class="deleteItem">Supprimer</p>
        </div>
        </div>
        </div>
        </article>`;
        document.querySelector("#totalQuantity").textContent = totalQuantity;
        document.querySelector("#totalPrice").textContent = totalPrice;
    })
})

//displayProducts(productsPanier)
//récupération des informations des produits depuis l'API
// async function getProductsApi(productId) {
   
// }

function displayProducts(productsPanier){
    let total = 0;
    const totalQuantity = document.querySelector("#totalQuantity");
    //totalQuantity.textContent = parseInt(cart.quantity)
    const totalPrice = document.querySelector("#totalPrice");
    //totalPrice.textContent = cart.price
    totalQuantity.textContent = productsPanier.forEach(cart => {
        const totalUnitPrice = cart.price * cart.quantity
        total = total + totalUnitPrice
        return total;
    });
console.log(total); 
}






    













// // récupèration des items depuis localstorage
// const cart = localStorage.get('cart');
// if(cart) {

// }
// showCart(cart) {
//     for (let cart of promise) {
//         document.querySelector(".cart").innerHTML += `<article class="cart__item" id="${cart._id}"  data-color="${cart.color}">
//         <div class="cart__item__img">
//         <img src="${cart.imageUrl}" alt="${cart.altTxt}">
//         </div>
//         <div class="cart__item__content">
//         <div class="cart__item__content__description">
//         <h2>${cart.name}</h2>
//         <p>${cart.colors}</p>
//         <p>${cart.price},00 €</p>
//         </div>
//         <div class="cart__item__content__settings">
//         <div class="cart__item__content__settings__quantity">
//         <p>Qté :</p>
//         <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${cart.quantity}">
//         </div>
//         <div class="cart__item__content__settings__delete">
//         <p class="deleteItem">Supprimer</p>
//         </div>
//         </div>
//         </div>
//         </article>`;
//     }
// }
// showTotalPrice(){

// }
// calculateTotalPrice(cart) {
//     let total = 0;
//  for(let p of cart) {
//     // faire une fetch avec id produit
//     total += produit.price*p.quantity
//  }
//  return total;
// }
// const numberOfItems = localStorage.length
// console.log(numberOfItems);
// const cart = [];

// // récupèration du liste des produits séléctionnés par l'utilisateur
// for (let i=0; i< numberOfItems; i++){
//     const item = localStorage.getItem(localStorage.key(i))
//     const itemObject = JSON.parse(item)
//     cart.push(itemObject)
// }
// console.log(cart);

// // récupèration des élements depuis le DOM

// fetch("http://localhost:3000/api/products")
//       .then((res) => res.json())
//       .then(promise => {
        
//         for (let cart of promise) {
//             document.querySelector(".cart").innerHTML += `<article class="cart__item" id="${cart._id}"  data-color="${cart.color}">
//             <div class="cart__item__img">
//             <img src="${cart.imageUrl}" alt="${cart.altTxt}">
//             </div>
//             <div class="cart__item__content">
//             <div class="cart__item__content__description">
//             <h2>${cart.name}</h2>
//             <p>${cart.colors}</p>
//             <p>${cart.price},00 €</p>
//             </div>
//             <div class="cart__item__content__settings">
//             <div class="cart__item__content__settings__quantity">
//             <p>Qté :</p>
//             <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${cart.quantity}">
//             </div>
//             <div class="cart__item__content__settings__delete">
//             <p class="deleteItem">Supprimer</p>
//             </div>
//             </div>
//             </div>
//             </article>`;
//         }
//       });
     