const api = document.querySelector('.apiRandom');

const contactApi = async () =>{
    const reponse = await fetch ('https://randomuser.me/api/');
    console.log(reponse);
    console.log(reponse.ok);
    console.log(reponse.status)

    const dataTransformed = await reponse.json();
    console.log(dataTransformed);
    console.log(dataTransformed[0]);

const user = dataTransformed.results;
console.log(user);
        let container = document.createElement('div');
        let photo = document.createElement('img');
        let nom = document.createElement('h1');
        let email = document.createElement('p');
        let adresse= document.createElement('p');
        let telephone = document.createElement('p');
        let randomUser = document.createElement('button');

    photo.src = dataTransformed.results[0].picture.large;
    nom.innerText =dataTransformed.results[0].name.title +" " + dataTransformed.results[0].name.first +" " + dataTransformed.results[0].name.last;  
    email.innerText =dataTransformed.results[0].email;
    adresse.innerText="Adress: " + dataTransformed.results[0].location.street.number +" " + dataTransformed.results[0].location.street.name + " ( " + dataTransformed.results[0].location.city +" " + dataTransformed.results[0].location.country + " )";
    telephone.innerText="Phone " + dataTransformed.results[0].phone;
    
   

    container.style.backgroundColor = '#cfe3ff';
    container.style.border= 'solid black 1px';
    container.style.borderRadius= '2px';
    container.style.textAlign= 'center';
    container.style.width= 'auto';
    container.style.margin= '10% 20%';
    container.style.padding= '20px 5px';
        
    
    randomUser.innerText='Random User'
    randomUser.style.backgroundColor = '#0d6efd';
    randomUser.style.color = 'white';
    randomUser.style.height = '30px';
    randomUser.style.width = '100px';

    randomUser.addEventListener('click', () =>{
        contactApi();
    })
   
        api.append(container);
        container.append(photo)
        container.append(nom);   
        container.append(email)
        container.append(adresse);
        container.append(telephone)
        container.append(randomUser);
}
contactApi();