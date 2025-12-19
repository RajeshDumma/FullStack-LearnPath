const head = document.createElement('h1');

head.textContent = 'heading';

document.body.append(head);
document.body.append('hey! HOW ARE YOU ');
document.body.append("Hello rajesh");

const head2 = document.createElement('h1');

head2.textContent = "paragraph";

document.body.append(head2)//
//document.body.appendChild('error message') ; // it won't work 

const para = document.createElement('div');

para.innerHTML = '<p>Inner htmp inside div </p>';
document.body.append(para);


function register() {
  const paragraph = document.getElementById("register");
  paragraph.textContent = "Your registration is completed";
  paragraph.style.color = 'green';
  
  alert("Registration is successful");
}


const btn = document.getElementById('click').addEventListener('click', () =>{
    alert('signUp button clicked');
    console.log('signUp clicked');
})