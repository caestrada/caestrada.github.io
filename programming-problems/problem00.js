/*
  1. Implement the hide password you normally see on mobile password inputs.

  ex.
    p
    *a
    **s
    ***s
    ...
    *******d

  NOTE: The visible character must hide after 2 seconds of it being shown.
*/

let asyncUpdater;
const passwordParser = () => {
  asyncUpdater = setTimeout(() => {
    let toHide = document.querySelector("#password");
    toHide.value = "*".repeat(toHide.value.length);
  }, 2000);
};

let input = document.querySelector("#password");
input.addEventListener("keydown", (event) => {
  clearTimeout(asyncUpdater);
  let newWord = event.target.value;
  if (newWord.length > 0) {
    input.value = "*".repeat(newWord.length);
  }
  passwordParser();
});