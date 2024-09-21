document.getElementById('clientForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Simple validation check
    const orgName = document.getElementById('orgName').value;
    const contactPerson = document.getElementById('contactPerson').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const servicesNeeded = document.getElementById('servicesNeeded').value;

    if (orgName && contactPerson && email && phone && servicesNeeded) {
        alert('Application submitted successfully!');
        // Here you can add code to send the form data to your server
        // For demonstration, we can reset the form
        document.getElementById('clientForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
