let botao = document.querySelector('.btn')
const inputs = document.querySelectorAll('.input')
const spans = document.querySelectorAll('.invalido')
let maxInputs = inputs.length


botao.addEventListener('click', function(){
  
  verificarInput()
  thnaks()
})


function verificarInput() {
  
  inputs.forEach((input, index) => {
    if(input.value === '') {
      input.classList.add('obrigatorio')
      input.classList.remove('valido')
      spans[index].classList.remove('invalido')
      
    } else {
      input.classList.remove('obrigatorio')
      input.classList.add('valido')
      spans[index].classList.add('invalido')
      
    }
    
  })
  
}

function thnaks() {

  let teste = 0
  let formulario = document.querySelector('.container-formulario')
  let agradecimento = document.querySelector('.agradecimento')
  
  inputs.forEach(input =>{
    if(input.classList.contains('valido')){
      teste ++
    }

    if(teste >= maxInputs) {
      formulario.classList.add('concluido')
      agradecimento.classList.remove('concluido')
    }
    
  })

  
}

