const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector("button.mobile-close-button")

const plus = document.querySelector("#plus");
const quantity = document.querySelector("#quantity");
const minus = document.querySelector("#minus");
const product_price = document.querySelector("#product_input_price");
const price_show = document.querySelector("#price");

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden')
});
closeBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden')
});

plus.addEventListener('click', function () {

    let increment = parseInt(quantity.innerHTML);
    let price_p = parseInt(product_price.value);

    if (increment < 20) {
        increment = increment + 1;
        increment_price = (price_p * increment).toFixed(2);

        quantity.innerHTML = increment;

        price_show.innerHTML = increment_price;
    }
});


minus.addEventListener('click', function () {

    let increment = parseInt(quantity.innerHTML);
    let price_p = parseInt(product_price.value);
    if (increment > 1) {
        increment = increment - 1;
        decrease_price = (price_p * increment).toFixed(2);

        quantity.innerHTML = increment;
        price_show.innerHTML = decrease_price;
    }

});