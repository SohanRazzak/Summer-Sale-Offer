// adding item to cart 
function addToCart(item, price) {
    // adding to cart list
    const cartItems = document.getElementById('cart-items');
    const counter = cartItems.childElementCount + 1;
    const newItems = document.createElement('p');
    newItems.innerHTML = `<p class="text-xl leading-loose font-semibold">${counter}. ${item}</p>`;
    cartItems.appendChild(newItems);

    // updating price
    const totalPriceId = document.getElementById('price-total');
    let totalPrice = parseFloat(totalPriceId.innerText);
    totalPrice = totalPrice + price;
    totalPriceId.innerText = totalPrice.toFixed(2);
    document.getElementById('price-final').innerText = totalPrice.toFixed(2);


    // checking coupon eligibility
    if (totalPrice > 0) {
        document.getElementById('purchase-btn').disabled = false;
    }
    if (totalPrice >= 200) {
        document.getElementById('coupon-btn').disabled = false;
    }
};

// event listener for card 
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.addEventListener('click', function () {
        card.style.borderColor = '#E527B2';
        setTimeout(function(){
            card.style.borderColor = 'transparent';
        },250);
        const itemTitle = card.querySelector('.card-title').innerText;
        const itemPrice = parseFloat(card.querySelector('.card-price').innerText);
        addToCart(itemTitle, itemPrice);
    })
}



// rating click addToCart disable
const ratings = document.getElementsByClassName('rating');
for (const rating of ratings) {
    rating.addEventListener('click', function (e) {
        e.stopPropagation();
    });
}

// discount coupon
function discount() {
    const currentPrice = parseFloat(document.getElementById('price-total').innerText);
    const discountAmmount = currentPrice * 0.2;
    const couponCode = document.getElementById('coupon-field').value;
    if (couponCode == 'SELL200') {
        document.getElementById('price-discount').innerText = discountAmmount.toFixed(2);
        document.getElementById('price-final').innerText = (currentPrice - discountAmmount).toFixed(2);
        document.getElementById('coupon-field').value = '';
    }
}

// go home reset 
function resetAll() {
    document.getElementById('price-discount').innerText = '00.00';
    document.getElementById('price-final').innerText = '00.00';
    document.getElementById('price-total').innerText = '00.00';
    document.getElementById('cart-items').innerHTML = '';
    document.getElementById('purchase-btn').disabled = true;
    document.getElementById('coupon-btn').disabled = true;
}