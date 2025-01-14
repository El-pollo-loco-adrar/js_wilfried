const cardMeteo = document.querySelector('.cardMeteo');
const button = document.querySelector('button');

let info = document.createElement('div');
info.style.height = '300px';
info.style.width = '200px';
info.style.margin = '16px 0px';
info.style.border = 'solid grey 3px'
info.style.padding = '16px 12px 12px 24px'

cardMeteo.insertBefore(info, button);

function addInfo(texte){
    info.textContent+= texte;
}
// addInfo('bonjour')
function bouton(){
    button.classList.add('button__cardMeteo');
}

button.addEventListener('mousedown', function(){
    button.style.backgroundColor= 'orange'
})

window.addEventListener('mouseup', function(){
    button.style.backgroundColor= 'cornflowerblue';
})

button.addEventListener('click', async function(){
    const apiMeteo = await fetch('https://prevision-meteo.ch/services/json/toulouse');
    const data = await apiMeteo.json();
    console.log(data);

    const condition = data.current_condition.condition;
    const temperature = data.current_condition.tmp;
    const tempMax = data.fcst_day_0.tmax;
    const tempMin = data.fcst_day_0.tmin;

    if (info) info.textContent = ''/*Si info est vide, alors affiche les infos*/
    info.append(`Aujourd'hui le temps est ${condition}, `);
    info.append(`et la température est de ${temperature}°C`);
    info.append(`T° Max = ${tempMax} -`);
    info.append(`T° Min = ${tempMin}`);
    })