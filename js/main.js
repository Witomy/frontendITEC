document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

        let isValid = true;

        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        // Validación del campo de usuario
        if (usernameInput.value.trim() === '') {
            usernameInput.classList.add('is-invalid');
            isValid = false;
        } else {
            usernameInput.classList.remove('is-invalid');
        }

        // Validación del campo de contraseña
        if (passwordInput.value.trim() === '') {
            passwordInput.classList.add('is-invalid');
            isValid = false;
        } else {
            passwordInput.classList.remove('is-invalid');
        }

        if (isValid) {
            // Aquí es donde normalmente enviarías los datos al servidor
            // Por ejemplo, con una petición AJAX (fetch o XMLHttpRequest)

            const username = usernameInput.value;
            const password = passwordInput.value;

            console.log('Usuario:', username);
            console.log('Contraseña:', password);

            // Simulación de un envío exitoso
            alert('¡Login exitoso! (Datos enviados a la consola)');

            // En una aplicación real, podrías redirigir al usuario
            // window.location.href = 'dashboard.html';
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});