const succe = document.querySelector('.success')
const danger = document.querySelector('.danger')
const warning = document.querySelector('.warning')
const info = document.querySelector('.info')
const contenerNotif= document.querySelector('.contener_notif');

succe.addEventListener('click',()=> {
    affiche_notification("success","vert");
});
danger.addEventListener('click',()=> {
    affiche_notification("Danger","rouge");
});

info.addEventListener('click',()=> {
    affiche_notification("info","bleu");
});
warning.addEventListener('click',()=> {
    affiche_notification("warning","jaune");
});


function affiche_notification(message,couleur){
    const notification= document.createElement("div");
    notification.classList.add('notification',couleur);
    notification.innerText= message;
    contenerNotif.appendChild(notification);
    setTimeout(()=>{
    contenerNotif.removeChild(notification);   
    },1000);
}

