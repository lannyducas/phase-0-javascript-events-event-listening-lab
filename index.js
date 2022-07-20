/*const input = document.querySelector('button');

function addingEventListener() {
  input.addEventListener('click', function(event) {
    return "clicked"
  });
}
*/
//const input = document.querySelector('button');


function addingEventListener() {
    const input = document.getElementById('button');

    function clickAlert() {
      alert('I was clicked!');
    }
    
    input.addEventListener('click', clickAlert);
}






