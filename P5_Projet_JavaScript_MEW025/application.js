const enseignent= document.getElementById('enseign')
const salles= document.getElementById('salles')
const classes= document.getElementById('classes')
const modules= document.getElementById('modules')
const mesListes= document.getElementById('mesListes')
const dark_mode_toggle=document.querySelector('.dark_mode')
const contener_droit=document.querySelector('.contener_droit')
const jour_1=document.querySelectorAll('.jour_1')
const onglet=document.querySelectorAll('.onglet')
const contener=document.querySelector('.contener')
const search= document.getElementById('search')
//const plus= document.getElementById('plus')
const jour_3= document.getElementById('jour_3')
const formul=document.querySelector('.contenere')
//const chronogramme = document.querySelector('.chronogramme')

// const liste_enseignants = ['Enseignent','ALi', 'Mbaye', 'Ndoye', 'Baila', 'Sekouba'];
const liste_enseignants = [
  { nom: 'Ali',matricule: '20' },
  { nom: 'Mbaye', matricule: '21' },
  { nom: 'Ndoye', matricule: '22' },
  { nom: 'Baila', matricule: '23'},
  { nom: 'Sekouba', matricule: '24'}
]
const liste_salles=[
    {nom:'101' , capacité:'25'},
    {nom:'102' , capacité:'25'},
    {nom:'103' , capacité:'25'},
    {nom:'104' , capacité:'40'},
    {nom:'incub' , capacité:'40'}

]

const liste_classes=[
    {nom:'L2 GLRS A' , Effectif:'25'},
    {nom:'L2 GLRS B' , Effectif:'25'},
    {nom:'L2 ETSE' , Effectif:'25'},
    {nom:'L1 A' , Effectif:'25'},
    {nom:'IAGE B' , Effectif:'25'},
    {nom:'L2 CDSD' , Effectif:'25'},

]
const liste_modules=[
    {nom:'Algo'},
    {nom:'Python'},
    {nom:'PHP'},
    {nom:'LC'},
    {nom:'JavaScript'},
    {nom:'Java'}

]

//const liste_salles=['Salles','101','102','103','104','incub']
//const liste_classes=['Classes','L2 GLRS A','L2 GLRS B','L2 ETSE','L1 A','IAGE B','L2 CDSD']
//const liste_modules=['Modules','Algo','Python','PHP','LC','JavaScript','Java']





enseignent.addEventListener('click', () => {
    enseignent.style.backgroundColor= 'rgb(56, 90, 240)'
    salles.style.backgroundColor= '#5F5F5F'
    classes.style.backgroundColor= '#5F5F5F'
    modules.style.backgroundColor= '#5F5F5F'
    mesListes.innerHTML=''

    liste_enseignants.forEach(enseignant => {
        const option = document.createElement('option');
        option.value = enseignant.nom;
        option.textContent = enseignant.nom;
        mesListes.appendChild(option);
      });
    });
salles.addEventListener('click', () => {
    mesListes.className='salle'
    enseignent.style.backgroundColor='#5F5F5F'
    salles.style.backgroundColor= 'rgb(10, 236, 149)'
    classes.style.backgroundColor= '#5F5F5F'
    modules.style.backgroundColor= '#5F5F5F'
    mesListes.innerHTML=''

    liste_salles.forEach(salle=>{
        const option=document.createElement('option');
        option.value=salle.nom;
        option.textContent = salle.nom;
        mesListes.appendChild(option)
    });

    });

classes.addEventListener('click', () => {
    mesListes.className='classes'
    enseignent.style.backgroundColor='#5F5F5F'
    salles.style.backgroundColor= '#5F5F5F'
    classes.style.backgroundColor= 'orange'
    modules.style.backgroundColor= '#5F5F5F'
    mesListes.innerHTML=''

    liste_classes.forEach(classe=>{
        const option=document.createElement('option');
        option.value=classe.nom;
        option.textContent=classe.nom;
        mesListes.appendChild(option);
    })

    });

modules.addEventListener('click', () => {
    enseignent.style.backgroundColor='#5F5F5F'
    salles.style.backgroundColor= '#5F5F5F'
    classes.style.backgroundColor= '#5F5F5F'
    modules.style.backgroundColor= 'red'
    mesListes.innerHTML=''

    liste_modules.forEach(module=>{
        const option=document.createElement('option');
        option.value=module.nom;
        option.textContent=module.nom;
        mesListes.appendChild(option);
    })

    });
    




    
// dark mode
dark_mode_toggle.addEventListener('change',function(){

    const body= document.body;

    if (dark_mode_toggle.checked){
        body.style.backgroundColor='#F3F3F3'
        contener_droit.style.backgroundColor='#EFAFB0'
        contener.style.backgroundColor='#B7C3CC'
        search.style.backgroundColor='#DAE1E4'
        onglet.forEach(oglt=>{
            oglt.style.backgroundColor='#DAE1E4'
        })
        jour_1.forEach(jour=>{
            jour.style.backgroundColor='#EFAFB0'
        })
        // const essai= document.createElement('div')
        // body.appendChild(essai)
        // body.classList.aad('dark');
    }else{
        body.style.backgroundColor='#5F5F5F'
        contener_droit.style.backgroundColor='#1f1d1d'
        contener.style.backgroundColor='#403D3E'
        search.style.backgroundColor='#5F5F5F'
        onglet.forEach(oglt=>{
            oglt.style.backgroundColor='#5F5F5F'
        })
        jour_1.forEach(jour=>{
            jour.style.backgroundColor='#1f1d1d'
        })
    }
    
})

// var plusElements = document.querySelectorAll("#plus");

// // Parcourir chaque élément "plus" et ajouter l'événement click
// plusElements.forEach(function(plusElement) {
    document.getElementById('plus_1').addEventListener('click', () => {
        if(document.querySelector(".classes").selectedIndex !== -1){
            formul.style.display="block";
            creer_cours(1);
        } else {
            alert('Sélectionnez une classe');
        }
    });

    document.getElementById('plus_2').addEventListener('click', () => {
        if(document.querySelector(".classes").selectedIndex !== -1){
            formul.style.display="block";
            creer_cours(2);
        } else {
            alert('Sélectionnez une classe');
        }
    });
    document.getElementById('plus_3').addEventListener('click', () => {
        if(document.querySelector(".classes").selectedIndex !== -1){
            formul.style.display="block";
            creer_cours(3);
        } else {
            alert('Sélectionnez une classe');
        }
    });
    document.getElementById('plus_4').addEventListener('click', () => {
        if(document.querySelector(".classes").selectedIndex !== -1){
            formul.style.display="block";
            creer_cours(4);
        } else {
            alert('Sélectionnez une classe');
        }
    });
    document.getElementById('plus_5').addEventListener('click', () => {
        if(document.querySelector(".classes").selectedIndex !== -1){
            formul.style.display="block";
            creer_cours(5);
        } else {
            alert('Sélectionnez une classe');
        }
    });
    document.getElementById('plus_6').addEventListener('click', () => {
        if(document.querySelector(".classes").selectedIndex !== -1){
            formul.style.display="block";
            creer_cours(6);
        } else {
            alert('Sélectionnez une classe');
        }
    });

function creer_cours(jour){
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();

 
        // Récupérer les valeurs sélectionnées dans les champs du formulaire
        var moduleSelected = document.getElementById("nom_module").value;
        var enseignantSelected= document.getElementById("Enseignents").value;
        var heure_debSelected= document.getElementById("Heure_debut").value;
        var heure_finSelected = document.getElementById("Heure_fin").value;
        var salle_Selected = document.getElementById("Salles").value;
        var classe_Selected= document.querySelector(".classes").value

        var cours = {
            module: moduleSelected,
            enseignant: enseignantSelected,
            heureDebut: heure_debSelected,
            heureFin: heure_finSelected,
            salle: salle_Selected,
            classe: classe_Selected
        };
        // Stocker les données du cours dans le localStorage
        localStorage.setItem("cours", JSON.stringify(cours));

        // Récupérer les cours existants pour l'enseignant sélectionné
        var coursExistants = localStorage.getItem(enseignantSelected);
        if (coursExistants) {
            // Si des cours existent déjà, les ajouter au tableau existant
            coursExistants = JSON.parse(coursExistants);
            coursExistants.push(cours);
            localStorage.setItem(enseignantSelected, JSON.stringify(coursExistants));
        } else {
            // Si c'est le premier cours pour cet enseignant, créer un nouveau tableau avec ce cours
            localStorage.setItem(enseignantSelected, JSON.stringify([cours]));
        }
   
        const plan= document.createElement('div');
        plan.className='essaie';
        const ma_classe=document.createElement('div')
        const ma_module=document.createElement('div')
        const ma_salle=document.createElement('div')
        ma_classe.innerText= classe_Selected
        ma_classe.className='Lib_1'
        ma_salle.innerText= salle_Selected
        ma_salle.className='Lib_1'

        ma_module.innerText= moduleSelected
        ma_module.className='Lib'

        var heureDebut = parseInt(heure_debSelected);
        var heureFin = parseInt(heure_finSelected);
        var duree = (heureFin - heureDebut) * 10 ; // par heure
        var marge= (heureDebut-8)*10

        // Définir la largeur de l'élément plan
        plan.style.width = duree + '%';

        plan.style.marginLeft = marge + '%'; // Appliquer une marge gauche 

        var chronogramme = document.getElementById('chronogramme_' + jour);
        plan.appendChild(ma_classe)
        plan.appendChild(ma_module)
        plan.appendChild(ma_salle)
        chronogramme.appendChild(plan)
        
               
        formul.style.display="none"

        
        
    });

}


function afficher_cours(enseignant,jour) {
    // Récupérer les cours du localStorage pour l'enseignant spécifié
    var cours = localStorage.getItem(enseignant);
    if (cours) {
        cours = JSON.parse(cours);
        //const jour_1 = document.getElementById("jour-1"); // Modifier l'ID de la div pour correspondre à votre structure HTML

        // Parcourir les cours pour créer les rectangles visuels dans l'interface utilisateur
        for (var i = 0; i < cours.length; i++) {
            var module = cours[i].module;
            var salle = cours[i].salle;
            var heureDebut = parseInt(cours[i].heureDebut);
            var heureFin = parseInt(cours[i].heureFin);
            var duree = (heureFin - heureDebut) * 10;
            var marge = (heureDebut - 8) * 10;

            const plan = document.createElement('div');
            plan.className = 'essaie';
            const ma_classe = document.createElement('div');
            const ma_module = document.createElement('div');
            const ma_salle = document.createElement('div');
            ma_classe.innerText = "Classe : " + cours[i].classe;
            ma_module.innerText = "Module : " + module;
            ma_salle.innerText = "Salle : " + salle;
            plan.appendChild(ma_classe);
            plan.appendChild(ma_module);
            plan.appendChild(ma_salle);
            plan.style.width = duree + '%';
            plan.style.marginLeft = marge + '%';
            var chronogramme = document.getElementById('chronogramme_' + jour);
            chronogramme.appendChild(plan);
        }
    }
}


//console.log(afficher_cours('Mbaye','3'))


