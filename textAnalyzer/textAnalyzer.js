function cleanWords(txt){
txt = txt.toLowerCase().replace(/[\~\`\!\@\#\$\%\^\&\*\(\)\+\=\{\}\[\]\|\:\;\"\<\>\,\.\?\\\n]/g,' ')
txt = txt.replace(/[\_\-\/]/g,' ')
return txt;
}

function analyzeText(txt){
debugger;
txt = cleanWords(txt)
let words = txt.split(" ")
const wordMap = new Map()

for(let i = 0; i < words.length; i++){
if(wordMap.has(words[i])){
wordMap.set(words[i] , wordMap.get(words[i]) + 1);
} else {
if(words[i].search(/\w+/)>-1){
wordMap.set(words[i],1);
      }
    }
  }
  let total = frequency(wordMap)
  let entries = wordMap.entries()
  let sortedEntries = Array.from(entries).sort((entryA,entryB) => entryB[1]-entryA[1])
  displayAnswer(total,sortedEntries)
}

 const createRow = function(k,total){
   let percent = 100*(k[1] / total)
   let rowHtml = `<tr>
   <td>${k[0]}</td>
   <td>${k[1]}</td>
   <td>${percent.toFixed(2) + "%"}</td>
   </tr>`
    return rowHtml;
 }

function displayAnswer(total,sortedEntries){
debugger;
let tableHTML = `
<table>
<tr>
  <th>Words Sorted By its Frequency</th>
  <th>Occurence</th>
  <th>Frequency</th>
</tr>`

for(const k of sortedEntries){
tableHTML += createRow(k,total)
  }
  tableHTML += `</table>`
  wordFrequencyAnswer.innerHTML = tableHTML;
}

function frequency(wordMap){
let total = 0;
for(const [key,value] of wordMap){
total += value;
  }
  return total;
}

//-------------------------------------------------------------

function letterAnalization(txt){
debugger;
txt = cleanWords(txt)
const letterMap = new Map()
let letters = txt.replace(/[\W/]/g,"")
letters = letters.split("");

for(let i = 0; i < letters.length; i++){
if(letterMap.has(letters[i])){
letterMap.set(letters[i] , letterMap.get(letters[i]) + 1);
} else {
letterMap.set(letters[i],1);
    }
  }
  let letterTotal = frequencyOfLetters(letterMap)
  let letterEntries = letterMap.entries()
  let sortedLetters = Array.from(letterEntries).sort((entryA,entryB) => entryB[1]-entryA[1])
  displayLetter(letterTotal,sortedLetters)

}

function displayLetter(letterTotal,sortedLetters){

let tableHTML = `
<table>
<tr>
  <th>Letter Sorted by Their Frequency</th>
  <th>Occurence</th>
  <th>Frequency</th>
</tr>`

for(const k of sortedLetters){
tableHTML += createRowLetter(k,letterTotal)
  }
  tableHTML += `</table>`
  letterFrequencyAnswer.innerHTML = tableHTML;

}

function frequencyOfLetters(letterMap){
let letterTotal = 0;
for(const [key,value] of letterMap){
letterTotal += value;
  }
  return letterTotal;
}

const createRowLetter = function(k,letterTotal){
   let percent = 100*(k[1] / letterTotal)
   let rowHtml = `<tr>
   <td>${k[0]}</td>
   <td>${k[1]}</td>
   <td>${percent.toFixed(2) + "%"}</td>
   </tr>`
    return rowHtml;
 }

 //--------------------------------------------------------------

 //