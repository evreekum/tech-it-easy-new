//___OPDRACHT 3 --- Array methoden en functies___

/* **Opdracht 3a:** Gebruik een array-methode om alle tv merken (zoals `Philips`, `NIKKEI`, etc.) in een lijst op de
pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er
dubbele namen in zitten, is niet erg.*/

const tvBrands = inventory.map((brand) => {
    return `<li> ${brand.brand} </li>`
})

console.log(tvBrands)
const containerTvBrands = document.getElementById("tv-brands");
containerTvBrands.innerHTML = `${tvBrands.join(" ")}`






/* **Opdracht 3b:** Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om
onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. _Tip_: vergeet deze functie
-declaratie niet aan te roepen!*/

function tvBrandsFunction (tvBrand) {
    const containerTvBrands = document.getElementById("tv-brands-function");
    const tvBrands = tvBrand.map((brand) => {
        return `<li> ${brand.brand} </li>`
    })
    containerTvBrands.innerHTML = `Tv Brands:
    ${tvBrands.join(" ")}`
}

console.log(tvBrandsFunction(inventory))

/*
function tvList (tvArray){
    const infoAllTvs = document.getElementById("all-tv-info");
    const allTvsInfo = tvArray.map((tvInfo) => {
        return `<li>
    <h4> ${createTvName(tvInfo)} </h4>
    <h4> ${pricesTv(tvInfo.price)} </h4>
    <h4> ${tvSizes(tvInfo)} </h4>
    </li>`

    })
    infoAllTvs.innerHTML = `${allTvsInfo.join(" ")} `
}

console.log(tvList(inventory))*/
