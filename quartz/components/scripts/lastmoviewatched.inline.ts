fetch("https://europe-west10-anselboero-website-prod.cloudfunctions.net/get-last-movie-watched")
  .then((response) => response.json())
  .then((data) => {
    console.log("here");
    const lastmoviewatched = document.getElementById("lastmoviewatched")
    if (!lastmoviewatched) return

    lastmoviewatched.innerHTML = `
        <p>
            Recently watched
            <br />
            <a href="${data.imdb_link}">${data.title}</a>
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