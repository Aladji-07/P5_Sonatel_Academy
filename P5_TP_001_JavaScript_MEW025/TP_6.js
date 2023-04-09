

//console.log(maintenant,nouvelleAn,difference)

const jourRest=document.querySelector('.jour')
const heureRest=document.querySelector('.heure')
const minutesRest=document.querySelector('.minute')
const secondeRest=document.querySelector('.seconde')


function chrono(){
    const maintenant = new Date().getTime();
    const nouvelleAn= new Date('January 1 ,2024').getTime();
    const difference= nouvelleAn - maintenant;

    const jour= Math.floor(difference/(1000*3600*24))
    const heure=Math.floor((difference %(1000*3600*24))/(1000*3600))
    const minute=Math.floor(((difference %(1000*3600*24))%(1000*3600))/(1000*60))
    const seconde=Math.floor((((difference %(1000*3600*24))%(1000*3600))%(1000*60))/1000)

    jourRest.innerText=jour;
    heureRest.innerText=heure;
    minutesRest.innerText=minute;
    secondeRest.innerText=seconde;
}

const intervalle= setInterval(()=>{
    chrono();
},1000);