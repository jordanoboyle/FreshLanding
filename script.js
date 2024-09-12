const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');


//Dialog Modal Practice
const updateButton = document.getElementById('updateDetails');
const cancel = document.getElementById('cancel');
const dialog = document.getElementsByClassName('favDialog');
dialog.returnValue = 'favAnimal';

//Toggle the Nav Bar:
toggle.addEventListener('click', ()  => 
  document.body.classList.toggle('show-nav')
);


// These two blocks below are basically creating DOM controlling classes, adding or removing these classes depending on the eventListener.
//Show Modal
open.addEventListener('click', () =>
  modal.classList.add('show-modal')
);

//Hide Modal 
close.addEventListener('click', () =>
  modal.classList.remove('show-modal')
);

//Hide Modal Click Outside Modal
//need event parameter
window.addEventListener('click', (e) =>
  e.target === modal ? modal.classList.remove('show-modal') : false 
);


//Script Block for Favorite Animal Modal Dialog
