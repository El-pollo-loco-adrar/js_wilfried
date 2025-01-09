
// const api = document.querySelector('.apiPokemon');

// const contactApi = async () => {
//     const reponse = await fetch('https://pokeapi.co/api/v2/pokemon');
//     console.log(reponse);
//     console.log(reponse.ok);
//     console.log(reponse.status);
    
//     const dataTransformed = await reponse.json();
//     console.log(dataTransformed);

//     for (let i = 0; i< dataTransformed.results.length; i++){
//         let a = document.createElement('li')

//         a.innerText = dataTransformed.results[i].name;
//         api.append(a);
//     }
// }
// contactApi();

const api2 = document.querySelector('.apiPokemon2');
api2.style.backgroundColor = 'lightblue'
api2.style.display ='flex';
api2.style.flexWrap = 'wrap'


const contactApi2 = async () =>{
    const reponse2 = await fetch('https://tyradex.vercel.app/api/v1/gen/9');
    console.log(reponse2);
    console.log(reponse2.ok);
    console.log(reponse2.status);

    const dataTransformed2 = await reponse2.json();
    console.log(dataTransformed2);

    for (let i = 0; i< dataTransformed2.length; i++){
        let container = document.createElement('div'); 
        let nom = document.createElement('h2');
        let type = document.createElement('p');
        let photo = document.createElement('img');
        let poids = document.createElement('p');
        let taille = document.createElement('p');
        let voirPlus = document.createElement('button')

        nom.innerText = dataTransformed2[i].name.fr;
        type.innerText = 'Type : ';
        for (let j =0 ; j<dataTransformed2[i].types.length; j ++){
            type.innerText += dataTransformed2[i].types[j].name +' '
        }
        photo.src = dataTransformed2[i].sprites.regular;
        poids.innerText ='Poids : '+ dataTransformed2[i].weight;
        taille.innerText =' Taille :'+ dataTransformed2[i].height;
        
        api2.append(container)
        container.style.borderRadius = '2px';
        container.style.margin = '10px'
        container.style.padding = '10px'
        container.style.width = '200px';
        container.style.textAlign= 'center';
        container.style.backgroundColor = 'white';
        
        
        container.append(photo);
        photo.style.width = '150px';

        container.append(nom);
        container.append(type);
        container.append(poids);
        container.append(taille);
        container.append(voirPlus);
        voirPlus.style.height = '30px';
        voirPlus.style.width = '100px';
        voirPlus.innerText = 'Voir plus';
        voirPlus.style.backgroundColor = 'blue';
        voirPlus.style.color = 'white';
        // voirPlus.onclick = function(){
        //     window.location.href = 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHZjcXlnbmY5Zjhhd2dwZ2o0YWttMDRsdDhmcjJlaGp0NnEzNDRkcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3og0ISCUDmAgGmlOjC/giphy.gif';
        voirPlus.addEventListener('click', () => {
            window.open('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHZjcXlnbmY5Zjhhd2dwZ2o0YWttMDRsdDhmcjJlaGp0NnEzNDRkcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3og0ISCUDmAgGmlOjC/giphy.gif', '_blank');
        })
        }
}
contactApi2();