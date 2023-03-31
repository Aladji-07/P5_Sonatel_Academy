

function ajouter_element(){
  const zone_bleu = document.getElementById("bloc_bleu");
  const div = document.createElement('div');
  const header= document.createElement('header');
  const textarea = document.createElement('textarea');
  // textarea.disabled= true;
  const icon_1= document.createElement('img');
  const icon_2= document.createElement('img');

  icon_1.src="delete.svg";
  icon_2.src="modif.svg";
  icon_1.className='delete';
  icon_2.className='modif';



  textarea.className='text';
  header.className='vert';
  div.className='element';

  div.appendChild(header);
  header.appendChild(icon_1)
  header.appendChild(icon_2)
  div.appendChild(textarea)
  zone_bleu.appendChild(div);
}
document.addEventListener("click", function(){
  list= document.querySelectorAll(".element")
  list.forEach(function (element){
    del=element.querySelector('.delete')
    del.addEventListener("click",function(){
      element.remove()
    })
  })
})

