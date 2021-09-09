'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModel = function () {
    console.log('Button Clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// we treat these buttons like an array where it'll loop through the buttons and do the same function
// so every time we plan on presssing a button, it will show the content of what the buttons hold
for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModel);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// sometimes to exit out of something we use the esc (escape) key and keydown works
// this will handle it here:
document.addEventListener('keydown', function (event) {
    // console.log(event.key);

    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});