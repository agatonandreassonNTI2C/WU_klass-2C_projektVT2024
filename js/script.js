const svar = document.getElementById('svar')
const flashcards_link = document.getElementById('flashcards_link')


function toggleMenu() {
    svar.classList.toggle('visa_svar')
}


flashcards_link.addEventListener('click', toggleMenu)
