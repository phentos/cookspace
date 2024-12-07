document.addEventListener("DOMContentLoaded", bindButtons);

function bindButtons() {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((b) => {
    b.addEventListener("click", (e) => {
      console.log("Sorry, " + this.id + " has not been implemented yet.");
    });
  });
}
