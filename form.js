
document.getElementById('interestForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        course: document.getElementById('course').value,
        experience: document.getElementById('experience').value,
        question: document.getElementById('question').value,
    };

    const response = await fetch('https://formspree.io/f/mannzrea', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    const formContainer = document.querySelector('.form-container');  // Update form content area
    if (response.ok) {
        formContainer.innerHTML = `
            <div class="thank-you">
                <h2 style="margin: auto;">Thank You!</h2>
                <p>Your interest has been successfully registered. We will contact you soon.</p>
                <button onclick="window.location.reload()">Back to Form</button>
            </div>
        `;
    } else {
        formContainer.innerHTML = `
            <div class="error-message">
                <h2>Submission Failed</h2>
                <p>Something went wrong. Please try again later.</p>
                <button onclick="window.location.reload()">Back to Form</button>
            </div>
        `;
    }
});
