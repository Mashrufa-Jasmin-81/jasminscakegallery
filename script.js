// Welcome Popup Close Function
function closePopup() {
    document.getElementById('welcome-popup').style.display = 'none';
}

// Redirect to Order Form with Pre-filled Cake Code
function orderNow(cakeCode) {
    window.location.href = "order.html?cakeCode=" + cakeCode;
}
