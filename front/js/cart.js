// => récupération des données de localstorage 
let productsPanier = JSON.parse(localStorage.getItem("produit"));
console.log(productsPanier);

//récupération des informations des produits depuis l'API
async function getProductsApi() {
    await fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then(promise =>  {
        for (let cart of promise) {
            document.querySelector(".cart").innerHTML += `<article class="cart__item" id="${cart._id}"  data-color="${cart.color}">
            <div class="cart__item__img">
            <img src="${cart.imageUrl}" alt="${cart.altTxt}">
            </div>
            <div class="cart__item__content">
            <div class="cart__item__content__description">
            <h2>${cart.name}</h2>
            <p>${cart.colors}</p>
            <p>${cart.price},00 €</p>
            </div>
            <div class="cart__item__content__settings">
            <div class="cart__item__content__settings__quantity">
            <p>Qté :</p>
            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${cart.quantity}">
            </div>
            <div class="cart__item__content__settings__delete">
            <p class="deleteItem">Supprimer</p>
            </div>
            </div>
            </div>
            </article>`;
        }
      })
      getProductsApi();
      
      function displayProducts(products) {
       
        let totalPrice = document.getElementById("totalPrice");
        console.log(totalPrice);
        let totalQuantity = document.getElementById("totalQuantity");
        console.log(totalQuantity);
      
    
           // CALCUL DU PRIX TOTAL DES ARTICLES COMMANDES
       let products = totalPrice.price * totalQuantity.quantity;
       
     
       
      
  
    }
    displayProducts();
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
     