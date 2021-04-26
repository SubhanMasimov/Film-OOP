const form = document.querySelector("#film-form")
const titleInput = document.querySelector("#title")
const directorInput = document.querySelector("#director")
const urlInput = document.querySelector("#url")
const filmList = document.querySelector("#films")
const clearButton = document.querySelector("#clear-films")

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm)
    document.addEventListener("DOMContentLoaded", function () {
        UI.loadFilms();
    })
    filmList.addEventListener("click", deleteFilm)
    clearButton.addEventListener("click", deleteAllFilms)
}

function addFilm(e) {
    const title = titleInput.value
    const director = directorInput.value
    const url = urlInput.value

    if (title === "" || director === "" || url === "") {
        UI.showAlert("danger", "Boş sahələri doldurun!")
    }
    else {
        const film = new Film(title, director, url)
        Storage.addFilmToStorage(film)
        UI.clearInputs()
        UI.showAlert("success", "Film əlavə olundu")
    }

    e.preventDefault()
}

function deleteFilm(e) {
    Storage.deleteFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)

    UI.showAlert("success", "Film silindi")

    e.preventDefault()
}

function deleteAllFilms(){
    Storage.deleteAllFilms()
}