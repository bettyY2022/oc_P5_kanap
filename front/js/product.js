let productId = new URL(window.location.href).searchParams.get("id");

fetch("http://localhost:3000/api/products/" + productId)
  .then((res) => res.json())
  .then((product) => showProduct(product));

 /**
  * Afficher les données d'un produit
  * 
  * @param produit - objet contenant les information d'un produit
  */
  function showProduct(produit) {
    const { imageUrl, altTxt, name, price, description, colors } = produit;

    setImage(imageUrl, altTxt);
    getTitle(name);
    getPrice(price);
    getDescription(description);
    getColors(colors);
  }

  function setImage(imageUrl, altTxt) {
    let image = document.querySelector(".item__img");
    image.innerHTML = `<img src=${imageUrl}  alt=${altTxt} />`;
  }

  function getTitle(name) {
    let title = document.querySelector("title");
    title.innerHTML = name;
    let nameProduct = document.getElementById("title");
    //nameProduct.innerHTML = `<h1 id="title">${name}</h1>`;
    nameProduct.textContent = name;
  }

  function getPrice(price) {
    let priceArticle = document.querySelector("#price");
    priceArticle.innerHTML = `<span id="price">${price}</span>`;
  }

  function getDescription(description) {
    let descriptionArticle = document.querySelector("#description");
    descriptionArticle.innerHTML = `<p id="description">${description}</p>`;
  }

  function getColors(colors) {
    let colorSelect = document.getElementById("colors");
    for(let i=0; i< colors.length; i++) {
        const colorOption = `<option>`

    }
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