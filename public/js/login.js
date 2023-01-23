const loginHandle = async function (e) {
    e.preventDefault();

    const usernameElement = document.querySelector("#username-login");
    const passwordElement = document.querySelector("#password-login");
    console.log("login sent");
    fetch("/api/user", {
        method: "post",
        body: JSON.stringify({
            username: usernameElement.value,
            password: passwordElement.value,
        }),
        headers: { "Content-Type" : "application/json" },
    })
        .then(function () {
            document.location.replace("/");
        })
}






document.querySelector("#login-submit-bt").addEventListener("submit", loginHandle);