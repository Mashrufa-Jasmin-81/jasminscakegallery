// Pre-fill Cake Code if Redirected from Product Page
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const cakeCode = urlParams.get('cakeCode');
    if (cakeCode) {
        document.getElementById('cakeCode').value = cakeCode;
    }
};

// Redirect to Gmail with Filled Details
document.getElementById('order-form').onsubmit = function(event) {
    event.preventDefault();
    
    const name = document.getElementsByName("name")[0].value;
    const email = document.getElementsByName("email")[0].value;
    const phone = document.getElementsByName("phone")[0].value;
    const address = document.getElementsByName("address")[0].value;
    const cakeCode = document.getElementsByName("cakeCode")[0].value;
    const weight = document.getElementsByName("weight")[0].value;

    const mailtoLink = `mailto:oreo.ibnat81@gmail.com?subject=New Cake Order&body=
        Name: ${name}%0D%0A
        Email: ${email}%0D%0A
        Phone: ${phone}%0D%0A
        Address: ${address}%0D%0A
        Cake Code: ${cakeCode}%0D%0A
        Weight: ${weight}`;

    window.location.href = mailtoLink;
};
