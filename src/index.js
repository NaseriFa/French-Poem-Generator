function displayPoem(response) {
  new Typewriter('#poem', {
    strings: response.data.answer,
    autoStart: true,
    delay: 25,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let userInstructionElement = document.querySelector("#user-instruction");
  // get the api-url
  let apiKey = "8d54b800a79o3a3f274ta06a2117547b";
  let prompt = `Generate a 4 line french poem with the word ${userInstructionElement.value}`;
  let context =
    "You are a romantic French poem generator. Write a short 4-line poem using simple HTML. Do not show HTML tags to the user. End with '<strong>SheCodes AI</strong>' and separate each line with a <br/>.";

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = '<span class="spinner">⌛</span>';

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let formElement = document.querySelector("#poem-generator-form");
formElement.addEventListener("submit", generatePoem);
