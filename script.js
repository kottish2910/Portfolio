// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    const contactForm = document.getElementById('contactForm');
    
    // Add an event listener for form submission
    contactForm.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();
        
        // Get the values from the form fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic validation
        if(name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
        } else {
            // If all fields are filled in, display a success message
            alert('Thank you ' + name + ', your message has been sent successfully.');
            
            // Optionally clear the form after submission
            contactForm.reset();
        }
    });
});
