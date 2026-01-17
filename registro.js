$(document).ready(function() {
    $('#registroForm').on('submit', function(event) {
        
        const username = $('#username').val().trim();
        const email = $('#email').val().trim();
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();
        
        let isValid = true;

        if (username === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Por favor, completa todos los campos obligatorios.");
            isValid = false;
        }

        if (password.length < 6 && isValid) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            isValid = false;
        }

        if (password !== confirmPassword && isValid) {
            alert("Las contraseñas no coinciden. Por favor, verifica.");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
            event.stopPropagation();
            $(this).addClass('was-validated');
        } else {
            alert("¡Registro exitoso! Bienvenido a COMPUPAPE.");
        }
    });
});