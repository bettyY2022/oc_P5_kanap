let kanap = [];



fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then(promise => {

        for (let kanap of promise) {
            document.querySelector(".items").innerHTML += `<a href="./product.html?id=${kanap._id}">
    <article>
      <img src="${kanap.imageUrl}" alt="Lorem ipsum dolor sit amet, Kanap name1">
      <h3 class="productName">${kanap.name}</h3>
      <p class="productDescription">${kanap.description}</p>
    </article>
  </a>`
        }

        let boutons = document.querySelectorAll(".limitedWidthBlockContainer");
        console.log(boutons);

        boutons.forEach((bouton) =>
            bouton.addEventListener("click", () => {
                console.log(bouton);

                window.location = `produit.html?${bouton.id}`

            }),
        );
    });




// const fetchkanap = async () => {
//     await fetch("http://localhost:3000/api/products")
//         .then((res) => res.json())
//         .then((promise) => {
//             kanap = promise;
//             console.log(kanap);
//         });
// };

// const afficherKanap = async () => {
//     await fetchkanap();
//     for(let kanap of afficherKanap)
//     document.querySelector(".items").innerHTML += `<a href="./product.html?id=${kanap._id}">
//     <article>
//       <img src="${kanap.imageUrl}" alt="Lorem ipsum dolor sit amet, Kanap name1">
//       <h3 class="productName">${kanap.name}</h3>
//       <p class="productDescription">${kanap.description}</p>
//     </article>
//   </a>`
// };

// afficherKanap();





    // let tab = [0, 1, 2, 3, 4, 5, 6, 7];
    // let section = document.getElementById("items");
    // for (let i = 0; i < tab.length; i++) {
    //     let image = document.createElement('img');
    //     image.src = `${kanap[i].imageUrl}`;
    //     image.alt = `${tab[i].imageUrl}`;
    //     let article = document.createElement('article');
    //     article.appendChild(image);
    //     let link = document.createElement('a')
    //     link.href = "./product.html?id=42";
    //     link.appendChild(article);
    //     section.appendChild(link);
    //     let title = document.createElement('h3');
    //     title.name = `classe="productName" ${kanap[i].name}`;
    //     let paragraphe = document.createElement('p');
    //     paragraphe.description = `classe="productDescription" ${kanap[i].description}`;
    // }




    // document.getElementById("items").innerHTML = ` <img classe="items" src="${kanap[0].imageUrl}" alt="Lorem ipsum dolor sit amet, Kanap name1"></img>`
/*<a href="./product.html?id=42">
    <article>
        <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
        <h3 class="productName">Kanap name1</h3>
        <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
    </article>
</a>*/



// const afficherKanap = async () => {
//     await fetch("");

//     document.getElementById("items").innerHTML = kanap.map(
//         (items) => `
//     <a href="./product.html?id=42">
//         <section id="items${items._id}" class="items">
//             <img src="${items.imageUrl}" alt="Lorem ipsum dolor sit amet, Kanap name1${canape.name}"></img>
//             <h3 class="productName">${items.name}</h3>
//             <p class="productDescription">${items.description}Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
//         </section>
//     </a>
    // `)
    // //     `<a href="./product.html?id=42">
    //     <article>
    //         <img src=".../product01.jpg" src ="${items.imageUrl}" alt="Lorem ipsum dolor sit amet, Kanap name1">
    //         <h3 class="productName">src ="${items.productName}Kanap name1</h3>
    //         <p class="productDescription">src ="${items.productDescription}"Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
    //     </article>
    // </a>`
// };
