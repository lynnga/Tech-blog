const commentHandle = async function (e) {
    e.preventDefault();

    const postId = document.querySelector('#post-id').value;
    const body = document.querySelector('#comment-body').value;
    await fetch("/api/comment", {
        method: "POST",
        body: JSON.stringify({
            postId,
            body,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((d) => {
        if (d.redirected)
        {
            document.location.replace('/login');
        }
        else
        {
            document.location.reload();
        }
    })
}

document
    .querySelector("#comment-form")
    .addEventListener("submit", commentHandle);