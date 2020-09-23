function define(){
let word = document.getElementById("wordToTest").value
let dAU = document.getElementById("definitionAndUse")
debugger;
fetchDef(word,dAU);
} 

function display(defs,dAU,word){
let tblHTML = `<p>The word ${word} means:</p><ol>`

for(const k of defs){
tblHTML += createRowDef(k)
}
tblHTML += `</ol>`
dAU.innerHTML = tblHTML;
}

function createRowDef(k){
debugger;
let exam = "";
if(typeof k.example == "object"){
exam = "Example: Sorry, there is no example :("
} else {
exam = `Example: ${k.example}`
}

let pOS = "";
if(typeof k.partofspeech == "object"){
pOS = "Part of Speech: N/A"
} else {
pOS = `${k.partofspeech}`
}

return `<em>${pOS}</em><br><li>${k.term}: ${k.definition}<br>${exam}</li><br>`

}

function fetchDef(word,dAU){
let uRL = "https://www.abbreviations.com/services/v2/defs.php?uid=8018&tokenid=Fq9JjFM6sNuGbpL9&format=json&word=" + word;

fetch(uRL)
.then(response => response.json())

.then(res => {
display(res.result,dAU,word)
})

/*.catch(err => {
console.log(err)
});*/

}

