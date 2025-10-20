function generatePoem(event){
  event.preventDefault();
  //alert("Hello");
  let poemElement = document.querySelector("#poem");
  new Typewriter('#poem', {
  strings: "La tombe dit à la rose",
  autoStart: true,
  delay:30,
  cursor:"",
});
}

let formElement = document.querySelector("#poem-generator-form");
formElement.addEventListener("submit",generatePoem);