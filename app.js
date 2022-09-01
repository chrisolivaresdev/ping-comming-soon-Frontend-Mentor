let inputEmail = document.getElementById('email');
let submitButton= document.getElementById('submit');
let error = document.getElementById('error');

submitButton.addEventListener('click', ($event) =>{
    $event.preventDefault()
    validateEmail(inputEmail.value)
    });

   function validateEmail(email){
        let expReg = /@/;
        if(!expReg.test(email)) {
            error.style.setProperty("visibility", "visible"); 
            inputEmail.style.setProperty("border-color", "var(--Light-Red)");
        } else{
            error.style.setProperty("visibility", "hidden"); 
            inputEmail.style.setProperty("border-color", "var(--Pale-Blue)");
            inputEmail.value = '';
        }
    }