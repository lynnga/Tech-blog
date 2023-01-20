const signupHandle = async function (e) {
    e.preventDefault();

    const usernameElement = document.querySelector("#signup-name");
    const passwordElement = document.querySelector("#signup-password");
    fetch("/api/user", {
        method: "post",
        body: JSON.stringify({
            username: usernameElement.value,
            password: passwordElement.value,
        }),
        headers: { "Content-Type" : "application/json" },
    })
        .then(function () {
            document.location.replace("/home");
        })
}






document.querySelector("#signup-form").addEventListener("submit", signupHandle);