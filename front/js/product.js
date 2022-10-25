//=> redirection de la page produits à la page d'un produit via son id
let productId = new URL(window.location.href).searchParams.get("id"); //  récupération d'id avec les paramétres de l'url

//=> on récupère les infos du back-end depuis l'API avec la méthode fetch
fetch("http://localhost:3000/api/products/" + productId)
  .then((res) => res.json())
  .then((product) => showProduct(product));


  //récupèration des clés en variables des fonctions
  function showProduct(produit) {
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


   
if (productId !=null){
    let itemPrice = 0
    let imageUrl, altTxt
}
const button = document.querySelector("#addToCart")
button.addEventListener("click", handleClick)
       
function handleClick() {
    const color = document.querySelector("#colors").value 
    const quantity = document.querySelector("#quantity").value

    if (IsOrderInValid(color, quantity)) return
    saveOrder(color, quantity)
    redirectToPanier()
}

function saveOrder(color, quantity) {     
    const newProduct = {
    id: productId,
    color: color,
    quantity: Number(quantity),
    price: itemPrice,

 }
 console.log(newProduct);
 localStorage.setItem(productId, JSON.stringify(productId));
}

function IsOrderInValid (color, quantity) {
    if (color == null || color === "" || quantity == null ||quantity == 0){
        alert ("Veuillez sélectionner une couleur et une quantité SVP!")
        return true 
     }
}

function redirectToPanier() {
    window.location.href ="cart.html"
}



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