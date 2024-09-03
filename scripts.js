document.addEventListener("DOMContentLoaded", function() {
    const dropbtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropbtn.addEventListener("click", function(event) {
        event.preventDefault();
        dropdownContent.classList.toggle("show");
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener("click", function(event) {
        if (!event.target.matches('.dropbtn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var encodedPhone = 'MDYgNDIyIDY1IDQ2MA=='; 
    var encodedAddress = 'SnVsaWFuYWxhYW4gNzAsIDM4NDMgQ0MgSGFyZGVyd2lqaw=='; 
    var encodedUser = 'YmF1a2pldmFuZWx0ZW4='; 
    var encodedDomain = 'Z21haWwuY29t'; 

    var phone = atob(encodedPhone);
    var address = atob(encodedAddress);
    var user = atob(encodedUser);
    var domain = atob(encodedDomain);

    var contact = user + '@' + domain;

    var phoneElement = document.getElementById('phone-code');
    phoneElement.textContent = phone; 
    phoneElement.removeAttribute('href'); 

    var addressElement = document.getElementById('address-code');
    addressElement.innerHTML = address.replace(/,/g, '<br>'); 

    var contactElement = document.getElementById('contact-code');
    contactElement.textContent = contact; 
    contactElement.removeAttribute('href'); 

    var iconLink = document.getElementById('icon-code');
    iconLink.href = 'mailto:' + contact;
});
