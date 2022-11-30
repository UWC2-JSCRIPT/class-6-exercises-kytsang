$(document).ready(function(){

/**
 * Toggles "done" class on <li> element
 */


const $list = $('li');

$list.on('click', function(){
  $list.className='done';
})


/**
 * Delete element when delete link clicked
 */

const $del = $('.delete');

$del.on('click', function(){
  $list.remove();
})
});

/**
 * Adds new list item to <ul>
 */
const addListItem = function(e) {
  e.preventDefault();
  const text = $('input').val();

  // rest here...
};

// add listener for add
