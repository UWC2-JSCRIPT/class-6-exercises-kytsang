$(document).ready(function(){

/**
 * Toggles "done" class on <li> element
 */
const $list = $('li');

$list.on('click', function(){
   this.className='done';
})


/**
 * Delete element when delete link clicked
 */

  const $del = $('.delete');
  
  $del.on('click', function(e){
      $(e.target).parent().fadeOut("slow");
  })

});

/**
 * Adds new list item to <ul>
 */
// const addListItem = function(e) {
//   e.preventDefault();
//   const text = $('input').val();

//   // rest here...
// };

$(document).ready(function(){

const addListItem = function(button, e) {
  e.preventDefault();
  const input = button.parentNode.getElementsByTagName('input')[0];  
  const text = $('input').val(); // use this text to create a new <li>
  const aElement = document.createElement('li');
  const childSpan = document.createElement('span');
  aElement.appendChild(childSpan);
  childSpan.innerText=text;
  const todayList = document.getElementsByClassName("today-list")[0];
  todayList.appendChild(aElement);
  const deleteButton =document.createElement('a');
  aElement.appendChild(deleteButton);
  deleteButton.innerText= 'Delete';
  deleteButton.className='delete';

  aElement.addEventListener('click', ()=> {
    aElement.className='done';
  })

  deleteButton.addEventListener('click', ()=> {
    aElement.remove();
  })

};


// add listener for add

  const $add = $('.add-item:first');   

  $add.on('click', function(e){
    addListItem(this,e);
})

});


