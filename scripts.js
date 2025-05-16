// Criando a cotação de moedas do dia:
const USD = 5.68
const EUR = 6.36
const GBP = 7.56 //libra



//Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Captando o evento de submit (enviar) do formulário
form.onsubmit = (event) => {
  event.preventDefault()

  switch(currency.value){
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break   
  }
}

// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
 try {
  // Exibindo a cotação da moeda selecionada.
  description.textContent = `${symbol} 1 = ${price}`

  // Aplica a classe que exibe o footer com o resultado.
  footer.classList.add("show-result")

 } catch (error) {

  // Remove a classe do footer para removê-lo da tela.
  footer.classList.remove

  console.log(error)
  ("show-result")
  alert("Não foi possível converter. Revise o código!")
 }
}

function formatCurrencyBRL(value){
  return Number(value).toLocaleString("pt-BR" , {
    style: "currency",
    currency: "BRL",
  })
}

