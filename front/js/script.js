// ********************************************************************************************************* //
// manipuler l'API

let kanap = []; // => variable de type tableau de produits canapés

// ********************************************************************************************************* //
// recup et insérer les produits dans la page d'accueil via l'api
function manipulateAPI() {
    fetch("http://localhost:3000/api/products") // => fonction fetch pour récupérer les données d'API
        .then((res) => res.json()) //=> réponse pour récupération du fichier JSON 
        .then(products => {

            for (let kanap of products) { // => afficher les données d'une API (parcourir la liste de produits retourné)
                // => la variable represente un produit d'un canapé de la liste des 8 canapés, puis le 2eme, puis le 3eme... en boucle. 
                // => insertion de l'élément article dans le HTML
                document.querySelector(".items").innerHTML += `<a href="./product.html?id=${kanap._id}">
                                                                <article>
                                                                <img src="${kanap.imageUrl}" alt="${kanap.altTxt}">
                                                                <h3 class="productName">${kanap.name}</h3>
                                                                <p class="productDescription">${kanap.description}</p>
                                                                </article>
                                                            </a>`
            }


        });
}
manipulateAPI();
