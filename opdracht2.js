//___OPDRACHT 2 --- Elementen in de DOM plaatsen___

//**Opdracht 2a:** Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// Stappen:
// 1. Variabele met Totaal aantal verkochte tvs in op te slaan
// 2. Totaal aantal verkochte tvs (sold) berekenen en in variabele zetten (map of for-loop?)
// 3. Return aantal verkochte tvs per soort
// 4. log totaal aantal verkochte tvs

let soldTvs = 0;
inventory.map((soldTv) => {

    soldTvs += soldTv.sold;

})
console.log("Total sold Tv's:")
console.log(soldTvs)

const totalSold = document.getElementById("total-sold");
totalSold.innerHTML = `<h3>Total Tv's sold:</h3><h3> ${soldTvs} </h3>`



//for-loop:

let sum = 0;
for (let i = 0; i < inventory.length; i++) {
        sum += inventory[i].sold;
}
console.log(sum)

const totalSoldOptie2 = document.getElementById("total-sold2");
totalSoldOptie2.innerHTML = `Total Sold Tv's: ${sum}`


/* **Opdracht 2b:** Zorg ervoor dat dit aantal _in het groen (PAARS bij mij)_ wordt weergegeven op de pagina.*/

//Zie antwoord opdracht 2a


/* **Opdracht 2c:** Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de
console.*/

let allTvStock = 0;
inventory.map((tvStock) => {
    allTvStock += tvStock.originalStock
})

console.log(allTvStock)
const totalTvStock = document.getElementById("total-stock");
totalTvStock.innerHTML = `Total original stock: ${allTvStock}`


/* **Opdracht 2d:** Zorg ervoor dat dit aantal _in het blauw_ wordt weergegeven op de pagina.*/

//Zie antwoord opdracht 2c



/* **Opdracht 2e:** Geef _in het rood_ weer hoeveel tv's er nog verkocht moeten worden.*/

const availableStock = allTvStock - soldTvs;

console.log('Tvs in stock:')
console.log(availableStock)
const inStock = document.getElementById("available-stock");
inStock.innerHTML = `Available Tv's: ${availableStock}`