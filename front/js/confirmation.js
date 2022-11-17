// fonction pour récupérer l'id et ajout dans le textContent
function confirmationId() {
    let orderId = new URLSearchParams(window.location.search).get("id");

    let id_order = document.getElementById("orderId");
    id_order.textContent = orderId;
}
confirmationId();