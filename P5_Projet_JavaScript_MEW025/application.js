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
const plus= document.getElementById('plus')

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
        option.value = enseignant;
        option.textContent = enseignant.nom;
        mesListes.appendChild(option);
      });
    });
salles.addEventListener('click', () => {
    enseignent.style.backgroundColor='#5F5F5F'
    salles.style.backgroundColor= 'rgb(10, 236, 149)'
    classes.style.backgroundColor= '#5F5F5F'
    modules.style.backgroundColor= '#5F5F5F'
    mesListes.innerHTML=''

    liste_salles.forEach(salle=>{
        const option=document.createElement('option');
        option.value=salle;
        option.textContent = salle.nom;
        mesListes.appendChild(option)
    });

    });

classes.addEventListener('click', () => {
    enseignent.style.backgroundColor='#5F5F5F'
    salles.style.backgroundColor= '#5F5F5F'
    classes.style.backgroundColor= 'orange'
    modules.style.backgroundColor= '#5F5F5F'
    mesListes.innerHTML=''

    liste_classes.forEach(classe=>{
        const option=document.createElement('option');
        option.value=classe;
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
        option.value=module;
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

plus.addEventListener('click',()=>{
    alert('merci')
})