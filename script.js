let containerAll = document.getElementById('containerAll');

let rota = location.href;

if (rota == 'http://127.0.0.1:5500/') {
    containerAll.insertAdjacentHTML('beforeend', `<main>

<div class="container-botoes">
    <button class="button" id="buttonStartPlay">Começar a jogar</button>
    <button class="button" id="buttonAddPalavra">Adicionar nova palavra</button>
</div>

</main>`)
    let button = document.getElementById('buttonAddPalavra');


    button.addEventListener('click', () => {
        location.href = '/input-frase.html'
    })

} else if (rota == 'http://127.0.0.1:5500/input-frase.html') {
    
    let buttonSave = document.getElementById('buttonSave');
    let buttonCancel = document.getElementById('buttonCancel');


    buttonSave.addEventListener('click', () => {
        let palavra = document.getElementById('input').value;
        

        console.log(palavra)

        if(palavra) {
            localStorage.setItem('palavra', palavra);
            let palavraLocalStorage = localStorage.getItem('palavra');
            console.log(typeof palavraLocalStorage)
        }else {
            alert('Palavra inválida!')
        }
    })

    buttonCancel.addEventListener('click', () => {
        location.href('http://127.0.0.1:5500')
    })
    
}






