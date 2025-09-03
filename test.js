async function searchSongs() {
    let term = document.getElementById("searchInput").value;
    const url=`https://itunes.apple.com/search?&term=${encodeURIComponent(term)}&entity=song&limit=15`;

    let responce = await fetch(url);
    let data = await responce.json();

    let resDiv = document.getElementById("res");
    resDiv.innerHTML = "";
    console.log(data);

        data.results.forEach(song => {
        let songDiv = document.createElement("div");
        songDiv.classList.add("song");
        songDiv.innerHTML = `
            <img src="${song.artworkUrl100}" alt="Album Art"><br>
            <strong>${song.trackName}</strong><br>
            ${song.artistName}<br>
            <audio controls src="${song.previewUrl}"></audio>
        `;
        resDiv.appendChild(songDiv);
    });
}


