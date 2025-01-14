class CompteBancaire {
    constructor(nom, solde ) {
        this._nom = nom;
        this._solde = solde;

        this._solde =0;
    } 
    // Ajoute un montant au solde
    crediter(montant) {
     this._solde += montant;
     console.log(`Ajout de ${montant} pour: ${this._nom}`);
    }
    // Retirer un montant au solde
    retirer(montant) {
      if (montant <= this._solde){
        this._solde -= montant;
        console.log(`Retrait de ${montant} pour: ${this._nom}`);
      }
      else{
        console.log(`----->${this._nom}, retrait de : ${montant} refusé avec solde: ${this._solde}`)
      }
    }
    virer(montant) {
     if(this._solde >= montant){
        this._solde -= montant;
        this._solde += montant;
        console.log(`Virement de: ${montant} de: ${this._nom} vers: ${this._nom}`)
     }else{
        console.log(`${this._nom} virement refusé`)
     }
    }
    // Renvoie la description du compte
    decrire() {
        console.log(`Titulaire: ${this._nom}, solde ${this._solde}`)
    }
}

// Main, gère 3 comptes bancaires dans un tableau associatif
const lesComptes = {
    Alex: new CompteBancaire("Alex"),
    Clovis: new CompteBancaire("Clovis"),
    Marco: new CompteBancaire("Marco"),
};

// lecture tableau associatif ou Objet["truc"]
// Crédite et décrit chaque compte
for (let key in lesComptes) {
    lesComptes[key].crediter(1000);
}

// un retrait de 100 par Alex
lesComptes["Alex"].retirer(100);
// un petit virement: Marco Vire 300 à Clovis
lesComptes["Marco"].virer(300, lesComptes["Clovis"]);
// un petit retrait incorrect (doit déclencher erreur custom) : 
// Alex fait un retrait de 1200
lesComptes["Alex"].retirer(1200);
// bilan : faire une déscription de tous les comptes en console (ou DOM ?)
for (let key in lesComptes) {
    console.log(lesComptes[key].decrire());
}