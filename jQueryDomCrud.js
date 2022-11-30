$(document).ready(function(){

// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

const $newA = $('<a>');
$newA.text('Buy Now!');
$newA.attr('id', 'cta');

$('main').append($newA);




// Access (read) the data-color attribute of the <img>,
// log to the console
const $img = $('img')
const imgColor = $img.data('color')
console.log(imgColor)


// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"
const $listItems = $('li')
$listItems[2].className = "highlight"


// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

const $paragraphs = $('p')
const lastP = $paragraphs[$paragraphs.length-1]
lastP.remove();

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"

const button = $('#cta')

button.on('click', function(){
 button.text("Added to cart");
})


});




