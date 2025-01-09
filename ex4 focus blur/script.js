const titre = document.querySelector('input');

titre.addEventListener('focus', ()=>{
    titre.style.backgroundColor = 'royalBlue'
    titre.style.color = 'white'
});

titre.addEventListener('blur', ()=>{
    titre.style.backgroundColor = 'white'
    titre.style.color = 'black'
});

// function focusInput(){
//     const titre = document.querySelector('input');
//     titre.focus()
// }
