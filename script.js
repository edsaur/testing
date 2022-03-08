

// declare and call the document in markup
let button = document.querySelector("#pressMe");
let audio = document.querySelector("audio")
let text = [
  "May virus na device mo dejk",

  "Pero I just want you to know...", 

"You are so special to me", 

"I want you beside me right now...", 

"And cuddle and smudge you kiss.", 

"Also, just keep on doing the things you are doing!!",

"I believe in you", "and PROUD of YOU!!",

"Just keep on smiling.",

"I fucking love you"];

let counter = 0;
let h1 = document.querySelector(".textOne")
let inst = setInterval(message, 3000);
// have a function that will take button to automatically play music and present text


function play() {
  button.addEventListener("click", function() {
      inst
      audio.play();

     
  })
}

function message() {
  h1.textContent = text[counter];
  console.log(counter)
  console.log(text.length.toString());
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}
play();
