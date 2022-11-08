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
  console.log('productsCart avant:', productsCart);
  let quantity = document.querySelector("#quantity").value; //=> récupèration de la quantité sélectionnée par l'utilisateur
  console.log(quantity);

  if (!color || !quantity) {//=> conditions avec fenêtre alert
    alert("Veuillez sélectionner une couleur et une quantité SVP!");
  } else {
    //=>création nouveau produit avec les 3 références
    let newProduct = {
      id: productId,
      quantity: Number(quantity),
      color: color,
    };
    console.log(newProduct);
    console.log('productsCart.length :', productsCart.length);
    if (productsCart.length > 0) {
      //=> méthode pr rechercher un produit si déja existant ds localstorage
      const index = productsCart.findIndex(p => p.id === newProduct.id && p.color === newProduct.color);
      if (index > -1) {
        productsCart[index].quantity = productsCart[index].quantity + newProduct.quantity;
        console.log('productsCart updated:', productsCart);
      } else {
        productsCart.push(newProduct);
      }
    } else {
      productsCart.push(newProduct)
    }

    //=> enregistrer les éléments dans localstorage si il n'existe pas
    localStorage.setItem("productsCart", JSON.stringify(productsCart));
    console.log('productsCart =>', productsCart);
    window.location.href = "cart.html" // => renvoie sur la page panier du client (cart.html)
  }
});


