function changeColor(color) {
    document.body.style.backgroundColor = color;
    }

const form = document.getElementById('feedback-form');
console.log(form)

form.addEventListener('submit', function (event) {

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');


if (nameInput.value === '' || emailInput.value === '' || phoneInput.value
=== '') {
event.preventDefault(); 
window.console.log('Пожалуйста, заполните все поля!'); 
}
});

/* modal_window start */
function openModal() {
    let modal = document.getElementById("myModal");
    let span = document.getElementsByClassName("close")[0];

    modal.style.display= "block";

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event ) {
    if(event.target == modal){
    modal.style.display= "none";
     }
   }
 }


