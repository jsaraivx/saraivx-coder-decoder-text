//RULES OF CODIFICATION
// "e" == "enter"
// "i" == "imes"
// "a" == "ai"
// "o" == "ober"
// "u" == "ufat"
function encryptText(inputedText) {
  textInputed = document.getElementById("inputText").value;
  codedText = textInputed;
  codedText = codedText.replaceAll("e", "enter");
  codedText = codedText.replaceAll("i", "imes");
  codedText = codedText.replaceAll("a", "ai");
  codedText = codedText.replaceAll("o", "ober");
  codedText = codedText.replaceAll("u", "ufat");
  console.log(`the decoded text is: ${codedText}`);
  //codification output area and inject HTML
  document.getElementById("returnArea").innerHTML = codedText;
  resultText = codedText;
  return resultText;
}
function hideImage() {
  imagenotext = document
    .getElementById("imgNoText")
    .setAttribute("hidden", " ");
}
function unencryptText(encryptedText) {
    
  textInputed = document.getElementById("inputText").value;
  //codification area
  decodedText = textInputed;
  decodedText = decodedText.replaceAll("enter", "e");
  decodedText = decodedText.replaceAll("imes", "i");
  decodedText = decodedText.replaceAll("ai", "a");
  decodedText = decodedText.replaceAll("ober", "o");
  decodedText = decodedText.replaceAll("ufat", "u");
  console.log(`the decoded text is: ${decodedText}`);
  //codification output area and inject HTML
  document.getElementById("returnArea").innerHTML = decodedText;
  resultText = decodedText;
  return resultText;
}
function copyToClipboard() {
  let textResulted = document.getElementById("inputText").value;
  textResulted.select();
  textResulted.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textResulted.value);
  alert("");
}

function copyButton() {
  //show copy button
  //buttonCopy = document.getElementById('copyClipboard').removeAttribute('hidden');
}
