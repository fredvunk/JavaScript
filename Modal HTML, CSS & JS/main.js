// get Modal element
const modal = document.querySelector('simpleModal');
// oget open modal button
const modalBtn = document.querySelector('modalbtn');
// get Close button
const closeBtn = document.querySelector('closeBtn');

// listen for  open click
modalBtn.addEventListener('click',openModal);
// Listen for close click
closeBtn.addEventListener('click',closeModal);
// listen for outside click
window.addEventListener('click', outsideClick);
// function open modal

function openModal() {
    modal.style.display = 'block';
}
    // function close modal

    function closeModal() {
        modal.style.display = 'none';
    }
// function to close modal if outside click
    function outsideClick(e) {
       if(e.target == modal){
           modal.style.display = 'none';
       }
    }
    error