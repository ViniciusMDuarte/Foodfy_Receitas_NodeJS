const getRecipies = document.querySelectorAll('.produtos-container .produtos')

const ingredients = document.querySelectorAll('.ingredients-details')
const buttons = document.querySelectorAll('.button')
console.log(buttons)
console.log(ingredients)


for(let receitas of getRecipies) {
    receitas.addEventListener('click', function() {
    const getRecipiesId = receitas.getAttribute('id')
    getRecipiesId = window.location.href = `/receita-descricao/${getRecipiesId}`
    })
}


for (let [i,button] of buttons.entries()) {

    button.addEventListener('click', () => {

        if(ingredients[i].classList.contains('hide')) {
            ingredients[i].classList.remove('hide')
            ingredients[i].classList.add('show')
            button.innerHTML = "Mostrar"

        } else {
            ingredients[i].classList.add('hide')
            ingredients[i].classList.remove('show')
            button.innerHTML=" Esconder"
        }
    })
}


// for (let [i,button] of buttons.entries()) {

//     button.addEventListener('click', () => {

//         if(ingredients[i].classList.contains('show')) {
//             ingredients[i].classList.remove('show')
//             ingredients[i].classList.add('hide')
//             button.innerHTML = "Mostrar"

//         } else {
//             ingredients[i].classList.add('show')
//             ingredients[i].classList.remove('hide')
//             button.innerHTML=" Esconder"
//         }
//     })
// }

