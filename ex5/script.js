// * Mini test pour capter event du Clavier
// document.addEventListener('keyup', function(eventClavier){
//     console.log('Yes Moi ECRIRE');
//     console.log(eventClavier);
//     console.log(eventClavier.key);
// });

//! L'ECRITURE S'AFFICHE LA OU LE VEUT
const recup = document.querySelector('textarea');
recup.cols = '40';
recup.rows= '8';
const para = document.querySelector('p');

para.innerText = recup.value;
localStorage.getItem("monSuperTexte");

recup.addEventListener('keyup',function(){  
    localStorage.setItem("monSuperTexte", recup.value); // je récupere la dernière valeur de recup
    para.innerText = recup.value;
})





//! MARKED
// const p =document.createElement('p')
// const body=document.body

// const input = document.createElement('textarea')
// input.type='textarea'
// input.cols='40'
// input.rows='8'
// body.appendChild(input)

// const div =document.createElement('div')
// div.style.background='lightblue'
// body.appendChild(div)

// input.addEventListener('keyup', function(eventClavier){
//     let kebab =marked(input.value);
//     p.innerHTML=`Le mot de passe est : ${kebab}`
//     div.appendChild(p)
// });



