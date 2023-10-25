let buttons = document.querySelectorAll(".collapse");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let response = this.nextElementSibling;
    if (response.style.maxHeight){
        response.style.maxHeight = null;
    } else {
        response.style.maxHeight = response.scrollHeight + "px";
    } 
  });
}