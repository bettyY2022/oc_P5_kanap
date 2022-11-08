// => récupération des données de localstorage 
let productsPanier = JSON.parse(localStorage.getItem("productsCart"));
console.log(productsPanier);// => affiche les produits du panier

document.querySelector("#totalQuantity").textContent = '0'
document.querySelector("#totalPrice").textContent = '0'
productsPanier.forEach(async (product) => {
  await fetch("http://localhost:3000/api/products/" + product.id)// récupération des informations des produits depuis l'API
    .then((res) => res.json())
    .then(cart => {
      let totalQuantity = parseInt(document.querySelector("#totalQuantity").textContent);
      totalQuantity = totalQuantity + product.quantity;
      let totalPrice = parseInt(document.querySelector("#totalPrice").textContent);
      totalPrice = totalPrice + cart.price * product.quantity;
      document.querySelector("#cart__items").innerHTML += `<article class="cart__item" data-id="${cart._id}"  data-color="${product.color}">
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
      document.querySelector("#totalPrice").textContent = totalPrice;
    })
  document.querySelector("#totalQuantity").textContent =
    productsPanier ? productsPanier.length : 0;
})

// modification du quantité des articles 
function updateQuantity() { // fonction qui va prendre en compte le changement de la quantité
  const itemsQuantity = document.querySelectorAll(".cart__item");
  console.log("itemsQuantity", itemsQuantity);
  itemsQuantity.forEach((itemQuantity) => {
    itemQuantity.addEventListener("change", () => {
      const newQuantity = Number(itemQuantity.value);
      itemQuantity.textContent = newQuantity;
      let kanap = itemQuantity.closest("article");
      let getId = kanap.getAttribute("data-id");
      let getColor = kanap.getAttribute("data-color");
      for (let i = 0; i < productsPanier.length; i++) {
        if (getId === productsPanier.productId && getColor === productsPanier.color) {
          productsPanier.number(quantity) = newQuantity;
        }
      }
    });
  });
}
document.addEventListener('change', (event) => {
  if (!(event.target.classList.contains('itemQuantity'))) {
    return;
  }
  const id = event.target.parentElement.parentElement.parentElement.parentElement.dataset.id;
  const colorSelected = event.target.parentElement.parentElement.parentElement.parentElement.dataset.color;
  console.log(id)
  console.log(colorSelected);

  let productsPanier = JSON.parse(localStorage.getItem("productsCart"));
  console.log(productsPanier);

  const productsFoundIndex = productsPanier.findIndex((product) => product.id === id && product.color === colorSelected);
  console.log('productsFoundIndex:', productsFoundIndex);
  productsPanier[productsFoundIndex].quantity = event.target.value;
  console.log(productsPanier);
  localStorage.setItem("productsCart", JSON.stringify(productsPanier));//réinitialisation du localStorage
  window.location.reload();// => réactualise la page 
})


//suppression
document.addEventListener('click', (event) => {
  console.log('event :', event);
  if (!(event.target.classList.contains('deleteItem'))) {
    return;
  }
  const id = event.target.parentElement.parentElement.parentElement.parentElement.dataset.id;
  const colorSelected = event.target.parentElement.parentElement.parentElement.parentElement.dataset.color;
  console.log(id)
  console.log(colorSelected);

  let productsPanier = JSON.parse(localStorage.getItem("productsCart"));
  console.log(productsPanier);

  const productsFoundIndex = productsPanier.findIndex((product) => product.id === id && product.color === colorSelected);
  console.log('productsFoundIndex:', productsFoundIndex);
  productsPanier.splice(productsFoundIndex, 1);
  console.log(productsPanier);
  localStorage.setItem("productsCart", JSON.stringify(productsPanier));//réinitialisation du localStorage
  window.location.reload();
})

// Gestion du formulaire et de l'envoie vers la page confirmation
// récup l'id d'input
let first_name = document.querySelector("#firstName");
let last_name = document.querySelector("#lastName");
let address = document.querySelector("#address");
let city = document.querySelector("#city");
let e_mail = document.querySelector("#email");
let btn_order = document.querySelector("#order");

// récup l'id des P pour afficher les messages 
let first_name_error = document.querySelector("#firstNameErrorMsg");
let last_name_error = document.querySelector("#lastNameErrorMsg");
let address_error = document.querySelector("#addressErrorMsg");
let city_error = document.querySelector("#cityErrorMsg");
let e_mail_error = document.querySelector("#emailErrorMsg");

// Champs demandés pour le POST
let contact = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  email: "",
};

// Event au click
btn_order.addEventListener("click", (e) => {
  e.preventDefault();

  // Création d'une classe pour fabriquer l'objet dans lequel iront les values du formulaire
  class Form {
    constructor() {
      this.firstName = first_name.value;
      this.lastName = last_name.value;
      this.address = address.value;
      this.city = city.value;
      this.email = e_mail.value;
    }
  }
  // Appel de l'instance de classe Formulaire pour créer l'objet FORM_VALUE
  const FORM_VALUE = new Form();

  // Const regEx pour le formulaire
  const REG_EX_LAST_FIRST_NAME = (value) => {
    return /^[A-Za-z]{2,38}$/.test(value);// methode test : Teste une correspondance dans une chaîne. Renvoie vrai ou faux
  };
  const REG_EX_CITY = (value) => {
    return /^[A-Za-zéèàïêç\-\s]{1,50}\s+[0-9]{5}$/.test(value);
  };
  const REG_EX_ADDRESS = (value) => {
    return /^[0-9]{1,5}\s+[A-Za-zéèàïêç\-\s]{2,50}$/.test(value);
  };
  const REG_EX_E_MAIL = (value) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
  };

  // Fonctions qui vérifient la validité des champs de saisies des inputs
  // Control de la validité firstName
  function firstNameControl() {
    let name_form = FORM_VALUE.firstName;
    if (REG_EX_LAST_FIRST_NAME(name_form)) {
      first_name_error.innerHTML = "";
      return true;
    } else {
      first_name_error.innerHTML =
        "Le prénom doit avoir 3 lettres minimum et pas de caractères spéciaux ou chiffres";
      return false;
    }
  }

  // Control de la validité lastName
  function lastNameControl() {
    let last_name_form = FORM_VALUE.lastName;
    if (REG_EX_LAST_FIRST_NAME(last_name_form)) {
      last_name_error.innerHTML = "";
      return true;
    } else {
      last_name_error.innerHTML =
        "Le nom doit avoir 3 lettres minimum et pas de caractères spéciaux ou chiffres";
      return false;
    }
  }

  // Control de la validité address
  function addressControl() {
    let address_form = FORM_VALUE.address;
    if (REG_EX_ADDRESS(address_form)) {
      address_error.innerHTML = "";
      return true;
    } else {
      address_error.innerHTML =
        "Merci de renseigner votre adresse d'au maximum 50 caractères et débutant par des chiffres";
      return false;
    }
  }

  // Control de la validité city
  function cityControl() {
    let city_form = FORM_VALUE.city;
    if (REG_EX_CITY(city_form)) {
      city_error.innerHTML = "";
      return true;
    } else {
      city_error.innerHTML = `Merci de renseigner votre ville et votre code postal. Exemple : « Paris 00000 »`;
      return false;
    }
  }

  // Control de la validité email
  function emailControl() {
    let email_form = FORM_VALUE.email;
    if (REG_EX_E_MAIL(email_form)) {
      e_mail_error.innerHTML = "";
      return true;
    } else {
      e_mail_error.innerHTML =
        "E-mail non valide. Il doit contenir un @ et un point suivi d'au maximum 3 lettres";
      return false;
    }
  }

  // Vérification si la fonction return vrai ou faux
  let firstname_valid = firstNameControl(),
    lastname_valid = lastNameControl(),
    adress_valid = addressControl(),
    city_valid = cityControl(),
    email_valid = emailControl();
  if (
    !firstname_valid ||
    !lastname_valid ||
    !adress_valid ||
    !city_valid ||
    !email_valid
  )
    return null;
  //-------------------------------------------------

  // Push uniquement les Id dans le tableau des produits
  let products = [];
  for (let article_select of productsPanier) {
    products.push(article_select.id);
  }

  // Envoie de l'objet order vers le serveur
  fetch("http://localhost:3000/api/products/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contact: FORM_VALUE,
      products: products,
    }),
  }).then(async (response) => { // Récupération et stockage de la réponse de l'API (orderId)
    try {
      const POST_ORDER = await response.json();
      let orderId = POST_ORDER.orderId;

      // Clear le localStorage
      localStorage.clear();
      window.location.assign("confirmation.html?id=" + orderId);
    } catch (e) {
      console.log(e);
    }
  });
});
