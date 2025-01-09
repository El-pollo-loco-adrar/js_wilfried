//je crée la const avec tous les p
const paragraphe = document.body.getElementsByTagName("p");
console.log(paragraphe);

//je crée un tableau avec tous les p
const tabP = Array.from(paragraphe);
console.log(tabP);

tabP.map((chgt) => {
    chgt.innerText="Hacker </G1>";
    chgt.addEventListener('click', () => {
        console.log("t'as click");   
    })
    chgt.style.color = "red";
    chgt.style.border ="solid", "4px";
    chgt.style.borderColor ="green";
    chgt.style.background= "yellow";
})

