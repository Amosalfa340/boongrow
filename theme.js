
document.addEventListener('DOMContentLoaded', function() {
        const form = document.querySelector('form');
        
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            
            // Retrieve form input values
            const firstName = document.querySelector('input[type="text"][placeholder="First Name"]').value;
            const lastName = document.querySelector('input[type="text"][placeholder="Last Name"]').value;
            const email = document.querySelector('input[type="email"]').value;
            const password = document.querySelector('input[type="password"]').value;
            const confirmPassword = document.querySelector('input[type="password"][placeholder="Confirm Password"]').value;
            const phoneNumber = document.querySelector('input[type="text"][placeholder="Phone Number"]').value;
            const address = document.querySelector('input[type="text"][placeholder="Address"]').value;
            const dob = document.querySelector('input[type="date"]').value;

            // Validation (you can add more validation rules as needed)
            if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '' || phoneNumber === '' || address === '' || dob === '') {
                alert('Please fill in all fields.');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            // If all validations pass, you can proceed with form submission or other actions
            // For now, let's just log the form data
            console.log('Form submitted with the following data:');
            console.log('First Name:', firstName);
            console.log('Last Name:', lastName);
            console.log('Email:', email);
            console.log('Password:', password);
            console.log('Phone Number:', phoneNumber);
            console.log('Address:', address);
            console.log('Date of Birth:', dob);
        });
    });
