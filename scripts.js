const gameForm = document.getElementById('gameForm');

const getObject = {
    name: '',
    email: '',
    age: 0,
}


function submitGameForm() {
    getObject.name = document.getElementById('name').value;


    getObject.email = document.getElementById('email').value;


    getObject.age = document.getElementById('age').value


  console.log(getObject.name, getObject.email, getObject.age);
  

  let nameVelue = document.getElementById('nameValue');
  nameVelue.innerText = getObject.name;

  let emailVelue = document.getElementById('emailValue');
  emailVelue.innerText = getObject.email;

  let ageVelue = document.getElementById('ageValue');
  ageVelue.innerText = getObject.age;

  if(getObject.age >= 20){ 
    getObject.age = getObject.age * 5;
 } else {
    getObject.age = getObject.age * 2;
 }
 
  let pointValue = document.getElementById('pointValue');
    pointValue.innerText = getObject.age;
}


gameForm.addEventListener('submit', function(event) {
  event.preventDefault();
  submitGameForm();
  this.reset();
});

