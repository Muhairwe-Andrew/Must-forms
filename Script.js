// Wait for the HTML document to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. HANDLING THE MODAL (Create Account Popup)
    const modal = document.getElementById('accountModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtns = document.querySelectorAll('.close-btn, #closeModalBtnBottom');

    // Open the modal
    if (openModalBtn) {
        openModalBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Stop button from submitting a form
            modal.showModal(); // Uses the native HTML dialog method
        });
    }

    // Close the modal (handles both the 'X' and the 'Close' button)
    if (closeModalBtns) {
        closeModalBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.close();
            });
        });
    }

    // Close the modal if the user clicks outside of it
    if (modal) {
        modal.addEventListener('click', (e) => {
            const dialogDimensions = modal.getBoundingClientRect();
            if (
                e.clientX < dialogDimensions.left ||
                e.clientX > dialogDimensions.right ||
                e.clientY < dialogDimensions.top ||
                e.clientY > dialogDimensions.bottom
            ) {
                modal.close();
            }
        });
    }

    // 2. HANDLING THE PASSWORD TOGGLE (Show/Hide Password)
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('login-password');

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
            // Check if the current type is password
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Toggle the eye icon (FontAwesome classes)
            togglePassword.classList.toggle('fa-eye');
            togglePassword.classList.toggle('fa-eye-slash');
        });
    }

    // 3. HANDLING FORM SUBMISSION (Prevent page reload for demo)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            // If the form is not the one used to close the dialog
            if (form.method.toLowerCase() !== 'dialog') {
                e.preventDefault(); // Stop the page from refreshing
                alert("Form submitted! (This is where you will connect to PHP/XAMPP later)");
            }
        });
    });

});
