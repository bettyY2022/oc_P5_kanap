
// const cart = []

// recupItems()

// cart.forEach((item) => displayItem(item))

// function recupItems(){
//     const numberOfItems = localStorage.length
//     for (let i = 0; i < numberOfItems; i++) {
//         const item = localStorage.getItem(localStorage.key(i))
//         const itemObject = JSON.parse(item)
//         cart.push(itemObject)
//     }
// }

// function displayItem(item){

// }

let productsPanier = JSON.parse(localStorage.getItem("produits"));
if(productsPanier){
  productsPanier.sort(( a, b ) => a.id.localeCompare(b.id));
}
console.log(productsPanier);