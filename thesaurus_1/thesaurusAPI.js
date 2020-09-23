function synonymFind(){
let word = document.getElementById("wordToTest").value
let outS = document.getElementById("synonymOutput")
let outA = document.getElementById("antonymOutput") 
debugger;
fetchSyno(word,outS,outA);
} 

//-------------------------------------------------------------

function displaySyno(syno,outS,word){
debugger;
let tblHTML = `<p>Some synonyms of the word ${word} are:</p><ol>`
let s = new Set();

for(const k of syno){
s.add(k.synonyms);
}

for(const l of s){
tblHTML += createRowSyno(l)
}
tblHTML += `</ol>`
outS.innerHTML = tblHTML;
}


function createRowSyno(l){
let sych = "";

if(typeof l == "object"){
sych = "Sorry, there are no avaliable synonyms"
} else {
sych = `${l}`
}

return `<li>Synonyms: ${sych}</li><br>`

}

//-------------------------------------------------------------

function displayAnto(anto,outA,words){
debugger;
let tblHTML = `------------------------------------------------------------------------------------------------------------------<br><p>Some antonyms of the word ${words} are:</p><ol>`

let s = new Set()

for(const k of anto){
s.add(k.antonyms)
}

for(const n of s){
tblHTML += createRowAnto(n)
}
tblHTML += `</ol>`
outA.innerHTML = tblHTML;
}

function createRowAnto(n){
let ant = "";

if(typeof n.antonyms == "object"){
ant = "Antonyms: Sorry, there are no avaliable antonyms"
} else {
ant = `Antonyms: ${n}`
}

return `<li>${ant}</li><br>`

}

function fetchSyno(words, outS, outA){
let uRl = "https://www.abbreviations.com/services/v2/syno.php?uid=8053&tokenid=ZhxrPfLJz2kr84Ra&format=json&word=" + words;

fetch(uRl)
.then(response => response.json())

.then(res => {
displaySyno(res.result, outS, words);
displayAnto(res.result, outA, words);
})
} 




