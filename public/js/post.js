const newPostHandle = async function (e) {
    e.preventDefault();
 
    const title = document.querySelector('#post-title').value;
    const body = document.querySelector('#post-body').value;
 
    await fetch(`/api/post`, {
       method: "POST",
       body: JSON.stringify({
          title : title,
          body : body,
       }),
       headers: {
          "Content-Type": "application/json",
       },
    });
 
    document.location.replace("/");
 };
 
 document
    .querySelector("#new-post-form")
    .addEventListener("submit", newPostHandle);