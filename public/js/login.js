const loginHandle = async function (e) {
    e.preventDefault();

    const usernameElement = document.querySelector("#username-login");
    const passwordElement = document.querySelector("#password-login");
    console.log("login sent");
    fetch("/api/user/login", {
        method: "post",
        body: JSON.stringify({
            username: usernameElement.value,
            password: passwordElement.value,
        }),
        headers: { "Content-Type" : "application/json" },
    })
        .then(function (d) {
            console.log(d);
            if (d.url == "http://localhost:3001/")
            {
                document.location.replace('/');
            }
            else if (d.redirected)
            {
                document.location.reload('/login');
            }
            else
            {
                document.location.reload('/');
            }
        })
}






document.querySelector("#login-form").addEventListener("submit", loginHandle);