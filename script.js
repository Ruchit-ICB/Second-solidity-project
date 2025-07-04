function generateHash() {
  const input = document.getElementById('inputText').value;
  const hash = CryptoJS.SHA256(input).toString();
  document.getElementById('hashOutput').value = hash;
}
