const signupHandle = async function (e) {
    e.preventDefault();

    const usernameElement = document.querySelector("#signup-name");
    const passwordElement = document.querySelector("#signup-password");
    console.log("here");
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






document.querySelector("#signup-form").addEventListener("submit", signupHandle);