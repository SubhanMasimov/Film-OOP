class UI {
    static loadFilms() {
        const filmList = document.querySelector("#films")
        const films = Storage.getFilmsFromStorage()

        films.forEach(element => {
            filmList.innerHTML += `
        <tr>
                                            <td><img src="${element.url}" class="img-fluid img-thumbnail"></td>
                                            <td>${element.title}</td>
                                            <td>${element.director}</td>
                                            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                          </tr>
        `
        })
    }

    static showAlert(type, message) {
        const cardBody = document.querySelectorAll(".card-body")[0];
        const div = document.createElement("div")
        div.className = `alert alert-${type}`
        div.textContent = message
        cardBody.appendChild(div)

        setTimeout(() => {
            div.remove()
        }, 1000);
    }

    static clearInputs() {
        document.querySelector("#title").value = ""
        document.querySelector("#director").value = ""
        document.querySelector("#url").value = ""
    }
}