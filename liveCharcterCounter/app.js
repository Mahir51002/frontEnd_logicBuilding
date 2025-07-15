let textArea = document.querySelector("textarea");
let display = document.querySelector("span");

textArea.addEventListener("input",()=>{
    let text = textArea.value;
    let count = text.length;
    display.innerText = count;
    
})
