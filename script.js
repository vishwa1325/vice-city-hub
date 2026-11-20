function showMessage(section) {
    alert("Welcome to " + section + "!");
}

console.log("Vice City Hub is ready!");
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
    let searchText = searchInput.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
        let content = card.textContent.toLowerCase();

        card.style.display = content.includes(searchText)
            ? "block"
            : "none";
    });
});
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker.register("./service-worker.js")
            .then(function () {
                console.log("Vice City Hub is ready!");
            })
            .catch(function (error) {
                console.log("Service Worker Error:", error);
            });
    });
}