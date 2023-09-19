const wordsTextArea = document.querySelector(".word-counter-container .words");

const countBtn = document.querySelector(".word-counter-container .count-btn");

const wordCount = document.querySelector(".word-counter-container .word-count span");

const countWords = () => {
    let words = wordsTextArea.value;
    let wordsTrim = words.replace(/\s+/g, " ").trim();
    let splitWords = wordsTrim.split(" ");
    console.log(splitWords);
    let numberOfWords = splitWords.length;
    if (splitWords[0] == "") {
        numberOfWords = 0;
    }
    for (let i = 0; i < splitWords.length; i++) {
        if (splitWords[i][0] == ".") {
            numberOfWords = numberOfWords - 1;
        }
        
    }

    wordCount.innerHTML = numberOfWords;
};

countBtn.addEventListener("click", countWords)