function analyzeText(){
    let text = document.getElementById("textInput"). value .trim();
    let outputDiv = document.getElementById("output");
    if (text===""){
        outputDiv.innerHTML="<>Please enter some text.</b>";
        return;
    }

    let charCount=text.length;
    let words = text.split(" ").filter(word => word !== "");
    let wordCount = words.length;

    let reversed = text.split("").reverse().join("");

    outputDiv.innerHTML = `
        <p><b>Total Characters:</b> ${charCount}</p>
        <p><b>Total Words:</b> ${wordCount}</p>
        <p><b>Reversed Text:</b> ${reversed}</p>
    `;

}