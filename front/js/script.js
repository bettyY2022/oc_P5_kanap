// ********************************************************************************************************* //
// manipuler l'API
let kanap = []; // => variable de type tableau de produits canapés

// ********************************************************************************************************* //
// insérer les produits dans la page d'accueil
fetch("http://localhost:3000/api/products") // => fonction fetch pour récupérer les données d'API
    .then((res) => res.json()) //=> réponse pour récupération du fichier JSON 
    .then(products => {

        for (let kanap of products) { // => afficher les données d'une API 
            // => la variable represente un produit d'un canapé de la liste des 8 canapés, puis le 2eme, puis le 3eme... en boucle. 
            // => insertion de l'élément article dans le HTML
            document.querySelector(".items").innerHTML += `<a href="./product.html?id=${kanap._id}">
                                                                <article>
                                                                <img src="${kanap.imageUrl}" alt="Lorem ipsum dolor sit amet, Kanap name1">
                                                                <h3 class="productName">${kanap.name}</h3>
                                                                <p class="productDescription">${kanap.description}</p>
                                                                </article>
                                                            </a>`
        }
        // ********************************************************************************************************* //
        //faire lien entre un produit de page d'accueil et la page produit
        let boutons = document.querySelectorAll(".limitedWidthBlockContainer");
        console.log(boutons);

        boutons.forEach((bouton) =>
            bouton.addEventListener("click", () => {
                console.log(bouton);

            }),
        );
    });
