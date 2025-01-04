function updateNetWorth() {
    fetch("https://storage.googleapis.com/anselboero-website-prod-apis/net_worth.json")
    .then((response) => response.json())
    .then((data) => {
        const networth = document.getElementById("networth")
        if (!networth) return
        networth.innerHTML = `
            <p>
                Live Net Worth: ${data.net_worth} €
            </p>
        `
    })
    .catch(() => {
        const networth = document.getElementById("networth")
        if (!networth) return

        networth.innerHTML = ""
    })
}


function updateLastMovieWatched() {
    fetch("https://storage.googleapis.com/anselboero-website-prod-apis/last_movie_watched.json")
    .then((response) => response.json())
    .then((data) => {
        const lastmoviewatched = document.getElementById("lastmoviewatched")
        if (!lastmoviewatched) return
        lastmoviewatched.innerHTML = `
            <p>
                Recently watched
                <br />
                <a href="${data.last_movie_watched__imdb_link}">${data.last_movie_watched__title}</a>: ${data.last_movie_watched__rating}
                ${data.last_movie_watched__comment ? `<br /><i>${data.last_movie_watched__comment}</i>` : ''}
            </p>
            
            <img 
            src="${data.last_movie_watched__poster_link}"
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
    updateNetWorth()
})