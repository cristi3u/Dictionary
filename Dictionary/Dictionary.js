const wordList = [];

function addWord() {
    let word = document.getElementById('addID').value;
    let list = document.getElementById("myList");
    wordList.push(word);
    let li = document.createElement("li");
    li.innerText = word;
    list.appendChild(li);
}

function searchWord() {
    let word = document.getElementById('searchID').value;
    let listSize = wordList.length;
    let differtentWords = 0;
    for (let i = 0; i < listSize; i++) {
    if (word == wordList[i]) {
        i += listSize;
        document.getElementById('display').innerHTML = "The word " + word + " is in the dictionary!"
    } else {
        ++differtentWords;
    }
    }   
    if (differtentWords == listSize) {
        document.getElementById('display').innerHTML = "The word " + word + " is not in the dictionary!"
    }
}