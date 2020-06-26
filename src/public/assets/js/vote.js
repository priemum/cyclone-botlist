function votes() {
    if (!document.getElementById('botid').value)
        return flash(document.getElementById('botid'))
   

    let data = {
        votes: 1,
    };

    fetch("/vote", {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(response => {
        location.href = response.redirect
    })
}

function flash(element) {
    element.scrollIntoView();
    element.style.border = "2px solid #ff0000";
    element.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    setTimeout(() => {
        element.style.backgroundColor = "rgba(0, 0, 0, 0)";
        element.style.border = "1px solid #888";
    }, 600)
}
