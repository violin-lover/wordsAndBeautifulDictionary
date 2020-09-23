function define(){
let poem = document.getElementById("poemToFind").value
let outA = document.getElementById("poemOutput")
debugger;
fetchPoem(poem,outA);
} 

function display(words,outA,poem){
if(typeof words == "undefined"){
outA.innerHTML = `<center>Sorry, we couldn't find any poems on this topic :(</center>`;
return
}

debugger;
let tblHTML = `<p>Some poems we found for <em>${poem}</em> are:</p><ol>`

for(const k of words){
tblHTML += createRowWords(k)
}
tblHTML += `</ol>`
outA.innerHTML = tblHTML;
}

function createRowWords(k){
k.poem = k.poem.replace(/[\n]/g,`<br>`)

return `<li>Poem: ${k.title}<br>Written By: ${k.poet}<br><br><em>${k.poem}</em></li><br>`
}

function fetchPoem(poem,outA){
let uRL = "https://www.abbreviations.com/services/v2/poetry.php?uid=8018&tokenid=Fq9JjFM6sNuGbpL9&format=json&term=" + poem;

fetch(uRL)
.then(response => response.json())

.then(res => {
display(res.result,outA,poem)
})

}