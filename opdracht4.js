//___OPDRACHT 4___
/*Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:

    ```
  Philips 43PUS6504/12 - 4K TV
  €379,-
  43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
  ```*/
const exampleTv = document.getElementById("example-tv");
exampleTv.innerText = `
    Philips 43PUS6504/12 - 4K TV
    €379,-
    43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)`


//___4a___
/* **Opdracht 4a:** Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft
in het format `[merk] [type] - [naam]` zoals `Philips 43PUS6504/12 - 4K TV` of `NIKKEI NH3216SMART - HD smart TV`.*/

//ANONIEME FUNCTIE
const createBrandTypeNameFunctie = inventory.map((tvBrandTypeName) => {
    return `${tvBrandTypeName.brand} ${tvBrandTypeName.type} - ${tvBrandTypeName.name}`;
});
console.log(createBrandTypeNameFunctie)

const brandName = document.getElementById("brand-name-type");
brandName.innerHTML = `<h3>Tv's: Brand, Type & Name:</h3><h3> ${createBrandTypeNameFunctie} </h3>`



//HERBRUIKBARE FUNCTIE
function createTvName(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}


//___4b___
/* **Opdracht 4b:** Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals `379` of `159`)
teruggeeft in het format `€379,-` of `€159,-`.*/

const currentTvPrice = inventory[2].price;

function pricesTv(tvPrice) {
    return `€${tvPrice},-`;
}

console.log(pricesTv(currentTvPrice))


const oneTvPrice = document.getElementById("one-tv-price");
oneTvPrice.innerHTML = `${pricesTv(currentTvPrice)}`


//___4c___
/* **Opdracht 4c:** Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv.
De functie geeft dit terug in het format `[schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm)` etc.
Als een tv maar één schermgrootte heeft (`[32]`) wordt de output `32 inch (81 cm)`. Wanneer een tv vier
schermgroottes heeft (`[43, 50, 55, 58]`) wordt de output `43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)`.
_Let op:_ om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.*/

const tvSizes = (tv) => {
    let output = " ";

    tv.availableSizes.map((size) => {
        let sizesInCm = Math.round(size * 2.54);
        output += `${size} inch (${sizesInCm} cm) | `
    })
    return output

}
console.log(tvSizes(inventory[0]))

const sizesOfTvs = document.getElementById("tv-sizes");
sizesOfTvs.innerHTML = `Available Sizes: ${tvSizes(inventory[0])}`


//___4d___
/* **Opdracht 4d:** Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld.
Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

    ```
  Philips 43PUS6504/12 - 4K TV
  €379,-
  43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
  ```*/

const oneTvContainer = document.getElementById("one-tv-info");
oneTvContainer.innerHTML = `
<h4> ${createBrandTypeNameFunctie[0]} </h4> 
<h4> ${pricesTv(inventory[0].price)} </h4> 
<h4> ${tvSizes(inventory[0])} </h4> 
</h4>`


//___4e___
/* **Opdracht 4e:** Maak een herbruikbare functie die de informatie van **alle** tv's weergeeft op de pagina.
Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.*/
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

console.log(tvList(inventory))



