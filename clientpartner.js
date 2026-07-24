const cards = document.querySelectorAll(".logo-card");
cards.forEach(card => {
    card.addEventListener("click", function(){
        window.open(card.dataset.url,"_blank");
    });
});