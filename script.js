//RULES OF CODIFICATION
// "e" == "enter"
// "i" == "imes"
// "a" == "ai"
// "o" == "ober"
// "u" == "ufat"

function encryptText(inputedText)
{
    textInputed = document.getElementById('inputText').value;
    codedText = textInputed;
    codedText = codedText.replaceAll('e', 'enter');
    codedText = codedText.replaceAll('i', 'imes');
    codedText = codedText.replaceAll('a', 'ai');
    codedText = codedText.replaceAll('o', 'ober');
    codedText = codedText.replaceAll('u', 'ufat');
    console.log(`the decoded text is: ${codedText}`);
    //codification output area and inject HTML 
    document.getElementById('returnArea').innerHTML = codedText;
}

function unencryptText(encryptedText)
{    
    //codification area
    textInputed = document.getElementById('inputText').value;
    decodedText = textInputed;
    decodedText = decodedText.replaceAll('enter', 'e');
    decodedText = decodedText.replaceAll('imes', 'i');
    decodedText = decodedText.replaceAll('ai', 'a');
    decodedText = decodedText.replaceAll('ober', 'o');
    decodedText = decodedText.replaceAll('ufat', 'u');
    console.log(`the decoded text is: ${decodedText}`);
    //codification output area and inject HTML 
    document.getElementById('returnArea').innerHTML = decodedText;
    return decodedText;
}
function copyToClipboard()
{
    let copyTextToClipboard = document.getElementById('inputText').value;
    copyTextToClipboard.select();
    copyTextToClipboard.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyTextToClipboard.value);
}

function copyButton(){ //show copy button 
    //buttonCopy = document.getElementById('copyClipboard').removeAttribute('hidden');
}