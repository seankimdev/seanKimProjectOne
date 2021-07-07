// Goal: when image is clicked open a modal of the enlarged image

const modal = document.getElementsByClassName("modal")['0'];
const modalImg = document.querySelector('.modalContent img');
const clickedImg = document.querySelector('.enlargeImg');
const modalCloseButton = document.querySelector('.close')

// add eventListener for when the img is clicked

clickedImg.addEventListener('click', function(e){
  if (e.target.localName === 'img'){
    console.log(e);
    // get the clicked img's source
    const imgSource = e.target.src;
    const imgAlt = e.target.alt;

    // insert the img source to the img in the modal
    modalImg.src = imgSource;
    modalImg.alt = imgAlt;

    // display the modal
    console.log(modal);
    modal.style.display = "block";
  }
})

// when the close button is clicked, hide the modal
modalCloseButton.addEventListener('click', function() {
  modal.style.display = "none";
})

// when anywhere outside of the img is clicked, hide the modal
window.addEventListener('click', function(e) {
  console.log(e.target);
  if (e.target == modal) {
    modal.style.display = "none";
  }
})

