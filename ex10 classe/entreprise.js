class Employee {
    constructor(nom, prenom, age, salaireMensuel) {
// TODO 
        this._nom = nom;
        this._prenom = prenom;
        this._age = age;
        this._salaire = salaireMensuel;
        this._cout = this.getCout();
        this._coutTotalEmploye = this.calculCout();
    }
    // me servira à passer le cout d 1 employé dans la classe PME
    getCout() {
        // TODO
        return this._coutTotalEmploye;
    }
    //calcul cout total d 1 salarié
    calculCout() {
        //TODO
        const NbMois = 12;
        const taxes = 0.9;
        return this._salaire * NbMois * (1+taxes) ;
    }
}

class Pme {
    // 
    constructor(nom, equipe, ventes, coutsFixes, achats) {
     //TODO
     this._eNom = nom;
     this._eEquipe = equipe;
     this._eVentes = ventes;
     this._eCoutsFixes = coutsFixes;
     this._eAchats = achats;
    }

    bilanCalculed() {
      //TODO
      console.log(`Ma petite entreprise - : Cout Initial : ${this._eCoutsFixes + this._eAchats}`)
      console.log(`Ma petite entreprise - : Cout Total Equipe :`)
      console.log(`Ma petite entreprise - : Ventes ${this._eVentes}`)
      console.log(`Ma petite entreprise - : BILAN : `)
    
    }
}
const pme = new Pme(
    //Le nom entreprise
    "Ma Petite Entreprise - ",
    //L'equipe de salariés (un tableau)
    [new Employee("Duval", "Paul", 30, 2000),
    new Employee("Durand", "Alain", 40, 3000),
    new Employee("Dois", "Sylvia", 50, 4000),],
    //le revenu , frais fixe, frais d'achat
    300000,
    20000,
    50000);

pme.bilanCalculed();