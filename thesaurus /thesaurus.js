function synonymFind(){
let word = document.getElementById("wordToTest").value
let output = document.getElementById("synonymOutput")
debugger;
fetchSyno(word,output);
} 

function display(syno,output,word){
let tblHTML = `<p>Some synonyms of the word ${word} are:</p><ol>`

for(const k of syno){
tblHTML += createRowSyno(k)
}
tblHTML += `</ol>`
output.innerHTML = tblHTML;
}

function createRowSyno(k){
let row = `<em>${k.partofspeech}</em><li>${k.term}: ${k.definition}<br>Example: ${k.example}<br>Synonyms: ${k.synonyms}</li><br>`
return row;
}

function fetchSyno(word,dAU){
let uRL = "https://www.abbreviations.com/services/v2/defs.php?uid=8018&tokenid=Fq9JjFM6sNuGbpL9&format=json&word=" + word;

fetch(uRL)
.then(response => response.json())

.then(res => {
display(res.result,output,word)
})

/*.catch(err => {
console.log(err)
});*/

}