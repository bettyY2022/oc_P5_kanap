// ********************************************************************************************************* //
// récupérer l'id du produit à afficher

//=> redirection de la page produits à la page d'un produit via son id
let productId = new URL(window.location.href).searchParams.get("id"); // => récupération d'id avec les paramétres de l'url

//=> on récupère les infos du back-end depuis l'API avec la méthode fetch
fetch("http://localhost:3000/api/products/" + productId)
  .then((res) => res.json())
  .then((product) => showProduct(product));

// ********************************************************************************************************* //
// insérer un produit et ses détails dans la page produit 
  
  function showProduct(produit) { // => récupèration des clés en variables des fonctions
    const { imageUrl, altTxt, name, price, description, colors } = produit;
    itemPrice = price
    setImage(imageUrl, altTxt);
    setTitle(name);
    setPrice(price);
    setDescription(description);
    setColors(colors);
  }
//=> des fonctions pour récupèrer les informations et les afficher par la suite
  function setImage(imageUrl, altTxt) {
    let image = document.querySelector(".item__img");
    image.innerHTML = `<img src=${imageUrl}  alt=${altTxt} />`;
  }

  function setTitle(name) {
    let nameProduct = document.querySelector("#title");
    nameProduct.innerHTML = `<h1 id="title">${name}</h1>`;
  }

  function setPrice(price) {
    let priceArticle = document.querySelector("#price");
    priceArticle.innerHTML = `<span id="price">${price}</span>`;
  }

  function setDescription(description) {
    let descriptionArticle = document.querySelector("#description");
    descriptionArticle.innerHTML = `<p id="description">${description}</p>`;
  }

  function setColors(colors) {
    let select = document.querySelector("#colors");
    colors.forEach((color) => {
      select.insertAdjacentHTML(
        "beforeend",
        `<option value="${color}">${color}</option>`
      );
    });
  }

// ********************************************************************************************************* //
  //  ajouter des produits dans le panier

//=> on envoie les produits sélectionnés au Localstorage au clic du bouton

let button = document.querySelector("#addToCart");
button.addEventListener("click", () => {
  let color = document.querySelector("#colors").value; //=> récupèration de la couleur sélectionnée par l'utilisateur
  console.log(color);
  let productsCart = JSON.parse(localStorage.getItem("productsCart")) || []; //=> recup du panier dans localstorage encore vide (tableau)
  console.log(productsCart);
  let quantity = document.querySelector("#quantity").value; //=> récupèration de la quantité sélectionnée par l'utilisateur
  console.log(quantity);
  
  if (!color || !quantity  ){//=> conditions avec fenêtre alert
    alert("Veuillez sélectionner une couleur et une quantité SVP!"); 
  } else {
    //=>création nouveau produit avec les 3 références
    let newProduct = {
      id: productId,
      quantity: Number(quantity),
      color: color,
    };
    console.log(newProduct);
    if(productsCart.length > 0){
      productsCart.forEach((product, index) => {
        if(product.id == newProduct.productId && product.color == newProduct.color) {
          let totalQuantity = parseInt("found.quantity") + parseInt("quantity"); //=> valeur LS + value actuelle
          product.quantity = totalQuantity;
          console.log(totalQuantity);
          productsCart.splice(index, 1, product);
        } else {
          productsCart.push(newProduct)  
        }
      });
    } else {
      productsCart.push(newProduct)  
    }
    
    //=> enregistrer les éléments dans localstorage si il n'existe pas
      localStorage.setItem("productsCart", JSON.stringify(productsCart));
      console.log('productsCart =>', productsCart);
      window.location.href ="cart.html" // => renvoie sur la page panier du client (cart.html)
    /*//=> méthode pour chercher si un produit existe déja dans le Localstorage
    let found = produit.find(
      (element) => element.id == productId && element.color == color
    )
    console.log(found);
    if (found) { //if(foundProduct == null || foundProduct == undefined) = if(!foundProduct)
      
      let totalQuantity = parseInt("found.quantity") + parseInt("quantity"); //=> valeur LS + value actuelle
      console.log(totalQuantity);
    } else {
      produit.push(newProduct);
    }
  
    });*/
  }
});
/*if (productId !=null){
  let itemPrice = 0
  let imgUrl, altText
}*/
 
       














// function handleClick() {
//     const color = document.querySelector("#colors").value //=> récupèration de la couleur sélectionnée par l'utilisateur
//     const quantity = document.querySelector("#quantity").value //=> récupèration de la quantité sélectionnée par l'utilisateur

//     if (IsOrderInValid(color, quantity)) return
//     addToCart(color, quantity)
//     redirectToPanier()
// }

//  //=>création nouveau produit avec des propriétés et leur paramétres 
// function addToCart(color, quantity) {     
//     /*const newProduct = {
//     id: productId,
//     color: color,
//     quantity: Number(quantity),
//     price: itemPrice,
//  }*/
//  const newProduct = {
//   id: productId,
//   color: color,
//   quantity: Number(quantity)
//  }
//  /*let cart = localStorage.getItem('CART');
//  if(cart == null) {
//   cart = [];
//   cart.push(newProduct);
//  } else {
//   //tester si l'id du produit existe déjà dans le cart
//   //si oui tester s'ils possedent la même couleur
//      // si oui  alors p1.quantity = p1.quantity + newProduit.quantity
//      //sinon alors tu ajoutes newProduit dans le cart (cart.push(newProduct))
//  // sinon alors tu ajoutes newProduit dans le cart (cart.push(newProduct))
//  }
//  localStorage.set('CART', cart);*/

//  //=>création du panier dans le localstorage 
//  console.log(newProduct);
//  localStorage.setItem(productId, JSON.stringify(newProduct));
// }


// //=> conditions avec fenêtre alert
// function IsOrderInValid (color, quantity) {
//     if (color == null || color == "" || quantity == null ||quantity == 0){ 
//         alert ("Veuillez sélectionner une couleur et une quantité SVP!")
//         return true 
//      }
// }

// // => renvoie sur la page panier du client (cart.html)
// function redirectToPanier() {
//     window.location.href ="cart.html"
// }





// const produit = window.location.search.split("?").join("");
// console.log(produit);

// let produitKanap = [];

// const fetchProduit = async () => {
//     await fetch(`http://localhost:3000/api/products/${produitKanap}`)
//         .then((res) => res.json())
//         .then((promise) => {
            
//             produitKanap = promise;
//             console.log(produitKanap);
//         });
// };

// const produitDisplay = async () => {
//     await fetchProduit();

//     document.getElementsByClassName("item").innerHTML = `<div class="item__img"> <img src="${produitKanap.imageURL}" alt="Photographie d'un canapé"></img></div>
    
//     `

// }

// produitDisplay();
