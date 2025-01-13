export function chuck(){
    const api = document.querySelector('#titre');
    const contactApi = async () => {
        const reponse = await fetch ('https://api.chucknorris.io/jokes/random');
        // console.log(reponse)
        // console.log(reponse.ok);
        // console.log(reponse.status);

        const dataTransformed = await reponse.json();
        // console.log(dataTransformed);

        let chucky = document.createElement('h1');

        chucky.innerText = dataTransformed.value;

        api.append(chucky);
    }
    contactApi();
}