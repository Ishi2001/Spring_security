function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Make an AJAX POST request to the login endpoint
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/login', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                var token = response.token;

                // Store the JWT token in session storage
                sessionStorage.setItem('jwtToken', token);

                // Redirect to the dashboard page or perform other actions as needed
                window.location.href = '/dashboard';
            } else {
                // Handle login failure
                console.error('Login failed');
            }
        }
    };

    // Send the request with login credentials
    xhr.send(JSON.stringify({ username: username, password: password }));

    // Prevent the form from submitting via traditional HTTP POST
    return false;
}
