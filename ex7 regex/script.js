const mail = document.getElementById("email");
console.log(mail)
const messError = document.querySelector('p');
const mdp = document.getElementById("password");
console.log(mdp);

const chiffreCourt = document.getElementById('chiffre');
const caractereSpec = document.getElementById('special');
const lenghtError = document.getElementById('longueur');

const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/; // renvoie vrai ou faux

mail.addEventListener('keyup', () =>{
    if (regexMail.test(mail.value)){
        mail.style.border = 'solid 2px green';
        mail.style.backgroundColor = 'green';
        messError.style.display= 'none';
    } else{
        mail.style.border = 'solid 2px red';
        mail.style.backgroundColor = 'red';
        messError.style.display= 'block';
    }
})



const charDecimal = /\d/;
const charSpecial = /[$&@!]/;

mdp.addEventListener('keyup',()=>{
    if(mdp.value.length <6){
        lenghtError.style.display = 'block'
    } else if (mdp.value.length >6){
        lenghtError.style.display = 'none'
    }
    if (mdp.value.match(charDecimal) && (mdp.value.match(charSpecial))){
        chiffreCourt.style.display= 'none';
        mdp.style.border = 'solid 2px green';
        if( mdp.value.match(charSpecial)){
            caractereSpec.style.display= 'none';
        }
    } else{
        mdp.style.border = 'solid 2px red';
        caractereSpec.style.backgroundColor = 'red';
        lenghtError.style.backgroundColor = 'red';
        chiffreCourt.style.backgroundColor = 'red';
    }
})

// passwordInput.addEventListener('keyup',()=>{
//     const charDecimal = /\d/;
//     const charSpecial = /[$&@!]/;
//     let errorMessage ='';
//     // Si MDP <6 alors dans errormessage on cumule une <li></li> (trop court)
//     // Sinon Si MDP >8 alors dans errormessage on cumule une <li></li> (trop long)
//     // Si la value du passWord ne match pas la regex decimale alors on cumule une <li></li> (faut un chiffre)
//     // etc ... meme système pour les autres cas 
//     // On peut aussi faire un truc genre si erroMessage est vide alors c'est tout bon 
//     if(passwordInput.value.length<6){
//       errorMessage+='<li>Le Mot de passe trop COURT</li>'
//     }
//     else if(passwordInput.value.length>8){
//       errorMessage+='<li>Le Mot de passe trop LONG</li>'
//     }
  
//     if(!passwordInput.value.match(charDecimal)){
//       errorMessage+='<li>Le Mot de passe doit contenir 1 chiffre</li>'
//     }
//     if(!passwordInput.value.match(charSpecial)){
//       errorMessage+='<li>Le Mot de passe doit contenir 1 caractère spécial (@,&,!,$,)</li>'
//     }
//     if(errorMessage!==''){
//       userMessage.innerHTML = `le mot de passe est : <ul>${errorMessage}</ul>`;
//       userMessage.style.border ='5px solid red'
//     }
//     else{
//       userMessage.innerHTML = 'Le mot de passe est valide ! 👍';
//       userMessage.style.border ='5px solid green'
//     }



