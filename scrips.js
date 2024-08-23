// Toggle dropdown on click for mobile devices
document.querySelector('.dropbtn').addEventListener('click', function(event) {
    event.preventDefault();
    let dropdownContent = this.nextElementSibling;
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
});

// Close dropdown when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(function(dropdown) {
            dropdown.style.display = 'none';
        });
    }
};

const form = document.getElementById('form1');

form.addEventListener('submit', function(e) {
    const hCaptchaResponse = document.querySelector('textarea[name="h-captcha-response"]').value;

    if (!hCaptchaResponse) {
        e.preventDefault();
        alert("Please complete the captcha challenge.");
        return;
    }

    document.getElementById('h-captcha-response').value = hCaptchaResponse;
});
