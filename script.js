const inputText = document.getElementById("inputText");
const sourceLang = document.getElementById("sourceLang");
const targetLang = document.getElementById("targetLang");
const translateBtn = document.getElementById("translateBtn");
const outputText = document.getElementById("outputText");

translateBtn.addEventListener("click", async () => {
  const text = inputText.value.trim();
  const source = sourceLang.value;
  const target = targetLang.value;

  if (text === "") {
    outputText.textContent = "Please enter text to translate.";
    return;
  }

  outputText.textContent = "Translating...";

  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${source}|${target}`;

    const response = await fetch(url);
    const data = await response.json();

    outputText.textContent = data.responseData.translatedText;
  } catch (error) {
    outputText.textContent = "Something went wrong. Please try again.";
  }
});