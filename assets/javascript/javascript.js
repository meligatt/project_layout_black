// get the elements:
const modal = document.querySelector(`#image-modal`);
const closeModalButton = document.querySelector(`.close`);
const openModalButton = document.querySelector(`.button--open-modal`);

//ADD Event listeners
openModalButton.addEventListener('click', (event) => {
  // toggle style display block/none of the modal element
  modal.style.display = `block`;

});
closeModalButton.addEventListener('click', (event) => {
    modal.style.display = `none`;
});
