const resultElt = document.getElementById('result');
const longueurElt  = document.getElementById('longeurID') ;
const lettre_majElt =document.getElementById('lettre_majID');
const genererElt= document.getElementById('genererID');
const lettre_minElt =document.getElementById('lettre_minID');
const nombresElt =document.getElementById('nombresID');
const symbolesElt =document.getElementById('symbolesID');
const modifier=document.getElementById('modifier');

function GenererMotDePass(){
    const longueur= longueurElt.value;
    const contient_maj=lettre_majElt.checked;
    const contient_min=lettre_minElt.checked;
    const contient_nombres=nombresElt.checked;
    const contient_symboles=symbolesElt.checked;

    let charset = '';
    if (contient_maj) {
      charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (contient_min) {
      charset += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (contient_nombres) {
      charset += '0123456789';
    }
    if (contient_symboles) {
      charset += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    }
    let password = '';
    for (let i = 0; i < longueur; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }

function isCriteriaChecked() {
  return lettre_majElt.checked || lettre_minElt.checked || nombresElt.checked || symbolesElt.checked;
}
 
genererElt.addEventListener('click',()=>{

    resultElt.innerText=GenererMotDePass()
}
);
lettre_majElt.addEventListener('change',()=>{
  if (isCriteriaChecked()) {
    genererElt.disabled = false;
  } else {
    genererElt.disabled = true;
  }
})
lettre_minElt.addEventListener('change',()=>{
  if (isCriteriaChecked()) {
    genererElt.disabled = false;
  } else {
    genererElt.disabled = true;
  }
})
nombresElt.addEventListener('change',()=>{
  if (isCriteriaChecked()) {
    genererElt.disabled = false;
  } else {
    genererElt.disabled = true;
  }
})
symbolesElt.addEventListener('change',()=>{
  if (isCriteriaChecked()) {
    genererElt.disabled = false;
  } else {
    genererElt.disabled = true;
  }
})


// function copyText() {
//   var text = GenererMotDePass()
//   navigator.clipboard.writeText(text);
//   alert("Le texte a été copié !");
// }





modifier.addEventListener('click',()=>{
  var text = resultElt.innerText
  navigator.clipboard.writeText(text);
  alert(" Le texte a été copié !");

})









// // creation de fonctions permettant de generer de lettres_miniscucles

// function gen_lettre_miniscule(){

//     return String.fromCharCode(Math.floor(Math.random()*26)+97)

// }

// function gen_lettre_Majuscule(){

//     return String.fromCharCode(Math.floor(Math.random()*26)+65)

// }
// function gen_chiffre(){

//     return String.fromCharCode(Math.floor(Math.random()*10)+48)

// }

// function gen_caractere_speciaux(){
//     let caractere= '@#{][|^}&~;,?./:!§%*£$¨^'
//     return caractere[Math.floor(Math.random()*caractere.length)]

// }




// console.log(gen_caractere_speciaux());
