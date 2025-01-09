// //! EXO 20.1 
// //TODO: via JS afficher le profil  utilisateur dans la page web
// const userData = {
//     name: 'John delavega',
//     email: 'john.doe@example.com',
//     age: 25,
//     dob: '08/02/1989',
//     active: true,
//     img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
//   };


// const maDiv = document.querySelector("#elementVide");
// maDiv.style.border = 'solid', '4px';
// maDiv.style.backgroundImage= 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)';
// maDiv.style.width = '100%';
// maDiv.style.display ='flex';
// maDiv.style.flexDirection ='column';
// maDiv.style.color = 'white';

// console.log(maDiv);

// const nom = document.createElement('h1');
// nom.innerText = userData.name;
// nom.style.textAlign= 'center';


// const mail = document.createElement('h2');
// mail.innerText = userData.email;
// mail.style.textAlign= 'center';


// const age = document.createElement('h3');
// age.innerText = userData.age;
// age.style.textAlign= 'center';


// const birth = document.createElement('h4');
// birth.innerText = userData.dob;
// birth.style.textAlign= 'center';


// const actif = document.createElement('h5');
// actif.innerText = userData.active;
// actif.style.textAlign= 'center';


// const image = document.createElement('img');
// image.src = userData.img;
// image.style.width = '200px';
// image.style.margin = 'auto';
// image.style.marginTop = '10px';


// maDiv.append(image, nom, mail, age, birth, actif);

const titr1 = document.querySelector("#mainTitle");

titr1.addEventListener('click', () =>{
    titr1.innerText = "--😍--";
});
let selectTitle = false;

if (selectTitle){
    titr1.innerText = "--😍--"
}else{
    titr1.innerText = 'D.O.M Events'
};




