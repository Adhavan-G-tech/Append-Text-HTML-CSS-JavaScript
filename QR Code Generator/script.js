const qrText = document.getElementById("qr-text");
const generateBtn = document.getElementById("generate-btn");
const qrBox = document.getElementById("qr-box");

generateBtn.addEventListener("click", () => {
  const text = qrText.value.trim();

  qrBox.innerHTML = ""; 

  if (text === "") {
    alert("Please enter text or URL!");
    return;
  }

  new QRCode(qrBox, {
    text: text,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
  });
});
