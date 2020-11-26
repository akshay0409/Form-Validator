const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

//Show input error message
function showError(input,message){
  const formControl=input.parentElement;
  formControl.className='form-control error';
  const small=formControl.querySelector('small');
  small.innerText=message;
}
//Show success outline
function showSuccess(input){
  const formControl=input.parentElement;
  formControl.className='form-control success';
}

function isValidEmail(email){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Check required fields
function checkRequired(inputArr){
  inputArr.forEach(function(input){
    if(input.value.trim()===''){
      console.log(input.id);
      showError(input,`${getFieldName(input)} is required`);
    }else{
      showSuccess(input);
    }
  });
}
//Check Input Lenght
function CheckLenght(input,min,max){
  if(input.value.length<min){
    showSuccess(input,`${getFieldName(input)} must be alteast ${min} character`);
  }
  else if(input.value.length.max){
    showSuccess(input,`${getFieldName(input)} must be less than ${max} character`);
  }
  else{
    showSuccess(input);
  }
}






//Get fieldName (To Upeer case the first letter of the error)
function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}



//Event Listener
form.addEventListener('submit',function(e){
    e.preventDefault();

    checkRequired([username,email,password,password2]);
    CheckLength(username,3,15);
    CheckLength(password,6,25);

});