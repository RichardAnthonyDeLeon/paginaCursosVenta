function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var messageElement = document.getElementById('message');

    // Aquí deberías realizar la lógica de autenticación, por ejemplo, comparar con una base de datos
    // En este ejemplo, se asume un usuario y contraseña fijos para simplificar

    if (username === 'alumno' && password === '2023') {
        messageElement.style.color = 'green';
        messageElement.innerHTML = 'Inicio de sesión exitoso';
        var anchor = document.createElement('a');
        var form = document.getElementById('loginForm')
        var text = document.createTextNode('Ir a comprar')

        anchor.setAttribute('href', 'index.html')
        anchor.appendChild(text)

        form.append(anchor)
        


    } else {
        messageElement.style.color = 'red';
        messageElement.innerHTML = 'Usuario o contraseña incorrectos';
    }
}

var nombre = document.getElementById('nombre')
var apellido = document.getElementById('apellido')

