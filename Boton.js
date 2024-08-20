document.addEventListener('DOMContentloaded', function(){

const calificacionButtons = document.querySelectorAll('.calificacion-btn');
const SubmitButton = document.querySelector('.submit-btn');
let selectedRating = null;

calificacionButtons.forEach((button) => {
    button.addEventListener('clic', function (){
    calificacionButtons.forEach((btn) => 
    btn.classList.remove('selected'));
    this.classList.add('selected');
    selectedRating = This.textContet;
    });

    });
SubmitButton.addEventListener('clic', function(){
if(selectedRating){
    document.body.innerHTML = '';
} else {
    alert('Por favor selecciones una Calificacion');
}
});


});



