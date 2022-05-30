//___OPDRACHT 1___

//__________1a__________

const tvTypes = inventory.map((tvType) => {
    return tvType.name;
});
console.log(tvTypes)

const typesOfTv = document.getElementById("tv-types");
typesOfTv.innerHTML = `<h4>${tvTypes}</h4>`;

//__________1b___________

const soldOuts = inventory.filter((soldOut) => {
    return soldOut.originalStock === soldOut.sold;
});
// console.log(soldOuts)

const soldOutTvs = document.getElementById("sold-out-tvs");
soldOutTvs.innerHTML = `${soldOuts}`;


//__________1c___________

const ambiLightTvs = inventory.filter((ambiLight) => {
    return ambiLight.options.ambiLight === true;
});
console.log("Tv with ambilights:")
console.log(ambiLightTvs)

const withLights = document.getElementById("ambilight-tvs");
withLights.innerHTML = `Tv's with ambilights: ${ambiLightTvs}`;


//__________1d___________

const newInventory = inventory.slice();

const lowToHigh = newInventory.sort((a, b) => {
    return a.price - b.price;
});
console.log(lowToHigh.join(" "))

const pricesLowToHigh = document.getElementById("prices-low-high");
pricesLowToHigh.innerHTML = `Tv's sorted by prices low to high: ${lowToHigh}`;

//OF:
const lowToHightPrice = () => {
    return newInventory.sort ((currentValue, previousValue) => {
        return currentValue.price - previousValue.price;
    });
};
console.log(lowToHightPrice())

