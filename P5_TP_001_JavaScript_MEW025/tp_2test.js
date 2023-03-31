// Récupérer les éléments DOM
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var moveRightBtn = document.querySelector('.move-right');
var moveLeftBtn = document.querySelector('.move-left');

// Ajouter un écouteur d'événements pour la div gauche
left.addEventListener('mouseover', function(e) {
  // Vérifier si l'élément survolé est un <p>
  if (e.target.tagName === 'P') {
    // Enlever la classe "selected" de tous les éléments
    var items = left.querySelectorAll('.items p');
    items.forEach(function(item) {
      item.classList.remove('selected');
    });
    // Ajouter la classe "selected" à l'élément survolé
    e.target.classList.add('selected');
    // Activer le bouton >>
    moveRightBtn.disabled = false;
  }
});

// Ajouter un écouteur d'événements pour le bouton >>
moveRightBtn.addEventListener('click', function() {
  // Récupérer l'élément sélectionné
  var selected = left.querySelector('.selected');
  // Si un élément est sélectionné
  if (selected) {
    // Déplacer l'élément dans la div droite
    var item = selected.cloneNode(true);
    right.querySelector('.items').appendChild(item);
    // Supprimer l'élément de la div gauche
    selected.parentNode.removeChild(selected);
    // Désactiver le bouton >>
    moveRightBtn.disabled = true;
  }
});

// Ajouter un écouteur d'événements pour la div droite
right.addEventListener('mouseover', function(e) {
  // Vérifier si l'élément survolé est un <p>
  if (e.target.tagName === 'P') {
    // Enlever la classe "selected" de tous les éléments
    var items = right.querySelectorAll('.items p');
    items.forEach(function(item) {
      item.classList.remove('selected');
    });
    // Ajouter la classe "selected" à l'élément survolé
    e.target.classList.add('selected');
    // Activer le bouton <<
    moveLeftBtn.disabled = false;
  }
});
// Ajouter un écouteur d'événements pour le bouton >>
moveLeftBtn.addEventListener('click', function() {
    // Récupérer l'élément sélectionné
    var selected = right.querySelector('.selected');
    // Si un élément est sélectionné
    if (selected) {
      // Déplacer l'élément dans la div droite
      var item = selected.cloneNode(true);
      left.querySelector('.items').appendChild(item);
      // Supprimer l'élément de la div gauche
      selected.parentNode.removeChild(selected);
      // Désactiver le bouton >>
      moveLeftBtn.disabled = true;
    }
  });
  
