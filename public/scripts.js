const getRecipies = document.querySelectorAll('.produtos-container .produtos')


for(let receitas of getRecipies) {
    receitas.addEventListener('click', function() {
    const getRecipiesId = receitas.getAttribute('id')
    getRecipiesId = window.location.href = `/receita-descricao/${getRecipiesId}`
    })
}
