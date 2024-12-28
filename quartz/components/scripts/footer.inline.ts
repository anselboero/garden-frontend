function updateLastMovieWatched() {
    fetch("https://europe-west10-anselboero-website-prod.cloudfunctions.net/get-last-movie-watched")
    .then((response) => response.json())
    .then((data) => {
        const lastmoviewatched = document.getElementById("lastmoviewatched")
        if (!lastmoviewatched) return

        lastmoviewatched.innerHTML = `
            <p>
                Recently watched
                <br />
                <a href="${data.imdb_link}">${data.title}</a>: ${data.rating}
                ${data.comment ? `<br /><i>${data.comment}</i>` : ''}
            </p>
            
            <img 
            src="${data.poster_link}"
            width="40%"></img>
        `
    })
    .catch(() => {
        const nowplaying = document.getElementById("nowplaying")
        if (!nowplaying) return

        nowplaying.innerHTML = ""
    })
}

// needed in order to keep the function live while navigating
// the website.
// reference: https://discord.com/channels/927628110009098281/1006391490962010152/threads/1322305204871368764
document.addEventListener("nav", () => {

    updateLastMovieWatched()
})