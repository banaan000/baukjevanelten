// // Toggle dropdown on click for mobile devices
// document.querySelector('.dropbtn').addEventListener('click', function(event) {
//     event.preventDefault();
//     let dropdownContent = this.nextElementSibling;
//     dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
// });

// // Close dropdown when clicking outside
// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.querySelectorAll('.dropdown-content');
//         dropdowns.forEach(function(dropdown) {
//             dropdown.style.display = 'none';
//         });
//     }
// };
document.addEventListener('DOMContentLoaded', function() {
    var encodedPhone = 'MDYgNDIyIDY1IDQ2MA=='; 
    var encodedAddress = 'SnVsaWFuYWxhYW4gNzAsIDM4NDMgQ0MgSGFyZGVyd2lqaw=='; 
    var encodedUser = 'YmF1a2pldmFuZWx0ZW4='; 
    var encodedDomain = 'Z21haWwuY29t'; 

    // Decoding the Base64 strings
    var phone = atob(encodedPhone);
    var address = atob(encodedAddress);
    var user = atob(encodedUser);
    var domain = atob(encodedDomain);

    // Constructing the full email address
    var contact = user + '@' + domain;

    // Updating the phone number as plain text
    var phoneElement = document.getElementById('phone-code');
    phoneElement.textContent = phone; // Display phone number as plain text
    phoneElement.removeAttribute('href'); // Remove href attribute to ensure it is not clickable

    // Updating the address with line breaks
    var addressElement = document.getElementById('address-code');
    addressElement.innerHTML = address.replace(/,/g, '<br>'); // Format address with line breaks

    // Updating the plain text email address
    var contactElement = document.getElementById('contact-code');
    contactElement.textContent = contact; // Display email address as plain text
    contactElement.removeAttribute('href'); // Remove href attribute to ensure it is not clickable

    // Updating the icon email link
    var iconLink = document.getElementById('icon-code');
    iconLink.href = 'mailto:' + contact;
});
