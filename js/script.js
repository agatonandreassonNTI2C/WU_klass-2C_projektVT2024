const svar = document.getElementById('svar')
const flashcards_article = document.getElementById('flashcards_article')

function toggleMenu() {

    svar.classList.toggle('visa_svar')

}


flashcards_article.addEventListener('click', toggleMenu)