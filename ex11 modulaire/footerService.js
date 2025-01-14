export function renderFooter(){
    const monFooter = document.querySelector('footer');
    const date1 = new Date();    

    const titreFooter = document.createElement('p');

    titreFooter.innerText = date1.getMinutes();

    monFooter.append(titreFooter);
}