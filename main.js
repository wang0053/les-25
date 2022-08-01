const sentform = (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const book = e.target[1].value
    const movie = e.target[2].value

    alert("Ik ben " + name + " en mijn favoriete boek is " + book + " en mijn lievelings film is " + movie)
}

var formulier = document.querySelector(".formulier")
formulier.addEventListener("submit", sentform);

