const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues(){
const inputCurrencyValue = document.querySelector(".input-currency").value // Valor de dentro do input
const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor Real
const currencyValueToConverted = document.querySelector(".currency-value")   // Outras moedas


console.log (currencySelect.value)
const dolarToday = 5.2
const euroToday = 6.2
const libraToday = 6.05


if(currencySelect.value == "dolar") {

    currencyValueToConverted.innerHTML = new Intl.NumberFormat ("en-US", {
        style: "currency",
        currency: "USD"
    
    }) .format(inputCurrencyValue/dolarToday)

}

if(currencySelect.value == "euro") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat ("de-DE", {
        style: "currency",
        currency: "EUR"


        
    }).format(inputCurrencyValue/euroToday)
}

if(currencySelect.value == "libra") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat ("en-GB", {
        style: "currency",
        currency: "GBP"


        
    }).format(inputCurrencyValue/libraToday)

}




currencyValueToConvert.innerHTML = new Intl.NumberFormat ("pt-BR", { 
    style: "currency",
    currency: "BRL"

}).format(inputCurrencyValue)
}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")   //procurar elemento pelo id
    const currencyImage = document.querySelector(".currency-image")   //procurar elemento pela tag img


    if (currencySelect.value == "dolar") {        
        currencyName.innerHTML = "Dólar"
        currencyImage.src = "./estados-unidos (1) 1.png"   // se o elemento for dólar, colocar a seguinte imagem
        

    } 

    if (currencySelect.value == "euro") {         
        currencyName.innerHTML = "Euro"        // se o seletor for euro, mostrar 'euro'
        currencyImage.src = "./Design sem nome 3.png"    // se o elemento for euro, colocar a seguinte imagem

    }



    if (currencySelect.value == "libra") {         
        currencyName.innerHTML = "Libra"
        currencyImage.src = ""    // se o elemento for euro, colocar a seguinte imagem

    }

    
    convertValues ()
}

currencySelect.addEventListener("change", changeCurrency) // quando mudar o seletor, chamar a função 'changeCurrency'
convertButton.addEventListener("click", convertValues) // quando clicar, converter o valor 



