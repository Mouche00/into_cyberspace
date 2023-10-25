const regex = {
    name: /^[a-z\d ]{5,12}$/i,
    email: /^([a-z\d\.-]+)@([a-z-]+)\.([a-z]{1,3})(\.[a-z]{1,3})?$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).{8,}$/,
    telephone: /^(06)[\d]{8}$/,
}

let inputs = document.querySelectorAll('input');

function validate(input, regex) {
    if(regex.test(input.value)){
        input.className = 'valid';
        input.nextElementSibling.style.display = "none";
    } else {
        input.className = 'invalid';
        input.nextElementSibling.style.display = "block";
    }
}

inputs.forEach(input => input.addEventListener(
  'focusout', function(event) {
    validate(event.target, regex[event.target.attributes.name.value])
  }
));



  