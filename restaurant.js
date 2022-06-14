const { mongerInventory } = require("./fishMonger.js")

//we need a function that itterates through mongerinventory
//and interpolates the fish in html structure

//this function interpolates through the mongers filtered inventory
//and buys 50% of his inventory
const buyFish = (array) => {
    for (fish of array) {
        fish.amount = fish.amount * .5
    }
    return array
}
//this function takes the fish bought from the monger and turns it into a menu for he restaraunt
//interpolates the fish from previous function into html form
const fishMenu = (fishArray) => {
    let fishMenus = `<h1>Menu</h1>
    <article class="menu">`
    for (fish of fishArray) {
        fishMenus += `<h2>${fish.species}</h2>
        <section class="menu__item">${fish.species}Soup</section>
        <section class="menu__item">${fish.species} Sandwich</section>
        <section class="menu__item">Grilled ${fish.species}</section>`
    }
    fishMenus += `\n/article`
    return fishMenus
}

//combines all the functions from above into one function to provide a menu
const finalFunc = (chefPrice) => {
    const mainMonger = mongerInventory(chefPrice)
    const boughtFish = buyFish(mainMonger)
    const theMenu = fishMenu(boughtFish)
    return theMenu
}

//console logs the menu
const finalMenu = finalFunc(5)
console.log(finalMenu)