// récupération de l'id pour l'ajouter dans le textContent
function confirmation (){
let orderId = new URLSearchParams(window.location.search).get("id");

let id_order = document.getElementById("orderId");
id_order.textContent = orderId;
}
confirmation ();