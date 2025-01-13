export function renderFooter(){
    const monFooter = document.querySelector('footer');
    const date1 = newDate();    

    const titreFooter = document.createElement('p');

    titreFooter.innerText = date1.getFullYear();

    monFooter.append(titreFooter);
}