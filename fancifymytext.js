function bigger(){
    document.getElementById("textarea").style.fontSize = "24pt";
}
function fancy() {
    alert("Fancy!");
    var textArea = document.getElementById("textarea");
    
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";

    
}

function boring() {
    var textArea = document.getElementById("textarea");
    
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}
function moo() {
    var textArea = document.getElementById("textarea");
    var text = textArea.value.toUpperCase();
    var parts = text.split(".");
    textArea.value = parts.join("-Moo.");
}