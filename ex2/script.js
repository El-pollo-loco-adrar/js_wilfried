// //TODO : Pourquoi ca beug ?
// let wtf = 9;
// function buggyFunction() {
//     // let wtf = 9;
//     console.log(wtf);
// }; 
// buggyFunction();
// console.log(wtf);

//TODO : Pourquoi ca beug / Pourquoi ca marche pas ?
// let something = 44;
function functionBugParent() {
    let something = 9;
    console.log(something);
    // console.log(lesNews);
};

function functionBugEnfant() {
   let lesNews = `il est 99h67`;
   console.log(lesNews);
    };

functionBugParent();
// console.log(something);
functionBugEnfant();