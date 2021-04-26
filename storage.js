class Storage {
    static addFilmToStorage(film) {
        let films = this.getFilmsFromStorage()

        films.push(film)

        localStorage.setItem("films", JSON.stringify(films))
    }

    static getFilmsFromStorage() {
        let films;

        if (localStorage.getItem("films") === null) {
            films = []
        }
        else {
            films = JSON.parse(localStorage.getItem("films"))
        }
        return films
    }

    static deleteFromStorage(title) {
        let films = this.getFilmsFromStorage()

        films.forEach((element, index) => {
            if (element.title === title) {
                films.splice(index, 1)
            }
        });

        if (films.length > 0) {
            localStorage.setItem("films", JSON.stringify(films))
            return
        }

        localStorage.removeItem("films")
    }

    static deleteAllFilms(){
        localStorage.removeItem("films")
    }
}