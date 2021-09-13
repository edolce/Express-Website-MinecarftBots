let activeBotName='test';


document.getElementById("console_input")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.key === "Enter") {

            let consoleText = document.getElementById("console_input").value
            document.getElementById("console_input").value=''
            consoleCommand(consoleText)

        }
    });

function consoleCommand(consoleText){
    var paragraph =document.getElementById('console')
    var text = document.createTextNode('\n'+activeBotName+'>'+consoleText);
    paragraph.appendChild(text);
    var objDiv = document.getElementById("console");
    objDiv.scrollTop = objDiv.scrollHeight;
}
