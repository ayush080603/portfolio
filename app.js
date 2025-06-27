(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
// Initialize EmailJS
(function(){
    emailjs.init("2iiY3BB8h9pG-cRrn");
})();

// Email form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            emailjs.sendForm('service_7sahqtp', 'template_myomiwd', this)
                .then(function() {
                    alert('Email sent successfully!');
                    contactForm.reset();
                }, function(error) {
                    alert('Failed to send email. Please try again.');
                    console.log('EmailJS error:', error);
                });
        });
    }
});