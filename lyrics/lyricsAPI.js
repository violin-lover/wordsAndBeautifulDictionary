function define(){
let lyrics = document.getElementById("songToFind").value
let outA = document.getElementById("lyricOutput")
debugger;
fetchLyre(song,outA);
} 

function display(lyrics,outA,song){
if(typeof lyrics == "undefined"){
outA.innerHTML = `<center>Sorry, we couldn't find any lyrics for this song :(</center>`;
return
}

debugger;
let tblHTML = `<p>The links to the lyrics of the song <em>${song}</em> are:</p><ol>`

for(const k of lyrics){
tblHTML += createRowLyrics(k)
}
tblHTML += `</ol>`
outA.innerHTML = tblHTML;
}

function createRowLyrics(k){
return `<li>Song: ${k.song} <br>Artist: ${k.artist}<br>Song Link: <a href=${k["song-link"]} target = "blob">${k["song-link"]}</a></li><br>`
}

function fetchLyre(song,outA){
let uRL = "https://www.abbreviations.com/services/v2/lyrics.php?uid=8018&tokenid=Fq9JjFM6sNuGbpL9&format=json&term=" + song;

fetch(uRL)
.then(response => response.json())

.then(res => {
display(res.result,outA,song)
})

}